import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';

import {
  Flex,
  ReportsGaugeChart,
  SingleSelect,
  Text,
  Box,
  ReportsBulletChart,
  SpinnerView,
  ReportsSetGoalHygieneForm as Form,
} from 'components';
import { appSelector, reportSelector, settingSelector } from 'redux/selectors';
import { BulletChartModel } from 'types';
import { usePromise } from 'hooks';
import { reportAction } from 'redux/actions';

import NoReport from 'assets/images/no-report-item.svg';

type Props = {
  modalStatus: boolean;
  pageName: string;
  setModalStatus: (status: boolean) => void;
};

const ReportsHygiene = ({ modalStatus, pageName, setModalStatus }: Props) => {
  const promise = usePromise();
  const { data: hygieneData, fetching } = useSelector(
    reportSelector.selectHygieneState
  );
  const [ptsValue, setPtsValue] = useState('all');
  const [dataType, setDataType] = useState('totall');
  const [DiagnosticData, setDiagnosticData] = useState<BulletChartModel[]>([]);
  const [AcceptanceData, setAcceptanceData] = useState<BulletChartModel[]>([]);
  const [actionLoading, setActionLoading] = useState(false);
  const setting = useSelector(settingSelector.selectData);
  const location = useSelector(appSelector.selectLocationInfo);

  const handleSetGoal = ({ goal, diagnostic_goal, acceptance_goal }: any) => {
    if (!location || !setting) return;
    setActionLoading(true);
    const { report_dashboard, main_dashboard } = setting;
    const startDate =
      pageName === 'report'
        ? report_dashboard.filterInfo.start_date
        : main_dashboard.filterInfo.start_date;
    const endDate =
      pageName === 'report'
        ? report_dashboard.filterInfo.end_date
        : main_dashboard.filterInfo.end_date;
    return promise(
      reportAction.setHygieneGoal(
        { location_id: location.pk },
        { goal, diagnostic_goal, acceptance_goal }
      )
    )
      .then(() => {
        setModalStatus(false);
        promise(
          reportAction.getHygiene({
            location_id: location.pk,
            start_time: startDate,
            end_time: endDate,
          })
        );
      })
      .finally(() => setActionLoading(false));
  };

  useEffect(() => {
    if (!isEmpty(hygieneData) && hygieneData) {
      setDiagnosticData([
        {
          id: 'DiagnosticData',
          title: '',
          ranges: [100],
          measures: [hygieneData.diagnostic_actual, 100],
          markers: [hygieneData.diagnostic_goal],
        },
      ]);
      setAcceptanceData([
        {
          id: 'AcceptanceData',
          title: '',
          ranges: [100],
          measures: [hygieneData.acceptance_actual, 100],
          markers: [hygieneData.acceptance_goal],
        },
      ]);
    }
  }, [hygieneData]);
  return (
    <>
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="300px" />
        </Flex>
      ) : (
        <>
          {isEmpty(hygieneData) ? (
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
                <Box position="relative" padding="0 60px">
                  <ReportsGaugeChart
                    value={hygieneData?.average}
                    color="#BF69E2"
                  />
                  <Box
                    position="absolute"
                    right="0"
                    top="20px"
                    onClick={() => setModalStatus(true)}
                    className="has-cursor"
                  >
                    <Text
                      fontSize="20px"
                      weight="bold"
                      color="green2"
                      lineHeight="25px"
                      letterSpacing="0.02em"
                      paddingRight="10px"
                    >
                      ${numeral(hygieneData?.goal).format('0,0')}
                    </Text>
                    <Text
                      fontSize="13px"
                      weight="600"
                      color="green2"
                      lineHeight="16px"
                      letterSpacing="0.02em"
                    >
                      Goal
                    </Text>
                  </Box>
                </Box>
              </Flex>

              <Flex
                justifyContent="space-between"
                width="100%"
                padding="20px 0 0"
                display="none"
              >
                <SingleSelect
                  options={[
                    { title: 'All PTs', key: 'all' },
                    { title: 'Acpt.PTs', key: 'acpt' },
                  ]}
                  selectedItem={ptsValue}
                  onSelect={setPtsValue}
                />
                <SingleSelect
                  options={[
                    { title: 'Total $', key: 'totall' },
                    { title: 'AVG. $', key: 'average' },
                  ]}
                  selectedItem={dataType}
                  onSelect={setDataType}
                />
              </Flex>
              <Flex
                justifyContent="space-between"
                width="100%"
                padding="32px 0"
                borderBottom="1px solid"
                borderColor="gray11"
              >
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    ${numeral(hygieneData?.presented).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    $ Presented
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    ${numeral(hygieneData?.accepted).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    $ Accepted
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {hygieneData?.accepted_percentage}%
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    $ Accepted %
                  </Text>
                </Flex>
              </Flex>
              {DiagnosticData && (
                <Box width="100%" padding="20px 0">
                  <ReportsBulletChart
                    title="Diagnostic %"
                    data={DiagnosticData}
                  />
                </Box>
              )}

              {AcceptanceData && (
                <Box width="100%" padding="20px 0">
                  <ReportsBulletChart
                    title="Acceptance %"
                    data={AcceptanceData}
                  />
                </Box>
              )}
            </Flex>
          )}
        </>
      )}
      <Modal
        visible={modalStatus}
        closable={true}
        footer={false}
        centered
        destroyOnClose
        width="400px"
        onCancel={() => setModalStatus(false)}
      >
        <Text weight="700" fontSize="16px" marginBottom="20px">
          Weekly Hygiene Goal
        </Text>
        <Form
          onSubmit={handleSetGoal}
          onCancel={() => setModalStatus(false)}
          loading={actionLoading}
          formData={{
            goal: hygieneData?.goal,
            diagnostic_goal: hygieneData?.diagnostic_goal,
            acceptance_goal: hygieneData?.acceptance_goal,
          }}
        />
      </Modal>
    </>
  );
};

export default ReportsHygiene;
