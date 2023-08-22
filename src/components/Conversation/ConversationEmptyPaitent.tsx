import React from 'react';
import EmptyIcon from 'assets/images/paitent-empty.png';
import { NotSelectedPaitintWrapper } from './conversation.style';
import { Title5 } from 'components';

const ConversationEmptyPaitent = () => {
  return (
    <NotSelectedPaitintWrapper>
      <Title5 weight="600">Select person name to show patient card</Title5>
      <div>
        <img src={EmptyIcon} alt="empty-chat-icon" />
      </div>
    </NotSelectedPaitintWrapper>
  );
};

export default ConversationEmptyPaitent;
