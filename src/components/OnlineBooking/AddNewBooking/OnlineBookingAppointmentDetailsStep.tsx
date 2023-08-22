import React from 'react';
import moment from 'moment-timezone';

import { Box, Flex, OnlineBookingWizardHeader, Text } from 'components';
import { useSelector } from 'react-redux';
import { appSelector } from 'redux/selectors';

import InformationLogo from 'assets/images/info-logo.svg';

type Props = {
  onNextStep: () => void;
  details?: any;
  appointmentTypes: any;
};

const OnlineBookingAppointmentDetailsStep = ({
  onNextStep,
  details,
  appointmentTypes,
}: Props) => {
  const location = useSelector(appSelector.selectLocationInfo);

  return (
    <>
      <Box padding="20px">
        <OnlineBookingWizardHeader sectionTitle="Your appointment has been scheduled!" />
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          background="white"
          height="75vh"
          borderRadius="0 0 15px 15px"
          padding="20px"
          alignItems="flex-start"
        >
          <Flex
            height="71vh"
            flexDirection="column"
            width="100%"
            maxWidth="600px"
            margin="0 auto"
          >
            <Box>
              <Text color="gray8" fontSize="18px" align="center">
                Appointment Details
              </Text>
            </Box>

            <Box
              background="gray12"
              borderRadius="15px"
              width="504px"
              height="220px"
              marginTop="20px"
            >
              <Flex flexDirection="row" alignItems="flex-start">
                <Box position="relative" left="-18px" top="22px">
                  <img src={InformationLogo} alt="information-logo" />
                </Box>
                <Box margin="30px 0 0 0">
                  <Flex flexDirection="column" alignItems="flex-start">
                    <Text
                      font-size="16px"
                      line-height="18px"
                      color="gray8"
                      weight="bold"
                    >
                      {
                        appointmentTypes.find(
                          (item: any) => item.pk === details.appointment_type
                        )?.title
                      }
                    </Text>
                    <Text
                      marginTop="14px"
                      weight="600"
                      fontSize="14px"
                      color="gray9"
                    >
                      Address :
                    </Text>
                    <Text weight="600" fontSize="14px" color="black2">
                      {details?.location_title}
                    </Text>
                    <Text weight="600" fontSize="14px" color="black2">
                      {details?.location_address}
                    </Text>
                    <Text
                      marginTop="14px"
                      weight="600"
                      fontSize="14px"
                      color="gray9"
                    >
                      Appointment :
                    </Text>
                    <Text weight="600" fontSize="14px" color="black2">
                      {details?.datetime &&
                        location?.location_timezone &&
                        `${moment
                          .tz(details?.datetime, location?.location_timezone)
                          .format('DD MMMM YYYY')} at ${
                          details?.datetime &&
                          location?.location_timezone &&
                          moment
                            .tz(details?.datetime, location?.location_timezone)
                            .format('hh:mm a')
                        }`}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text
                weight="600"
                fontSize="18px"
                marginTop="30px"
                color="gray8"
                lineHeight="200%"
                align="center"
              >
                Your appoinyment has been scheduled. We'll let you know when the
                office confirms this visit. Untill then, just kick back and
                relax!
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default OnlineBookingAppointmentDetailsStep;
