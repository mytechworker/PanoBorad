import React from 'react';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';

import { Box, Flex, SpinnerView, Text } from 'components';
import { ButtonWrapper } from '../online-booking.style';
import { appSelector, onlineBookingSelector } from 'redux/selectors';

type Props = {
  onSelectTime: (time: string) => void;
  selectedTime: string;
};

const OnlineBookingSelectTime = ({ onSelectTime, selectedTime }: Props) => {
  const location = useSelector(appSelector.selectLocationInfo);

  const { data: availbeTimes, fetching } = useSelector(
    onlineBookingSelector.selectAvailableTimes
  );

  return (
    <Flex
      justifyContent="flex-start"
      flexWrap="wrap"
      flexGap="12px"
      maxHeight="15vh"
      overflow="auto"
      className="designed-scroll"
      alignItems="flex-start"
    >
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="100px" />
        </Flex>
      ) : availbeTimes && availbeTimes.length > 0 ? (
        availbeTimes.map((timeInfo: string) => (
          <ButtonWrapper
            key={timeInfo}
            as={Box}
            onClick={() => onSelectTime(timeInfo)}
            className={selectedTime === timeInfo && 'selected-time'}
          >
            {timeInfo &&
              location?.location_timezone &&
              moment
                .tz(timeInfo, location?.location_timezone)
                .format('h:mm  a')}
          </ButtonWrapper>
        ))
      ) : (
        <Text>Sorry, No times are available</Text>
      )}
    </Flex>
  );
};

export default OnlineBookingSelectTime;
