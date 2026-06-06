import { PostData } from '@/domain/posts';
import { PostContent } from '../components/PostContent';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Heading } from '@/components/ ui/heading';
import { PostCover } from '../components/PostCover';
import { getAltText, getCoverUrl } from '@/domain/helpers';

export type PostPageProps = {
  post: PostData;
};

export default function PostPage({ post }: PostPageProps) {
  const coverUrl = getCoverUrl(post.cover, 'small');
  const altText = getAltText(post.cover);

  return (
    <>
      <Header />
      <article>
        <PostCover coverUrl={coverUrl} alt={altText} />
        <Heading>{post.title}</Heading>
        <PostContent content={post.content} />
      </article>
      <Footer />
    </>
  );
}
