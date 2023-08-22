import React from 'react';
import { TriggersDetailsWrapper, TriggersDetailsContent } from './Triggers.styles';
import { Flex, Text, Box, Button, Title5 } from 'components';
import { Menu, Dropdown, message, Select, Tooltip, Divider } from 'antd';
import { DownOutlined, UserOutlined, MoreOutlined, PlusOutlined, CiOutlined, CheckOutlined, ArrowLeftOutlined, PlusCircleFilled } from '@ant-design/icons';

const TriggersDetails = () => {
    function handleMenuClick(e: any) {
        message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">
                1st menu item
            </Menu.Item>
            <Menu.Item key="2">
                2nd menu item
            </Menu.Item>
            <Menu.Item key="3">
                3rd menu item
            </Menu.Item>
        </Menu>
    );

    const { Option } = Select;

    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    return (
        <>
            <TriggersDetailsWrapper>
                <Flex justifyContent="space-between" marginBottom="20px" flexWrap="wrap">
                    <Text className="heading_text" marginRight="15px">Triggers Details</Text>
                    <div className="trigger_header_btns">
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <Button className="active_btn" marginRight="10px">
                                Active <DownOutlined />
                            </Button>
                        </Dropdown>
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <Button className="active_btn" marginRight="10px">
                                Actions <DownOutlined />
                            </Button>
                        </Dropdown>
                        <Button type="success" icon={<CheckOutlined />}>
                            Save
                        </Button>
                    </div>
                </Flex>
                <TriggersDetailsContent>
                    <Text weight="600" color="#6F7D97" paddingBottom="35px"><ArrowLeftOutlined style={{ marginRight: 10 }} /> #1 (Free Whitening Claim - Add to  A) Free Whitening Claim Nurture - Create Opportunity in New Lead stage - Notify Client)</Text>
                    <Flex justifyContent="space-between" alignItems="flex-start" className="trigger_boxs">
                        <Box className="w50 divider-vertical">
                            <h2>1. What should trigger this rule?</h2>
                            <div className="que_box">
                                <p>Which event should trigger this automation?</p>
                                <Flex justifyContent="flex-start" className="slect_boxs">
                                    <Select defaultValue="Smile Program" style={{ width: '40%', marginRight: 14 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Smile Program">Smile Program</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <Select defaultValue="From Submitted" style={{ width: '60%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="From Submitted">From Submitted</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Flex>
                            </div>
                            <div className="que_box">
                                <p>Define filters</p>
                                <Flex justifyContent="flex-start" className="slect_boxs">
                                    <Select defaultValue="Form Is" style={{ width: '50%', marginRight: 14, color: '#212121' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Form Is">Form Is</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <Select defaultValue="Free Teeth Whitening Claim" style={{ width: '50%', color: '#212121' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Free Teeth Whitening Claim">Free Teeth Whitening Claim</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Flex>
                            </div>
                            <Box align="right" width="100%">
                                <Button type="link" className="add_filtr_btn" icon={<PlusCircleFilled />}>
                                    Add Filter
                                </Button>
                            </Box>
                        </Box>
                        {/* <Divider  /> */}

                        <Box className="w50" >
                            <h2>2. What actions should we perform?</h2>
                            <div className="que_box">
                                <p>What action should we perform?</p>
                                <Flex justifyContent="flex-start" className="slect_boxs">
                                    <Select defaultValue="Smile Program" style={{ width: '40%', marginRight: 14 }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Smile Program">Smile Program</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                    <Select defaultValue="Add To Campaign" style={{ width: '60%' }} onChange={handleChange}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Add To Campaign">Add To Campaign</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Flex>
                                <Select defaultValue="A) Free Teeth Whitening Claim Nurture" className="single_select" style={{ width: '100%',marginTop:20, color: '#212121' }} onChange={handleChange}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="A) Free Teeth Whitening Claim Nurture">A) Free Teeth Whitening Claim Nurture</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </div>
                            <Box align="right" width="100%">
                                <Button type="link" className="add_filtr_btn" icon={<PlusCircleFilled />}>
                                    Add Filter
                                </Button>
                            </Box>
                        </Box>
                    </Flex>
                </TriggersDetailsContent>
            </TriggersDetailsWrapper>
        </>
    )
}

export default TriggersDetails
