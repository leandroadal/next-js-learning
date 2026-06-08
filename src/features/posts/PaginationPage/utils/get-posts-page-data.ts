import { getAllPosts } from '@/data/posts/get-all';
import { buildPostsQuery } from './build-posts-query';
import { countAllPosts } from '@/data/posts/count-all posts';
import { createPagination } from './create-pagination';
import { POSTS_PER_PAGE } from '@/domain/constants';

type FetchCache = 'no-store' | 'force-cache';

export async function getPostsPageData(
  page: number,
  category: string,
  cache: FetchCache,
) {
  const postsPerPage = POSTS_PER_PAGE;

  const { urlQuery, categoryQuery } = buildPostsQuery(
    page,
    category,
    postsPerPage,
  );

  const [posts, numberOfPosts] = await Promise.all([
    getAllPosts(urlQuery, { cache: cache }),
    countAllPosts(categoryQuery),
  ]);

  return {
    posts,
    pagination: createPagination({
      page,
      category,
      postsPerPage,
      numberOfPosts: Number(numberOfPosts),
    }),
  };
}
