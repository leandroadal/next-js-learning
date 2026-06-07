import { getAllPosts } from '@/data/posts/get-all';
import HomePage from '@/features/home/HomePage';

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

  const urlQuery = `populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=10&filters[category][name][$contains]=${category}`;

  //cache: 'no-store': garante que toda vez vai chamar o servidor
  const posts = await getAllPosts(urlQuery, {
    cache: 'no-store',
  });

  return <HomePage category={category} posts={posts} />;
}
