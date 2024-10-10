export interface IListItem {
  title: string;
  action?: number | null;
  avatar?: string;
  labelColor?: string;
  description?: string;
  sub_description?: string;
  icon?: string;
  disabled?: boolean;
}
