import { countAllPosts } from '@/data/posts/count-all posts';
import { getAllPosts } from '@/data/posts/get-all';
import { getPost } from '@/data/posts/get-post';
import { notFound } from 'next/navigation';

// Força que rotas não geradas no build retornem 404 (equivalente ao fallback: false)
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function DynamicPost({ params }: Props) {
  // No Next.js 15+, 'params' é uma Promise e deve ser resolvida com 'await'
  const { slug } = await params;

  if (!slug || typeof slug !== 'string') {
    notFound();
  }

  const posts = await getPost(slug);
  const post = posts[0];

  // Caso o post não exista, redireciona para a página 404 padrão
  if (!post) {
    notFound();
  }

  return <h1>{post.title}</h1>;
}

// 2. Substitui o 'getStaticPaths'
export async function generateStaticParams() {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[pageSize]=${numberOfPosts}`);
  //console.log(posts);

  // Retorna diretamente o array com os parâmetros da rota
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
