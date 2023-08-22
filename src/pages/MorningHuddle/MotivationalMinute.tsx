import React from 'react';
import { Flex, Text,Title4, Title5, Box } from 'components';
import { Subtitle } from './MorningHuddle.styles';

const MotivationalMinute = () => {
    return (
        <>
           <Text
            color="black"
            weight="bold"
            fontSize="18px"
            margin="0 0 26px 0"
            letterSpacing="0.02em"
        >
            Morning Huddle
        </Text>  
        <Subtitle>
            "There is a difference between listening and waiting for your turn to speak." Simon Sinek
        </Subtitle>  
        </>
    )
}

export default MotivationalMinute
