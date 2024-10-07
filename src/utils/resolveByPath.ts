export const resolveByPath = (
  row: { [key: string]: string },
  name: string
): string => {
  const getNestedValue = (obj: any, key: string): string => {
    return key.split(".").reduce((acc, part) => acc && acc[part], obj);
  };
  if (!name.includes(".")) {
    return row[name];
  }
  return getNestedValue(row, name);
};
