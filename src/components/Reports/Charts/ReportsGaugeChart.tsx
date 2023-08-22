import React from 'react';
import { Progress } from 'antd';
import numeral from 'numeral';
import { Box, Text } from 'components';

type Props = {
  color?: string;
  value?: number;
  type?: string;
};
const ReportsGaugeChart = ({ color, value, type }: Props) => {
  return (
    <Box position="relative">
      <Progress
        type="dashboard"
        width={200}
        percent={value}
        gapDegree={70}
        strokeWidth={15}
        showInfo={false}
        strokeColor={color ? color : '#7852CC'}
      />
      {type === 'number' ? (
        <Box width="62px" position="absolute" top="70px" right="70px">
          <Text color="gray8" fontSize="10px" align="center">
            {numeral(value).format('0,0')}
          </Text>
        </Box>
      ) : type === 'percent' ? (
        <Box width="62px" position="absolute" top="80px" right="50px">
          <Text color="gray8" fontSize="10px" align="center">
            {numeral(value).format('0,0')} %
          </Text>
        </Box>
      ) : (
        <Box width="62px" position="absolute" top="70px" right="70px">
          <Text color="gray8" fontSize="10px" align="center">
            Avg. $/Exam ${numeral(value).format('0,0')}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default ReportsGaugeChart;
