import { createSelector } from 'reselect';
import { ConversationState } from 'types';

const selectConversation = (state: any) => state.conversation;

export const selectPatientNumberList = createSelector(
  [selectConversation],
  (conversation: ConversationState) => conversation?.allPatientNumbers
);

export const selectChatList = createSelector(
  [selectConversation],
  (conversation: ConversationState) => conversation?.chats
);
export const selectPatient = createSelector(
  [selectConversation],
  (conversation: ConversationState) => conversation?.patient
);
export const selectNumbersList = createSelector(
  [selectConversation],
  (conversation: ConversationState) => conversation?.numbers
);
