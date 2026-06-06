import { POSTS_URL } from '@/config/app-config';
import { PostData, PostsResponse } from '@/domain/posts';
import { fetchJson } from '@/utils/fetch-json';

export const getPost = async (
  slug: string | string[],
  populate: boolean = false,
): Promise<PostData[]> => {
  const query = populate ? 'populate=*&' : '';
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?${query}filters[slug][$eq]=${slugString}`;
  const response = await fetchJson<PostsResponse>(url, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache', // estático
  });
  //console.log(response);
  //console.log(process.env.NODE_ENV);

  return response.data;
};
