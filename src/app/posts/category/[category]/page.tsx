import PaginationPage from '@/features/posts/PaginationPage';
import { getPostsPageData } from '@/features/posts/PaginationPage/utils/get-posts-page-data';

type PageProps = {
  params: Promise<{
    category: string; // Deve ter o mesmo nome da pasta
  }>;
};

// Exemplo básico de Server Side Rendering
export default async function PostsByCategoryPage({ params }: PageProps) {
  // O GetServerSideProps foi descontinuado
  // Agora usa o async e espera o parâmetro da url para filtra pela categoria
  const { category } = await params;

  //const urlQuery = `populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=10&filters[category][name][$contains]=${category}`;

  const { posts, pagination } = await getPostsPageData(
    1,
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
