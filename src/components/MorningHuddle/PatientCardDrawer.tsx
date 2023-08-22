import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Box } from 'components';
import { Tabs, Select, Drawer, Button, Avatar, Badge, Tooltip, Divider, Skeleton, Card, Timeline } from 'antd';
import {
    IdcardOutlined,
    RightOutlined,
    CalendarOutlined,
    PhoneOutlined,
    MailOutlined,
    FormOutlined,
    PlusOutlined,
    CalendarFilled,
    CarryOutFilled,
    ScheduleFilled,
    DollarCircleFilled,
    PayCircleFilled,
    PropertySafetyFilled
} from '@ant-design/icons';
import FilterTreeSelect from './FilterTreeSelect';

const { TabPane } = Tabs;

function callback(key: any) {
    console.log(key);
}

const { Option, OptGroup } = Select;

function handleChange(value: any) {
    console.log(`selected ${value}`);
}

export const PatientDrawer = styled.div`
.pcard_header_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 50px 16px;
    background-color: #007eff !important;
    color: #fff !important;
}
.pcard_header {
    padding: 0px 16px 0px 16px;
    display: flex;
    align-items: center;
    
    b {
        font-size:16px;
        font-weight: 800;
    }
    .avtar_wrapper {
        position:relative;
        
        .avtar_badge {
            background-color: #8bd300;
            border-radius: 50%;
            border: 1px solid #007eff;
            font-size: 13px;
            height: 18px;
            left: -11px;
            position: absolute;
            text-align: center;
            top: 1px;
            width: 18px;
            color: #fff;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}

.contact_button_holder {
        box-shadow: 0 0.175em 0.5em #0208141a, 0 0.085em 0.175em #02081414;
        margin-top: -30px;
        margin-bottom: 6px;
        max-width: 80%;
        min-height: 40px;
        border-radius: 4px;
        position: relative;
        padding:8px;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;

        button {
            padding: 0;
            min-width: 0;
            width: 40px;
            height: 40px;
            flex-shrink: 0;
            line-height: 40px;
            border-radius: 50%;
            user-select: none;
            cursor: pointer;
            outline: none;
            border: none;
        }
}
`;
export const TabGroup = styled.div`
.ant-tabs-tab {
    padding-right: 20px;
    padding-left: 20px;
    // color: rgba(0,0,0,.87);
    font-size: .875rem;
    font-weight: 700;
}

.patient_suggetion {
    color: #212529;
    .sugg_title {
        background-color: #f7f7f7!important;
        font-size: 16px;
        padding: 15px;
    }
    .sugg_text {
        padding:15px;
        font-size: 16px;
    }
}

.stats_tab_content{
    padding-top: 1.5rem!important;
    .ant-card {
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 4px;
    flex-basis: 44%;
    height: 115px;
    margin: 8px 2% 24px;
    position: relative;
    transition: all .4s;
    cursor:pointer;

    &:hover {
        transform: scale(1.1);
        z-index: 1;
        box-shadow: 0 2px 20px 0 rgb(27 36 49 / 54%);
    }
    .ant-card-body {
        padding:0 !important;
    }

    .patient_circle {
        
        left: 50%;
        margin-left: -15px;
        position: absolute;
        top: -25px;

        .icon_circle {
            border-radius: 50%;
            color: #fff;
            font-size: 15px;
            height: 32px;
            line-height: 32px;
            margin: 8px auto 3px;
            text-align: center;
            width: 32px;
        }
    }
    .patient_info {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        text-align:center;
        .subtitle {
            font-size: 1.125rem;
            color: #000;
            margin-bottom: 0px;
        }
        h3 {
            font-size: 1.125rem;
            font-weight: 800;
            letter-spacing: -.8px;
            margin-bottom: 0px;
        }
    }
    }
}

.family_content {
    .pcard_header {   
        font-size: 1.125rem;
        line-height: 1.2;     
        b {
            font-size: 1.125rem;
        }
}

.activity_content {
    // background: #f7f7f7;
}


`;
export const TimelineWrapper = styled.div`
.ant-timeline {
    .ant-timeline-item {
        .timeline_text {
            box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
            padding: 16px;
            border-radius: 4px;
            background: #f7f7f7;
            color: rgba(0,0,0,.87);
        }
        .timeline_date {
            padding-bottom: 1rem;
            text-align:center;
        }
    }
}

`;


const PatientCardDrawer = () => {
    return (
        <>
            <PatientDrawer>
                <div className="pcard_header_wrapper">
                    <div className="pcard_header">
                        <div className="avtar_wrapper">
                            <span className="avtar_badge">G</span>
                            <Avatar size="large" style={{ backgroundColor: '#FF9458' }}>AM</Avatar>
                        </div>
                        <Box marginLeft="16px" style={{ color: '#fff' }}>
                            <b>Ali Manoucheri <IdcardOutlined /></b>
                            <div> Active | Female | Age: 73 | DOB: 12/8/1947 </div>
                            <div> Patient ID: 532 </div>
                        </Box>
                    </div>
                    <RightOutlined />
                </div>

                <div className="contact_button_holder">
                    <Flex alignContent="center" justifyContent="space-around" alignItems="center">
                        <Tooltip title="Schedule">
                            <button><CalendarOutlined /></button>
                        </Tooltip>
                        <Tooltip title="Call">
                            <button><PhoneOutlined /></button>
                        </Tooltip>
                        <Tooltip title="Send Email">
                            <button><MailOutlined /></button>
                        </Tooltip>
                        <Tooltip title="Add a Note">
                            <button><FormOutlined /></button>
                        </Tooltip>
                        <Tooltip title="Create Follow Up">
                            <button><PlusOutlined /></button>
                        </Tooltip>
                    </Flex>
                </div>

                <TabGroup>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Tasks" key="1">
                            <div className="patient_suggetion">
                                <div style={{ padding: 10 }}><Skeleton /></div>
                                <p className="sugg_title">di. Suggestions</p>
                                <div className="sugg_text">
                                    <div>Let's get Jorge, patient_name scheduled for their next Hygiene appointment</div>
                                    <Divider />
                                    <div>Try to collect the outstanding balance of $3,486</div>
                                    <Divider />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="Stats" key="2">
                            <div className="stats_tab_content">
                                <Flex flexWrap="wrap">
                                    <Card>
                                        <div className="patient_circle">
                                            <Flex className="icon_circle" style={{ backgroundColor: '#007bff' }}> <CalendarFilled /> </Flex>
                                        </div>
                                        <div className="patient_info">
                                            <p className="subtitle">Last Visit</p>
                                            <h3>9/15/2021</h3>
                                            <p className="subtitle">Type: Restorative</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="patient_circle">
                                            <Flex className="icon_circle" style={{ backgroundColor: '#65bb6a' }}> <CarryOutFilled /> </Flex>
                                        </div>
                                        <div className="patient_info">
                                            <p className="subtitle">Next Visit</p>
                                            <h3>10/06/2021</h3>
                                            <p className="subtitle">Type: Restorative</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="patient_circle">
                                            <Flex className="icon_circle" style={{ backgroundColor: '#4930b5' }}> <ScheduleFilled /> </Flex>
                                        </div>
                                        <div className="patient_info">
                                            <p className="subtitle">Hygiene Due</p>
                                            <h3>-</h3>
                                            <p className="subtitle">Unscheduled</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="patient_circle">
                                            <Flex className="icon_circle" style={{ backgroundColor: '#e04e4f' }}> <DollarCircleFilled /> </Flex>
                                        </div>
                                        <div className="patient_info">
                                            <p className="subtitle">AR Balance</p>
                                            <h3 color="red">$3,486</h3>
                                            <p className="subtitle">Unscheduled</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="patient_circle">
                                            <Flex className="icon_circle" style={{ backgroundColor: '#ff8200' }}> <PayCircleFilled /> </Flex>
                                        </div>
                                        <div className="patient_info">
                                            <p className="subtitle">Remaining Insurance</p>
                                            <h3 color="#e6525a"> $0 </h3>
                                            <p className="subtitle">UNITED CONCORDIA</p>
                                        </div>
                                    </Card>
                                    <Card>
                                        <div className="patient_circle">
                                            <Flex className="icon_circle" style={{ backgroundColor: '#6ce4b3' }}> <PropertySafetyFilled /> </Flex>
                                        </div>
                                        <div className="patient_info">
                                            <p className="subtitle">Treatment Plan</p>
                                            <h3 color="#e6525a">$7,799</h3>
                                            <p className="subtitle"></p>
                                        </div>
                                    </Card>
                                </Flex>
                            </div>
                        </TabPane>
                        <TabPane tab="Family" key="3">
                            <div className="family_content">
                                <Flex justifyContent="space-between" padding="8px 16px 16px 16px">
                                    <div className="pcard_header">
                                        <div className="avtar_wrapper">
                                            <span className="avtar_badge">G</span>
                                            <Avatar style={{ backgroundColor: 'rgb(209, 163, 71)' }}>AM</Avatar>
                                        </div>
                                        <Box marginLeft="16px" style={{ color: '#000' }}>
                                            <b>Ali Manoucheri</b>
                                            <div> Active | Female | Age: 70 | DOB: 13/9/1957 </div>
                                            <div> ID: 533 | <span style={{ color: 'red' }}> Unscheduled </span> </div>
                                        </Box>
                                    </div>
                                    <RightOutlined />
                                </Flex>
                            </div>
                        </TabPane>
                        <TabPane tab="Activity" key="4">
                            <div className="activity_content" style={{ paddingLeft: 16, paddingRight: 16 }}>
                                {/* <Select defaultValue="Filter" style={{ width: "100%"}} onChange={handleChange}>
                                    <OptGroup label="Manager">
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                    </OptGroup>
                                    <OptGroup label="Engineer">
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </OptGroup>
                                </Select> */}
                                <FilterTreeSelect />
                                <TimelineWrapper>
                                    <Timeline style={{ paddingTop: 30 }}>
                                        <Timeline.Item>
                                            <div className="timeline_date"> August 2021</div>
                                            <div className="timeline_text">Create a services site 2015-09-01</div>
                                        </Timeline.Item>

                                        <Timeline.Item>
                                            <div className="timeline_date"> June 2021</div>
                                            <div className="timeline_text">Solve initial network problems 2015-09-01
                                                Note: post op call---pt is feeling okay just in pain--but taking norco -lulu</div>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <div className="timeline_date"> April 2021</div>
                                            <div className="timeline_text">Technical testing 2015-09-01</div>
                                        </Timeline.Item>
                                        <Timeline.Item>
                                            <div className="timeline_date"> March 2021</div>
                                            <div className="timeline_text">Network problems being solved 2015-09-01</div>
                                        </Timeline.Item>
                                    </Timeline>
                                </TimelineWrapper>
                            </div>
                        </TabPane>
                    </Tabs>
                </TabGroup>
            </PatientDrawer>
        </>
    )
}

export default PatientCardDrawer
