export const getItemIdFromPath = (path: string): string => {
  const [id] = path.split("/").filter((el) => !Number.isNaN(+el) && el);
  return id;
};
