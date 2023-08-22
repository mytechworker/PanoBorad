import { all } from 'redux-saga/effects';

import authSaga from './auth.saga';
import integrationsSaga from './integration.saga';
import managementSaga from './management.saga';
import mediaSaga from './media.saga';
import profileSaga from './profile.saga';
import locationSaga from './location.saga';
import practiceSaga from './practice.saga';
import providerSaga from './provider.saga';
import reportSaga from './report.saga';
import analyticsSaga from './analytics.saga';
import onlineBookingSaga from './online-booking.saga';
import settingSaga from './setting.saga';
import phoneNumberSaga from './phone-number.saga';
import conversationSaga from './conversation.saga';
import pipelineSaga from './pipeline.saga';

export default function* rootSaga() {
  yield all([
    profileSaga(),
    authSaga(),
    managementSaga(),
    mediaSaga(),
    integrationsSaga(),
    locationSaga(),
    practiceSaga(),
    providerSaga(),
    reportSaga(),
    analyticsSaga(),
    onlineBookingSaga(),
    settingSaga(),
    phoneNumberSaga(),
    conversationSaga(),
    pipelineSaga(),
  ]);
}
