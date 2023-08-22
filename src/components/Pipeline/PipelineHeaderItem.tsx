import React from 'react';

import { Box, Flex, Text } from 'components';

type props = {
  column: any;
};
const PipelineHeaderItem = ({ column }: props) => {
  return (
    <Box
      background="blue2"
      width="320px"
      height="75px"
      marginRight="30px"
      borderRadius="10px 10px 0 0"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Text
          color="black2"
          weight="bold"
          fontSize="16px"
          margin="12px 2px 4px 16px"
        >
          {column.name}
        </Text>
        <Text
          color="black2"
          weight="600"
          fontSize="14px"
          margin="0 170px 12px 16px"
        >
          {column.items.length} Lead
        </Text>
      </Flex>
    </Box>
  );
};

export default PipelineHeaderItem;
