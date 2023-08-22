import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  Box,
  Flex,
  Title5,
  LocationAnalyticsGoogleMap as GoogleMap,
  LocationAnalyticsTable,
  LocationAnalyticsFilter,
  SpinnerView,
  SearchInput,
} from 'components';
import connectHelper from 'helpers/connect.helper';
import {
  analyticsSelector,
  appSelector,
  reportSelector,
} from 'redux/selectors';
import { analyticsAction, reportAction } from 'redux/actions';

import { LocationModel, MapDataState } from 'types';

const connect = connectHelper(
  createStructuredSelector({
    officeInfo: reportSelector.selectOfficeData,
    fetching: reportSelector.selectOfficeFetching,
    mapLocationsState: analyticsSelector.selectLocationsState,
    locationInfo: appSelector.selectLocationInfo,
  })
);

type Props = {
  promise: any;
  history: any;
  officeInfo: any;
  fetching: boolean;
  mapLocationsState: MapDataState;
  locationInfo: LocationModel;
};

type State = {
  loading: boolean;
  current_page: number;
  page_size: number;
  dataType: string;
  searchValue: string;
};

export class LocationAnalyticsPage extends PureComponent<Props, State> {
  state = {
    loading: false,
    current_page: 1,
    page_size: 10,
    dataType: 'number',
    searchValue: '',
  };

  componentDidMount() {
    const { promise, locationInfo } = this.props;
    const { current_page, page_size } = this.state;
    promise(reportAction.getOfficeData({ page: current_page, page_size }));
    promise(analyticsAction.loadMap({ location_id: locationInfo?.pk }));
  }

  handleFilterSearch = (searchValue: any) => {
    const { page_size } = this.state;
    const { promise } = this.props;

    promise(
      reportAction.getOfficeData({
        page: 1,
        page_size,
        title: searchValue,
      })
    );
  };

  handleSelectFilter = (event: any) => this.setState({ dataType: event.key });
  handleChangepage = (pagination: any) => {
    const { promise } = this.props;
    const { page_size, searchValue } = this.state;
    this.setState({ current_page: pagination?.current });
    promise(
      reportAction.getOfficeData({
        page: pagination?.current,
        page_size,
        title: searchValue,
      })
    );
  };
  handleChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: e.currentTarget.value,
    });
  };
  render() {
    const { current_page, page_size, dataType } = this.state;
    const {
      officeInfo,
      fetching,
      mapLocationsState: { fetching: fetchingMap, data: mapLocationsData },
    } = this.props;

    return (
      <>
        <Helmet title="PanoBoard | Location Analytics" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="24px 24px"
        >
          <Box>
            <Title5 style={{ weight: '700' }}> Location Analytics</Title5>
          </Box>
        </Flex>
        <Box
          background="white"
          margin="18px 24px"
          padding="18px 23px"
          borderRadius="15px"
        >
          <Flex
            flexDirection="row"
            justifyContent="space-between"
            margin="10px 10px"
          >
            <Box>
              <Title5 style={{ weight: '700' }}>Patient Heat Map</Title5>
            </Box>
            <Box>
              <LocationAnalyticsFilter
                onFilter={(e: any) => this.handleSelectFilter(e)}
              />
            </Box>
          </Flex>
          <Box>
            {fetchingMap ? (
              <SpinnerView height="300px" />
            ) : mapLocationsData?.length > 0 ? (
              <GoogleMap
                dataType={dataType}
                mapData={mapLocationsData?.filter((item: any) =>
                  dataType === 'amount' ? item.amount > 0 : item.number > 0
                )}
              />
            ) : (
              <></>
            )}
          </Box>
        </Box>
        <Box background="transparent" margin="15px 25px" borderRadius="15px">
          <SearchInput
            value={this.state.searchValue}
            placeholder="Search Location"
            onChange={this.handleChangeSearch}
            onPressEnter={(e) => {
              this.handleFilterSearch(e.currentTarget.value);
            }}
            onSearch={(searchValue: any) =>
              this.handleFilterSearch(searchValue)
            }
          />
        </Box>
        <Box
          background="#fff"
          margin="15px 25px"
          padding="10px"
          borderRadius="15px"
          style={{ overflow: 'auto' }}
        >
          {fetching ? (
            <SpinnerView height="300px" />
          ) : (
            <LocationAnalyticsTable
              changePage={this.handleChangepage}
              officeInfo={officeInfo?.data}
              count={officeInfo?.count}
              current={current_page}
              pageSize={page_size}
            />
          )}
        </Box>
      </>
    );
  }
}

export default connect(LocationAnalyticsPage);
