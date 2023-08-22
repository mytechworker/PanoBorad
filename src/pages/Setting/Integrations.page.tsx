import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { integrationSelector, locationSelector } from 'redux/selectors';
import { integrationAction, locationAction } from 'redux/actions';
import connectHelper from 'helpers/connect.helper';
import {
  Flex,
  Box,
  Title5,
  Modal,
  SettingSections,
  IntegrationsItems,
  IntegrationsMatchingLocations,
  IntegrationsDentrixAscendForm,
  IntegrationsDentrixAscendConected,
  SpinnerView,
  IntegrationsTwilioForm,
  IntegrationsTwilioConected,
} from 'components';

import {
  AllLocations,
  DentrixConnectData,
  DentrixLocation,
  IntegrationStatusData,
  LocationData,
  LocationModel,
} from 'types';
import IntegrationsTwilioAnswer from 'components/Setting/Integrations/IntegrationsTwilioAnswer';
import { logoutUser } from 'config/axios.config';

const connect = connectHelper(
  createStructuredSelector({
    locationsData: locationSelector.selectAll,
    locationsFetching: locationSelector.selectAllFetching,
    statusData: integrationSelector.selectStatusData,
    statusFetching: integrationSelector.selectStatusFetching,
    dentrixLocationsData: integrationSelector.selectLocationsData,
    dentrixLocationsFetching: integrationSelector.selectLocationsFetching,
  })
);

type Props = {
  promise: any;
  locationsData: AllLocations;
  statusData: IntegrationStatusData;
  statusFetching: boolean;
  locationsFetching: boolean;
  dentrixLocationsData: DentrixLocation[];
  dentrixLocationsFetching: boolean;
};
type State = {
  showDentrixLocations: boolean;
  dentrixModal: boolean;
  twilioModal: boolean;
  twilioDoneModal: boolean;
  dentrixIntegrationLoading: boolean;
  twilioIntegrationLoading: boolean;
  dentrixIntegrationDoneModal: boolean;
  disconecting: boolean;
  dentrixLocationAssigning: boolean;
  assignLocationModal: boolean;
  twilioConnectStatus: boolean;
};
export class IntegrationsPage extends PureComponent<Props, State> {
  state = {
    showDentrixLocations: false,
    dentrixModal: false,
    twilioModal: false,
    twilioDoneModal: false,
    dentrixIntegrationLoading: false,
    dentrixIntegrationDoneModal: false,
    twilioIntegrationLoading: false,
    disconecting: false,
    dentrixLocationAssigning: false,
    assignLocationModal: false,
    twilioConnectStatus: false,
  };

  componentDidMount() {
    const { promise } = this.props;
    promise(integrationAction.loadStatus());
  }

  handleConnect = (dentrixData: DentrixConnectData) => {
    this.setState({ dentrixIntegrationLoading: true });
    const { promise } = this.props;
    promise(integrationAction.dentrixConnect(dentrixData)).then(() => {
      promise(integrationAction.loadDentrixLocations());
      this.setState({
        showDentrixLocations: true,
        dentrixModal: false,
        dentrixIntegrationLoading: false,
      });
    });
  };

  handleDentrixModal = (status: boolean, dentrixStatus: boolean) =>
    dentrixStatus
      ? this.setState({ dentrixIntegrationDoneModal: status })
      : this.setState({ dentrixModal: status });

  handleDisconnect = () => {
    this.setState({ disconecting: true });
    const { promise } = this.props;
    promise(integrationAction.dentrixDisconnect())
      .then(() => {
        promise(integrationAction.loadStatus());
        promise(locationAction.loadAll()).then((locations: LocationData) => {
          if (locations?.count < 1) return logoutUser();
        });
        this.handleDentrixModal(false, true);
      })
      .finally(() => this.setState({ disconecting: false }));
  };

  handleAssignlocation = (info: {
    dentrix_location: string;
    location: number;
  }) => {
    const { promise } = this.props;
    this.setState({ dentrixLocationAssigning: true });
    promise(
      locationAction.patchLocations(info.location, {
        dentrix_id: info.dentrix_location,
      })
    )
      .then(() => {
        this.setState({ assignLocationModal: false });
        promise(locationAction.loadAll());
        promise(integrationAction.loadDentrixLocations());
      })
      .finally(() => this.setState({ dentrixLocationAssigning: false }));
  };

  handleTwilioAction = (status: string) => {
    const { promise } = this.props;
    this.setState({ twilioIntegrationLoading: true });
    if (status === 'new_account')
      return promise(integrationAction.twilioSubAccountConnect())
        .then(() => {
          this.setState({
            twilioModal: false,
            twilioDoneModal: true,
            twilioConnectStatus: true,
          });
        })
        .catch(() =>
          this.setState({
            twilioModal: false,
            twilioDoneModal: true,
            twilioConnectStatus: false,
          })
        )
        .finally(() => this.setState({ twilioIntegrationLoading: false }));
  };

  handleConfirmTwilioModal = () => {
    this.setState({ twilioDoneModal: false });
    const { promise } = this.props;
    promise(integrationAction.loadStatus());
  };

  handleDisconnectTwilio = () => {
    this.setState({ twilioIntegrationLoading: true });
    const { promise } = this.props;
    promise(integrationAction.twilioDisconnect())
      .then(() =>
        this.setState({ twilioModal: false }, () =>
          promise(integrationAction.loadStatus())
        )
      )
      .finally(() => this.setState({ twilioIntegrationLoading: false }));
  };

  render() {
    const {
      statusData,
      statusFetching,
      dentrixLocationsData,
      locationsData,
      dentrixLocationsFetching,
      locationsFetching,
    } = this.props;

    const {
      dentrixModal,
      twilioModal,
      twilioDoneModal,
      dentrixIntegrationLoading,
      dentrixIntegrationDoneModal,
      showDentrixLocations,
      disconecting,
      dentrixLocationAssigning,
      assignLocationModal,
      twilioIntegrationLoading,
      twilioConnectStatus,
    } = this.state;

    return (
      <>
        <Helmet title="PanoBoard | Integrations" />
        <SettingSections activeMenu="Integrations" />

        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="22px 25px 18px"
        >
          <Box>
            <Title5>Setting</Title5>
          </Box>
        </Flex>
        {statusFetching ? (
          <SpinnerView height="300px" />
        ) : showDentrixLocations ? (
          <IntegrationsMatchingLocations
            dentrixLocations={dentrixLocationsData}
            locationsData={locationsData}
            onAssignLocation={this.handleAssignlocation}
            fetching={locationsFetching || dentrixLocationsFetching}
            dentrixLocationAssigning={dentrixLocationAssigning}
            onChangeModalStatus={(status: boolean) =>
              this.setState({ assignLocationModal: status })
            }
            assignModalStatus={assignLocationModal}
            onShowStatusItems={() =>
              this.setState({ showDentrixLocations: false })
            }
          />
        ) : (
          <IntegrationsItems
            statusData={statusData}
            onDetrixIntegrations={() =>
              this.handleDentrixModal(true, statusData.is_dentrix_connected)
            }
            onTwilioIntegration={() => {
              this.setState({ twilioModal: true });
            }}
            onShowLocations={() =>
              this.setState({ showDentrixLocations: true })
            }
          />
        )}

        <Modal
          destroyOnClose
          title=""
          maskClosable={false}
          visible={dentrixModal}
          onCancel={() =>
            this.handleDentrixModal(false, statusData.is_dentrix_connected)
          }
          width={450}
          closeIcon={true}
        >
          <IntegrationsDentrixAscendForm
            onSubmit={this.handleConnect}
            fielderrors={null}
            submitting={dentrixIntegrationLoading}
          />
        </Modal>
        <Modal
          destroyOnClose
          title=""
          maskClosable={false}
          visible={dentrixIntegrationDoneModal}
          onCancel={() =>
            this.handleDentrixModal(false, statusData.is_dentrix_connected)
          }
          width={450}
          closeIcon={true}
          className="no-padding"
        >
          <IntegrationsDentrixAscendConected
            onHideModal={() =>
              this.handleDentrixModal(false, statusData.is_dentrix_connected)
            }
            onDisconnect={this.handleDisconnect}
            loading={disconecting}
          />
        </Modal>
        <Modal
          destroyOnClose
          title=""
          maskClosable={false}
          closeIcon={true}
          visible={twilioModal}
          onCancel={() => this.setState({ twilioModal: false })}
        >
          {statusData?.is_twilio_connected ? (
            <IntegrationsTwilioConected
              onHideModal={() => this.setState({ twilioModal: false })}
              onDisconnect={() => this.handleDisconnectTwilio()}
              loading={twilioIntegrationLoading}
            />
          ) : (
            <IntegrationsTwilioForm
              onSubmit={({ account_status }) =>
                this.handleTwilioAction(account_status)
              }
              submitting={twilioIntegrationLoading}
            />
          )}
        </Modal>
        <Modal
          destroyOnClose
          title=""
          maskClosable={false}
          width={370}
          closeIcon={true}
          visible={twilioDoneModal}
          onCancel={() => {
            this.setState({ twilioDoneModal: false });
          }}
        >
          <IntegrationsTwilioAnswer
            error={!twilioConnectStatus}
            onConfirm={() => this.handleConfirmTwilioModal()}
          />
        </Modal>
      </>
    );
  }
}

export default connect(IntegrationsPage);
