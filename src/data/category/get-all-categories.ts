import { CATEGORIES_URL } from '@/config/app-config';
import { CategoriesResponse } from '@/domain/category';
import { fetchJson } from '@/utils/fetch-json';
import { FetchOptions, getFetchOptions } from '@/utils/fetch-options';

export const getAllCategories = async (options?: FetchOptions) => {
  const response = await fetchJson<CategoriesResponse>(
    CATEGORIES_URL,
    getFetchOptions(options),
  );

  return response.data;
};
