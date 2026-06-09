export function buildPostsQuery(
  page: number,
  category: string,
  postsPerPage: number,
) {
  const startFrom = (page - 1) * postsPerPage;

  const categoryQuery = category
    ? `&filters[category][name][$contains]=${category}`
    : '';

  return {
    categoryQuery,
    urlQuery: `populate=*&sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}${categoryQuery}`,
  };
}
