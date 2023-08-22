import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import numeral from 'numeral';
import { useSelector } from 'react-redux';

import { Box, Flex, ReportsPie, Grid, Text, SpinnerView } from 'components';
import { reportSelector } from 'redux/selectors';
import { PireChartModel } from 'types';

import NoReport from 'assets/images/no-report-item.svg';

type Props = {};

const ReportsRecare = ({}: Props) => {
  const [pieData, setPieData] = useState<PireChartModel[]>([]);
  const { data: recareData, fetching } = useSelector(
    reportSelector.selectRecareState
  );
  useEffect(() => {
    if (isEmpty(recareData) || !recareData) return;
    const chartData: PireChartModel[] = [
      {
        id: '0 to 6 month',
        label: 'patients 0 to 6 month',
        value: Number(recareData.patients_0_to_6_month),
      },
      {
        id: '6 to 9 month',
        label: 'patients 6 to 9 month',
        value: Number(recareData.patients_6_to_9_month),
      },
      {
        id: '9 to 12 month',
        label: 'patients 9 to 12 month',
        value: Number(recareData.patients_9_to_12_month),
      },
      {
        id: '12 to 18 month',
        label: 'patients 12 to 18 month',
        value: Number(recareData.patients_12_to_18_month),
      },
      {
        id: 'Over 18 month',
        label: 'patients over 18 month',
        value: Number(recareData.patients_over_18_month),
      },
    ];
    setPieData(chartData);
  }, [recareData]);

  return (
    <>
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="300px" />
        </Flex>
      ) : (
        <>
          {isEmpty(recareData) ? (
            <Flex
              width="100%"
              height="100%"
              heightT="100%"
              flexDirection="column"
              className="flex-1"
            >
              <Box as="img" src={NoReport} width="100%" alt="no-report" />
            </Flex>
          ) : (
            <Flex
              justifyContent="space-between"
              width="100%"
              height="100%"
              className="flex-1"
            >
              <ReportsPie data={pieData} />
              <Grid minWidth="243px" gridGap="10px">
                {pieData?.map((item) => (
                  <Flex key={item.id}>
                    <Text paddingRight="10px" fontSize="16px">
                      {numeral(item.value).format('0,0')}
                    </Text>
                    <Text
                      className="flex-1"
                      color="gray8"
                      fontSize="11px"
                      transform="capitalize"
                    >
                      {item.label}
                    </Text>
                  </Flex>
                ))}
              </Grid>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default ReportsRecare;
