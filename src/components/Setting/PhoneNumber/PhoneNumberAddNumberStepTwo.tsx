import React, { useState } from 'react';
import { PhoneNumberModel } from 'types';
import { Flex, Text, Button, Title5, Box, SpinnerView } from 'components';
import { PhoneNumberInputWrapper } from '../setting.styles';

type Props = {
  onBuy: (number: string) => void;
  phoneNumbers: PhoneNumberModel[];
  isSubmitting: boolean;
  loading: boolean;
};
const PhoneNumberAddNumberStepTwo = ({
  onBuy,
  phoneNumbers,
  isSubmitting,
  loading,
}: Props) => {
  const [selectedNumber, setSelectedNumber] = useState('');
  return (
    <Box padding="25px">
      <Title5 marginBottom="30px">Phone Numbers</Title5>
      <Text fontSize="14px" color="gray8" marginBottom="8px">
        Select your phone number
      </Text>
      <Box
        width="100%"
        overflow="auto"
        height="41vh"
        className="designed-scroll"
      >
        {loading ? (
          <SpinnerView height="200px" />
        ) : (
          <PhoneNumberInputWrapper>
            {phoneNumbers.map((item: any) => {
              return (
                <Button
                  value={item.phone_number}
                  key={item.phone_number}
                  onClick={() => setSelectedNumber(item.phone_number)}
                  className={
                    item.phone_number === selectedNumber
                      ? 'selected-number'
                      : ''
                  }
                >
                  {item.phone_number}
                </Button>
              );
            })}
          </PhoneNumberInputWrapper>
        )}
      </Box>
      <Flex justifyContent="flex-end" marginTop="20px">
        <Button
          htmlType="submit"
          onClick={() => onBuy(selectedNumber)}
          disabled={selectedNumber === ''}
          loading={isSubmitting}
        >
          Buy
        </Button>
      </Flex>
    </Box>
  );
};

export default PhoneNumberAddNumberStepTwo;
