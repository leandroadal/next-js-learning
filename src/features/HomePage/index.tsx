import { PostData } from '@/domain/posts';
import { Container } from './styles';

export type HomeProps = {
  posts: PostData[];
};

export default async function HomePage({ posts }: HomeProps) {
  return (
    <Container>
      <div>
        {posts.map((post) => (
          <h2 key={post.slug}>{post.title}</h2>
        ))}
      </div>
    </Container>
  );
}
