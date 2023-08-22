import React from 'react';
import EmptyChatIcon from 'assets/images/empty-chat.svg';
import { EmptyChatListWrapper } from './conversation.style';
import { Title5 } from 'components';

const ConversationEmptyChat = () => {
  return (
    <EmptyChatListWrapper>
      <Title5 weight="600">Select person name to show chat</Title5>
      <div>
        <img src={EmptyChatIcon} alt="empty-chat-icon" />
      </div>
    </EmptyChatListWrapper>
  );
};

export default ConversationEmptyChat;
