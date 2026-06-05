import { PostData } from '@/domain/posts';
import { Container } from './styles';
import { Header } from '@/components/layout/Header/Header';
import { MainContainer } from '@/components/layout/MainContainer';

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
            <h2 key={post.slug}>{post.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  );
}
