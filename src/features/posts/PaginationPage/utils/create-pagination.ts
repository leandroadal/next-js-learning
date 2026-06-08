import { PaginationData } from '@/domain/pagination';

type Props = {
  page: number;
  category: string;
  numberOfPosts: number;
  postsPerPage: number;
};

export function createPagination({
  page,
  category,
  numberOfPosts,
  postsPerPage,
}: Props): PaginationData {
  return {
    nextPage: page + 1,
    previousPage: page - 1,
    numberOfPosts,
    postsPerPage,
    category,
  };
}
