import React from 'react';

import { Box, Button, Flex, Text } from 'components';

import CheckIcon from 'assets/images/check-icon.svg';
import CloseIcon from 'assets/images/close-icon.svg';
import { ButtonWrapper } from '../setting.styles';

type Props = {
  error: boolean;
  onConfirm: () => void;
};
const IntegrationsTwilioAnswer = ({ error, onConfirm }: Props) => {
  return (
    <>
      <Box width="320px" height="361px" padding="37px">
        <Flex
          flexDirection="column"
          justifyContent="space-between"
          flexGap="55px"
        >
          <Box>
            <Flex flexDirection="column" flexGap="5px">
              {error ? (
                <img src={CloseIcon} alt="close-icon" />
              ) : (
                <img src={CheckIcon} alt="check-icon" />
              )}
              <Text
                weight="900"
                fontSize="16px"
                color={error ? 'red2' : 'green1'}
              >
                {error ? 'Oops!' : 'Successful'}
              </Text>
            </Flex>
          </Box>
          <Box>
            <Text weight="600" fontSize="16px" color="black2" align="center">
              {error
                ? ' Your Twilio connection hasn’t been approved.'
                : 'Your Twilio connection has been approved.'}
            </Text>
          </Box>
          <ButtonWrapper>
            <Button
              className={error ? 'bu-c2' : 'bu-c1'}
              width="120px"
              onClick={() => onConfirm()}
            >
              {error ? ' Try again' : 'Done'}
            </Button>
          </ButtonWrapper>
        </Flex>
      </Box>
    </>
  );
};

export default IntegrationsTwilioAnswer;
