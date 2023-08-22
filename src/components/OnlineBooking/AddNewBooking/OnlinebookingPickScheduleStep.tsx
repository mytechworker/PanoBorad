import React from 'react';

import {
  Box,
  Flex,
  OnlineBookingMap,
  OnlineBookingPickScheduleForm,
  OnlineBookingWizardHeader,
  Text,
} from 'components';

type Props = {
  onNextStep: () => void;
  onSetType: (type: string) => void;
};

const OnlinebookingPickScheduleStep = ({ onNextStep, onSetType }: Props) => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" padding="20px">
      <Box className="flex-1">
        <OnlineBookingWizardHeader sectionTitle="Book Your Appointment" />
        <Box background="white" borderRadius="0 0 15px 15px ">
          <Text
            color="black2"
            weight="600"
            fontSize="18px"
            margin="25px 10px 22px 25px"
            letterSpacing="0.02em"
            lineHeight="168.8%"
          >
            Are you scheduling this appointment for you, or someone else?
          </Text>
          <OnlineBookingPickScheduleForm
            onSubmit={(data: any) => {
              onSetType(data.scheduling_for_me ? 'for-me' : 'for-someone-else');
              onNextStep();
            }}
          />
        </Box>
      </Box>
      <Box marginLeft="18px" className="flex-1">
        <OnlineBookingMap />
      </Box>
    </Flex>
  );
};

export default OnlinebookingPickScheduleStep;
