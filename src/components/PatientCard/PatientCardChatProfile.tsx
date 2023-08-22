import React, { useState } from 'react';
import { get } from 'lodash';
import { PatientModel } from 'types';
import { useSelector } from 'react-redux';
import { usePromise } from 'hooks';
import { Tabs } from 'antd';
import { conversationSelector } from 'redux/selectors';
import { conversationAction, pipelineAction } from 'redux/actions';

import {
  Box,
  Flex,
  Text,
  Grid,
  PatientCardChatStats,
  PatientCardNotes,
  PatientCardPipelineActions,
  SpinnerView,
} from 'components';

import {
  LeftNavigationIcon,
  CallIcon,
  MailOutlineIcon,
  EditIcon,
} from 'helpers/icons';

import { CheckOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { InputWrapper } from './patient-card.styles';
import { formatPhoneNumber } from 'helpers';

const { TabPane } = Tabs;

type Props = {
  onClose: () => void;
  showCloseButton?: boolean;
  details?: PatientModel;
  tabKey?: string;
  setTabKey?: any;
  realoadPatientNumber?: (patient?: string) => void;
};

const PatientCardChatProfile = ({
  onClose,
  showCloseButton = true,
  setTabKey,
  tabKey,
  realoadPatientNumber,
}: Props) => {
  const promise = usePromise();
  const [showNewNote, setShowNewNote] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [noteSubmitting, setNoteSubmitting] = useState(false);
  const patient = useSelector(conversationSelector.selectPatient);
  const patientDetails = get(patient, 'data');
  const onCreateTag = (id: number) => {
    promise(
      conversationAction.createChatTag({
        id: patientDetails?.pk,
        tag_id: id,
      })
    ).then(() => {
      promise(conversationAction.loadPatient(patientDetails?.pk));
    });
  };
  const onDeleteTag = (id: number) => {
    promise(
      conversationAction.deleteChatTag({
        id: patientDetails?.pk,
        tag_id: id,
      })
    ).then(() => {
      promise(conversationAction.loadPatient(patientDetails?.pk));
    });
  };
  const onCreateNote = (note: any) => {
    setNoteSubmitting(true);
    promise(
      pipelineAction.createPipelineNot({
        patient: patientDetails?.pk,
        note: note?.comment,
      })
    )
      .then(() => {
        setShowNewNote(false);
        promise(conversationAction.loadPatient(patientDetails?.pk));
      })
      .finally(() => {
        setNoteSubmitting(false);
      });
  };
  const reloadPatient = () => {
    promise(conversationAction.loadPatient(patientDetails?.pk));
  };
  const onUpdatePatient = () => {
    setIsEditting(true);
    promise(
      conversationAction.updateConversationPatient(patientDetails?.pk, {
        first_name: firstName,
        last_name: lastName,
      })
    )
      .then(() => {
        setIsEdit(false);
        promise(conversationAction.loadPatient(patientDetails?.pk));
        if (realoadPatientNumber) {
          realoadPatientNumber(`${firstName} ${lastName}`);
        }
      })
      .finally(() => {
        setIsEditting(false);
      });
  };
  return (
    <Box minWidth="300px">
      {showCloseButton && (
        <Flex
          justifyContent="flex-start"
          onClick={() => onClose()}
          className="has-cursor"
        >
          <LeftNavigationIcon />
          <Text color="primary" weight="700" fontSize="12px" marginLeft="9px">
            Back to chat
          </Text>
        </Flex>
      )}

      <Flex
        padding="28px 0"
        flexDirection="column"
        borderBottom="1px solid"
        borderColor="gray2"
      >
        <Box
          width="87px"
          height="87px"
          background="primary"
          borderRadius="50%"
        />
        <Flex>
          <Text weight="700" fontSize="16px" marginTop="12px">
            {patientDetails?.first_name} - {patientDetails?.last_name}
          </Text>
          <Box marginLeft="10px" marginTop="10px" className="has-cursor">
            {isEdit ? (
              <Flex>
                {isEditting ? (
                  <SpinnerView height="20px" />
                ) : (
                  <CheckOutlined
                    onClick={() => onUpdatePatient()}
                    style={{ marginRight: 10 }}
                  />
                )}

                <CloseOutlined onClick={() => setIsEdit(false)} />
              </Flex>
            ) : (
              <Box
                onClick={() => {
                  setIsEdit(true);
                  setFirstName(
                    patientDetails?.first_name ? patientDetails?.first_name : ''
                  );
                  setLastName(
                    patientDetails?.last_name ? patientDetails?.last_name : ''
                  );
                }}
              >
                <EditIcon />
              </Box>
            )}
          </Box>
        </Flex>
      </Flex>
      <PatientCardPipelineActions
        onCreateNote={onCreateNote}
        showNewNote={showNewNote}
        setShowNewNote={setShowNewNote}
        loading={noteSubmitting}
      />
      {isEdit && (
        <Grid>
          <Flex justifyContent="flex-start" flexDirection="column">
            <InputWrapper>
              <Input
                size="large"
                placeholder="First Name"
                value={firstName}
                prefix={<UserOutlined style={{ color: '#6F7D97' }} />}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper>
              <Input
                size="large"
                placeholder="Last Name"
                prefix={<UserOutlined style={{ color: '#6F7D97' }} />}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputWrapper>
          </Flex>
        </Grid>
      )}
      <Grid padding="20px 0" gridGap="14px">
        {!isEdit && (
          <>
            <Flex
              background="gray12"
              padding="16px 20px"
              justifyContent="flex-start"
            >
              <UserOutlined style={{ color: '#6F7D97' }} />
              <Text
                weight="700"
                color="gray8"
                fontSize="14px"
                marginLeft="16px"
              >
                {patientDetails?.first_name}
              </Text>
            </Flex>
            <Flex
              background="gray12"
              padding="16px 20px"
              justifyContent="flex-start"
            >
              <UserOutlined style={{ color: '#6F7D97' }} />
              <Text
                weight="700"
                color="gray8"
                fontSize="14px"
                marginLeft="16px"
              >
                {patientDetails?.last_name}
              </Text>
            </Flex>
          </>
        )}
        <Flex
          background="gray12"
          padding="16px 20px"
          justifyContent="flex-start"
        >
          <CallIcon />
          <Text weight="700" color="gray8" fontSize="14px" marginLeft="16px">
            {formatPhoneNumber(patientDetails?.phone)}
          </Text>
        </Flex>
        <Flex
          background="gray12"
          padding="16px 20px"
          justifyContent="flex-start"
        >
          <MailOutlineIcon />
          <Text weight="700" color="gray8" fontSize="14px" marginLeft="16px">
            {patientDetails?.email}
          </Text>
        </Flex>
      </Grid>
      <Tabs activeKey={tabKey} onChange={setTabKey}>
        <TabPane tab="Stats" key="stats">
          <PatientCardChatStats
            tags={patientDetails?.tags}
            length={patientDetails?.tags?.length}
            visitData={patientDetails?.visit_data}
            status={patientDetails?.status}
            lastContact={patientDetails?.last_contacted}
            onClickTag={onCreateTag}
            onDeleteTag={onDeleteTag}
            pipeline_name={patientDetails?.pipeline_name}
          />
        </TabPane>
        <TabPane tab="Notes" key="notes">
          <PatientCardNotes
            notes={patientDetails?.notes}
            reloadPatient={reloadPatient}
          />
        </TabPane>
      </Tabs>
    </Box>
  );
};

export default PatientCardChatProfile;
