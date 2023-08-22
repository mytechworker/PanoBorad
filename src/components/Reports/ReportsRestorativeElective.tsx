import React, { useEffect, useState } from 'react';
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Modal } from 'antd';

import {
  Flex,
  ReportsGaugeChart,
  SingleSelect,
  Text,
  Box,
  ReportsBulletChart,
  SpinnerView,
  ReportsSetGoalRestorativeElectiveForm as Form,
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

const ReportsRestorativeElective = ({
  modalStatus,
  pageName,
  setModalStatus,
}: Props) => {
  const promise = usePromise();
  const { data: restorativeData, fetching } = useSelector(
    reportSelector.selectRestorativeState
  );
  const [ptsValue, setPtsValue] = useState('all');
  const [dataType, setDataType] = useState('totall');
  const [DiagnosticData, setDiagnosticData] = useState<BulletChartModel[]>([]);
  const [AcceptanceData, setAcceptanceData] = useState<BulletChartModel[]>([]);
  const [actionLoading, setActionLoading] = useState(false);
  const setting = useSelector(settingSelector.selectData);
  const location = useSelector(appSelector.selectLocationInfo);

  const handleSetGoal = ({ goal, diagnostic_goal, acceptance_goal }: any) => {
    if (!location?.pk || !setting) return;
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
      reportAction.setRestorativeGoal(
        { location_id: location?.pk },
        { goal, diagnostic_goal, acceptance_goal }
      )
    )
      .then(() => {
        setModalStatus(false);
        promise(
          reportAction.getRestorative({
            location_id: location?.pk,
            start_time: startDate,
            end_time: endDate,
          })
        );
      })
      .finally(() => setActionLoading(false));
  };

  useEffect(() => {
    if (!isEmpty(restorativeData) && restorativeData) {
      setDiagnosticData([
        {
          id: 'DiagnosticData',
          title: '',
          ranges: [100],
          measures: [restorativeData.diagnostic_actual, 100],
          markers: [restorativeData.diagnostic_goal],
        },
      ]);
      setAcceptanceData([
        {
          id: 'AcceptanceData',
          title: '',
          ranges: [100],
          measures: [restorativeData.acceptance_actual, 100],
          markers: [restorativeData.acceptance_goal],
        },
      ]);
    }
  }, [restorativeData]);
  return (
    <>
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="300px" />
        </Flex>
      ) : (
        <>
          {isEmpty(restorativeData) ? (
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
                  <ReportsGaugeChart value={restorativeData?.average} />
                  <Box position="absolute" right="0" top="20px">
                    <Text
                      fontSize="20px"
                      weight="bold"
                      color="green2"
                      lineHeight="16px"
                      letterSpacing="0.02em"
                      paddingRight="10px"
                    >
                      ${numeral(restorativeData?.goal).format('0,0')}
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
                    ${numeral(restorativeData?.presented).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    $ Presented
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    ${numeral(restorativeData?.accepted).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    $ Accepted
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {restorativeData?.accepted_percentage}%
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    $ Accepted %
                  </Text>
                </Flex>
              </Flex>
              <Box width="100%" padding="20px 0">
                <ReportsBulletChart
                  title="Diagnostic %"
                  data={DiagnosticData}
                />
              </Box>
              <Box width="100%" padding="20px 0">
                <ReportsBulletChart
                  title="Acceptance %"
                  data={AcceptanceData}
                />
              </Box>
              <Modal
                visible={modalStatus}
                closable={true}
                footer={false}
                centered
                destroyOnClose
                width="552px"
                onCancel={() => setModalStatus(false)}
              >
                <Text weight="700" fontSize="16px" marginBottom="20px">
                  Weekly Production Goal
                </Text>
                <Form
                  onSubmit={handleSetGoal}
                  onCancel={() => setModalStatus(false)}
                  loading={actionLoading}
                  formData={{
                    goal: restorativeData?.goal,
                    diagnostic_goal: restorativeData?.diagnostic_goal,
                    acceptance_goal: restorativeData?.acceptance_goal,
                  }}
                />
              </Modal>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default ReportsRestorativeElective;
