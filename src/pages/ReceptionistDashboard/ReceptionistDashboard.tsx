import TaskBox from 'components/ReceptionistDashboard/TaskBox';
import React from 'react';
import { useState } from 'react';
import { DashboardWrapper, VisitsBoxWrapper } from './ReceptionistDashboard.styles';
import { Flex, Box, Text } from 'components';
import AppointmentBox from 'components/ReceptionistDashboard/AppointmentBox';
import InsuranceVerificationBox from 'components/ReceptionistDashboard/InsuranceVerificationBox';
import VisitsBox from 'components/ReceptionistDashboard/VisitsBox';
import ProductionBox from 'components/ReceptionistDashboard/ProductionBox';
import ShowUpsBox from 'components/ReceptionistDashboard/ShowUpsBox';

const ReceptionistDashboard = () => {
    return (
        <>
            <DashboardWrapper>
                <Flex justifyContent='flex-start' alignItems='flex-start' flexGap="20px" flexWrap='wrap'>
                    <TaskBox />
                    <AppointmentBox />
                    <InsuranceVerificationBox />
                    <VisitsBox />
                    <ProductionBox />
                    <ShowUpsBox />
                </Flex>
            </DashboardWrapper>
        </>
    )
}

export default ReceptionistDashboard
