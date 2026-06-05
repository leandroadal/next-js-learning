export const fetchJson = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const rawData = await fetch(url, options);
  const jsonData = await rawData.json();
  return jsonData;
};
