import React from 'react';
import { TriggersWrapper, TriggersContent } from './Triggers.styles';
import { Flex, Text, Box, Button, Title5 } from 'components';
import { Menu, Dropdown, message, Space, Tooltip, Divider } from 'antd';
import { DownOutlined, UserOutlined, MoreOutlined, PlusOutlined } from '@ant-design/icons';
import DuplicateIcon from 'components/Triggers/DuplicateIcon';
import EditIcon from 'components/Triggers/EditIcon';
import DeleteIcon from 'components/Triggers/DeleteIcon';
import AddTriggerModal from 'components/Triggers/AddTriggerModal';
import { Redirect } from 'react-router'


const Triggers = (props:any) => {
    function handleMenuClick(data: any) {
        //  message.info('Click on menu item.');
         if (data=='EDIT') {
            props.history.push("/triggers-details")
         }
        console.log('click', data);
        // <Redirect to="/triggers-details" />
      
    }
const handleOk = () => {
    props.history.push("/triggers-details")
}
    const menu = (
        <Menu >
            <Menu.Item key="1" icon={<DuplicateIcon />} style={{ color: '#62C948', fontWeight: 600 }}>
                Duplicate
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>{handleMenuClick('EDIT')}} icon={<EditIcon />} style={{ color: '#5A8DEE', fontWeight: 600 }}>
                Edit
            </Menu.Item>
            <Menu.Item key="3" icon={<DeleteIcon />} style={{ color: '#E15150', fontWeight: 600 }}>
                Delete
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <TriggersWrapper>
                <Flex justifyContent="space-between" marginBottom="20px">
                    <Text className="heading_text" >Triggers</Text>
                    <div className="trigger_header_btns">
                        <Button marginRight="15px"><PlusOutlined />  New Folder</Button>
                        {/* <Button><PlusOutlined />  Add Trigger</Button> */}
                        <AddTriggerModal handleOk={handleOk}/>
                    </div>
                </Flex>
                <TriggersContent>
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#1 (Free Whitening Claim - Add to A) Free Whitening Claim Nurture - Create Opportunity in New Lead stage - Notify Client)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#2 (YOUR OFFER Claim Nurture Reply - Move opportunity to Hot Lead stage - Notify Client)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow overlayStyle={{background:'rgba(90, 141, 238, 0.2)'}}>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#3 (Appointment Status is No Show - Add to No Show Nurture Campaign)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#4 (No Show Nurture Campaign reply - Move to Hot Leads in YOUR PROMOTION Pipeline - Notify Client)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#5 (No booking & no reply in A) YOUR OFFER Claim Nurture - Tag - Change status to Abandoned)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#6 (New Booking Request - Move to Booking Requested pipeline stage - Notify Client - Add to Booking Request Reply Campaign))</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#7 (Appointment Status Confirmed - Add to Appointment Reminders campaign - Move Opportunity to Booking Confirmed Pipeline Stage)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">#8 (Opportunity moved to Services Sold stage - Update Opportunity Status to Won)</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">Homepage to pipeline</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="draft_btn">
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn">
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                    <div className="trigger_box">
                        <Flex justifyContent="space-between">
                            <p className="blue_text">Messaging NP No Shows</p>
                            <div className="dropdown_wrapper">
                                <Dropdown overlay={menu} placement="bottomRight" arrow >
                                    <Button className="draft_btn" >
                                        Draft <DownOutlined />
                                    </Button>
                                </Dropdown>
                                <Dropdown overlay={menu} placement="bottomRight" arrow>
                                    <Button className="more_btn" >
                                        <MoreOutlined />
                                    </Button>
                                </Dropdown>
                            </div>
                        </Flex>
                    </div>
                    <Divider />
                </TriggersContent>
            </TriggersWrapper>
        </>
    )
}

export default Triggers
