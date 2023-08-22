import React from 'react';

import { Flex, IntegrationsCardItem } from 'components';
import { IntegrationStatusData } from 'types';

import googleIcon from 'assets/images/intergration/google.svg';
import facebookIcon from 'assets/images/intergration/facebook.svg';
import dentrix from 'assets/images/intergration/dentrix.svg';
import twilioIcon from 'assets/images/intergration/twilio.svg';

type Props = {
  onDetrixIntegrations: () => void;
  onShowLocations: () => void;
  statusData: IntegrationStatusData;
  onTwilioIntegration: () => void;
};
const IntegrationsItems = ({
  onDetrixIntegrations,
  onTwilioIntegration,
  statusData,
  onShowLocations,
}: Props) => {
  return (
    <Flex
      justifyContent="flex-start"
      flexWrap="wrap"
      margin="0 25px"
      flexGap="20px"
    >
      <IntegrationsCardItem
        title="Google"
        imageIcon={googleIcon}
        onAction={() => {}}
        connected={statusData?.is_google_connected}
      />
      <IntegrationsCardItem
        title="Facebook"
        imageIcon={facebookIcon}
        onAction={() => {}}
        connected={statusData?.is_facebook_connected}
      />
      <IntegrationsCardItem
        title="Dentrix"
        imageIcon={dentrix}
        onAction={() => onDetrixIntegrations()}
        onShowLocations={onShowLocations}
        connected={statusData?.is_dentrix_connected}
      />
      <IntegrationsCardItem
        title="Twilio"
        imageIcon={twilioIcon}
        onAction={() => onTwilioIntegration()}
        connected={statusData?.is_twilio_connected}
      />
    </Flex>
  );
};

export default IntegrationsItems;
