import React, { PureComponent } from 'react';
import { get } from 'lodash';
import connectHelper from 'helpers/connect.helper';
import { createStructuredSelector } from 'reselect';

import {
  OnlineBookingScheduleStep,
  OnlineBookingPatientStep,
  OnlineBookingInformationStep,
  OnlineBookingAppointmentDetailsStep,
} from 'components';
import { appSelector, onlineBookingSelector } from 'redux/selectors';
import { onlineBookingAction } from 'redux/actions';
import { AddNewBookingModel, LocationModel } from 'types';
import moment from 'moment-timezone';

const connect = connectHelper(
  createStructuredSelector({
    insurancesInfo: onlineBookingSelector.selectInsurances,
    locationInfo: appSelector.selectLocationInfo,
    appointmentTypes: onlineBookingSelector.selectAppointmentTypes,
  })
);

type Props = {
  promise: any;
  insurancesInfo: string;
  locationInfo: LocationModel;
  appointmentTypes: any;
};
type State = {
  wizardStep: string;
  schedulingType: string;
  newBookingInfo: AddNewBookingModel;
  submitting: boolean;
  onlineBookingDetails: any;
};

export class OnlineBookingNewPage extends PureComponent<Props, State> {
  state = {
    wizardStep: 'schedule',
    schedulingType: 'for-me',
    submitting: false,
    onlineBookingDetails: {},
    newBookingInfo: {
      first_name: '',
      last_name: '',
      email: '',
      call_phone: '',
      gender: '',
      date_of_birth: '',
      city: '',
      state: '',
      address: '',
      postal_code: '',
      note: '',
      date: '',
      start_time: '',
      appointment_type: 0,
      location: 0,
      patient_insurance: 0,
    },
  };
  componentDidMount() {
    const { promise, locationInfo } = this.props;
    promise(
      onlineBookingAction.loadAddNewBookingInsurances({
        location_id: locationInfo.pk,
      })
    );
    promise(
      onlineBookingAction.loadAddNewBookingLocation({
        location_id: locationInfo.pk,
      })
    );
    promise(
      onlineBookingAction.loadAllAppointmentTypes({
        location_id: locationInfo.pk,
      })
    );
    promise(onlineBookingAction.loadStates());
  }
  handleCreateNewBooking = (data: any) => {
    const { promise, locationInfo } = this.props;
    const { newBookingInfo } = this.state;
    this.setState({
      //newBookingInfo: { ...newBookingInfo, ...data },
      submitting: true,
    });
    const newbooking: AddNewBookingModel = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      call_phone: data.call_phone,
      gender: data.gender,
      date_of_birth: data.date_of_birth,
      city: data.city,
      state: data.state,
      address: data.address,
      postal_code: data.postal_code,
      note: data.note,
      date: newBookingInfo.date,
      start_time: `${moment
        .tz(newBookingInfo.start_time, locationInfo.location_timezone)
        .format('HH:mm:ss')}`,
      appointment_type: newBookingInfo.appointment_type,
      location: locationInfo.pk,
      patient_insurance: newBookingInfo.patient_insurance,
    };
    promise(onlineBookingAction.createAdminBooking(newbooking))
      .then((res: any) => {
        this.setState({ onlineBookingDetails: res, wizardStep: 'details' });
      })
      .finally(() => this.setState({ submitting: false }));
  };
  render() {
    const {
      wizardStep,
      schedulingType,
      newBookingInfo,
      submitting,
      onlineBookingDetails,
    } = this.state;
    const { appointmentTypes } = this.props;
    const appointmentTypesList = get(appointmentTypes, 'data', []);

    return (
      <>
        {wizardStep === 'schedule' && (
          <OnlineBookingScheduleStep
            onNextStep={(data: any) => {
              this.setState({
                wizardStep: 'patient',
                newBookingInfo: { ...newBookingInfo, ...data },
              });
            }}
            bookingInfo={newBookingInfo}
          />
        )}
        {wizardStep === 'patient' && (
          <OnlineBookingPatientStep
            bookingInfo={newBookingInfo}
            appointmentTypes={appointmentTypesList?.data}
            // onNextStep={() => this.setState({ wizardStep: 'schedule-picking'  })}
            onNextStep={(data: any) =>
              this.setState({
                wizardStep: 'information',
                newBookingInfo: { ...newBookingInfo, ...data },
              })
            }
          />
        )}
        {/* // {wizardStep === 'schedule-picking' && (
          <OnlinebookingPickScheduleStep
            onNextStep={() => this.setState({ wizardStep: 'information' })}
            onSetType={(name: string) =>
              this.setState({ schedulingType: name })
            }
          />
        )} */}
        {wizardStep === 'information' && (
          <OnlineBookingInformationStep
            onNextStep={(data: any) => this.handleCreateNewBooking(data)}
            // onPrevStep={() => this.setState({ wizardStep: 'schedule-picking' })}
            onPrevStep={() => this.setState({ wizardStep: 'patient' })}
            type={schedulingType}
            bookingInfo={newBookingInfo}
            submitting={submitting}
            appointmentTypes={appointmentTypesList?.data}
          />
        )}
        {wizardStep === 'details' && (
          <OnlineBookingAppointmentDetailsStep
            details={onlineBookingDetails}
            onNextStep={() => this.setState({ wizardStep: '' })}
            appointmentTypes={appointmentTypesList?.data}
          />
        )}
      </>
    );
  }
}

export default connect(OnlineBookingNewPage);
