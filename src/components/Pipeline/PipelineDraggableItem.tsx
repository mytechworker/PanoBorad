import React, { useState } from 'react';

import { Box, Flex, Text, PipelineChat } from 'components';
import { Modal } from 'antd';
import { SMSIcon } from 'helpers/icons';
import { usePromise } from 'hooks';
import { mainAction } from 'redux/actions';
import { pipelineAction } from 'redux/actions';
import { Link } from 'react-router-dom';

type Props = {
  provided: any;
  item: any;
};
const PipelineDraggableItem = ({ provided, item }: Props) => {
  const [open, setOpen] = useState(false);
  const promise = usePromise();
  const handleOpenCard = (id: number) => {
    Promise.all([
      promise(mainAction.handleTogglePatientCard(true)),
      promise(mainAction.handleSetPatientCard('pipeline')),
      promise(pipelineAction.loadPipelinePatient(id)),
    ]);
  };
  return (
    <>
      <Modal
        visible={open}
        closable={true}
        footer={false}
        centered
        onCancel={() => setOpen(false)}
        destroyOnClose
        width="470px"
      >
        <PipelineChat
          onSubmit={() => {}}
          submitting={false}
          patient={item}
        />
      </Modal>
      <Box padding="6px 12px" minHeight="152px">
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Box
            width="100%"
            height="200px"
            background="blue2"
            opacity="0.03"
            borderRadius="5px"
            borderLeft="4px solid blue"
            className="card-item has-cursor"
          >
            <Text
              margin="14px 22px"
              color="black2"
              weight="bold"
              fontSize="16px"
              onClick={() => handleOpenCard(item.pk)}
            >
              {item.full_name}
            </Text>

            <Flex justifyContent="end" paddingLeft="10px">
              {item.tags.map((tag: any, index: number) => {
                return (
                  <Box
                    marginRight="10px"
                    background="white"
                    borderRadius="5px"
                    className="box-shadow-icon"
                    key={index}
                  >
                    <Text
                      margin="6px 12px"
                      weight="bold"
                      fontSize="12px"
                      color="gray15"
                    >
                      {tag.title}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
            {item.number && (
              <Flex
                background="primary"
                borderRadius="50%"
                width="32px"
                height="32px"
                margin="70px 232px "
                className="has-cursor"
                onClick={() => setOpen(true)}
              >
                <SMSIcon />
              </Flex>
            )}

            {/* {item.number && (
              <Link to={`/conversation?patientId=${item.number}&pk=${item.pk}`}>
                <Flex
                  background="primary"
                  borderRadius="50%"
                  width="32px"
                  height="32px"
                  margin="70px 232px "
                  className="has-cursor"
                >
                  <SMSIcon />
                </Flex>
              </Link>
            )} */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PipelineDraggableItem;
