import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import {
  Box,
  Title5,
  Flex,
  Button,
  SettingSections,
  PhoneNumberTable,
  PhoneNumberEmpty,
  Modal,
  PhoneNumberAddNumberStepOne,
  PhoneNumberAddNumberStepTwo,
  PhoneNumberAddNumberStepDone,
  SpinnerView,
} from 'components';

import { PhoneNumberModel, IntegrationStatusData, LocationModel } from 'types';
import connectHelper from 'helpers/connect.helper';
import { phoneNumberAction } from 'redux/actions';
import {
  phoneNumberSelector,
  appSelector,
  integrationSelector,
} from 'redux/selectors';
import { AnyARecord } from 'dns';
const connect = connectHelper(
  createStructuredSelector({
    allNumbers: phoneNumberSelector.selectPhoneNumberList,
    locationInfo: appSelector.selectLocationInfo,
    availableNumbers: phoneNumberSelector.selectAvailablePhoneNumberList,
    statusData: integrationSelector.selectStatusData,
  })
);
type Props = {
  promise: any;
  history: any;
  allNumbers: PhoneNumberModel[];
  availableNumbers: PhoneNumberModel[];
  locationInfo: LocationModel;
  statusData: IntegrationStatusData;
};
type State = {
  addPhoneNumberModal: boolean;
  step: number;
  page: number;
  page_size: number;
  firstLoading: boolean;
  phoneNumberId: number;
  isSubmitting: boolean;
  phoneNumber: any;
  isEditting: boolean;
  emptyListMsg: string;
  isSearching: boolean;
};
export class PhoneNumberPage extends PureComponent<Props, State> {
  state = {
    addPhoneNumberModal: false,
    step: 1,
    page: 1,
    page_size: 10,
    firstLoading: false,
    phoneNumberId: 0,
    isSubmitting: false,
    phoneNumber: {
      pk: 0,
      name: '',
    },
    isEditting: false,
    emptyListMsg: '',
    isSearching: false,
  };
  componentDidMount() {
    const { promise, locationInfo } = this.props;
    const { page, page_size } = this.state;
    this.setState({
      firstLoading: true,
    });
    promise(
      phoneNumberAction.loadAllPhoneNumbers({
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
  handleOpen = () => {
    this.setState({
      addPhoneNumberModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      addPhoneNumberModal: false,
      step: 1,
    });
  };
  handleChangeStep = () => {
    this.setState({
      step: 2,
    });
  };
  handleDeletePhoneNumber = (id: number) => {
    const { promise, locationInfo } = this.props;
    const { page_size } = this.state;
    this.setState({
      phoneNumberId: id,
    });
    promise(phoneNumberAction.deletePhoneNumber(id))
      .finally(() =>
        this.setState({
          phoneNumberId: 0,
        })
      )
      .then(() => {
        promise(
          phoneNumberAction.loadAllPhoneNumbers({
            page: 1,
            page_size,
            location_id: locationInfo?.pk,
          })
        );
      });
  };
  handleCreatePhoneNumber = (phoneNumber: string) => {
    const { promise, locationInfo } = this.props;
    const { page_size } = this.state;
    this.setState({
      isSubmitting: true,
    });
    promise(
      phoneNumberAction.createPhoneNumbers({
        phone_number: phoneNumber,
        location: locationInfo?.pk,
      })
    )
      .then(() => {
        this.setState({
          step: 3,
        });
        promise(
          phoneNumberAction.loadAllPhoneNumbers({
            page: 1,
            page_size,
            location_id: locationInfo?.pk,
          })
        );
      })
      .finally(() =>
        this.setState({
          isSubmitting: false,
        })
      );
  };

  handleUpdatePhoneNumber = (name: string, id: number) => {
    const { promise, locationInfo } = this.props;
    const { page_size } = this.state;
    this.setState({
      isEditting: true,
    });
    promise(phoneNumberAction.updatePhoneNumbers(id, { name: name }))
      .then(() => {
        this.setState({ phoneNumber: { name: '', pk: 0 } });
        promise(
          phoneNumberAction.loadAllPhoneNumbers({
            page: 1,
            page_size,
            location_id: locationInfo?.pk,
          })
        );
      })
      .finally(() =>
        this.setState({
          isEditting: false,
        })
      );
  };
  onSearchPhoneNumber = (countryCode?: string, areaCode?: number) => {
    const { promise } = this.props;
    this.setState({
      emptyListMsg: '',
      isSearching: true,
    });
    promise(
      phoneNumberAction.loadAvailablePhoneNumbers({
        country_code: countryCode,
        area_code: areaCode,
      })
    )
      .then((res: any) => {
        if (res.data.length > 0) {
          this.setState({
            step: 2,
          });
        } else {
          this.setState({
            emptyListMsg: `We can't find any phone number with this area code`,
          });
        }
      })
      .finally(() => {
        this.setState({
          isSearching: false,
        });
      });
  };
  handleChangePage = (value: number) => {
    const { promise, locationInfo } = this.props;
    const { page, page_size } = this.state;
    this.setState({
      page: value,
    });
    promise(
      phoneNumberAction.loadAllPhoneNumbers({
        location_id: locationInfo?.pk,
        page_size: page_size,
        page: value,
      })
    );
  };

  render() {
    const {
      addPhoneNumberModal,
      step,
      phoneNumberId,
      isSubmitting,
      phoneNumber,
      isEditting,
      page_size,
      page,
      emptyListMsg,
      isSearching,
    } = this.state;
    const { allNumbers, availableNumbers, statusData } = this.props;
    const phoneNumberList = get(allNumbers, 'data', []);
    const availableNumbersList = get(availableNumbers, 'data', []);
    const fetching = get(allNumbers, 'fetching');
    const fetchingAvaiableNumbers = get(availableNumbers, 'fetching');
    const numberCount = get(phoneNumberList, 'count', 0);

    return (
      <>
        <Helmet title="PanoBoard | Phone Number" />
        <SettingSections activeMenu="Phone Number" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="10px 25px"
        >
          <Box>
            <Title5>Setting</Title5>
          </Box>
        </Flex>
        {statusData?.is_twilio_connected ? (
          <Box
            background="white"
            margin="15px 25px"
            padding="20px"
            borderRadius="15px"
          >
            <Flex
              flexDirection="row"
              justifyContent="space-between"
              marginBottom="18px"
            >
              <Flex flexDirection="row">
                <Title5 marginRight="10px">Phone Number</Title5>
              </Flex>

              <Button htmlType="submit" onClick={this.handleOpen}>
                + Add Number
              </Button>
            </Flex>
            {fetching ? (
              <SpinnerView height="300px" />
            ) : (
              <PhoneNumberTable
                pageSize={page_size}
                count={numberCount}
                current={page}
                changePage={this.handleChangePage}
                phoneNumberId={phoneNumberId}
                phoneNumberData={phoneNumberList?.data}
                onDelete={this.handleDeletePhoneNumber}
                phoneNumber={phoneNumber}
                onUpdate={this.handleUpdatePhoneNumber}
                onCancel={() => {
                  this.setState({ phoneNumber: { name: '', pk: 0 } });
                }}
                isEditting={isEditting}
                setPhoneNumber={(item: PhoneNumberModel) => {
                  this.setState({
                    phoneNumber: { name: item.name, pk: item.pk },
                  });
                }}
              />
            )}
          </Box>
        ) : (
          <Box
            background="white"
            margin="15px 25px"
            padding="20px"
            borderRadius="15px"
          >
            {' '}
            <PhoneNumberEmpty />
          </Box>
        )}

        <Modal
          destroyOnClose
          title=""
          maskClosable={false}
          visible={addPhoneNumberModal}
          onCancel={this.handleClose}
          width={450}
          closeIcon={true}
          className="no-padding"
        >
          {step === 1 && (
            <PhoneNumberAddNumberStepOne
              onSeacrh={this.onSearchPhoneNumber}
              emptyListMsg={emptyListMsg}
              loading={isSearching}
            />
          )}
          {step === 2 && (
            <PhoneNumberAddNumberStepTwo
              phoneNumbers={availableNumbersList?.data}
              isSubmitting={isSubmitting}
              loading={fetchingAvaiableNumbers}
              onBuy={(number: string) => this.handleCreatePhoneNumber(number)}
            />
          )}
          {step === 3 && (
            <PhoneNumberAddNumberStepDone
              onDoneClick={() => {
                this.setState({
                  addPhoneNumberModal: false,
                  step: 1,
                });
              }}
            />
          )}
        </Modal>
      </>
    );
  }
}

export default connect(PhoneNumberPage);
