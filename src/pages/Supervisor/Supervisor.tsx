import React from 'react';
import { SupervisorWrapper, SupervisorContentBox } from './Supervisor.styles';
import { Flex, Text, Box, Button, Title5 } from 'components';
import { PlusOutlined } from '@ant-design/icons';
import { Divider } from 'antd';

const Supervisor = () => {
    return (
        <>
            <SupervisorWrapper>
                <Flex justifyContent="space-between" marginBottom="20px">
                    <Text className="heading_text">Supervisor</Text>
                    <Button><PlusOutlined />  Create a New Correlation</Button>
                </Flex>
                <SupervisorContentBox>
                    <Box className="supervisor_box">
                        <Flex justifyContent="flex-start" paddingTop="16px" paddingBottom="35px" paddingLeft="16px" paddingRight="16px"> 
                            <Flex className="text_circle" background="rgb(44 159 28 / 5%)" >
                                <Text 
                                    fontSize= '18px'
                                    lineHeight= '138%'
                                    align=' center'
                                    color= '#2C9F1C'>Yes,<br /> <span style={{fontWeight:700}}>41%</span><br />More likely</Text>
                            </Flex>
                            <div className="text_box">
                                <h5>Correlation between your best month ever with number of hygiene patients you have had</h5>
                                <Divider />
                                <p>Are visitors who visit “Smile Program - Affordable Dental Care | Best Dental Discount Plans” more likely to click on “SUBMIT APPLICATION”?</p>
                            </div>
                        </Flex>
                        <p className="gray_box_text">180 out of 784 (23%) site visitors who visited Smile Program - Affordable Dental Care | Best Dental Discount Plans also clicked on SUBMIT APPLICATION In comparison, 107 out of 659 (16%) site visitors who didn’t visit Smile Program - Affordable Dental Care | Best Dental Discount Plans clicked on SUBMIT APPLICATION.</p>
                    </Box>
                    <Box className="supervisor_box">
                        <Flex justifyContent="flex-start" paddingTop="16px" paddingBottom="35px" paddingLeft="16px" paddingRight="16px"> 
                            <Flex className="text_circle" background="rgb(225 81 80 / 5%)" >
                                <Text 
                                    fontSize= '18px'
                                    lineHeight= '138%'
                                    align=' center'
                                    color= '#E15150'>No,<br /> <span style={{fontWeight:700}}>37%</span><br />less likely</Text>
                            </Flex>
                            <div className="text_box">
                                <h5>How is Sierraview Dental Care Doing?</h5>
                                <Divider />
                                <p>Revenue is 20% lower because the number of visits have dropped by 15%. Average ticket size of visits are down by 10%. Hygiene is up by 15% compared to last month.</p>
                            </div>
                        </Flex>
                        <p className="gray_box_text">180 out of 784 (23%) site visitors who visited Smile Program - Affordable Dental Care | Best Dental Discount Plans also clicked on SUBMIT APPLICATION In comparison, 107 out of 659 (16%) site visitors who didn’t visit Smile Program - Affordable Dental Care | Best Dental Discount Plans clicked on SUBMIT APPLICATION.</p>
                    </Box>
                </SupervisorContentBox>
            </SupervisorWrapper>
        </>
    )
}

export default Supervisor
