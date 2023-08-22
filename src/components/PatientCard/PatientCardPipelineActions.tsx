import React, { useState } from 'react';
import { Modal } from 'antd';

import { Flex, PatientCardAddNoteForm } from 'components';

import { AddIcon, SMSIcon } from 'helpers/icons';

const PatientCardPipelineActions = ({
  onCreateNote,
  showNewNote,
  setShowNewNote,
  loading,
}: any) => {
  return (
    <>
      <Flex padding="20px 0" flexGap="16px">
        <Flex
          background="primary"
          width="40px"
          height="40px"
          borderRadius="50%"
          className="has-cursor"
        >
          <SMSIcon />
        </Flex>
        <Flex
          background="primary"
          width="40px"
          height="40px"
          borderRadius="50%"
          className="has-cursor"
          onClick={() => setShowNewNote(true)}
        >
          <AddIcon color="white" />
        </Flex>
      </Flex>
      <Modal
        visible={showNewNote}
        closable={true}
        footer={false}
        centered
        onCancel={() => setShowNewNote(false)}
        destroyOnClose
        width="552px"
        title="Add New Note"
      >
        <PatientCardAddNoteForm onSubmit={onCreateNote} submitting={loading} />
      </Modal>
    </>
  );
};

export default PatientCardPipelineActions;
