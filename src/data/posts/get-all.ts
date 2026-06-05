import { POSTS_URL } from '@/config/app-config';
import { PostsResponse } from '@/domain/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getAllPosts = async () => {
  const response = await fetchJson<PostsResponse>(POSTS_URL, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache', // estático
  });
  //console.log(response);
  //console.log(process.env.NODE_ENV);

  return response.data;
};
