import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import queryString from 'query-string';
import { get } from 'lodash';
import { createStructuredSelector } from 'reselect';
import {
  PatientNumberModel,
  ChatModel,
  PatientModel,
  LocationModel,
} from 'types';
import connectHelper from 'helpers/connect.helper';
import {
  conversationAction,
  pipelineAction,
  phoneNumberAction,
  integrationAction,
} from 'redux/actions';
import {
  conversationSelector,
  appSelector,
  integrationSelector,
} from 'redux/selectors';
import {
  Box,
  Flex,
  ConversationChatList,
  ConversationMainChat,
  ConversationPatientInfo,
  ConversationNewChatModal,
} from 'components';
import ConversationEmptyTable from 'components/Conversation/ConversationEmptyTable';

const connect = connectHelper(
  createStructuredSelector({
    allPatientNumbers: conversationSelector.selectPatientNumberList,
    locationInfo: appSelector.selectLocationInfo,
    chats: conversationSelector.selectChatList,
    patient: conversationSelector.selectPatient,
    statusData: integrationSelector.selectStatusData,
  })
);
type Props = {
  promise: any;
  history: any;
  allPatientNumbers: PatientNumberModel[];
  locationInfo: LocationModel;
  chats: ChatModel[];
  patient: PatientModel;
  location: any;
  statusData: any;
};
type State = {
  selectConversation: boolean;
  selectPaitient: boolean;
  page: number;
  page_size: number;
  firstLoading: boolean;
  searchValue: string;
  selectedPatinetNumber: any;
  isSubmitting: boolean;
  openConversation: boolean;
  selectedPatientNumberId: number;
  tabKey: string;
  num_of_pages: number;
  chatLoading: boolean;
};
export class ConversationPage extends PureComponent<Props, State> {
  state = {
    selectConversation: false,
    selectPaitient: false,
    page: 1,
    page_size: 10,
    firstLoading: false,
    searchValue: '',
    selectedPatinetNumber: {
      pk: 0,
      phone_number: '',
      archive: false,
    },
    isSubmitting: false,
    openConversation: false,
    selectedPatientNumberId: 0,
    tabKey: 'all',
    num_of_pages: 0,
    chatLoading: false,
  };
  componentDidMount() {
    const { promise, locationInfo } = this.props;

    promise(integrationAction.loadStatus()).then((info: any) => {
      const { statusData } = this.props;
      if (statusData?.is_twilio_connected) {
        const { page, page_size } = this.state;
        this.setState({
          firstLoading: true,
        });
        Promise.all([
          promise(
            pipelineAction.loadAllTags({
              page: 1,
              page_size: '50',
            })
          ),
          promise(
            phoneNumberAction.loadAllPhoneNumbers({
              page: 1,
              page_size: 50,
              location_id: locationInfo.pk,
            })
          ),
          promise(
            conversationAction.loadAllPatientNumbers({
              page,
              page_size,
              location_id: locationInfo.pk,
            })
          )
            .then((data: any) => {
              if (data?.num_of_pages > 1) {
                this.setState({
                  chatLoading: true,
                });
              }
              this.setState({
                num_of_pages: data?.num_of_pages,
              });
            })
            .finally(() =>
              this.setState({
                firstLoading: false,
              })
            ),
        ]);
      }
    });

    this.loadPatienDataFromStringQuery();
  }
  loadPatienDataFromStringQuery = () => {
    const { promise, locationInfo, location } = this.props;
    if (location.search !== '') {
      const query = queryString.parse(this.props.location.search, {});
      const phone_numberId = query.pk ? query.pk : 0;
      const patientID = query.patientId ? query.patientId : 0;
      promise(
        conversationAction.loadChats(+phone_numberId, {
          location_id: locationInfo.pk,
        })
      )
        .then(() => {
          promise(conversationAction.loadPatient(+patientID)).then(() => {
            const { patient } = this.props;
            const patientDetails = get(patient, 'data', []);
            let selectedPatinetNumber = {
              pk: phone_numberId,
              phone_number: patientDetails.phone,
              patient_name: `${patientDetails.first_name} - ${patientDetails.last_name}`,
            };

            this.setState({
              selectedPatinetNumber: selectedPatinetNumber,
              selectedPatientNumberId: +phone_numberId,
            });
          });
          this.setState({
            selectConversation: true,
            selectPaitient: true,
          });
        })
        .catch(() => {
          const { history } = this.props;
          history.push('/conversation');
        });
    }
  };
  loadPatientData = (phoneNumberId?: any, patiendId?: any) => {
    const { promise, locationInfo } = this.props;
    const { page_size } = this.state;
    Promise.all([
      promise(
        conversationAction.loadChats(+phoneNumberId, {
          location_id: locationInfo.pk,
        })
      ).finally(() => {
        this.setState({
          openConversation: false,
        });
      }),
      promise(
        conversationAction.loadAllPatientNumbers({
          page: 1,
          page_size: page_size,
          location_id: locationInfo.pk,
        })
      ),
      promise(conversationAction.loadPatient(patiendId)).then(() => {
        const { patient } = this.props;
        const patientDetails = get(patient, 'data', []);
        let selectedPatinetNumber = {
          pk: phoneNumberId,
          phone_number: patientDetails.phone,
          patient_name: patientDetails.first_name
            ? `${patientDetails.first_name} - ${patientDetails.last_name}`
            : patientDetails.phone,
        };
        this.setState({
          selectedPatinetNumber: selectedPatinetNumber,
          selectConversation: true,
          selectPaitient: true,
          openConversation: false,
          selectedPatientNumberId: phoneNumberId,
        });
      }),
    ]);
  };

  handleSelect = () => {
    this.setState({
      selectConversation: true,
      selectPaitient: true,
    });
  };
  handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.currentTarget.value,
    });
  };
  handleSearch = (searchValue: any) => {
    const { promise, locationInfo } = this.props;
    const { page_size } = this.state;
    promise(
      conversationAction.loadAllPatientNumbers({
        page: 1,
        page_size,
        location_id: locationInfo.pk,
        search: searchValue,
      })
    );
  };

  loadPatientDetails = (paitentNumber: PatientNumberModel) => {
    this.setState({
      selectConversation: true,
      selectPaitient: paitentNumber.patient ? true : false,
      selectedPatinetNumber: paitentNumber,
    });
    const { promise, locationInfo } = this.props;
    const { page, page_size } = this.state;
    Promise.all([
      promise(conversationAction.readChat(paitentNumber?.pk, locationInfo.pk)),
      promise(
        conversationAction.loadChats(paitentNumber?.pk, {
          location_id: locationInfo.pk,
        })
      ).then(() => {
        promise(
          conversationAction.loadAllPatientNumbers({
            page,
            page_size,
            location_id: locationInfo.pk,
          })
        );
      }),
      promise(conversationAction.loadPatient(paitentNumber?.patient)),
    ]);
  };
  onCreate = (body: string) => {
    const { promise, locationInfo } = this.props;
    const { selectedPatinetNumber, page, page_size } = this.state;

    this.setState({
      isSubmitting: true,
    });
    promise(
      conversationAction.createChat(
        selectedPatinetNumber?.pk,
        { body: body },
        locationInfo.pk
      )
    )
      .then(() => {
        Promise.all([
          promise(
            conversationAction.loadChats(selectedPatinetNumber?.pk, {
              location_id: locationInfo.pk,
            })
          ),
          promise(
            conversationAction.loadAllPatientNumbers({
              page,
              page_size,
              location_id: locationInfo.pk,
            })
          ),
        ]);
      })
      .finally(() => {
        this.setState({
          isSubmitting: false,
          selectedPatientNumberId: selectedPatinetNumber?.pk,
        });
      });
  };
  onArchive = () => {
    const { promise, locationInfo } = this.props;
    const { page, page_size, selectedPatinetNumber } = this.state;
    promise(
      conversationAction.archiveChat(selectedPatinetNumber?.pk, locationInfo.pk)
    ).then(() => {
      promise(
        conversationAction.loadAllPatientNumbers({
          page,
          page_size,
          location_id: locationInfo.pk,
        })
      );
    });
  };
  onRestore = () => {
    const { promise, locationInfo } = this.props;
    const { page, page_size, selectedPatinetNumber } = this.state;
    promise(
      conversationAction.restoreChat(selectedPatinetNumber?.pk, locationInfo.pk)
    ).then(() => {
      promise(
        conversationAction.loadAllPatientNumbers({
          page,
          page_size,
          location_id: locationInfo.pk,
        })
      );
    });
  };
  onDelete = () => {
    const { promise, locationInfo } = this.props;
    const { page, page_size, selectedPatinetNumber } = this.state;
    promise(
      conversationAction.deleteChat(selectedPatinetNumber?.pk, locationInfo.pk)
    ).then(() => {
      this.setState({
        selectConversation: false,
      });
      promise(
        conversationAction.loadAllPatientNumbers({
          page,
          page_size,
          location_id: locationInfo.pk,
        })
      );
    });
  };
  loadMore = () => {
    const { promise, locationInfo } = this.props;
    const { page_size, num_of_pages } = this.state;
    if (num_of_pages > 1) {
      promise(
        conversationAction.loadAllPatientNumbers({
          page: 1,
          page_size: page_size + 10,
          location_id: locationInfo.pk,
        })
      ).then((data: any) => {
        this.setState({
          num_of_pages: num_of_pages,
        });
        if (data?.num_of_pages > 1) {
          this.setState({
            page_size: page_size + 10,
          });
        }
      });
    } else {
      this.setState({
        chatLoading: false,
      });
    }
  };

  reloadPatient = () => {
    const { promise, patient } = this.props;
    const patientDetails = get(patient, 'data', []);
    promise(conversationAction.loadPatient(patientDetails?.pk));
  };
  realoadPatientNumber = (patient?: string) => {
    const { promise, locationInfo } = this.props;
    const { page_size, num_of_pages } = this.state;

    this.setState({
      selectedPatinetNumber: { patient_name: patient },
    });
    promise(
      conversationAction.loadAllPatientNumbers({
        page: 1,
        page_size: page_size,
        location_id: locationInfo.pk,
      })
    );
  };

  render() {
    const { allPatientNumbers, chats, patient, statusData } = this.props;
    const {
      searchValue,
      isSubmitting,
      selectedPatinetNumber,
      openConversation,
      selectedPatientNumberId,
      tabKey,
      chatLoading,
    } = this.state;
    const patientNumberList = get(allPatientNumbers, 'data', []);
    const patientCount = patientNumberList?.count;
    const fetching = get(allPatientNumbers, 'fetching');
    const chatList = get(chats, 'data', []);
    const fetchingChat = get(chats, 'fetching');
    const patientFetching = get(patient, 'fetching');

    return (
      <>
        <Helmet title="PanoBoard | Conversation" />
        {statusData?.is_twilio_connected && (
          <Flex margin="20px" flexGap="20px" flexDirectionT="column">
            <Box
              className="flex-3"
              background="white"
              borderRadius="15px"
              height="87vh"
              padding="17px 20px"
              widthT="100%"
              position="relative"
            >
              <ConversationChatList
                onSelect={this.loadPatientDetails}
                list={patientNumberList?.data}
                onSearch={this.handleSearch}
                searchValue={searchValue}
                handleChangeSearch={this.handleChangeSearch}
                loading={fetching}
                count={patientCount}
                onClickStartConversation={() => {
                  this.setState({
                    openConversation: true,
                  });
                }}
                selectedPatientNumberId={selectedPatientNumberId}
                tabKey={tabKey}
                setTabKey={(tab: string) => {
                  this.setState({
                    tabKey: tab,
                  });
                }}
                loadMore={this.loadMore}
                chatLoading={chatLoading}
              />
            </Box>

            <Box
              className="flex-5"
              background="white"
              borderRadius="15px"
              height="87vh"
              padding="17px 20px"
              position="relative"
              widthT="100%"
            >
              <ConversationMainChat
                chatList={chatList}
                loading={fetchingChat}
                selectedConversation={this.state.selectConversation}
                onCreate={this.onCreate}
                isSubmitting={isSubmitting}
                patinetNumber={selectedPatinetNumber}
                onArchive={this.onArchive}
                onDelete={this.onDelete}
                onRestore={this.onRestore}
              />
            </Box>
            <Box
              className="flex-4"
              background="white"
              borderRadius="15px"
              overflow="hidden"
              minWidth="340px"
              widthT="100%"
            >
              <ConversationPatientInfo
                selectPaitient={this.state.selectPaitient}
                loading={patientFetching}
                realoadPatientNumber={this.realoadPatientNumber}
              />
            </Box>
          </Flex>
        )}{' '}
        {statusData && !statusData.is_twilio_connected && (
          <Box
            background="white"
            margin="25px"
            padding="20px"
            borderRadius="15px"
          >
            {' '}
            <ConversationEmptyTable />
          </Box>
        )}
        <ConversationNewChatModal
          visible={openConversation}
          handleCancel={() => {
            this.setState({
              openConversation: false,
            });
          }}
          reloadPatient={this.loadPatientData}
        />
      </>
    );
  }
}

export default connect(ConversationPage);
