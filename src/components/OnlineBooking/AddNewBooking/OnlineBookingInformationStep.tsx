import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

import { appSelector, onlineBookingSelector } from 'redux/selectors';
import { AddNewBookingModel } from 'types';
import {
  Flex,
  OnlineBookingWizardHeader as WizardHeader,
  Box,
  Text,
  OnlineBookingInformationForMeForm,
  OnlineBookingInformationForSomeoneElseForm,
} from 'components';

import ArrowBack from 'assets/images/arrow_back.svg';
import InformationLogo from 'assets/images/info-logo.svg';

type Props = {
  onNextStep: (data: any) => void;
  onPrevStep: () => void;
  type: string;
  bookingInfo: AddNewBookingModel;
  submitting: boolean;
  appointmentTypes: any;
};

const OnlineBookingInformationStep = ({
  onNextStep,
  type,
  onPrevStep,
  bookingInfo,
  submitting,
  appointmentTypes,
}: Props) => {
  const location = useSelector(appSelector.selectLocationInfo);
  const { data } = useSelector(onlineBookingSelector.selectLocation);
  const { data: states } = useSelector(onlineBookingSelector.selectStates);
  let statesList: any[] = [];
  states?.forEach((element) => {
    statesList.push({
      key: element,
      title: element,
    });
  });
  return (
    <Box width="100%" padding="20px">
      <WizardHeader sectionTitle="Book Your Appointment" />
      <Box
        background="white"
        borderRadius="0 0 15px 15px "
        height="76vh"
        heightT="auto"
        padding="50px"
      >
        <Flex
          alignItems="flex-start"
          justifyContent="space-between"
          flexGap="50px"
          flexWrap="wrap"
        >
          <Box
            background="gray12"
            borderRadius="15px"
            minWidth="270px"
            width="100%"
            height="220px"
            className="flex-1"
          >
            <Flex
              padding="19px 20px"
              alignItems="flex-start"
              justifyContent="flex-start"
              flexGap="18px"
            >
              <Box position="relative">
                <img src={InformationLogo} alt="information-logo" />
              </Box>

              <Box>
                <Flex flexDirection="column" alignItems="flex-start">
                  <Text
                    font-size="16px"
                    line-height="18px"
                    color="gray8"
                    weight="bold"
                  >
                    {
                      appointmentTypes.find(
                        (item: any) => item.pk === bookingInfo.appointment_type
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
                    {data?.title}
                  </Text>
                  <Text weight="600" fontSize="14px" color="black2">
                    {data?.address}
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
                    {bookingInfo.start_time &&
                      location?.location_timezone &&
                      moment
                        .tz(bookingInfo.start_time, location?.location_timezone)
                        .format('DD MMMM YYYY hh:mm a')}
                  </Text>
                </Flex>
              </Box>
            </Flex>
          </Box>
          <Box className="flex-1" minWidth="607px">
            <Box marginBottom="10px">
              <Flex
                onClick={onPrevStep}
                className="has-cursor"
                justifyContent="flex-start"
              >
                <Box marginRight="9px">
                  <img src={ArrowBack} alt="arrow-back" />
                </Box>
                <Text weight="600" fontSize="14px" color="gray13">
                  Change your appointment details
                </Text>
              </Flex>
            </Box>
            {type === 'for-me' ? (
              <OnlineBookingInformationForMeForm
                onSubmit={(data: any) => onNextStep(data)}
                bookingInfo={bookingInfo}
                submitting={submitting}
                states={statesList}
              />
            ) : (
              <OnlineBookingInformationForSomeoneElseForm
                onSubmit={(data: any) => onNextStep(data)}
                submitting={submitting}
                states={statesList}
              />
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default OnlineBookingInformationStep;
