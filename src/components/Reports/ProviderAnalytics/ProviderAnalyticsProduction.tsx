import React, { useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { Box, Title5 } from 'components';

type Props = { providerProductionData: any };

const ProviderAnalyticsProduction = ({ providerProductionData }: Props) => {
  return (
    <>
      <Box margin="22px 25px 18px">
        <Title5>Provider Production</Title5>
      </Box>
      <Box height="500px">
        <ResponsiveBar
          data={providerProductionData}
          keys={['net']}
          indexBy="full_name"
          colors={'#5A8DEE'}
          padding={0.9}
          margin={{ top: 50, right: 50, bottom: 100, left: 50 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          labelTextColor={{ from: 'red', modifiers: [['darker', 1.6]] }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          axisBottom={{
            // legend: 'Provider Name',
            legendPosition: 'middle',
            legendOffset: 40,
            tickRotation: -45,
          }}
          enableLabel={false}
          enableGridY={true}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          borderRadius={5}
        />
      </Box>
    </>
  );
};

export default ProviderAnalyticsProduction;
