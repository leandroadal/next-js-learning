import { CategoryData } from '@/domain/category';
import { PaginationData } from '@/domain/pagination';

export function getPaginationViewModel(
  pagination: PaginationData,
  categories: CategoryData[],
) {
  const categoryName = pagination.category ?? 'Todas';

  return {
    categoryName,
    categories,

    categoryLink: '/post/page/1',

    nextLink: `/post/page/${pagination.nextPage}${categoryName ? `/${categoryName}` : ''}`,

    previousLink: `/post/page/${pagination.previousPage}${categoryName ? `/${categoryName}` : ''}`,

    hasNextPage:
      pagination.nextPage * pagination.postsPerPage <
      pagination.postsPerPage + pagination.numberOfPosts,

    hasPreviousPage: pagination.previousPage >= 1,
  };
}
