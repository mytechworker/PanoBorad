import React from 'react';
import numeral from 'numeral';
import { ResponsiveBullet, Datum } from '@nivo/bullet';

import { Box, Text, Flex } from 'components';

type Props = {
  data: Datum[];
  title?: string;
};
const ReportsBulletChart = ({ data, title }: Props) => {
  const props = {
    margin: { top: 10, right: 10, bottom: 50, left: 5 },
    titleOffsetX: -80,
    spacing: 80,
    animate: false,
    measureColors: ['#5A8DEE', '#EBEBEB'],
    markerColors: '#6FD456',
  };
  const CustomRange = ({
    x,
    y,
    width,
    height,
    color,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  }: any) => (
    <rect
      x={x + 2}
      y={y + 2}
      rx={5}
      ry={5}
      width={width - 4}
      height={height - 4}
      fill="white"
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    />
  );
  const CustomMeasure = ({
    x,
    y,
    width,
    height,
    color,
    onMouseEnter,
    onMouseMove,
    onMouseLeave,
  }: any) => (
    <rect
      x={x + 2}
      y={y + 2}
      rx={height / 2}
      ry={height / 2}
      width={width - 4}
      height={height - 4}
      fill={color}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    />
  );
  return (
    <Box>
      {title && <Text fontSize="14px">{title}</Text>}
      <Box width="100%" height="90px">
        <ResponsiveBullet
          data={data}
          {...props}
          measureComponent={CustomMeasure}
          rangeComponent={CustomRange}
        />
      </Box>
      <Flex flexGap="18px">
        <Text weight="700" color="green2">
          Goal {numeral(data[0]?.markers).format('0,0')}%
        </Text>
        <Text color="gray8">|</Text>
        <Text weight="700" color="gray8">
          Actual {numeral(data[0]?.measures[0]).format('0,0')}%
        </Text>
      </Flex>
    </Box>
  );
};

export default ReportsBulletChart;
