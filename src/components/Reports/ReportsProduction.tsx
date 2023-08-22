import React, { useState } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { Modal } from 'antd';

import {
  Flex,
  ReportsBar,
  Box,
  Text,
  SpinnerView,
  ReportsSetGoalProductionForm as Form,
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

const ReportsProduction = ({
  modalStatus,
  pageName,
  setModalStatus,
}: Props) => {
  const promise = usePromise();
  const { data: productionData, fetching } = useSelector(
    reportSelector.selectProductionState
  );
  const [actionLoading, setActionLoading] = useState(false);
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
      reportAction.setProductionGoal({ location_id: location?.pk }, { goal })
    )
      .then(() => {
        setModalStatus(false);
        promise(
          reportAction.getProduction({
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
          {isEmpty(productionData) ? (
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
                <Box>
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(productionData?.goal).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Goal
                  </Text>
                </Box>
                <Box>
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(productionData?.scheduled).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Scheduled
                  </Text>
                </Box>
                <Box>
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(productionData?.gross_production).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Gross Production
                  </Text>
                </Box>
                <Box>
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(productionData?.adjustment).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Adjustment
                  </Text>
                </Box>
                <Box>
                  <Text wieght="700" fontSize="16px" paddingRight="5px">
                    {numeral(productionData?.net_production).format('0,0')}
                  </Text>
                  <Text wieght="600" fontSize="13px" color="gray8">
                    Net Production
                  </Text>
                </Box>
              </Flex>
              {productionData?.chart?.find((item) => item.total > 0) && (
                <ReportsBar
                  data={
                    productionData?.chart
                      ? productionData?.chart?.map((item) => ({
                          ...item,
                          date: moment(item.date).format('DD/MM'),
                        }))
                      : []
                  }
                  keys={['total', 'restorative', 'hygiene', 'uncategorized']}
                  indexBy="date"
                />
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
            goal: productionData?.goal,
          }}
        />
      </Modal>
    </>
  );
};

export default ReportsProduction;
