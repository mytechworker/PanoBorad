export interface PireChartModel {
  id: string;
  label: string;
  value: number;
  color?: string;
}

export interface BulletChartModel {
  id: string;
  title?: string;
  ranges: number[];
  measures: number[];
  markers: number[];
}
