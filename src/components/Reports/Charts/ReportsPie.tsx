import React from 'react';

import { ResponsivePie } from '@nivo/pie';

type Props = {
  data?: any;
};
const ReportsPie = ({ data }: Props) => (
  <ResponsivePie
    data={data}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    activeOuterRadiusOffset={8}
    borderWidth={2}
    borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={23}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabel={function (e) {
      return `${e.value}`;
    }}
    arcLabelsSkipAngle={7}
    arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
    defs={[
      {
        id: 'dots',
        type: 'patternDots',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: 'lines',
        type: 'patternLines',
        background: 'inherit',
        color: 'rgba(255, 255, 255, 0.3)',
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: 'ruby',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'c',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'go',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'python',
        },
        id: 'dots',
      },
      {
        match: {
          id: 'scala',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'lisp',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'elixir',
        },
        id: 'lines',
      },
      {
        match: {
          id: 'javascript',
        },
        id: 'lines',
      },
    ]}
    legends={[]}
  />
);

export default ReportsPie;
