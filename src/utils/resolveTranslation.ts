export const resolveTranslation = (
  accessKey: string,
  translations: Record<string, any>,
  lang: string
): string => {
  return translations?.[accessKey]?.[lang] || null;
};
