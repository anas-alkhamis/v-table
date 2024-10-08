export type ColumnSchemaType = {
  displayName: string;
  name: string;
  slotName?: string;
  displaySlot?: string;
  //sortable
};
export interface ISchema {
  searchableColumns?: string[];
  columns: ColumnSchemaType[];
}

export interface ITableProps {
  schema: ISchema;
  data: { [key: string]: any }[];
  currentPage: number;
  rowsPerPage: number;
}
