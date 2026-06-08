export function getPageParams(param?: string[]) {
  return {
    page: Number(param?.[0] ?? 1),
    category: param?.[1] ?? '',
  };
}
