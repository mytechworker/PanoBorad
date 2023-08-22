import React from 'react';
import moment, { Moment } from 'moment';

import { Box, Flex, Text } from 'components';

import LeftArrow from 'assets/images/chervon-left.svg';
import RightArrow from 'assets/images/chervon-right.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import { usePromise } from 'hooks';
import { appSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { onlineBookingAction } from 'redux/actions';
import { date } from 'yup/lib/locale';

type Props = {
  appointmentType: number;
  selectedDate: Moment;
  onSelectDate: (date: Moment) => void;
};
const OnlineBookingSelectDate = ({
  appointmentType,
  selectedDate,
  onSelectDate,
}: Props) => {
  const promise = usePromise();
  const selectedLocation = useSelector(appSelector.selectLocationInfo);
  const [mainDate, setMainDate] = useState<Moment>(moment());
  const [showingDays, setShowingDays] = useState<Moment[]>([
    moment().subtract(2, 'day'),
    moment().subtract(1, 'day'),
    moment(),
    moment().add(1, 'day'),
    moment().add(2, 'day'),
  ]);
  useEffect(() => {
    selectedLocation &&
      promise(
        onlineBookingAction.appointmentAvailableTime({
          appointment_type_id: appointmentType,
          date: selectedDate.format('YYYY-MM-DD'),
          location_id: selectedLocation.pk,
        })
      );
  }, []);

  useEffect(() => {
    if (moment().format('YYYY-MM-DD') === mainDate.format('YYYY-MM-DD')) return;
    setShowingDays([
      moment(mainDate).subtract(2, 'day'),
      moment(mainDate).subtract(1, 'day'),
      moment(mainDate),
      moment(mainDate).add(1, 'day'),
      moment(mainDate).add(2, 'day'),
    ]);
  }, [mainDate.format('YYYY-MM-DD')]);

  const handleSelectDate = (date: Moment) => {
    if (
      moment().format('YYYY-MM-DD') !== date.format('YYYY-MM-DD') &&
      moment().diff(date) > 0
    )
      return;
    selectedLocation &&
      promise(
        onlineBookingAction.appointmentAvailableTime({
          appointment_type_id: appointmentType,
          date: date.format('YYYY-MM-DD'),
          location_id: selectedLocation.pk,
        })
      );
    onSelectDate(date);
  };

  return (
    <Flex flexGap="15px">
      <Box
        onClick={() => setMainDate(moment(mainDate.subtract(1, 'day')))}
        className="has-cursor"
      >
        <img src={LeftArrow} alt="left-arrow" />
      </Box>

      {showingDays.map((dateInfo) => (
        <Box
          width="54px"
          key={dateInfo.toISOString()}
          border="1px solid"
          borderColor={
            selectedDate.format('YYYY-MM-DD') === dateInfo.format('YYYY-MM-DD')
              ? 'primary'
              : 'gray2'
          }
          background={
            selectedDate.format('YYYY-MM-DD') === dateInfo.format('YYYY-MM-DD')
              ? 'primary'
              : moment().format('YYYY-MM-DD') !==
                  dateInfo.format('YYYY-MM-DD') &&
                moment().diff(dateInfo) > 0 &&
                'gray2'
          }
          borderRadius="6px"
          className={
            moment().format('YYYY-MM-DD') !== dateInfo.format('YYYY-MM-DD') &&
            moment().diff(dateInfo) > 0
              ? ''
              : 'has-cursor'
          }
          onClick={() => handleSelectDate(dateInfo)}
        >
          <Flex flexDirection="column" padding="8px 14px">
            <Text
              color={
                selectedDate.format('YYYY-MM-DD') ===
                dateInfo.format('YYYY-MM-DD')
                  ? 'white'
                  : 'gray1'
              }
            >
              {dateInfo.format('dd')}
            </Text>
            <Text
              weight="800"
              color={
                selectedDate.format('YYYY-MM-DD') ===
                dateInfo.format('YYYY-MM-DD')
                  ? 'white'
                  : 'gray1'
              }
            >
              {dateInfo.format('DD')}
            </Text>
          </Flex>
        </Box>
      ))}

      <Box
        onClick={() => setMainDate(moment(mainDate.add(1, 'day')))}
        className="has-cursor"
      >
        <img src={RightArrow} alt="right-arrow" />
      </Box>
    </Flex>
  );
};

export default OnlineBookingSelectDate;
