import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  Box,
  Flex,
  ProviderAnalyticsButton,
  ProviderAnalyticsProduction,
  SearchInput,
  ProviderAnalyticsTable,
  Title5,
  SpinnerView,
} from 'components';
import { providerAction } from 'redux/actions';
import connectHelper from 'helpers/connect.helper';
import { appSelector, providerSelector } from 'redux/selectors';
import {
  LocationModel,
  ProviderListDataModel,
  ProviderProductionState,
} from 'types';

const connect = connectHelper(
  createStructuredSelector({
    providerListData: providerSelector.selectProviderListData,
    providerProductionData: providerSelector.selectProviderProduction,
    fetching: providerSelector.selectProviderListFetching,
    fetchingProviderProduction:
      providerSelector.selectProviderProductionFetching,
    locationInfo: appSelector.selectLocationInfo,
  })
);

type Props = {
  promise: any;
  providerListData: ProviderListDataModel;
  providerProductionData: any;
  fetching: boolean;
  fetchingProviderProduction: boolean;
  locationInfo: LocationModel;
};

type State = {
  page: number;
  page_size: number;
  strValue: string;
  firstLoading: boolean;
  exportLoading: boolean;
};

export class ProviderAnalyticsPage extends PureComponent<Props, State> {
  state = {
    page: 1,
    page_size: 10,
    strValue: '',
    firstLoading: false,
    exportLoading: false,
  };
  componentDidMount() {
    const { promise, locationInfo } = this.props;
    const { page, page_size } = this.state;
    promise(providerAction.getProviderList({ page, page_size }));
    promise(
      providerAction.getProviderProduction({
        location_id: locationInfo?.pk,
      })
    );
  }
  onChangeSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      strValue: e.currentTarget.value,
    });
  };
  handleFilterSearch = (searchValue: any) => {
    const { promise } = this.props;
    const { page_size } = this.state;
    promise(
      providerAction.getProviderList({
        page: 1,
        page_size,
        provider_name: searchValue,
      })
    );
  };
  handleChangePageSize = (value: number) => {
    const { promise } = this.props;
    const { strValue, page_size } = this.state;
    this.setState({
      page: Number(value),
    });
    promise(
      providerAction.getProviderList({
        page: Number(value),
        page_size: page_size,
        provider_name: strValue,
      })
    );
  };
  handleExport = () => {
    const { promise } = this.props;
    const { strValue } = this.state;
    this.setState({
      exportLoading: true,
    });
    promise(
      providerAction.getProviderListExport({
        provider_name: strValue,
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
        download(data, 'provider.xls');
      })
      .finally(() =>
        this.setState({
          exportLoading: false,
        })
      );
  };
  render() {
    const {
      providerListData,
      providerProductionData,
      fetchingProviderProduction,
      fetching,
    } = this.props;

    const { exportLoading, page, page_size } = this.state;
    return (
      <>
        <Helmet title="PanoBoard | ProviderAnalytics" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="22px 25px 18px"
        >
          <Title5>Provider Analytics</Title5>
        </Flex>
        <Flex justifyContent="space-between" margin="18px 20px">
          <Box width="500px">
            <SearchInput
              value={this.state.strValue}
              placeholder="Search Provider"
              onChange={this.onChangeSearch}
              onPressEnter={(e) => {
                this.handleFilterSearch(e.currentTarget.value);
              }}
              onSearch={(searchValue: any) =>
                this.handleFilterSearch(searchValue)
              }
            />
          </Box>
          <Box marginRight="17px">
            <ProviderAnalyticsButton
              onClick={this.handleExport}
              loading={exportLoading}
            />
          </Box>
        </Flex>
        <Box
          background="#fff"
          margin="15px 25px"
          padding="15px"
          borderRadius="15px"
          textAlign="center"
        >
          {fetching ? (
            <SpinnerView height="300px" />
          ) : (
            <ProviderAnalyticsTable
              list={providerListData?.data}
              current={page}
              pageSize={page_size}
              count={providerListData?.count}
              changePage={this.handleChangePageSize}
            />
          )}
        </Box>
        <Box
          background="#fff"
          margin="15px 25px"
          padding="10px"
          borderRadius="15px"
          textAlign="center"
        >
          {fetchingProviderProduction && providerProductionData ? (
            <SpinnerView height="500px" />
          ) : (
            <ProviderAnalyticsProduction
              providerProductionData={providerProductionData?.data}
            />
          )}
        </Box>
      </>
    );
  }
}
export default connect(ProviderAnalyticsPage);
