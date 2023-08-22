import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Modal } from 'antd';

import {
  Flex,
  ReportsGaugeChart,
  Text,
  Box,
  ReportsBulletChart,
  SpinnerView,
  ReportsSetGoalNewPatientsForm as Form,
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

const ReportsNewPatients = ({
  modalStatus,
  pageName,
  setModalStatus,
}: Props) => {
  const promise = usePromise();

  const { data: patientsData, fetching } = useSelector(
    reportSelector.selectPatientsState
  );
  const [HygieneData, setHygieneData] = useState<BulletChartModel[]>([]);
  const [AcceptanceData, setAcceptanceData] = useState<BulletChartModel[]>([]);

  const [actionLoading, setActionLoading] = useState(false);
  const setting = useSelector(settingSelector.selectData);
  const location = useSelector(appSelector.selectLocationInfo);

  const handleSetGoal = ({
    goal,
    hygiene_reappointment_goal,
    acceptance_goal,
  }: any) => {
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
      reportAction.setNewPatientsGoal(
        { location_id: location.pk },
        { goal, hygiene_reappointment_goal, acceptance_goal }
      )
    )
      .then(() => {
        setModalStatus(false);
        promise(
          reportAction.getNewPatients({
            location_id: location.pk,
            start_time: startDate,
            end_time: endDate,
          })
        );
      })
      .finally(() => setActionLoading(false));
  };

  useEffect(() => {
    if (!isEmpty(patientsData) && patientsData) {
      setHygieneData([
        {
          id: 'DiagnosticData',
          title: '',
          ranges: [100],
          measures: [patientsData.hygiene_reappointment_actual, 100],
          markers: [patientsData.hygiene_reappointment_goal],
        },
      ]);
      setAcceptanceData([
        {
          id: 'AcceptanceData',
          title: '',
          ranges: [100],
          measures: [patientsData.acceptance_actual, 100],
          markers: [patientsData.acceptance_goal],
        },
      ]);
    }
  }, [patientsData]);
  return (
    <>
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="300px" />
        </Flex>
      ) : (
        <>
          {isEmpty(patientsData) ? (
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
                  <ReportsGaugeChart color="#f89458" />
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
                      lineHeight="16px"
                      letterSpacing="0.02em"
                      paddingRight="10px"
                    >
                      ${numeral(patientsData?.goal).format('0,0')}
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

              <Box
                width="100%"
                borderBottom="1px solid"
                borderColor="gray11"
                padding="20px 0 32px"
              >
                <Text>Active Patients</Text>
                <Flex
                  justifyContent="space-between"
                  width="100%"
                  paddingTop="20px"
                >
                  <Flex flexGap="8px">
                    <Text fontSize="16px">
                      {numeral(patientsData?.new_patient).format('0,0')}
                    </Text>
                    <Text fontSize="10px" color="gray8">
                      New
                    </Text>
                  </Flex>
                  <Flex flexGap="8px">
                    <Text fontSize="16px">
                      {numeral(patientsData?.recaptured).format('0,0')}
                    </Text>
                    <Text fontSize="10px" color="gray8">
                      Recaptured
                    </Text>
                  </Flex>
                  <Flex flexGap="8px">
                    <Text fontSize="16px">
                      {numeral(patientsData?.lost).format('0,0')}
                    </Text>
                    <Text fontSize="10px" color="gray8">
                      Lost
                    </Text>
                  </Flex>
                  <Flex flexGap="8px">
                    <Text fontSize="16px">
                      {numeral(patientsData?.growth).format('0,0')}
                    </Text>
                    <Text fontSize="10px" color="gray8">
                      Growth
                    </Text>
                  </Flex>
                </Flex>
              </Box>

              <Box width="100%" padding="20px 0">
                <ReportsBulletChart
                  title="Hy Re-Appointment %"
                  data={HygieneData}
                />
              </Box>
              <Box width="100%" padding="20px 0">
                <ReportsBulletChart
                  title="Acceptance %"
                  data={AcceptanceData}
                />
              </Box>
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
            goal: patientsData?.goal,
            hygiene_reappointment_goal:
              patientsData?.hygiene_reappointment_goal,
            acceptance_goal: patientsData?.acceptance_goal,
          }}
        />
      </Modal>
    </>
  );
};

export default ReportsNewPatients;
