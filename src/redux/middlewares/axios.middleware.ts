import { call, put } from 'redux-saga/effects';

import { AxiosHelper } from 'helpers';

export default function* axiosMiddleware(action: any) {
  const { type, resolve, reject, ...params } = action;

  yield put({ type: `${type}_REQUESTING` });

  try {
    const { data } = yield call(AxiosHelper, params);

    yield put({ type: `${type}_SUCCESS`, data });
    if (resolve) resolve(data);
  } catch (error :any) {
    const data = error?.response?.data || error;

    yield put({ type: `${type}_FAILURE`, error: data });
    if (reject) reject(data);
  }
}
