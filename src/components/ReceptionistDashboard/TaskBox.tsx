import React from 'react';
import { TaskBoxWrapper } from '../../pages/ReceptionistDashboard/ReceptionistDashboard.styles';
import { Flex, Box, Text } from 'components';
import { Select, Checkbox } from 'antd';

const { Option } = Select;

const TaskBox = () => {
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }

    function onChange(e: { target: { checked: any; }; }) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <TaskBoxWrapper>
                <Flex justifyContent="space-between" className="dashboard_box flex-1" >
                    <Text weight='700' fontSize="16px" color="#212121">Tasks</Text>
                    <Select defaultValue="Today" style={{ width: 100 }} onChange={handleChange}>
                        <Option value="today">Today</Option>
                        <Option value="tomorrow">Tomorrow</Option>
                        <Option value="this week">This Week</Option>
                        <Option value="this month">This Month</Option>
                    </Select>
                </Flex>
                <div className="checkbox_wrapper">
                    <div style={{ height: 373, overflowY: 'auto', padding: '0 10px' }}>
                        <Checkbox onChange={onChange}>Meeting with Patients</Checkbox>
                        <Checkbox onChange={onChange}>Send Report to Doctor</Checkbox>
                        <Checkbox onChange={onChange}>Speck with Frontdesk</Checkbox>
                        <Checkbox onChange={onChange}>Meeting with Doctor</Checkbox>
                        <Checkbox onChange={onChange}>Meeting with Patients</Checkbox>
                        <Checkbox onChange={onChange}>Send Report to Doctor</Checkbox>
                        <Checkbox onChange={onChange}>Meeting with Patients</Checkbox>
                        <Checkbox onChange={onChange}>Send Report to Doctor</Checkbox>
                        <Checkbox onChange={onChange}>Speck with Frontdesk</Checkbox>
                        <Checkbox onChange={onChange}>Meeting with Doctor</Checkbox>
                        <Checkbox onChange={onChange}>Meeting with Patients</Checkbox>
                        <Checkbox onChange={onChange}>Send Report to Doctor</Checkbox>
                    </div>
                </div>
            </TaskBoxWrapper>
        </>
    )
}

export default TaskBox
