import React from 'react';

import { Flex, Box, Text } from 'components';

type Props = {
  options: { key: string; title: string }[];
  selectedItem: string;
  onSelect: (item: string) => void;
};
const SingleSelect = ({ options, selectedItem, onSelect }: Props) => {
  return (
    <Flex background="gray10" borderRadius="25px">
      {options.map((item) => (
        <Box
          key={item.key}
          onClick={() => onSelect(item.key)}
          padding="8px 17px"
          border="2px solid"
          borderColor={selectedItem === item.key ? 'primary' : 'gray10'}
          borderRadius="25px"
          background={selectedItem === item.key ? 'white' : 'gray10'}
          className="has-cursor"
        >
          <Text
            color={selectedItem === item.key ? 'primary' : 'gray1'}
            fontSize="12"
            weight={selectedItem === item.key ? '700' : '600'}
          >
            {item.title}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default SingleSelect;
