export type FetchOptions = {
  cache?: 'no-store' | 'force-cache';
  revalidate?: number;
};

export function getFetchOptions(options?: FetchOptions) {
  const fetchOptions: RequestInit & {
    next?: { revalidate?: number };
  } = {};

  if (options?.cache === 'force-cache') {
    // Ativa o cache apenas em produção
    fetchOptions.cache =
      process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache';
  } else if (options?.revalidate !== undefined) {
    // Se passar um tempo de revalidação (ex: 60)
    fetchOptions.next = {
      revalidate: options.revalidate,
    };
  } else if (options?.cache === 'no-store') {
    fetchOptions.cache = 'no-store';
  }
  // Se cair fora das condições acima, vai pro padrão que no
  // Next.js 15+ assume o padrão de não cachear.

  // POREM se a rota for estática não vai fazer diferença
  // So vai impedir a pagina de ser estática se o 'no-store'
  // for mandada explicitamente

  return fetchOptions;
}
