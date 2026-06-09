import { POSTS_URL } from '@/config/app-config';
import { PostsResponse } from '@/domain/posts';
import { fetchJson } from '@/utils/fetch-json';
import { FetchOptions, getFetchOptions } from '@/utils/fetch-options';

export const getAllPosts = async (query = '', options?: FetchOptions) => {
  const url = `${POSTS_URL}?&${query}`;

  const response = await fetchJson<PostsResponse>(
    url,
    getFetchOptions(options),
  );

  return response.data;
};
