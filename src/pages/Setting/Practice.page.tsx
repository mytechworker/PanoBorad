import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import {
  SettingSections,
  Flex,
  Box,
  Title5,
  PracticeForm,
  SpinnerView,
} from 'components';

import connectHelper from 'helpers/connect.helper';
import { Company, LocationModel } from 'types';
import {
  practiceAction,
  integrationAction,
  locationAction,
  appAction,
} from 'redux/actions';
import { successNotification } from 'helpers';
import { createStructuredSelector } from 'reselect';
import { appSelector, practiceSelector } from 'redux/selectors';

const connect = connectHelper(
  createStructuredSelector({
    practiceInfo: practiceSelector.selectPracticeInfo,
    fetching: practiceSelector.loadPracticeFetching,
    location: appSelector.selectLocationInfo,
  })
);

type Props = {
  promise: any;
  history: any;
  practiceInfo: Company;
  fetching: boolean;
  location: LocationModel;
};

type State = {
  loading: boolean;
};

export class PracticePage extends PureComponent<Props, State> {
  state = {
    loading: false,
  };

  componentDidMount() {
    const { promise, location } = this.props;
    location &&
      Promise.all([
        promise(integrationAction.loadStatus()),
        promise(locationAction.loadStates()),
        promise(practiceAction.getPracticeInfo(location.pk)).then(),
      ]);
  }

  handleUpdatePractice = (data: any) => {
    const { promise, location } = this.props;
    this.setState({ loading: true });
    location &&
      promise(practiceAction.updatePractice(data, location.pk))
        .then(() => this.handleGetData())
        .finally(() => {
          this.setState({ loading: false });
          successNotification({
            description: 'updated successfully!',
          });
        });
  };

  handleGetData = () => {
    const { promise, location } = this.props;
    Promise.all([
      promise(practiceAction.getPracticeInfo(location.pk)),
      promise(locationAction.loadAll()),
      promise(locationAction.load(location.pk)).then(
        (location: LocationModel) =>
          promise(appAction.handleSetLocation(location))
      ),
    ]);
  };
  render() {
    const { practiceInfo, fetching } = this.props;
    const { loading } = this.state;
    return (
      <>
        <Helmet title="PanoBoard | Practice" />
        <SettingSections activeMenu="Practice" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="22px 25px 18px"
        >
          <Box>
            <Title5>Setting</Title5>
          </Box>
        </Flex>
        <Box
          background="white"
          margin="15px 25px"
          padding="10px"
          borderRadius="15px"
          minHeight="500px"
        >
          {fetching ? (
            <SpinnerView height="300px" />
          ) : (
            <PracticeForm
              practiceInfo={practiceInfo}
              fielderrors={{}}
              submitting={loading}
              onSubmit={(data: any) => this.handleUpdatePractice(data)}
              onDeleteImage={(data: any) => this.handleUpdatePractice(data)}
            />
          )}
        </Box>
      </>
    );
  }
}

export default connect(PracticePage);
