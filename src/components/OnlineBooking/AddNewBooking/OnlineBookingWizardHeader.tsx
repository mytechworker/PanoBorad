import React from 'react';
import { Flex, Text, Box } from 'components';
import Logo from 'assets/images/logo_dental.png';

type Props = {
  sectionTitle: string;
};
const OnlineBookingWizardHeader = ({ sectionTitle }: Props) => {
  return (
    <Flex
      background="primary"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      borderRadius="15px 15px 0px 0px"
    >
      <Text
        color="white"
        weight="bold"
        fontSize="20px"
        margin="33px 34px"
        letterSpacing="0.02em"
      >
        {sectionTitle}
      </Text>
      <Box background="white" margin="16px 16px " borderRadius="5px">
        <Box margin="10px 17px" width="144px">
          <img src={Logo} alt="logo" />
        </Box>
      </Box>
    </Flex>
  );
};

export default OnlineBookingWizardHeader;
