import React, { useState } from 'react';
import numeral from 'numeral';
import { isEmpty } from 'lodash';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { Modal } from 'antd';

import {
  Flex,
  ReportsGroupBar,
  Box,
  Text,
  SpinnerView,
  ReportsVisitsForm,
} from 'components';
import { appSelector, reportSelector, settingSelector } from 'redux/selectors';

import NoReport from 'assets/images/no-report-item.svg';
import { usePromise } from 'hooks';
import { reportAction } from 'redux/actions';

type Props = {
  modalStatus: boolean;
  pageName: string;
  setModalStatus: (status: boolean) => void;
};

const ReportsVisits = ({ modalStatus, setModalStatus, pageName }: Props) => {
  const promise = usePromise();
  const [actionLoading, setActionLoading] = useState(false);
  const { data: visitData, fetching } = useSelector(
    reportSelector.selectVisitState
  );
  const setting = useSelector(settingSelector.selectData);
  const location = useSelector(appSelector.selectLocationInfo);

  const handleSetGoal = ({ goal }: any) => {
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
      reportAction.setVisitGoal(
        { location_id: location?.pk },
        { appointemnts: { goal } }
      )
    )
      .then(() => {
        setModalStatus(false);
        promise(
          reportAction.getVisit({
            location_id: location?.pk,
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
          {isEmpty(visitData) ? (
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
              height="350px"
              heightT="100%"
              flexDirection="column"
              className="flex-1"
            >
              <Flex justifyContent="space-between" width="100%">
                <Box className="flex-1" align="center">
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(visitData?.appointemnts?.goal).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Goal
                  </Text>
                </Box>
                <Box className="flex-1" align="center">
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(visitData?.appointemnts?.scheduled).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Scheduled
                  </Text>
                </Box>

                <Box className="flex-1" align="center">
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(visitData?.appointemnts?.completed).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Completed
                  </Text>
                </Box>
                <Box className="flex-1" align="center">
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(visitData?.appointemnts?.broken).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Broken
                  </Text>
                </Box>
              </Flex>
              <ReportsGroupBar
                data={visitData?.visits_bar?.map((item, index) => ({
                  ...item,
                  date: moment(item.date).format('DD/MM'),
                }))}
                keys={['hygien', 'restorative', 'uncategorized']}
                indexBy="date"
              />
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
                  Weekly Visits Goal
                </Text>
                <ReportsVisitsForm
                  onSubmit={handleSetGoal}
                  onCancel={() => setModalStatus(false)}
                  loading={actionLoading}
                  goal={visitData?.appointemnts?.goal}
                />
              </Modal>
            </Flex>
          )}
        </>
      )}
    </>
  );
};

export default ReportsVisits;
