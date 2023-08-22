import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  Flex,
  Box,
  Title5,
  OnlineBookingSections,
  OnlineBookingCalendarOverview,
  Button,
} from 'components';
import connectHelper from 'helpers/connect.helper';
import { appSelector, onlineBookingSelector } from 'redux/selectors';
import { onlineBookingAction } from 'redux/actions';
import { CalendarState, LocationModel } from 'types';
import moment from 'moment';

const connect = connectHelper(
  createStructuredSelector({
    locationInfo: appSelector.selectLocationInfo,
    calendarState: onlineBookingSelector.selectCalendar,
  })
);

type Props = {
  promise?: any;
  locationInfo?: LocationModel;
  calendarState: CalendarState;
};
type State = {
  firstLoading: boolean;
};
export class OnlineBookingCalendarPage extends PureComponent<Props, State> {
  state = { firstLoading: false };
  componentDidMount() {
    const { promise, locationInfo } = this.props;
    this.setState({ firstLoading: true });
    locationInfo?.pk &&
      promise(
        onlineBookingAction.loadAllCalendar({
          location_id: locationInfo?.pk,
          start_time__date__gte: moment().startOf('month').format('YYYY-MM-DD'),
          start_time__date__lte: moment().endOf('month').format('YYYY-MM-DD'),
        })
      ).finally(() => this.setState({ firstLoading: false }));
  }

  handleChangeDate = (start: string, end: string) => {
    const { promise, locationInfo } = this.props;
    locationInfo?.pk &&
      promise(
        onlineBookingAction.loadAllCalendar({
          location_id: locationInfo?.pk,
          start_time__date__gte: start,
          start_time__date__lte: end,
        })
      );
  };

  render() {
    const { firstLoading } = this.state;
    return (
      <>
        <Helmet title="PanoBoard | Calendar" />
        <OnlineBookingSections activeMenu="Calendar" />
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          margin="22px 25px"
        >
          <Box>
            <Title5>Online Booking</Title5>
          </Box>
          <Link to="/online-booking/add-new-booking">
            <Button>
              <PlusOutlined />
              Add New Booking
            </Button>
          </Link>
        </Flex>

        <OnlineBookingCalendarOverview
          firstLoading={firstLoading}
          onDateChange={this.handleChangeDate}
        />
      </>
    );
  }
}

export default connect(OnlineBookingCalendarPage);
