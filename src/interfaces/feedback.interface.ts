export interface IChartOption {
  title: string;
  label: string;
  value: number;
  color: string;
}

export interface IFeedback {
  mainTitle: string;
  chartData: IChartOption[];
  title: string;
  percentage: string;
}
