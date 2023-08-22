import React, { useState } from 'react';
import moment from 'moment';
import { Modal, Table, Tag } from 'antd';
import { formatPhoneNumber } from 'helpers';
import { Flex, SingleSelect, Box, Text, Button } from 'components';
import { AppointmentModel } from 'types';

import {
  ButtonCloseWrapper,
  NotificationTableWrapper,
} from '../online-booking.style';
import CloseIcon from 'assets/images/close-icon.svg';

type Props = {
  list: AppointmentModel[];
  count: number;
  current: number;
  loading: boolean;
  pageSize: number;
  onSelect: (item: string) => void;
  changePage: (item: number) => void;
  openApptModal: (item: number, item2: number) => void;
};

const NotificationTable = ({
  list,
  count,
  current,
  loading,
  pageSize,
  onSelect,
  changePage,
  openApptModal,
}: Props) => {
  const [openErrorModal, setopenErrorModal] = useState(false);
  const [errorText, setErrorText] = useState('');
  const onOpenErrorModal = (text: string) => {
    setopenErrorModal(true);
    setErrorText(text);
  };
  const pageSizeOptions = [
    {
      key: '10',
      title: '10',
    },
    {
      key: '25',
      title: '25',
    },
    {
      key: '50',
      title: '50',
    },
    {
      key: '100',
      title: '100',
    },
  ];
  const columns = [
    {
      title: 'Patient’s Name',
      dataIndex: 'full_name',
      key: 'full_name',
      render: (_: any, item: any) => (
        <div style={{ color: '#5A8DEE' }}>{item.patient?.full_name}</div>
      ),
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
      render: (_: any, item: any) => <>{item.patient?.date_of_birth}</>,
    },

    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (_: any, item: any) => <>{item.patient?.email}</>,
    },
    {
      title: 'Call',
      dataIndex: 'call',
      key: 'call',
      render: (_: any, item: any) => (
        <>{formatPhoneNumber(item.patient?.phones)}</>
      ),
    },
    {
      title: 'Patient’s Status',
      key: 'patients_status',
      dataIndex: 'patients_status',
      render: (_: any, item: any) => (
        <>
          <Tag color={item.patient?.status === 'ACTIVE' ? 'green' : 'blue'}>
            {item.patient?.status}
          </Tag>
        </>
      ),
    },
    {
      title: 'Appt Created',
      key: 'appt_created',
      dataIndex: 'appt_created',
      render: (_: any, item: any) => (
        <>
          {item?.created_time &&
            moment(new Date(item.created_time)).format('YYYY-MM-DD HH:mm:ss')}
        </>
      ),
    },
    {
      title: 'Appt Starts',
      key: 'appt_starts',
      dataIndex: 'appt_starts',
      render: (_: any, item: any) => (
        <>
          {item.start_time &&
            moment(new Date(item.start_time)).format('YYYY-MM-DD HH:mm:ss')}
        </>
      ),
    },
    {
      title: 'Appt Status',
      dataIndex: 'appt_status',
      key: 'appt_status',
      render: (_: any, item: any) => (
        <>
          <Tag
            color={
              item.booking_status === 'PENDING'
                ? 'yellow'
                : item.booking_status === 'ERROR'
                ? 'red'
                : 'green'
            }
            className="has-cursor"
            onClick={() =>
              item.booking_status === 'PENDING'
                ? openApptModal(item.pk, item.patient_insurance)
                : item.booking_status === 'ERROR'
                ? onOpenErrorModal(item.dentrix_error)
                : null
            }
          >
            {item.booking_status}
          </Tag>
        </>
      ),
    },
  ];

  return (
    <Flex flexDirection="column" position="relative" width="100%">
      <Box width="100%">
        <NotificationTableWrapper
          as={Table}
          rowKey="pk"
          columns={columns}
          dataSource={list}
          pagination={{
            current: current,
            pageSize: pageSize,
            total: count,
            onChange: (current: number) => changePage(current),
            showSizeChanger: false,
          }}
          loading={loading}
        />
      </Box>
      <Flex
        justifyContent="flex-start"
        position="absolute"
        bottom="10px"
        left="5px"
      >
        <SingleSelect
          options={pageSizeOptions}
          selectedItem={pageSize.toString()}
          onSelect={onSelect}
        />
      </Flex>
      <Modal
        visible={openErrorModal}
        closable={true}
        footer={false}
        centered
        onCancel={() => setopenErrorModal(false)}
        destroyOnClose
        width="370px"
      >
        <ButtonCloseWrapper>
          <Box width="320px" height="361px" textAlign="center">
            <Flex
              flexDirection="column"
              justifyContent="space-between"
              flexGap="55px"
            >
              <Box marginTop="15px">
                <img src={CloseIcon} alt="close-icon" />
              </Box>
              <Box marginTop="-48px">
                <Text weight="900" fontSize="16px" color="red2">
                  Oops!
                </Text>
              </Box>
              <Box width="320px">
                <Text weight="600" fontSize="16px">
                  {errorText}
                </Text>
              </Box>
              <Button width="120px" className="bu_c">
                Try again
              </Button>
            </Flex>
          </Box>
        </ButtonCloseWrapper>
      </Modal>
    </Flex>
  );
};
export default NotificationTable;
