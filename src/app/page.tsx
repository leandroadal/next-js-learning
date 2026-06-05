import { getAllPosts } from '@/data/posts/get-all';
import HomePage from '@/features/HomePage';

export default async function Home() {
  const posts = await getAllPosts();

  return <HomePage posts={posts} />;
}
