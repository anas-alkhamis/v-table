export type ColumnSchemaType = {
  displayName: string;
  name: string;
  slotName?: string;
  displaySlot?: string;
  //sortable
};
export interface ISchema {
  // search filtre
  columns: ColumnSchemaType[];
}
