import React from 'react';
import { Input } from 'antd';
import { Flex, Text, Button, Title5, Box } from 'components';
import { PhoneNumberInputWrapper } from '../setting.styles';
import DoneIcon from '../../../assets/images/check-icon.svg';

type Props = {
  onDoneClick?: () => void;
};
const PhoneNumberAddNumberStepDone = ({ onDoneClick }: Props) => {
  return (
    <Box padding="25px">
      <Flex flexDirection="column">
        <img src={DoneIcon} alt="" />
        <Text fontSize="16px" color="green1" marginBottom="38px" weight="900">
          Successful
        </Text>
        <Text
          fontSize="16px"
          color=" black2"
          marginBottom="50px"
          weight="600"
          maxWidth="180px"
          align="center"
        >
          Your number has been bought.
        </Text>

        <Flex justifyContent="flex-end" marginTop="20px">
          <Button htmlType="submit" onClick={onDoneClick} type="success">
            Done
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default PhoneNumberAddNumberStepDone;
