export interface Tooltip {
  _id: string;
  tooltip: string;
  createdAt: Date;
}
export interface Notification {
  counter: number;
  tooltips: Tooltip[] | [];
}
