import { PaginationData } from '@/domain/pagination';

export function getPaginationViewModel(pagination: PaginationData) {
  const categoryName = pagination.category || '';

  return {
    nextLink: `/post/page/${pagination.nextPage}/${categoryName}`,
    previousLink: `/post/page/${pagination.previousPage}/${categoryName}`,

    hasNextPage:
      pagination.nextPage * pagination.postsPerPage <
      pagination.postsPerPage + pagination.numberOfPosts,

    hasPreviousPage: pagination.previousPage >= 1,
  };
}
