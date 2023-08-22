import React, { useState } from 'react';
import numeral from 'numeral';
import { Modal } from 'antd';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';

import {
  Flex,
  ReportsGaugeChart,
  Text,
  SpinnerView,
  Box,
  ReportsSetGoalHygieneReAppointmentForm as Form,
} from 'components';
import { appSelector, reportSelector, settingSelector } from 'redux/selectors';
import { usePromise } from 'hooks';
import { reportAction } from 'redux/actions';

import NoReport from 'assets/images/no-report-item.svg';

type Props = {
  modalStatus: boolean;
  pageName: string;
  setModalStatus: (status: boolean) => void;
};

const HygieneReAppointment = ({
  modalStatus,
  pageName,
  setModalStatus,
}: Props) => {
  const promise = usePromise();

  const { data: reappointmentData, fetching } = useSelector(
    reportSelector.selectReappointmentState
  );

  const [actionLoading, setActionLoading] = useState(false);
  const setting = useSelector(settingSelector.selectData);
  const location = useSelector(appSelector.selectLocationInfo);

  const handleSetGoal = ({ goal }: any) => {
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
      reportAction.setHygieneReappointmentGoal(
        { location_id: location.pk },
        { goal }
      )
    )
      .then(() => {
        setModalStatus(false);
        promise(
          reportAction.getHygieneReappointment({
            location_id: location.pk,
            start_time: startDate,
            end_time: endDate,
          })
        );
      })
      .finally(() => setActionLoading(false));
  };

  return (
    <>
      {fetching ? (
        <Flex width="100%" height="100%">
          <SpinnerView height="300px" />
        </Flex>
      ) : (
        <>
          {isEmpty(reappointmentData) ? (
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
                    value={reappointmentData?.hygiene_reappointment}
                    color="#F46A6A"
                  />
                  <Box position="absolute" right="0" top="20px">
                    <Text
                      fontSize="20px"
                      weight="bold"
                      color="green2"
                      lineHeight="16px"
                      letterSpacing="0.02em"
                      paddingRight="10px"
                    >
                      ${numeral(reappointmentData?.goal).format('0,0')}
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
                paddingTop="20px"
              >
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {numeral(reappointmentData?.visits).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    Visits
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {numeral(reappointmentData?.reappointment).format('0,0')}
                  </Text>
                  <Text fontSize="10px" color="gray8">
                    Re-Aoointed
                  </Text>
                </Flex>
                <Flex flexGap="8px">
                  <Text fontSize="16px">
                    {numeral(reappointmentData?.unscheduled).format('0,0')}
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
          Weekly Hygiene ReAppointment Goal
        </Text>
        <Form
          onSubmit={handleSetGoal}
          onCancel={() => setModalStatus(false)}
          loading={actionLoading}
          formData={{
            goal: reappointmentData?.goal,
          }}
        />
      </Modal>
    </>
  );
};

export default HygieneReAppointment;
