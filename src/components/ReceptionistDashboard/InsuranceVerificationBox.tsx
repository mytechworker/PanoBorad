import React from 'react';
import { AppointmentBoxWrapper } from '../../pages/ReceptionistDashboard/ReceptionistDashboard.styles';
import { Flex, Box, Text, Title3 } from 'components';
import { Select, Avatar, Divider } from 'antd';
import { CalendarOutlined, CarryOutOutlined, CloseCircleOutlined, SettingOutlined } from '@ant-design/icons';

const InsuranceVerificationBox = () => {
    return (
        <>
            <AppointmentBoxWrapper>
                <Flex justifyContent="space-between" className="dashboard_box">
                    <Text weight='700' fontSize="16px" color="#212121">Insurance Verification</Text>
                </Flex>
                <div className="appointments">
                    <div className="unconfirmed appoint_box">
                        <Flex justifyContent='flex-start'>
                            <Avatar style={{ background: 'rgb(252 77 76 / 10%)', marginRight: 16 }} size={46} icon={<CloseCircleOutlined />} />
                            <div className="appoint_content">
                                <h3>324</h3>
                                <p>Pending Insurance</p>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="confirmed appoint_box">
                        <Flex justifyContent='flex-start'>
                            <Avatar style={{ background: 'rgb(62 71 155 / 10%)', marginRight: 16 }} size={46} icon={<CarryOutOutlined />} />
                            <div className="appoint_content">
                                <h3>1450</h3>
                                <p>Completed Insurance</p>
                            </div>
                        </Flex>
                    </div>
                </div>
            </AppointmentBoxWrapper>
        </>
    )
}

export default InsuranceVerificationBox
