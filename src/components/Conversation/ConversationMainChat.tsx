import React from 'react';
import { ChatModel } from 'types';
import { ConversationEmptyChat, ConversationSelectedChat } from 'components';
type Props = {
  selectedConversation?: boolean;
  chatList: ChatModel[];
  loading: boolean;
  onCreate: (body: string) => void;
  isSubmitting: boolean;
  patinetNumber: any;
  onArchive: () => void;
  onDelete: () => void;
  onRestore: () => void;
};
const ConversationMainChat = ({
  selectedConversation,
  chatList,
  loading,
  onCreate,
  isSubmitting,
  patinetNumber,
  onArchive,
  onDelete,
  onRestore,
}: Props) => {
  return (
    <div>
      {selectedConversation ? (
        <ConversationSelectedChat
          chatList={chatList}
          loading={loading}
          onCreate={onCreate}
          isSubmitting={isSubmitting}
          patinetNumber={patinetNumber}
          onArchive={onArchive}
          onDelete={onDelete}
          onRestore={onRestore}
       
        />
      ) : (
        <ConversationEmptyChat />
      )}
    </div>
  );
};

export default ConversationMainChat;
