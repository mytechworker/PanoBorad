import { ChatModel, NumberModel } from './conversation';
import { PatientState, PatientNumberListState } from './shared.state';
export interface ConversationState {
  allPatientNumbers: PatientNumberListState;
  chats: ChatListState;
  patient: PatientState;
  numbers: NumbersState;
}

export interface ChatListState {
  data?: ChatModel;
  fetching?: boolean;
}
export interface NumbersState {
  data: [];
  fetching?: boolean;
}
