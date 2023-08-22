import React from 'react';
import numeral from 'numeral';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';

import { Flex, ReportsGaugeChart, Text, SpinnerView, Box } from 'components';
import { reportSelector } from 'redux/selectors';

import NoReport from 'assets/images/no-report-item.svg';

type Props = {};

const ReportsCancellations = ({}: Props) => {
  const { data: cancellationData, fetching } = useSelector(
    reportSelector.selectCancellationState
  );

  return (
    <>
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="300px" />
        </Flex>
      ) : (
        <>
          {isEmpty(cancellationData) ? (
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
              justifyContent="center"
              width="100%"
              height="100%"
              heightT="100%"
              flexDirection="column"
              className="flex-1"
            >
              <Flex
                borderBottom="1px solid"
                borderColor="gray11"
                width="100%"
                padding="28px 0"
              >
                <ReportsGaugeChart
                  type="percent"
                  value={cancellationData?.percentage}
                  color="#34C38F"
                />
              </Flex>
              <Flex
                justifyContent="space-between"
                width="100%"
                paddingTop="20px"
              >
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {numeral(cancellationData?.scheduled).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    Scheduled
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {numeral(cancellationData?.cancelled).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    Cancelled
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {numeral(cancellationData?.uscheduled).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    Unscheduled
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default ReportsCancellations;
