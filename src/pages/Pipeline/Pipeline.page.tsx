import React, { PureComponent } from 'react';
import { get } from 'lodash';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import {
  PatientNumberModel,
  OpportunityState,
  TagsState,
  LocationModel,
} from 'types';
import connectHelper from 'helpers/connect.helper';
import { PiplineWrapper as Wrapper } from './pipeline.styles';
import { pipelineAction, phoneNumberAction } from 'redux/actions';
import { appSelector, pipelineSelector } from 'redux/selectors';
import moment from 'moment';

import {
  Box,
  PipelineActions,
  Flex,
  Title5,
  PipelineOverview,
  SearchInput,
  SpinnerView,
} from 'components';
const connect = connectHelper(
  createStructuredSelector({
    locationInfo: appSelector.selectLocationInfo,
    opportunity: pipelineSelector.selectOpportunity,
  })
);
type Props = {
  promise: any;
  history: any;
  paitient: PatientNumberModel;
  locationInfo: LocationModel;
  opportunity: OpportunityState;
  tags: TagsState;
};
type State = {
  visible: boolean;
  searchValue: string;
  firstLoading: boolean;
  pipelineName: string;
  exportLoading: boolean;
  filterLoading: boolean;
  filters: {
    name: string;
    tagName: string;
    year: string;
    month: string;
  };
};

export class Pipeline extends PureComponent<Props, State> {
  state = {
    searchValue: '',
    visible: false,
    firstLoading: false,
    pipelineName: '1',
    exportLoading: false,
    filterLoading: false,
    filters: { name: '', tagName: '', year: '', month: '' },
  };
  componentDidMount() {
    const { promise, locationInfo } = this.props;
    promise(
      pipelineAction.loadAllTags({
        page: 1,
        page_size: '50',
      })
    );
    promise(
      phoneNumberAction.loadAllPhoneNumbers({
        page: 1,
        page_size: 50,
        location_id: locationInfo?.pk,
      })
    );
    const { pipelineName } = this.state;
    this.setState({
      firstLoading: true,
    });
    promise(
      pipelineAction.loadOpportunities({
        pipeline_name: pipelineName,
        location_id: locationInfo?.pk,
        // due_date: moment()
        //   .subtract(pipelineName === '1' ? 6 : 18, 'months')
        //   .format('YYYY,MM'),
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
  handleFilterSearch = (value: string) => {
    const { promise, locationInfo } = this.props;
    const {
      pipelineName,
      filters: { name, tagName, year, month },
    } = this.state;

    promise(
      pipelineAction.loadOpportunities({
        pipeline_name: pipelineName,
        location_id: locationInfo?.pk,
        search: value,
        name: name,
        tags__title__icontains: tagName,
        due_date: year ? `${year},${month}` : '',
      })
    );
  };
  handleChangeName = (value: any) => {
    this.setState({
      pipelineName: value.key,
    });
    const { promise, locationInfo } = this.props;
    const {
      filters: { name, tagName, year, month },
    } = this.state;
    promise(
      pipelineAction.loadOpportunities({
        pipeline_name: value.key,
        location_id: locationInfo?.pk,
        name: name,
        tags__title__icontains: tagName,
        due_date: year ? `${year},${month}` : '',
      })
    );
  };
  handleExport = () => {
    const { promise, locationInfo } = this.props;
    const {
      pipelineName,
      searchValue,
      filters: { name, tagName, year, month },
    } = this.state;
    this.setState({
      exportLoading: true,
    });
    promise(
      pipelineAction.exportOpportunities({
        location_id: locationInfo?.pk,
        pipeline_name: pipelineName,
        search: searchValue,
        name: name,
        tags__title__icontains: tagName,
        due_date: year ? `${year},${month}` : '',
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
        download(data, 'pipeline.xls');
      })
      .finally(() =>
        this.setState({
          exportLoading: false,
        })
      );
  };
  handleChangeStatus = (id: any, status: any) => {
    const { promise, locationInfo } = this.props;
    promise(
      pipelineAction.updateOpportunityStatus(
        id,
        {
          location_id: locationInfo?.pk,
        },
        {
          call_status: status,
        }
      )
    );
  };
  handleFilter = (data: any) => {
    const { pipelineName } = this.state;
    const { promise, locationInfo } = this.props;
    this.setState({
      filterLoading: true,
      filters: {
        name: data?.name,
        tagName: data?.tag,
        year: data?.year,
        month: data?.month,
      },
    });
    promise(
      pipelineAction.loadOpportunities({
        pipeline_name: pipelineName,
        location_id: locationInfo?.pk,
        name: data?.name ? data?.name : null,
        tags__title__icontains: data?.tag ? data?.tag : null,
        due_date: data?.year ? `${data?.year},${data?.month}` : '',
      })
    ).finally(() =>
      this.setState({
        filterLoading: false,
      })
    );
  };
  onClearFilters = () => {
    const { pipelineName } = this.state;
    const { promise, locationInfo } = this.props;
    this.setState({
      firstLoading: true,
      filters: {
        name: '',
        tagName: '',
        month: '',
        year: '',
      },
    });
    promise(
      pipelineAction.loadOpportunities({
        pipeline_name: pipelineName,
        location_id: locationInfo?.pk,
      })
    ).finally(() =>
      this.setState({
        firstLoading: false,
      })
    );
  };

  render() {
    const { opportunity } = this.props;
    const { pipelineName, exportLoading, filterLoading, filters } = this.state;
    const opportunityList = get(opportunity, 'data', []);
    const fetching = get(opportunity, 'fetching');

    return (
      <Wrapper>
        <Helmet title="PanoBoard | Pipeline" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="24px 24px"
        >
          <Title5 weight="bold">Pipeline</Title5>
        </Flex>
        <Flex flexWrap="wrap" justifyContent="space-between" margin="10px 25px">
          <Box>
            <SearchInput
              placeholder="Search..."
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
          <Box>
            <PipelineActions
              pipelineName={pipelineName}
              activeFilters={filters}
              onChangeName={this.handleChangeName}
              onExport={this.handleExport}
              exportLoading={exportLoading}
              onFilter={this.handleFilter}
              filterLoading={filterLoading}
              onClearFilters={this.onClearFilters}
            />
          </Box>
        </Flex>
        <Box>
          {fetching ? (
            <SpinnerView height="300px" />
          ) : (
            <PipelineOverview
              list={opportunityList}
              pipelineName={pipelineName}
              onChangeStatus={(id: any, status: any) =>
                this.handleChangeStatus(id, status)
              }
            />
          )}
        </Box>
      </Wrapper>
    );
  }
}

export default connect(Pipeline);
