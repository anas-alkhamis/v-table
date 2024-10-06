import { DefineComponent } from "vue";
interface Column {
  accessKey: string; // Access key for the column
  header?: string | DefineComponent; // Header can be a string or a Vue component
  cell?: string | DefineComponent; // Cell content can be a string or a Vue component
}
export type Columns = Column[];
interface CreateTableData {
  data: any[];
  columns: Columns;
  lang?: string;
  translations?: any;
}

export const createTable = ({
  data,
  columns,
  translations,
  lang = "en",
}: CreateTableData) => {
  const getCellContext = (col: number, row: any) => {
    const accessKey = columns[col].accessKey;

    const getNestedValue = (obj: any, key: string) => {
      if (key.includes(".")) {
        return key.split(".").reduce((acc, part) => {
          return acc && acc[part];
        }, obj);
      } else {
        return obj[key];
      }
    };

    const value = getNestedValue(row, accessKey);
    return value;
  };
  const getColumns = () =>
    data.map((row, index) => ({
      rowOrder: index + 1,
      ...row,
    }));
  const getHeaderTranslation = (accessKey: string, lang: string) => {
    return translations?.[accessKey]?.[lang] || null;
  };

  const getHeaders = () =>
    columns.map((column: Column) => {
      const translatedHeader = getHeaderTranslation(column.accessKey, lang);
      return translatedHeader ? translatedHeader : column.header;
    });

  return { getColumns, getHeaders, getCellContext };
};
