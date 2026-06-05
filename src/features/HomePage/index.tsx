import { PostData } from '@/domain/posts';
import { Container } from './styles';
import { Header } from '@/components/layout/Header/Header';
import { MainContainer } from '@/components/layout/MainContainer';
import { PostCard } from '@/components/PostCard';

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
              cover={getCoverUrl(post.cover)}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
    </>
  );
}

const getCoverUrl = (cover: PostData['cover']) => {
  if (!cover) return '/images/placeholder.jpg';

  const formats = cover.formats;
  return (
    formats?.large?.url ||
    formats?.medium?.url ||
    formats?.small?.url ||
    formats?.thumbnail?.url ||
    cover.url // ← url original, sem resize
  );
};
