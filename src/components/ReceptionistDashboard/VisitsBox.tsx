import React from 'react';
import { VisitsBoxWrapper } from '../../pages/ReceptionistDashboard/ReceptionistDashboard.styles';
import {
    ReportsItemLayout,
    Flex,
    ReportsFilter,
    Box,
    Text,
    Title3,
} from 'components';
import { Select, Avatar, Radio } from 'antd';
import { CalendarOutlined, CarryOutOutlined, CloseCircleOutlined, SettingOutlined } from '@ant-design/icons';
import VisitGraph from './VisitGraph';

const { Option } = Select;


const VisitsBox = () => {
    function handleChange(value: any) {
        console.log(`selected ${value}`);
    }
    const [value, setValue] = React.useState(1);

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };


    return (
        <>
            <VisitsBoxWrapper>
                <Flex justifyContent="space-between" className="dashboard_box" flexWrap="wrap">
                    <Text weight='700' fontSize="16px" color="#212121" paddingRight="15px">Visits</Text>
                    <div>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>Custom</Radio>
                            <Radio value={2}>State</Radio>
                        </Radio.Group>
                        <Select defaultValue="this month" style={{ width: 100 }} onChange={handleChange}>
                            <Option value="today">Today</Option>
                            <Option value="tomorrow">Tomorrow</Option>
                            <Option value="this week">This Week</Option>
                            <Option value="this month">This Month</Option>
                        </Select>
                    </div>
                </Flex>
                <VisitGraph />
            </VisitsBoxWrapper>
        </>
    )
}

export default VisitsBox
