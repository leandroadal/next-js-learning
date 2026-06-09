import { POSTS_URL } from '@/config/app-config';
import { fetchJson } from '@/utils/fetch-json';

type CountResponse = {
  total: number;
};

export const countAllPosts = async (query = '') => {
  const url = `${POSTS_URL}/count?${query}`;
  const numberOfPosts = await fetchJson<CountResponse>(url);

  return numberOfPosts.total;
};
