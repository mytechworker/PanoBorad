import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';
import { FileTextOutlined, PlusOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';

import {
  Box,
  Flex,
  Title5,
  Button,
  OnlineBookingSections,
  CustomizationAppointment,
  CustomizationProviderList,
  CustomizationInsuarnceModal,
} from 'components';
import {
  AppointmentTypeModel,
  ProviderSpecialityModel,
  ProviderModel,
  InsuranceModel,
  LocationModel,
} from 'types';
import connectHelper from 'helpers/connect.helper';
import { onlineBookingAction } from 'redux/actions';
import { appSelector, onlineBookingSelector } from 'redux/selectors';

import { OnlineBookingWrapper as Wrapper } from './onilineBooking.styles';

const connect = connectHelper(
  createStructuredSelector({
    locationInfo: appSelector.selectLocationInfo,
    allProviders: onlineBookingSelector.selectProvidersList,
    providerSpecialists: onlineBookingSelector.selectProviderSpecialists,
    provider: onlineBookingSelector.selectProvider,
  })
);

type Props = {
  promise: any;
  history: any;
  locationInfo: LocationModel;
  allProviders: ProviderModel[];
  providerSpecialists: ProviderSpecialityModel[];
  provider: ProviderModel;
};
type State = {
  providersLoading: boolean;

  dataHours: any;
  insurances: any;
  dataSourceProvider: [];
  openModal: boolean;
  editMode: boolean;
  openBlockHoursModal: boolean;
  page_size: number;
  selected_provider: ProviderModel;
  insuranceModalStatus: boolean;
  providerView: boolean;
  openHoursModal: boolean;
  insuranceActionLoading: boolean;
};

export class OnlineBookingCustomizationPage extends PureComponent<Props> {
  state = {
    insuranceActionLoading: false,
    openModal: false,
    editMode: false,
    insuranceModalStatus: false,
    providerView: false,
    openHoursModal: false,
    openBlockHoursModal: false,
    providersLoading: true,
    page: 1,
    page_size: 10,
    selected_provider: {},
    loadingTimeDelete: false,
    selected_providerId: 0,
    loadingBlockDelete: false,
    insurancesDentrix: {},
  };

  componentDidMount() {
    const { promise, locationInfo } = this.props;
    const { page_size, page } = this.state;
    Promise.all([
      promise(onlineBookingAction.loadAllAppointmentTypeDurations()),
      promise(onlineBookingAction.getOnlineBookingProviderSpecilalists()),
      promise(
        onlineBookingAction.loadAllProviders({
          location_id: locationInfo?.pk,
          page_size: page_size,
          page: page,
        })
      ).finally(() => {
        this.setState({
          providersLoading: false,
        });
      }),
      promise(
        onlineBookingAction.loadAllAppointmentTypes({
          location_id: locationInfo?.pk,
        })
      ),
      promise(onlineBookingAction.loadAllInsurances()),
    ]);
  }
  handleChangePageSize = (value: string) => {
    const { promise, locationInfo } = this.props;
    this.setState({
      page_size: Number(value),
    });
    promise(
      onlineBookingAction.loadAllProviders({
        page: 1,
        page_size: Number(value),
        location_id: locationInfo?.pk,
      })
    );
  };

  // Appointment Type Actions
  handleCreateAppointmentType = (data: AppointmentTypeModel) => {
    const { promise, locationInfo } = this.props;
    promise(onlineBookingAction.createAppointmentTypes(data)).then(() =>
      promise(
        onlineBookingAction.loadAllAppointmentTypes({
          location_id: locationInfo?.pk,
        })
      )
    );
  };
  handleEditAppointmentType = (id: number, data: AppointmentTypeModel) => {
    const { promise, locationInfo } = this.props;
    promise(onlineBookingAction.updateAppointmentTypes(id, data)).then(() =>
      promise(
        onlineBookingAction.loadAllAppointmentTypes({
          location_id: locationInfo?.pk,
        })
      )
    );
  };
  handleDeleteAppointmentType = (id: number) => {
    const { promise, locationInfo } = this.props;
    promise(onlineBookingAction.deleteAppointmentTypes(id)).then(() =>
      promise(
        onlineBookingAction.loadAllAppointmentTypes({
          location_id: locationInfo?.pk,
        })
      )
    );
  };

  // Insurances
  insuranceModal = (insuranceModalStatus: boolean) => {
    this.setState({ insuranceModalStatus });
  };

  handleRemoveInsurance = (pk: number) => {
    const { promise } = this.props;
    this.setState({ insuranceActionLoading: true });
    promise(onlineBookingAction.deleteInsurance(pk))
      .then(() => promise(onlineBookingAction.loadAllInsurances()))
      .finally(() => this.setState({ insuranceActionLoading: false }));
  };

  handleEditInsurance = (data: InsuranceModel) => {
    const { promise } = this.props;
    this.setState({ insuranceActionLoading: true });
    promise(onlineBookingAction.updateInsurance(data.pk, { name: data.name }))
      .then(() => promise(onlineBookingAction.loadAllInsurances()))
      .finally(() => this.setState({ insuranceActionLoading: false }));
  };

  handleCtreateInsurance = (name: string) => {
    const { promise } = this.props;
    this.setState({ insuranceActionLoading: true });
    promise(onlineBookingAction.addNewInsurance({ name }))
      .then(() => promise(onlineBookingAction.loadAllInsurances()))
      .finally(() => this.setState({ insuranceActionLoading: false }));
  };

  handleChangePage = (value: number) => {
    const { promise, locationInfo } = this.props;
    const { page, page_size } = this.state;
    this.setState({
      page: value,
    });
    promise(
      onlineBookingAction.loadAllProviders({
        location_id: locationInfo?.pk,
        page_size: page_size,
        page: value,
      })
    );
  };

  //load provider
  loadProvider = (id: any) => {
    const { promise, locationInfo, provider } = this.props;
    const providerInfo = get(provider, 'data');
    if (!(providerInfo && providerInfo.pk === id)) {
      promise(
        onlineBookingAction.loadProvider({
          location_id: locationInfo?.pk,
          id: id,
        })
      );
    }
  };

  handleCustomizeInsurance = (providerId: number) => {
    this.loadProvider(providerId);
    this.insuranceModal(true);
    this.setState({ providerView: true });
  };
  render() {
    const { allProviders, provider } = this.props;
    const {
      insuranceModalStatus,
      insuranceActionLoading,
      providerView,
      providersLoading,
      page_size,
      page,
    } = this.state;
    const providersList = get(allProviders, 'data', []);
    const fetching = get(allProviders, 'fetching');
    const providersCount = get(providersList, 'count', 0);
    const providerInfo = get(provider, 'data');
    const providerInfoFetching = get(provider, 'fetching');
    return (
      <>
        <Wrapper>
          <Helmet title="PanoBoard | Customization" />

          <OnlineBookingSections activeMenu="Customization" />
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            margin="22px 25px"
          >
            <Box>
              <Title5>Online Booking</Title5>
            </Box>
            <Flex className="flex-1" justifyContent="flex-end" flexGap="5px">
              <Button
                className="ins-button"
                onClick={() => {
                  this.insuranceModal(true);
                  this.setState({ providerView: false });
                }}
              >
                <PlusOutlined /> Add Insurance
              </Button>
              {/** <Button htmlType="submit">
                <FileTextOutlined /> Customize Form
              </Button> */}
            </Flex>
          </Flex>
          <Flex
            flexDirection="row"
            margin="20px 18px 20px -10px"
            flexGap="10px"
          >
            <CustomizationAppointment
              onCreate={this.handleCreateAppointmentType}
              onEdit={this.handleEditAppointmentType}
              onDelete={this.handleDeleteAppointmentType}
            />
            <CustomizationProviderList
              onCustomizeInsurance={(id: number) =>
                this.handleCustomizeInsurance(id)
              }
              loading={providersLoading}
              dataSourceProvider={providersList?.data}
              onSelect={this.handleChangePageSize}
              page_size={page_size}
              tableLoading={fetching}
              pageSize={page_size}
              count={providersCount}
              current={page}
              loadProvider={this.loadProvider}
              changePage={this.handleChangePage}
              providerInfo={providerInfo}
              providerInfoFetching={providerInfoFetching}
            />
          </Flex>
        </Wrapper>

        <CustomizationInsuarnceModal
          onCancel={() => this.insuranceModal(false)}
          modalStatus={insuranceModalStatus}
          onUpdateInsurance={this.handleEditInsurance}
          onRemoveInsurance={this.handleRemoveInsurance}
          onNewInsurance={this.handleCtreateInsurance}
          providerView={providerView}
          actionLoading={insuranceActionLoading}
        />
      </>
    );
  }
}

export default connect(OnlineBookingCustomizationPage);
