import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import { Box, Flex, Text } from 'components';
import ArchiveActionIcon from 'assets/images/archive-action.svg';
import { formatPhoneNumber } from 'helpers';
const ConversationChatItem = ({
  patinetNumber,
  onArchive,
  onDelete,
  onRestore,
}: any) => {
  const [archive, setArchive] = useState(patinetNumber?.archive);
  useEffect(() => {
    setArchive(patinetNumber?.archive);
  }, [patinetNumber?.archive]);
  const chatActions = (
    <Menu>
      {!archive ? (
        <Menu.Item
          key="archive"
          onClick={() => {
            setArchive(true);
            onArchive();
          }}
        >
          Archive
        </Menu.Item>
      ) : (
        <Menu.Item
          key="archive"
          onClick={() => {
            setArchive(false);
            onRestore();
          }}
        >
          Restore
        </Menu.Item>
      )}

      <Menu.Item key="delete" onClick={() => onDelete()}>
        Delete
      </Menu.Item>
    </Menu>
  );
  return (
    <Box
      marginBottom="10px"
      paddingBottom="14px"
      borderColor="gray2"
      width="100%"
      shadow="0px 4px 14px rgba(135, 135, 135, 0.05)"
    >
      <Flex justifyContent="space-between">
        <Flex>
          <Flex
            marginRight="10px"
            background="primary"
            borderRadius="50%"
            padding="12px 16px"
            width="36px"
            height="36px"
          >
            <Text color="white" weight="800" fontSize=" 12px">
              {patinetNumber?.patient_name
                ? (patinetNumber?.patient_name).substr(0, 2)
                : patinetNumber?.phone_number.substr(0, 2)}
            </Text>
          </Flex>
          <Box>
            <Flex flexDirection="column" alignItems="flex-start">
              <Text
                weight="bold"
                fontSize=" 14px"
                color="black2"
                marginBottom="10px"
              >
                {patinetNumber?.patient_name
                  ? patinetNumber?.patient_name
                  : formatPhoneNumber(patinetNumber?.phone_number)}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box marginLeft="16px">
          <Dropdown
            overlay={chatActions}
            className="has-cursor"
            placement="bottomCenter"
          >
            <Flex width="182px" justifyContent="flex-end">
              <img src={ArchiveActionIcon} alt="archive-action-icon" />
            </Flex>
          </Dropdown>
        </Box>
      </Flex>
    </Box>
  );
};

export default ConversationChatItem;
