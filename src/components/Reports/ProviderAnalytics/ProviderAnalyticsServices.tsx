import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

import { Flex, Title5 } from 'components';

const ProviderAnalytcisServices = () => {
  const hexChars = '23456789ABD';

  const getRandomColor = () =>
    `#${Array.from({ length: 6 })
      .map(() => hexChars[Math.floor(Math.random() * 11)])
      .join('')}`;
  const data = [
    {
      id: 'Bitewings-Four Films',
      valor: 20,
    },
    {
      id: 'Intraoral Periapical Each Additional Fil',
      valor: 100,
    },
    {
      id: 'Prophylaxis Adult',
      valor: 12,
    },

    {
      id: 'Periodic Oral Evaluation',
      valor: 56,
    },
    {
      id: 'Intraoral Periapical First Film',
      valor: 3,
    },
    {
      id: 'Panoramic Film',
      valor: 33,
    },
    {
      id: 'Local Del of Chemo into Diseas Crev Tiss',
      valor: 33,
    },
    {
      id: 'Comprehensive Oral Evaluation',
      valor: 33,
    },
    {
      id: 'Periodontal Scaling and Root Planing',
      valor: 33,
    },
    {
      id: 'Core Buildup, Including any Pins',
      valor: 5,
    },
  ].map((datum) => ({
    ...datum,
    color: getRandomColor(),
  }));
  const getBarColor = (bar: any) => bar.data.color;

  return (
    <>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        margin="22px 25px 18px"
      >
        <Title5>Provider Service</Title5>
      </Flex>
      <Flex
        justifyContent="space-between"
        width="100%"
        height="350px"
        heightT="100%"
        flexDirection="column"
      >
        <ResponsiveBar
          data={data}
          keys={['valor']}
          layout={'horizontal'}
          colors={getBarColor}
          padding={0.7}
          margin={{ top: 0, right: 30, bottom: 50, left: 250 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          labelTextColor={{ from: 'red', modifiers: [['darker', 1.6]] }}
          borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
          enableLabel={false}
          enableGridY={true}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </Flex>
    </>
  );
};

export default ProviderAnalytcisServices;
