import { PostData } from '@/domain/posts';
import { AllPostsLinks, Category, Container } from './styles';
import { Header } from '@/components/layout/Header/Header';
import { MainContainer } from '@/components/layout/MainContainer';
import { PostCard } from '@/features/home/components/PostCard';
import { Footer } from '@/components/layout/Footer/Footer';
import { SITE_NAME } from '@/config/app-config';
import Head from 'next/head';
import { PaginationData } from '@/domain/pagination';
import Link from 'next/link';
import { Pagination } from '@/features/posts/PaginationPage/components/Pagination';
import { CategoryData } from '@/domain/category';

export type HomeProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
  categories: CategoryData[];
};

export default async function PaginationPage({
  posts,
  category,
  pagination,
  categories,
}: HomeProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
        {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
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
        <Pagination {...pagination} categories={categories} />
        {!pagination?.nextPage && (
          <Link href="/post/page/[...param]" as="/post/page/1" passHref>
            <AllPostsLinks>Ver todos os posts</AllPostsLinks>
          </Link>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}
