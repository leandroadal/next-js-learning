import { getAllPosts } from '@/data/posts/get-all';
import HomePage from '@/features/HomePage';

export default async function Home() {
  const posts = await getAllPosts(
    'populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=10',
    { cache: 'force-cache' }, // Salva em cache por tempo indeterminado
  );

  return <HomePage posts={posts} />;
}
