import React from 'react';
import { AppointmentBoxWrapper } from '../../pages/ReceptionistDashboard/ReceptionistDashboard.styles';
import { Flex, Box, Text, Title3 } from 'components';
import { Select, Avatar, Divider } from 'antd';
import { CalendarOutlined, CarryOutOutlined, CloseCircleOutlined, SettingOutlined } from '@ant-design/icons';

const { Option } = Select;

const AppointmentBox = () => {
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <AppointmentBoxWrapper>
                <Flex justifyContent="space-between" className="dashboard_box">
                    <Text weight='700' fontSize="16px" color="#212121">Appointments</Text>
                    <Select defaultValue="Today" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="today">Today</Option>
                        <Option value="tomorrow">Tomorrow</Option>
                        <Option value="this week">This Week</Option>
                        <Option value="this month">This Month</Option>
                    </Select>
                </Flex>
                <div className="appointments">
                    <div className="booked appoint_box">
                        <Flex justifyContent='flex-start'>
                            <Avatar style={{ background: 'rgb(7 162 135 / 10%)', marginRight:16 }} size={46} icon={<CalendarOutlined />} />
                            <div className="appoint_content">
                                <h3>514</h3>
                                <p>Booked Appointments</p>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="confirmed appoint_box">
                        <Flex justifyContent='flex-start'>
                            <Avatar style={{ background: 'rgb(62 71 155 / 10%)', marginRight:16 }} size={46} icon={<CarryOutOutlined />} />
                            <div className="appoint_content">
                                <h3>1055</h3>
                                <p>Confirmed Appointments</p>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="unconfirmed appoint_box">
                        <Flex justifyContent='flex-start'>
                            <Avatar style={{ background: 'rgb(252 77 76 / 10%)', marginRight:16 }} size={46} icon={<CloseCircleOutlined />} />
                            <div className="appoint_content">
                                <h3>144</h3>
                                <p>Unconfirmed Appointments</p>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="expected appoint_box">
                        <Flex justifyContent='flex-start'>
                            <Avatar style={{ background: 'rgb(254 177 97 / 10%)', marginRight:16 }} size={46} icon={<SettingOutlined />} />
                            <div className="appoint_content">
                                <h3>56.3%</h3>
                                <p>Expected Producation</p>
                            </div>
                        </Flex>
                    </div>
                </div>
            </AppointmentBoxWrapper>
        </>
    )
}

export default AppointmentBox
