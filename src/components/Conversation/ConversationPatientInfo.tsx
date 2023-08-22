import React, { useState } from 'react';
import { createStructuredSelector } from 'reselect';

import {
  Box,
  Button,
  PatientCardChatProfile,
  Flex,
  ConversationEmptyPaitent,
  SpinnerView,
} from 'components';
import { mainAction, conversationAction } from 'redux/actions';
import connectHelper from 'helpers/connect.helper';
import { mainSelector } from 'redux/selectors';
import { OpenNewTabIcon } from 'helpers/icons';
import { usePromise } from 'hooks';

const connect = connectHelper(
  createStructuredSelector({
    cardStatus: mainSelector.selectPatientCardStatus,
  })
);

const ConversationPatientInfo = ({
  selectPaitient,
  loading,
  realoadPatientNumber,
}: any) => {
  const promise = usePromise();
  const handleOpenCard = () => {
    Promise.all([
      promise(mainAction.handleTogglePatientCard(true)),
      promise(mainAction.handleSetPatientCard('chat')),
    ]);
  };
  const [tabKey, setTab] = useState('stats');
  return (
    <Box
      height="87vh"
      padding="17px 20px"
      overflowY="auto"
      overflowX="hidden"
      className="designed-scroll"
    >
      {selectPaitient ? (
        <>
          <Flex justifyContent="flex-end">
            <Box className="has-cursor" onClick={() => handleOpenCard()}>
              <OpenNewTabIcon />
            </Box>
          </Flex>
          {loading ? (
            <SpinnerView height="300px" />
          ) : (
            <PatientCardChatProfile
              onClose={() => {}}
              showCloseButton={false}
              tabKey={tabKey}
              setTabKey={(event: string) => setTab(event)}
              realoadPatientNumber={realoadPatientNumber}
            />
          )}
        </>
      ) : (
        <ConversationEmptyPaitent />
      )}
    </Box>
  );
};

export default connect(ConversationPatientInfo);
