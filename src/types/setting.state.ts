import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { GridItemLocationModel } from './shared';

export interface SettingState {
  data?: SettingStateData;
  fetching?: boolean;
}

export interface SettingStateData {
  pk: number;
  report_dashboard: SettingReportDashboardModel;
  main_dashboard: SettingReportDashboardModel;
}

export interface SettingReportDashboardModel {
  filterInfo: SettingFilterInfodModel;
  locations: GridItemLocationModel[];
}

export interface SettingFilterInfodModel {
  start_date: string;
  end_date: string;
  charts: CheckboxValueType[];
}
