import AppReducer from './app.reducer';
import ManagementReducer from './management.reducer';
import IntegrationReducer from './integration.reducer';
import ProfileReducer from './profile.reducer';
import LocationReducer from './location.reducer';
import PracticeReducer from './practice.reducer';
import ProviderReducer from './provider.reducer';
import ReportReducer from './report.reducer';
import AnalyticsReducer from './anlaytics.reducer';
import mainReducer from './main.reducer';
import onlineBookingReducer from './online-booking.reducer';
import SettingReducer from './setting.reducer';
import phoneNumberReducer from './phone-number.reducer';
import conversationReducer from './conversation.reducer';
import pipelineReducer from './pipeline.reducer';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app'],
};
const appReducer = combineReducers({
  analytics: AnalyticsReducer,
  app: AppReducer,
  integration: IntegrationReducer,
  location: LocationReducer,
  main: mainReducer,
  management: ManagementReducer,
  practice: PracticeReducer,
  profile: ProfileReducer,
  provider: ProviderReducer,
  report: ReportReducer,
  onlineBooking: onlineBookingReducer,
  setting: SettingReducer,
  phoneNumber: phoneNumberReducer,
  conversation: conversationReducer,
  pipeline: pipelineReducer,
});

const rootReducer = (state: any, action: any) => {
  // Clear all data in redux store to initial.
  if (action.type === 'DESTROY_SESSION') state = undefined;

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
