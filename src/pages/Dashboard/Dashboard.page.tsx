import React, { PureComponent } from 'react';
import { WidthProvider, Responsive, Layout } from 'react-grid-layout';
import _, { isEmpty } from 'lodash';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

import {
  ReportsItemLayout,
  Flex,
  ReportsFilter,
  Box,
  Text,
  SpinnerView,
} from 'components';
import { ReportSizes } from 'helpers';
import { profileAction, reportAction, settingAction } from 'redux/actions';
import { LocationModel, ProfileInfoState, SettingStateData, User } from 'types';
import connectHelper from 'helpers/connect.helper';
import { appSelector, profileSelector, settingSelector } from 'redux/selectors';
import { CHART_TYPES } from 'data';

import NoReport from 'assets/images/no-report.svg';

const connect = connectHelper(
  createStructuredSelector({
    locationInfo: appSelector.selectLocationInfo,
    settingData: settingSelector.selectData,
    settingFetching: settingSelector.selectFetching,
    profile: profileSelector.selectProfile,
  })
);
const ResponsiveReactGridLayout = WidthProvider(Responsive);

type Props = {
  promise: any;
  locationInfo: LocationModel;
  settingData: SettingStateData;
  settingFetching: boolean;
  profile: ProfileInfoState;
} & any;

type State = {
  newCounter: number;
  breakpoint: any;
  cols: any;
  filtering: boolean;
  lastItemLocation: {
    x: number;
    y: number;
  };
};

class DashboardPage extends PureComponent<Props, State> {
  static defaultProps = {
    className: 'layout',
    cols: { lg: 10, md: 10, sm: 5, xs: 5, xxs: 5 },
  };
  state = {
    newCounter: 0,
    breakpoint: null,
    cols: null,
    filtering: false,
    lastItemLocation: {
      x: 0,
      y: 0,
    },
  };

  componentDidMount() {
    const { promise, locationInfo, profile } = this.props;
    const today = moment(new Date()).format('YYYY-MM-DD');
    promise(profileAction.getProfile()).then((profile: User) => {
      if (profile.permissions.indexOf(11) < 0) return;
      promise(settingAction.loadAll()).then((result: SettingStateData) => {
        if (
          isEmpty(result?.main_dashboard.filterInfo) ||
          result?.main_dashboard.filterInfo.charts.length < 1
        )
          return this.handleGetReports(
            CHART_TYPES,
            today,
            today,
            locationInfo?.pk,
            true
          );
        const { filterInfo } = result.main_dashboard;
        locationInfo?.pk &&
          this.handleGetReports(
            filterInfo.charts,
            filterInfo.start_date || today,
            filterInfo.end_date || today,
            locationInfo?.pk
          );
      });
    });
  }

  createElement = (element: CheckboxValueType) => {
    const {
      settingData: { main_dashboard },
    } = this.props;
    const type = element.toString();
    const elementInfo = ReportSizes(type);
    const dataGrid =
      main_dashboard?.locations &&
      main_dashboard.locations.find((item: any) => item.i === type)
        ? main_dashboard.locations.find((item: any) => item.i === type)
        : elementInfo.location;

    return (
      <Flex
        padding="22px"
        key={type}
        data-grid={{
          ...dataGrid,
          w:
            !dataGrid || dataGrid.w < elementInfo.width
              ? elementInfo.width
              : dataGrid.w,
          h:
            !dataGrid || dataGrid.h < elementInfo.height
              ? elementInfo.height
              : dataGrid.h,
        }}
        background="white"
        height="260px"
        borderRadius="15px"
      >
        <ReportsItemLayout pageName="dashboard" reportType={type} />
      </Flex>
    );
  };

  handleFilterData = (data: {
    startDate: string;
    endDate: string;
    charts: CheckboxValueType[];
  }) => {
    const today = moment(new Date()).format('YYYY-MM-DD');
    const { locationInfo } = this.props;
    const { charts, startDate, endDate } = data;
    this.handleGetReports(
      charts,
      startDate || today,
      endDate || today,
      locationInfo?.pk,
      true
    );
  };

  onDropItem = (locations: Layout[]) => {
    const { promise, settingData } = this.props;

    !isEmpty(settingData?.main_dashboard) &&
      promise(
        settingAction.update({
          main_dashboard: {
            ...settingData.main_dashboard,
            locations,
          },
        })
      );
  };

  handleGetReports = (
    charts: CheckboxValueType[],
    start: string,
    end: string,
    location_id: number,
    new_filter = false
  ) => {
    const { promise, settingData } = this.props;

    this.setState({ filtering: true });
    Promise.all([
      charts.includes('recare') &&
        promise(
          reportAction.getRecare({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('cancellations') &&
        promise(
          reportAction.getCancellations({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('hygiene') &&
        promise(
          reportAction.getHygiene({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('reappointment') &&
        promise(
          reportAction.getHygieneReappointment({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('new_patients') &&
        promise(
          reportAction.getNewPatients({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('production') &&
        promise(
          reportAction.getProduction({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('restorative_elective') &&
        promise(
          reportAction.getRestorative({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
      charts.includes('visits') &&
        promise(
          reportAction.getVisit({
            location_id,
            start_time: start,
            end_time: end,
          })
        ),
    ]).finally(() => {
      return promise(
        settingAction.update({
          main_dashboard:
            charts.length > 0
              ? {
                  ...settingData?.main_dashboard,
                  filterInfo: {
                    start_date: start,
                    end_date: end,
                    charts,
                  },
                }
              : {
                  ...settingData?.main_dashboard,
                  filterInfo: {
                    start_date: start,
                    end_date: end,
                    charts,
                  },
                  locations: [],
                },
        })
      ).finally(() =>
        promise(settingAction.loadAll()).then(() =>
          this.setState({ filtering: false })
        )
      );
    });
  };

  handleClearFilters = () => {
    const { promise } = this.props;
    this.setState({ filtering: true });

    promise(
      settingAction.update({
        main_dashboard: {},
      })
    ).then(() =>
      promise(settingAction.loadAll()).then(() =>
        this.setState({ filtering: false })
      )
    );
  };

  render() {
    const { filtering } = this.state;
    const { settingData, settingFetching, profile } = this.props;
    const { data: profileData, fetching: profileFetching } = profile;
    return (
      <>
        <Helmet title="PanoBoard | Dashboard" />
        <Box padding="20px" width="100%">
          <Flex justifyContent="space-between">
            <Text weight="700" fontSIze="18px">
              Dashboard
            </Text>

            {settingFetching ||
            profileFetching ||
            profileData?.permissions?.indexOf(11) < 0 ? (
              <></>
            ) : (
              <ReportsFilter
                filters={settingData?.main_dashboard?.filterInfo ?? null}
                onSelectFilters={this.handleFilterData}
                onClearFilters={this.handleClearFilters}
              />
            )}
          </Flex>
          {settingFetching || filtering || profileFetching ? (
            <SpinnerView height="50vh" />
          ) : (
            <Box>
              {!isEmpty(settingData?.main_dashboard) &&
              settingData?.main_dashboard.filterInfo.charts.length > 0 ? (
                <ResponsiveReactGridLayout
                  cols={{ lg: 10, md: 10, sm: 5, xs: 5, xxs: 5 }}
                  // onLayoutChange={this.onLayoutChange}
                  onDragStop={this.onDropItem}
                  {...this.props}
                >
                  {_.map(
                    settingData?.main_dashboard?.filterInfo?.charts.length > 0
                      ? settingData?.main_dashboard?.filterInfo?.charts
                      : CHART_TYPES,
                    (el) => this.createElement(el)
                  )}
                </ResponsiveReactGridLayout>
              ) : (
                <Flex marginTop="100px" flexDirection="column">
                  {profileData?.permissions?.indexOf(11) > -1 && (
                    <Text fontSize="16px" weight="600">
                      Select the drop down above to choose the report cards
                    </Text>
                  )}
                  <img src={NoReport} alt="NoReport" />
                </Flex>
              )}
            </Box>
          )}
        </Box>
      </>
    );
  }
}

export default connect(DashboardPage);
