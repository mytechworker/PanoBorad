import React from 'react';
import { ShowUpBoxWrapper } from '../../pages/ReceptionistDashboard/ReceptionistDashboard.styles';
import { Flex, Box, Text, Title3 } from 'components';
import { Select, Avatar, Radio } from 'antd';
import { CalendarOutlined, CarryOutOutlined, CloseCircleOutlined, SettingOutlined } from '@ant-design/icons';
import ShowUpsGraph from './ShowUpsGraph';

const { Option } = Select;

const ShowUpsBox = () => {
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
            <ShowUpBoxWrapper>
                <Flex justifyContent="space-between" className="dashboard_box">
                    <Text weight='700' fontSize="16px" color="#212121">Show ups VS Scheduled</Text>
                </Flex>
                <ShowUpsGraph />
            </ShowUpBoxWrapper>
        </>
    )
}

export default ShowUpsBox
