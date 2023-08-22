import React from 'react';
import {
  Flex,
  Text,
  Box,
  OnlineBookingAppointmentForm,
  OnlineBookingMap,
  OnlineBookingWizardHeader,
} from 'components';
import { AddNewBookingModel } from 'types';

type Props = {
  onNextStep: (data: any) => void;
  bookingInfo: AddNewBookingModel;
};
const OnlineBookingScheduleStep = ({
  onNextStep,
  bookingInfo,
}: Props) => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" padding="20px">
      <Box className="flex-1">
        <OnlineBookingWizardHeader sectionTitle="Book Your Appointment" />
        <Box background="white" borderRadius="0 0 15px 15px ">
          <Text
            color="black2"
            weight="600"
            fontSize="18px"
            letterSpacing="0.02em"
            lineHeight="168.8%"
            padding="20px"
          >
            What type of appointment would you like to schedule?
          </Text>
          <OnlineBookingAppointmentForm
            onSubmit={(data: any) => onNextStep(data)}
            bookingInfo={bookingInfo}
          />
        </Box>
      </Box>
      <Box marginLeft="18px" className="flex-1">
        <OnlineBookingMap />
      </Box>
    </Flex>
  );
};

export default OnlineBookingScheduleStep;
