import React, { useState } from 'react';
import { Select, Input } from 'antd';
import { Flex, Text, Button, Title5, Box } from 'components';
import { SelectWrapper, AreaCodeWrapper } from '../setting.styles';

const { Option } = Select;
type Props = {
  onSeacrh: (countryCode?: string, areaCode?: number) => void;
  emptyListMsg: string;
  loading: boolean;
};
const PhoneNumberAddNumberStepOne = ({
  onSeacrh,
  emptyListMsg,
  loading,
}: Props) => {
  const [countryCode, setCountryCode] = useState(undefined);
  const [areaCode, setAreaCode] = useState<number>();
  return (
    <Box padding="25px">
      <Title5 marginBottom="30px">Add Phone Number</Title5>
      <Flex
        flexDirection="column"
        justfiyContent="space-between"
        alignItems="flex-start"
        marginBottom="40px"
      >
        <Text fontSize="14px" weight="400" color="gray8" marginBottom="8px">
          Country
        </Text>
        <SelectWrapper>
          <Select
            placeholder="Choose country..."
            value={countryCode}
            onChange={(value) => setCountryCode(value)}
          >
            <Option value="US">US</Option>
          </Select>
        </SelectWrapper>
      </Flex>
      <Flex
        flexDirection="column"
        justfiyContent="space-between"
        alignItems="flex-start"
        marginBottom="29px"
      >
        <Text fontSize="14px" weight="400" color="gray8" marginBottom="8px">
          Area Code
        </Text>
        <AreaCodeWrapper>
          <Input
            placeholder="Area Code"
            value={areaCode}
            onChange={(event: any) => setAreaCode(event.target.value)}
          />
        </AreaCodeWrapper>
      </Flex>
      {emptyListMsg !== '' && (
        <Text fontSize="14px" weight="400" color="gray8" marginBottom="10px">
          {emptyListMsg}
        </Text>
      )}
      <Flex justifyContent="flex-end">
        <Button
          htmlType="submit"
          loading={loading}
          onClick={() => onSeacrh(countryCode, areaCode)}
          disabled={countryCode === undefined || areaCode === undefined}
        >
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default PhoneNumberAddNumberStepOne;
