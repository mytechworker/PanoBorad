import ActionTypes from '../actionTypes';

export function loadAll() {
  return {
    method: 'get',
    url: '/mangement/setting',
    type: ActionTypes.LOAD_ALL_MANAGEMENT_SETTING,
  };
}

type SettingData = {
  report_dashboard?: any;
  main_dashboard?: any;
};
export function update(data: SettingData) {
  return {
    method: 'patch',
    url: '/mangement/setting',
    type: ActionTypes.UPDATE_MANAGEMENT_SETTING,
    data,
  };
}
