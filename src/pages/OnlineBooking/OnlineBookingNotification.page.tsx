import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import { VerticalAlignBottomOutlined } from '@ant-design/icons';

import {
  Box,
  Flex,
  Title5,
  Button,
  NotificationTable,
  OnlineBookingSections,
  NotificationDatePicker,
  SearchInput,
  SpinnerView,
  NotificationApptModal,
} from 'components';
import {
  AppointmentModel,
  AvailableProviderModel,
  AvailableOperatoryModel,
  LocationModel,
} from 'types';
import connectHelper from 'helpers/connect.helper';
import { onlineBookingAction } from 'redux/actions';
import { onlineBookingSelector, appSelector } from 'redux/selectors';

import { OnlineBookingWrapper as Wrapper } from './onilineBooking.styles';

const connect = connectHelper(
  createStructuredSelector({
    appoinments: onlineBookingSelector.selectAppoinmentList,
    fetching: onlineBookingSelector.loadNotificationFetching,
    locationInfo: appSelector.selectLocationInfo,
    availableProviders: onlineBookingSelector.selectAvailableProviders,
    availableOperatories: onlineBookingSelector.selectAvailableOperatories,
  })
);

type Props = {
  promise: any;
  history: any;
  appoinments: AppointmentModel[];
  fetching: boolean;
  locationInfo: LocationModel;
  availableProviders: AvailableProviderModel[];
  availableOperatories: AvailableOperatoryModel[];
};
type State = {
  searchValue: string;
  firstLoading: boolean;
  page: number;
  page_size: number;
  openApptModal: boolean;
  start_time__date: string;
  exportLoading: boolean;
  appointment_id: number;
  confirmLoading: boolean;
  warning: boolean;
  insurance_id: number;
  operatory: number | undefined;
  provider: number | undefined;
};

export class OnlineBookingNotificationPage extends PureComponent<Props, State> {
  state = {
    searchValue: '',
    firstLoading: false,
    page: 1,
    page_size: 10,
    openApptModal: false,
    start_time__date: '',
    exportLoading: false,
    appointment_id: 0,
    confirmLoading: false,
    warning: false,
    insurance_id: 0,
    operatory: undefined,
    provider: undefined,
  };
  componentDidMount() {
    const { promise, locationInfo } = this.props;
    const { page, page_size } = this.state;
    this.setState({
      firstLoading: true,
    });
    promise(
      onlineBookingAction.getAllAppointments({
        page,
        page_size,
        location_id: locationInfo?.pk,
      })
    ).finally(() =>
      this.setState({
        firstLoading: false,
      })
    );
  }
  handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.currentTarget.value,
    });
  };
  handleSelectFilter = (e: any) => {};

  handleFilterSearch = (value: string) => {
    const { promise, locationInfo } = this.props;
    const { page_size } = this.state;
    this.setState({ page: 1 });
    promise(
      onlineBookingAction.getAllAppointments({
        page: 1,
        page_size,
        location_id: locationInfo?.pk,
        search: value,
      })
    );
  };

  openAppTypeModal = (openApptModal: boolean) => {
    this.setState({ openApptModal: openApptModal });
  };
  handleCloseWarningModal = () => {
    this.setState({
      warning: false,
    });
  };
  handleChangePageSize = (value: string) => {
    const { promise, locationInfo } = this.props;
    const { searchValue, start_time__date } = this.state;
    this.setState({
      page_size: Number(value),
    });
    promise(
      onlineBookingAction.getAllAppointments({
        page: 1,
        page_size: Number(value),
        location_id: locationInfo?.pk,
        search: searchValue,
        start_time__date: start_time__date,
      })
    );
  };
  handleChangePage = (value: number) => {
    const { promise, locationInfo } = this.props;
    const { page_size, searchValue, start_time__date } = this.state;
    this.setState({
      page: value,
    });
    promise(
      onlineBookingAction.getAllAppointments({
        page: value,
        page_size: page_size,
        location_id: locationInfo?.pk,
        search: searchValue,
        start_time__date: start_time__date,
      })
    );
  };
  handleChangDatePicker = (date: string) => {
    const { promise, locationInfo } = this.props;
    const { page, page_size, searchValue } = this.state;
    this.setState({
      start_time__date: date,
    });
    promise(
      onlineBookingAction.getAllAppointments({
        page: page,
        page_size: page_size,
        location_id: locationInfo?.pk,
        search: searchValue,
        start_time__date: date,
      })
    );
  };

  handleExport = () => {
    const { promise, locationInfo } = this.props;
    this.setState({
      exportLoading: true,
    });
    promise(
      onlineBookingAction.exportAppointments({
        location_id: locationInfo?.pk,
      })
    )
      .then((data: string) => {
        var download = function (data: string, fileName: string) {
          let element = document.createElement('a');
          let blob = new Blob([data], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          let url = window.URL.createObjectURL(blob);
          element.setAttribute('href', url);
          element.setAttribute('target', '_blank');
          element.setAttribute('download', fileName);
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        };
        download(data, 'appointment.xls');
      })
      .finally(() =>
        this.setState({
          exportLoading: false,
        })
      );
  };
  handleClickModal = (appointment_id: number, insurance_id: number) => {
    const { promise, locationInfo } = this.props;
    this.openAppTypeModal(true);
    this.setState({
      appointment_id: appointment_id,
      insurance_id: insurance_id,
    });
    Promise.all([
      promise(
        onlineBookingAction.loadAvailableProviders({
          location_id: locationInfo?.pk,
          appointment_id: appointment_id,
        })
      ),
      promise(
        onlineBookingAction.loadAvailableOperatories({
          location_id: locationInfo?.pk,
          appointment_id: appointment_id,
        })
      ),
    ]);
  };

  handleCheckInsurance = (operatory_id: number, provider_id: number) => {
    const { promise } = this.props;
    const { insurance_id } = this.state;
    this.setState({
      confirmLoading: true,
    });
    if (insurance_id) {
      promise(
        onlineBookingAction.checkInsurance({
          insurance_id: insurance_id,
          provider_id: provider_id,
        })
      )
        .then((response: any) => {
          if (response.result) {
            this.handleConfirm(operatory_id, provider_id);
          } else {
            this.setState({
              confirmLoading: false,
              warning: true,
            });
          }
        })
        .catch((error: any) => {
          this.setState({
            confirmLoading: false,
          });
        });
    } else {
      this.handleConfirm(operatory_id, provider_id);
    }
  };
  handleConfirm = (operatory: number, provider: number) => {
    const { promise, locationInfo } = this.props;
    const { appointment_id } = this.state;
    this.setState({
      confirmLoading: true,
    });
    promise(
      onlineBookingAction.updateAppointment(
        { operatory: operatory, provider: provider },
        {
          location_id: locationInfo?.pk,
          id: appointment_id,
        }
      )
    )
      .then((response: any) => {
        this.setState({
          confirmLoading: false,
          operatory: undefined,
          provider: undefined,
        });
        promise(
          onlineBookingAction.getAllAppointments({
            page: 1,
            page_size: 10,
            location_id: locationInfo?.pk,
          })
        );
        this.openAppTypeModal(false);
        this.setState({
          warning: false,
        });
      })
      .catch((error: any) => {})
      .finally(() => {
        this.setState({
          confirmLoading: false,
        });
      });
  };
  render() {
    const { appoinments, fetching, availableProviders, availableOperatories } =
      this.props;
    const {
      page_size,
      page,
      openApptModal,
      start_time__date,
      firstLoading,
      exportLoading,
      confirmLoading,
      warning,
      operatory,
      provider,
    } = this.state;
    const appoinmentsList = get(appoinments, 'data', []);
    const appoinmentsCount = get(appoinments, 'count', 0);
    const availableProvidersList = get(availableProviders, 'data', []);
    const availableOperatoriesList = get(availableOperatories, 'data', []);

    return (
      <Wrapper>
        <Helmet title="PanoBoard | Notification" />
        <OnlineBookingSections activeMenu="Notification" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="22px 25px"
        >
          <Box>
            <Title5>Online Booking</Title5>
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="10px 25px"
        >
          <Box className="flex-1">
            <SearchInput
              placeholder="Search by Name or Email"
              value={this.state.searchValue}
              onChange={this.handleChangeSearch}
              onPressEnter={(e) => {
                this.handleFilterSearch(e.currentTarget.value);
              }}
              onSearch={(searchValue: any) =>
                this.handleFilterSearch(searchValue)
              }
            />
          </Box>
          <Flex className="flex-1" justifyContent="flex-end" flexGap="5px">
            <NotificationDatePicker
              value={start_time__date}
              onChange={(e: any, date: string) =>
                this.handleChangDatePicker(date)
              }
            />
            <Button
              htmlType="submit"
              onClick={this.handleExport}
              loading={exportLoading}
            >
              Export <VerticalAlignBottomOutlined />
            </Button>
          </Flex>
        </Flex>
        <Box
          background="#fff"
          margin="15px 25px"
          padding="10px"
          borderRadius="15px"
        >
          <Flex flexDirection="row">
            {firstLoading ? (
              <SpinnerView height="300px" />
            ) : (
              <>
                <NotificationTable
                  list={appoinmentsList}
                  pageSize={page_size}
                  onSelect={this.handleChangePageSize}
                  current={page}
                  changePage={this.handleChangePage}
                  count={appoinmentsCount}
                  openApptModal={(appointment_id: number, insurance_id) =>
                    this.handleClickModal(appointment_id, insurance_id)
                  }
                  loading={fetching}
                />
                <NotificationApptModal
                  openApptModal={openApptModal}
                  providers={availableProvidersList}
                  operatories={availableOperatoriesList}
                  onCancel={() => this.openAppTypeModal(false)}
                  handleConfirm={this.handleConfirm}
                  loading={confirmLoading}
                  warning={warning}
                  handleCheckInsurance={this.handleCheckInsurance}
                  onCancelWarning={this.handleCloseWarningModal}
                  operatoryId={operatory}
                  providerId={provider}
                  setProvider={(providerId:number)=>{
                    this.setState({
                      provider:providerId
                    })
                  }}
                  setOperatory={(operatorId:number)=>{
                    this.setState({
                      operatory:operatorId
                    })
                  }}
                />
              </>
            )}
          </Flex>
        </Box>
      </Wrapper>
    );
  }
}

export default connect(OnlineBookingNotificationPage);
