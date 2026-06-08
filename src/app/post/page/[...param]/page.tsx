import { countAllPosts } from '@/data/posts/count-all posts';
import { POSTS_PER_PAGE } from '@/domain/constants';
import PaginationPage from '@/features/posts/PaginationPage';
import { getPageParams } from '@/features/posts/PaginationPage/utils/get-page-params';
import { getPostsPageData } from '@/features/posts/PaginationPage/utils/get-posts-page-data';

type Props = {
  params: Promise<{
    param?: string[];
  }>;
};

// Executada durante o build da aplicação.
export async function generateStaticParams() {
  const numberOfPosts = Number(await countAllPosts());

  // Math.ceil arredonda para cima
  const totalPages = Math.ceil(numberOfPosts / POSTS_PER_PAGE);

  // Cria um array com os parâmetros das rotas dinâmicas
  return Array.from({ length: totalPages }, (_, index) => ({
    param: [String(index + 1)],
  }));
}

export default async function Page({ params }: Props) {
  const { param } = await params;

  const { page, category } = getPageParams(param);

  const { posts, pagination } = await getPostsPageData(
    page,
    category,
    'force-cache',
  );

  if (!posts.length) {
    return <div>Página não encontrada...</div>;
  }

  return (
    <PaginationPage posts={posts} category={category} pagination={pagination} />
  );
}
