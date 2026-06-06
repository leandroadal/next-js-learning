import { POSTS_URL } from '@/config/app-config';
import { PostsResponse } from '@/domain/posts';
import { fetchJson } from '@/utils/fetch-json';

type GetAllPostsOptions = {
  cache?: 'no-store' | 'force-cache';
  revalidate?: number;
};

export const getAllPosts = async (query = '', options?: GetAllPostsOptions) => {
  const url = `${POSTS_URL}?&${query}`;
  const fetchOptions: RequestInit & { next?: { revalidate?: number } } = {};

  if (options?.cache === 'force-cache') {
    // Ativa o cache apenas em produção
    fetchOptions.cache =
      process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache';
  } else if (options?.revalidate !== undefined) {
    // Se passar um tempo de revalidação (ex: 60)
    fetchOptions.next = { revalidate: options.revalidate };
  }
  // Se cair fora das condições acima, vai pro padrão que no
  // Next.js 15+ assume o padrão de não cachear.

  const response = await fetchJson<PostsResponse>(url, fetchOptions);
  //console.log(response);
  //console.log(process.env.NODE_ENV);

  return response.data;
};
