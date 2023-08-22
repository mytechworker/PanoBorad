import { ProviderDropdown } from '../../components/MorningHuddle/ProviderDropdown';
import { Table, Avatar, Space } from 'antd';
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Flex } from 'components';
import {
  TableDrawerWrapper,
  DrawerHeader,
  DrawerTable,
} from './TableDrawer.styles';

const MorningHuddleTable = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const dataSource = [
    {
      key: '1',
      name: ['Saman Ghaemmaghami', 'dsd'],
      appointments: 14,
      hours: '8:00',
      scheduled: '$1,750',
      goals: '',
      unschedtx: '$57,483',
  
    },
    {
      key: '2',
      name: 'Mahesh Trevino',
      appointments: 14,
      hours: '8:00',
      scheduled: '$1,750',
      goals: '',
      unschedtx: '$57,483',
  
    },
    {
      key: '3',
      name: 'Victor Erixon',
      appointments: 14,
      hours: '8:00',
      scheduled: '$1,750',
      goals: '',
      unschedtx: '$57,483',
  
    },
    {
      key: '4',
      name: 'Monica Bottger',
      appointments: 14,
      hours: '8:00',
      scheduled: '$1,750',
      goals: '',
      unschedtx: '$57,483',
  
    },
    {
      key: '5',
      name: 'Morganna Flaherty ',
      appointments: 14,
      hours: '8:00',
      scheduled: '$1,750',
      goals: '',
      unschedtx: '$57,483',
  
    },
  ];
  
  const columns = [
    {
      title: <ProviderDropdown />,
      dataIndex: 'name',
      key: 'name',
      render: (name: any) => (
        <div onClick={showDrawer} style={{cursor:'pointer'}}>
          <Avatar style={{ color: '#fff', fontSize: 12 }}>SG</Avatar>
          <span style={{ paddingLeft: 15, fontWeight: 600 }}>{name}</span>
        </div>
      ),
    },
    {
      title: 'Appointments',
      dataIndex: 'appointments',
      key: 'appointments',
    },
    {
      title: 'Hours',
      dataIndex: 'hours',
      key: 'hours',
    },
    {
      title: 'Scheduled',
      dataIndex: 'scheduled',
      key: 'scheduled',
    },
    {
      title: 'Goal',
      key: 'goals',
      dataIndex: 'goals',
      render: (goals: any) => (
        <span>
          <div>$5,504</div>
          <span style={{ color: "#E15150", fontSize: 11 }}>$3,791 below goal</span>
        </span>
      ),
    },
    {
      title: 'Unsched. Tx.',
      dataIndex: 'unschedtx',
      key: 'unschedtx',
    },
  ];
  
  
  // Drawer Table data
  // const { Column, ColumnGroup } = Table;
  
  const pcolumns = [
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      // render: () => (
      //   <span>
      //     <div>9:00AM</div>
      //     <div>10:00AM</div>
      //   </span>
      // ),
    },
    {
      title: 'Patient',
      key: 'patient',
      render: (text: any) => (
        <span className="patient_details">
          <Flex justifyContent="flex-start">
            <Avatar style={{backgroundColor: 'rgb(163, 209, 71)', marginRight:16}}>JB</Avatar>
            <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start"> 
              <div>
                <h3> Jude Bryant </h3>
              </div>
              <span> D0140 </span>
              <span> Last Pano: Ask Patient </span>
              <span> Last FMX: Ask Patient </span>
              <span> Last BWX: 4 months ago </span>
              <span> Not Confirmed </span>
            </Flex>
          </Flex>
        </span>
      ),
    },
    {
      title: 'Unscheduled Treatment',
      dataIndex: 'treatment',
      key: 'treatment',
    },
    {
      title: 'Unscheduled Family',
      dataIndex: 'family',
      key: 'family',
  
    },
    {
      title: 'AR Balance',
      dataIndex: 'balance',
      key: 'balance',
    },
    {
      title: 'Future Hygiene',
      dataIndex: 'hygiene',
      key: 'hygiene',
    },
  ];
  
  
  const data = [
    {
      key: '1',
      time: '9:00AM 10:00AM',
      patient: 'Brown',
      treatment: '$3,221',
      family: 0,
      balance: 0,
      hygiene: 'Not Scheduled',
  
    },
    {
      key: '2',
      time: '10:00AM 11:00AM',
      patient: 'Green',
      treatment: '$4,221',
      family: 0,
      balance: '$3,750',
      hygiene: 'Not Scheduled',
  
    },
    {
      key: '3',
      time: '11:00AM 12:00AM',
      patient: 'Black',
      treatment: '$3,221',
      family: 0,
      balance: '$616',
      hygiene: 'Not Scheduled',
  
    },
    {
      key: '4',
      time: '11:30AM 1:00PM',
      patient: 'Black',
      treatment: '$3,221',
      family: 0,
      balance: '$1432',
      hygiene: 'Not Scheduled',
  
    },
    {
      key: '5',
      time: '1:00PM 2:00PM',
  
    },
    {
      key: '6',
      time: '2:00PM 3:00PM',
      patient: 'Black',
      treatment: '$3,221',
      family: 0,
      balance: '$0',
      hygiene: 'Not Scheduled',
  
    },
    {
      key: '7',
      time: '3:00PM 4:00PM',
  
    },
    {
      key: '8',
      time: '4:00PM 5:20PM',
      patient: 'Black',
      treatment: '$3,221',
      family: 0,
      balance: '$280',
      hygiene: 'Not Scheduled',
  
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
      {/* <Button type="primary" onClick={showDrawer}>
        Open
      </Button> */}
      <TableDrawerWrapper>
        <Drawer
          title="Schedule for: Patient Name"
          placement="right"
          onClose={onClose}
          visible={visible}
          width="1280px"
          className="table-drawer"
          // style={{maxWidth:'1280px'}}
        >
          <DrawerHeader>
            <Flex flexDirection="column">
              <div className="schedule_header">
                <ul>
                  <li>
                    <p>New Patients</p>
                    <h2>1</h2>
                  </li>
                  <li>
                    <p>Appointments</p>
                    <h2>6</h2>
                  </li>
                  <li>
                    <p>Hours</p>
                    <h2>0</h2>
                  </li>
                  <li>
                    <p>Scheduled</p>
                    <h2>$2,652</h2>
                  </li>
                  <li>
                    <p>Goal</p>
                    <h2>$0</h2>
                    <h5> $2,652 above goal </h5>
                  </li>
                  <li>
                    <p>Unsched.Tx.</p>
                    <h2>$16,444</h2>
                  </li>
                </ul>
              </div>

            </Flex>
          </DrawerHeader>
          <DrawerTable>
            <Table dataSource={data} columns={pcolumns} scroll={{ y: 500 }}> 
              {/* <Column title="Time" dataIndex="time" key="time" />
              <Column title="Patient" dataIndex="patient" key="patient" />
              <Column title="Unscheduled Treatment" dataIndex="treatment" key="treatment" />
              <Column title="Unscheduled Family" dataIndex="family" key="family" />
              <Column title="AR Balance" dataIndex="balance" key="balance" />
              <Column title="Future Hygiene" dataIndex="hygiene" key="hygiene " /> */}
            </Table>
          </DrawerTable>
          <Flex justifyContent="space-between" style={{paddingLeft:16,paddingRight:16}}>
              <Button>Previous</Button>
              <Button>Next</Button>
            </Flex>

        </Drawer>
      </TableDrawerWrapper>
    </>
  )
}

export default MorningHuddleTable
