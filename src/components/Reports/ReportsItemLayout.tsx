import React, { useState, useEffect, useMemo } from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Menu, Dropdown } from 'antd';

import {
  Box,
  ReportsRecare,
  Flex,
  Text,
  ReportsVisits,
  ReportsProduction,
  ReportsNewPatients,
  ReportsRestorativeElective,
  ReportsHygiene,
  ReportsHygieneReAppointment,
  ReportsCancellations,
} from 'components';
import { ArrowUpwardIcon, ArrowDownwardIcon, PinIcon } from 'helpers/icons';
import { settingSelector } from 'redux/selectors';
import { usePromise } from 'hooks';
import { settingAction } from 'redux/actions';

type Props = {
  reportType: string;
  pageName: string;
};
const ReportsItemLayout = ({ reportType, pageName }: Props) => {
  const promise = usePromise();
  const [activeTag, setActiveTag] = useState<boolean>(false);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const settingData = useSelector(settingSelector.selectData);

  const reportItemActions = (
    <Menu>
      <Menu.Item key="profile" onClick={() => setModalStatus(true)}>
        Set Goal
      </Menu.Item>
    </Menu>
  );

  const handleShowName = useMemo(() => {
    switch (reportType) {
      case 'recare':
        return 'Recare';
      case 'visits':
        return 'Visits';
      case 'production':
        return 'Production';
      case 'restorative_elective':
        return 'Restorative/Elective Case';
      case 'hygiene':
        return 'Hygiene Case';
      case 'new_patients':
        return 'New Patients';
      case 'reappointment':
        return 'Hygiene Re-Appointment';
      case 'cancellations':
        return 'Cancellations';
      default:
        return '';
    }
  }, [reportType]);

  useEffect(() => {
    settingData &&
      settingData?.main_dashboard?.filterInfo?.charts.includes(reportType) &&
      setActiveTag(true);
  }, [reportType, settingData]);

  const handleToggleDashboardItem = (type: string) => {
    if (activeTag)
      return promise(
        settingAction.update({
          main_dashboard: {
            ...settingData?.main_dashboard,
            filterInfo: {
              ...settingData?.main_dashboard?.filterInfo,
              charts: settingData?.main_dashboard?.filterInfo?.charts.filter(
                (item) => item !== type
              ),
            },
          },
        })
      ).then(() => {
        setActiveTag(false);
        promise(settingAction.loadAll());
      });
    const today = moment(new Date()).format('YYYY-MM-DD');
    const newCharts =
      settingData && settingData?.main_dashboard?.filterInfo?.charts.length > 0
        ? [...settingData?.main_dashboard?.filterInfo?.charts, type]
        : [type];

    return promise(
      settingAction.update({
        main_dashboard: {
          filterInfo: {
            charts: newCharts,
            start_date: today,
            end_date: today,
          },
        },
      })
    ).then(() => {
      setActiveTag(false);
      promise(settingAction.loadAll());
    });
  };
  const hasMoreAction = useMemo<boolean>(() => {
    if (reportType === 'recare' || reportType === 'cancellations') return false;
    return true;
  }, [reportType]);

  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      className="designed-scroll"
      height="100%"
      overflowY="hidden !important"
      overflowX="auto !important"
      maxWidthT={reportType !== 'production' && '630px'}
      flexGap="20px"
    >
      <Flex justifyContent="space-between" width="100%">
        <Flex justifyContent="space-between">
          <Text paddingRight="7px">{handleShowName}</Text>
          <Box
            onClick={() => handleToggleDashboardItem(reportType)}
            height="24px"
          >
            <PinIcon color={activeTag && 'blue1'} className="has-cursor" />
          </Box>
        </Flex>
        {/* <ArrowUpwardIcon /> */}
        {/* <ArrowDownwardIcon /> */}
        {hasMoreAction && (
          <Dropdown overlay={reportItemActions} className="has-cursor">
            <Text as={MoreOutlined} fontSize="15px" className="has-cursor" />
          </Dropdown>
        )}
      </Flex>

      {reportType === 'recare' && <ReportsRecare />}
      {reportType === 'cancellations' && <ReportsCancellations />}
      {reportType === 'visits' && (
        <ReportsVisits
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          pageName={pageName}
        />
      )}
      {reportType === 'production' && (
        <ReportsProduction
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          pageName={pageName}
        />
      )}
      {reportType === 'restorative_elective' && (
        <ReportsRestorativeElective
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          pageName={pageName}
        />
      )}
      {reportType === 'hygiene' && (
        <ReportsHygiene
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          pageName={pageName}
        />
      )}
      {reportType === 'new_patients' && (
        <ReportsNewPatients
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          pageName={pageName}
        />
      )}
      {reportType === 'reappointment' && (
        <ReportsHygieneReAppointment
          modalStatus={modalStatus}
          setModalStatus={setModalStatus}
          pageName={pageName}
        />
      )}
    </Flex>
  );
};

export default ReportsItemLayout;
