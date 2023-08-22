import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { pipelineSelector } from 'redux/selectors';
import { Tabs } from 'antd';
import { usePromise } from 'hooks';
import { pipelineAction } from 'redux/actions';
import {
  Box,
  Flex,
  Text,
  PatientCardPipelineActions,
  PatientCardPipelineStats,
  PatientCardNotes,
  SpinnerView,
  Grid,
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
};

const PatientCardPipelineProfile = ({
  onClose,
  showCloseButton = true,
}: Props) => {
  const promise = usePromise();
  const { data, fetching } = useSelector(pipelineSelector.selectPatient);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const onCreateNote = (note: any) => {
    promise(
      pipelineAction.createPipelineNot({
        patient: data?.pk,
        note: note?.comment,
      })
    )
      .then(() => {
        setShowNewNote(false);
        promise(pipelineAction.loadPipelinePatient(data?.pk));
      })
      .finally(() => {
        setNotSubmitting(false);
      });
  };
  const reloadPatient = () => {
    promise(pipelineAction.loadPipelinePatient(data?.pk));
  };
  const onUpdatePatient = () => {
    setIsEditting(true);
    promise(
      pipelineAction.updatePipelinePatient(data?.pk, {
        first_name: firstName,
        last_name: lastName,
      })
    )
      .then(() => {
        setIsEdit(false);
        promise(pipelineAction.loadPipelinePatient(data?.pk));
      })
      .finally(() => {
        setIsEditting(false);
      });
  };
  const [tabKey, setTab] = useState('stats');
  const [showNewNote, setShowNewNote] = useState(false);
  const [notSubmitting, setNotSubmitting] = useState(false);
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
            Back to lead
          </Text>
        </Flex>
      )}
      {fetching ? (
        <SpinnerView height="200px" />
      ) : (
        <>
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
              {' '}
              <Text weight="700" fontSize="16px" marginTop="12px">
                {data?.first_name} {data?.last_name}
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
                      setFirstName(data?.first_name ? data?.first_name : '');
                      setLastName(data?.last_name ? data?.last_name : '');
                    }}
                  >
                    <EditIcon />
                  </Box>
                )}
              </Box>
            </Flex>
          </Flex>
          {isEdit && (
            <Box marginTop="10px">
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
            </Box>
          )}
          {!isEdit && (
            <>
              <Box
                width="100%"
                height="50px"
                background="gray12"
                marginTop="10px"
                padding="10px 20px"
              >
                <Flex justifyContent="flex-start">
                  <UserOutlined style={{ color: '#6F7D97' }} />
                  <Text
                    weight="700"
                    color="gray8"
                    fontSize="14px"
                    marginLeft="16px"
                  >
                    {data?.first_name}
                  </Text>
                </Flex>
              </Box>
              <Box
                width="100%"
                height="50px"
                background="gray12"
                marginTop="10px"
                padding="10px 20px"
              >
                <Flex justifyContent="flex-start">
                  <UserOutlined style={{ color: '#6F7D97' }} />
                  <Text
                    weight="700"
                    color="gray8"
                    fontSize="14px"
                    marginLeft="16px"
                  >
                    {data?.last_name}
                  </Text>
                </Flex>
              </Box>
            </>
          )}
          <Flex>
            <Box
              width="100%"
              height="50px"
              background="gray12"
              marginTop="10px"
              padding="10px 20px"
            >
              <Flex justifyContent="start">
                {' '}
                <Box marginTop="6px">
                  <CallIcon color="gray8" />
                </Box>
                <Text
                  color="gray8"
                  weight="bold"
                  fontSize="14px"
                  marginLeft="16px"
                >
                  {formatPhoneNumber(data?.phone)}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Flex>
            <Box
              width="100%"
              height="50px"
              background="gray12"
              marginTop="10px"
              padding="10px 20px"
            >
              <Flex justifyContent="start">
                {' '}
                <Box marginTop="6px">
                  <MailOutlineIcon color="gray8" />
                </Box>
                <Text
                  color="gray8"
                  weight="bold"
                  fontSize="14px"
                  marginLeft="16px"
                >
                  {data?.email}
                </Text>
              </Flex>
            </Box>
          </Flex>
          <PatientCardPipelineActions
            onCreateNote={onCreateNote}
            showNewNote={showNewNote}
            setShowNewNote={setShowNewNote}
            loading={notSubmitting}
          />
          <Tabs
            activeKey={tabKey}
            onChange={(event: string) => {
              setTab(event);
            }}
          >
            <TabPane tab="Stats" key="stats">
              <PatientCardPipelineStats
                tags={data?.tags}
                length={data?.tags.length}
                visitData={data?.visit_data}
                status={data?.status}
                lastContact={data?.last_contacted}
                pipeline_name={data?.pipeline_name}
              />
            </TabPane>
            <TabPane tab="Notes" key="notes">
              <PatientCardNotes
                notes={data?.notes}
                reloadPatient={reloadPatient}
              />
            </TabPane>
          </Tabs>
        </>
      )}
    </Box>
  );
};

export default PatientCardPipelineProfile;
