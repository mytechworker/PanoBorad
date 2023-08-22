import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { onlineBookingSelector } from 'redux/selectors';
import moment, { Moment } from 'moment';

import {
  Box,
  Text,
  Flex,
  Button,
  OnlineBookingSelectDate,
  OnlineBookingSelectTime,
  OnlineBookingMap,
  OnlineBookingWizardHeader,
} from 'components';

import Location from 'assets/images/location.svg';

type Props = {
  onNextStep: (data: any) => void;
  bookingInfo: any;
  appointmentTypes: any;
};
const OnlineBookingPatientStep = ({
  onNextStep,
  bookingInfo,
  appointmentTypes,
}: Props) => {
  const { data: location } = useSelector(onlineBookingSelector.selectLocation);
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [selectedTime, setSelectedTime] = useState<string>('');

  useEffect(() => setSelectedTime(''), [selectedDate]);
  return (
    <Flex padding="20px" flexGap="18px">
      <Box
        background="white"
        borderRadius="15px 15px 15px 15px "
        width="577px"
        className="flex-1"
      >
        <OnlineBookingWizardHeader sectionTitle="Book Your Appointment" />
        <Flex
          padding="25px"
          flexDirection="column"
          height="75vh"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box width="100%">
            <Box
              background="primary"
              borderRadius="6px"
              marginBottom="18px"
              width="fit-content"
            >
              <Text
                padding="15px"
                color="white"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.02em"
                weight="bold"
              >
                {
                  appointmentTypes.find(
                    (item: any) => item.pk === bookingInfo.appointment_type
                  )?.title
                }
              </Text>
            </Box>
            <Flex
              background="gray12"
              borderRadius="6px"
              justifyContent="flex-start"
              alignItems="flex-start"
              padding="18px"
              flexGap="12px"
            >
              <Box
                background="primary"
                borderRadius="50%"
                width="34px"
                height="34px"
              >
                <Box position="relative" left="32%" right="16%" top="15%">
                  <img src={Location} alt="location" />
                </Box>
              </Box>
              <Flex flexDirection="column" alignItems="flex-start">
                <Text
                  font-size="14px"
                  line-height="18px"
                  color="gray8"
                  weight="bold"
                >
                  Location
                </Text>
                <Text
                  font-size="14px"
                  line-height="18px"
                  color="black2"
                  weight="bold"
                >
                  {location?.title}
                </Text>
                <Text
                  font-size="14px"
                  line-height="18px"
                  color="black2"
                  weight="600"
                >
                  {location?.address}
                </Text>
              </Flex>
            </Flex>
            <Box margin="36px auto">
              <OnlineBookingSelectDate
                appointmentType={bookingInfo.appointment_type}
                selectedDate={selectedDate}
                onSelectDate={setSelectedDate}
              />
            </Box>
            <Box
              background="gray12"
              borderRadius="6px"
              padding="10px"
              width="100%"
            >
              <Text
                color="black2"
                fontSize="14px"
                lineHeight="18px"
                letterSpacing="0.02em"
                weight="bold"
              >
                {
                  appointmentTypes.find(
                    (item: any) => item.pk === bookingInfo.appointment_type
                  )?.title
                }
              </Text>
            </Box>
            <Box margin="18px 0 14px">
              <Text color="gray9" weight="bold">
                Select Time
              </Text>
            </Box>
            <Box marginBottom="14px">
              <OnlineBookingSelectTime
                onSelectTime={setSelectedTime}
                selectedTime={selectedTime}
              />
            </Box>
          </Box>
          <Box width="177px">
            <Button
              disabled={!selectedDate || !selectedTime}
              width="100%"
              onClick={() =>
                onNextStep({
                  start_time: selectedTime,
                  date: selectedDate.format('YYYY-MM-DD'),
                })
              }
            >
              Confirm
            </Button>
          </Box>
        </Flex>
      </Box>
      <Box height="87vh" className="flex-1">
        <OnlineBookingMap />
      </Box>
    </Flex>
  );
};

export default OnlineBookingPatientStep;
