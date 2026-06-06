import { PostData } from '@/domain/posts';
import { Container } from './styles';
import { Header } from '@/components/layout/Header/Header';
import { MainContainer } from '@/components/layout/MainContainer';
import { PostCard } from '@/components/PostCard';
import { Footer } from '@/components/layout/Footer/Footer';

export type HomeProps = {
  posts: PostData[];
};

export default async function HomePage({ posts }: HomeProps) {
  return (
    <>
      <Header />
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
