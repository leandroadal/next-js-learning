import { PostData } from '@/domain/posts';
import { Category, Container } from './styles';
import { Header } from '@/components/layout/Header/Header';
import { MainContainer } from '@/components/layout/MainContainer';
import { PostCard } from '@/features/home/components/PostCard';
import { Footer } from '@/components/layout/Footer/Footer';
import { SITE_NAME } from '@/config/app-config';
import Head from 'next/head';

export type HomeProps = {
  posts: PostData[];
  category?: string;
};

export default async function HomePage({ posts, category }: HomeProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        <meta name="description" content="Este é meu blog de tecnologia." />
      </Head>
      <Header />

      {/* Aparece so quando for usando o filtro por categoria */}
      {category && <Category>Categoria: {category}</Category>}

      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              cover={post.cover}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
