import React, { useState } from 'react';
import { Flex, Text, Box } from 'components';
import { 
  Subtitle, 
  Boxwrapper, 
  TableWrapper, 
  Drawerwrap, 
  DrawerContent, 
} from './MorningHuddle.styles';
import { Tabs, Empty, Drawer, Button, Avatar, Badge, Tooltip  } from 'antd';
import { 
  IdcardOutlined, 
  RightOutlined, 
  CalendarOutlined, 
  PhoneOutlined, 
  MailOutlined, 
  FormOutlined, 
  PlusOutlined 
} from '@ant-design/icons';
import './MorningHuddle.css';

import MorningHuddleTable from 'components/MorningHuddle/MorningHuddleTable';
import PatientCardDrawer from 'components/MorningHuddle/PatientCardDrawer';

const { TabPane } = Tabs;

function callback(key:any) {
    console.log(key);
  }

export default class Today extends React.Component {
// const Today = () => {
//     const [visible, setVisible] = useState(false);
//   const showDrawer = () => {
//     setVisible(true);
//   };
//   const onClose = () => {
//     setVisible(false);
//   };
state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
        <>
          <Text 
            color="black"
            weight="bold"
            fontSize="18px"
            margin="0 0 26px 0"
            letterSpacing="0.02em"
        >
            Morning Huddle
        </Text>  
        <Subtitle>
          You have 15 patients coming in. Scheduled production is $2,634, which is <span>$4,070 below goal.</span>
        </Subtitle>
        <Boxwrapper>
          <div className="unsched_box" onClick={this.showDrawer}>
            <h4>Unsched. family members</h4>
            <div className="big_text" style={{color:"#29C3A5"}}>240</div>
          </div>
          <div className="unsched_box" onClick={this.showDrawer}>
            <h4>Unsched. Tx</h4>
            <div className="big_text" style={{color:"#9570E6"}}>$58, 183</div>
            <h5>9 Patients</h5>
          </div>
          <div className="unsched_box" onClick={this.showDrawer}>
            <h4>Past Due AR</h4>
            <div className="big_text" style={{color:"#F86C76"}}>$703</div>
            <h5>2 Patients</h5>
          </div>
          <div className="unsched_box" onClick={this.showDrawer}>
            <h4>Unsched. Hygiene</h4>
            <div className="big_text" style={{color:"#FF9458"}}>14</div>
          </div>
        </Boxwrapper>
        <TableWrapper>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Schedule By Provider" key="1">    
                    <MorningHuddleTable />
                </TabPane>
                <TabPane tab="Schedule By Operatory" key="2">
                    <Empty style={{padding:20}} />
                </TabPane>
            </Tabs>
        </TableWrapper>

        <Drawerwrap>
            <Drawer 
              title="Patients with Unsched. Hygiene" 
              placement="right" 
              onClose={this.onClose}
              visible={this.state.visible}
              width="480px" 
              className="morning_huddle_drawer"
              style={{
                transform: 'translateX(0px)'}}
            >
              <DrawerContent>
                    <ul className="patients_list_wrapper">
                        <li className="patients_list_content">
                            <Flex justifyContent="space-between" >    
                            <div className="patient_name" onClick={this.showChildrenDrawer}>
                                <Avatar size="small" style={{backgroundColor: '#FF9458'}}>AM</Avatar>
                                <b>Ali Manoucheri</b>
                            </div>
                            <span className="blue_badge">Kayvon J</span>
                            </Flex>
                        </li>
                        <li className="patients_list_content">
                            <Flex justifyContent="space-between" >    
                            <div className="patient_name" onClick={this.showChildrenDrawer}>
                                <Avatar size="small" style={{backgroundColor: '#BF69E2'}}>BC</Avatar>
                                <b>Brtiney Chapman</b>
                            </div>
                            <span className="blue_badge">Kayvon J</span>
                            </Flex>
                        </li>
                        <li className="patients_list_content">
                            <Flex justifyContent="space-between" >    
                            <div className="patient_name" onClick={this.showChildrenDrawer}>
                                <Avatar size="small" style={{backgroundColor: '#07A287'}}>AS</Avatar>
                                <b>Ardalan Safi</b>
                            </div>
                            <span className="blue_badge">Kayvon J</span>
                            </Flex>
                        </li>
                        <li className="patients_list_content">
                            <Flex justifyContent="space-between" >    
                            <div className="patient_name" onClick={this.showChildrenDrawer}>
                                <Avatar size="small" style={{backgroundColor: '#F46A6A'}}>FD</Avatar>
                                <b>Fairview Dental</b><span className="np_badge">NP</span>
                            </div>
                            <span className="blue_badge">Kayvon J</span>
                            </Flex>
                        </li>
                    </ul>
              </DrawerContent>
                {/* <Button type="primary" onClick={this.showChildrenDrawer}>
                  Two-level drawer
                </Button> */}
                <Drawer
                  title="Patient Card"
                  width={480}
                  closable={true}
                  onClose={this.onChildrenDrawerClose}
                  visible={this.state.childrenDrawer}
                  className="morning_huddle_inner_drawer"
                >
                  <PatientCardDrawer />
                </Drawer>
            </Drawer>
      </Drawerwrap>

        </>
    )
}
    }

// export default Today
