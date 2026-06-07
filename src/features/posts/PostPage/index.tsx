import { PostData } from '@/domain/posts';
import { PostContent } from '../components/PostContent';
import { Header } from '@/components/layout/Header/Header';
import { Footer } from '@/components/layout/Footer/Footer';
import { Heading } from '@/components/ ui/heading';
import { PostCover } from '../components/PostCover';
import {
  getAltText,
  getAuthor,
  getCategory,
  getCoverUrl,
} from '@/domain/helpers';
import { PostDetails } from '../components/PostDetails';
import { formatDate } from '@/utils/format-data';
import { MainContainer } from '@/components/layout/MainContainer';
import { Comments } from '@/components/ ui/comments';

export type PostPageProps = {
  post: PostData;
};

export default function PostPage({ post }: PostPageProps) {
  const coverUrl = getCoverUrl(post.cover, 'small');
  const altText = getAltText(post.cover);
  const author = getAuthor(post.author);
  const category = getCategory(post.category);
  const createdAt = formatDate(post.publishedAt);

  return (
    <>
      <Header />

      <MainContainer>
        <Heading>{post.title}</Heading>
        <PostDetails author={author} category={category} date={createdAt} />
        <PostCover coverUrl={coverUrl} alt={altText} />
        <PostContent content={post.content} />
        <Comments title={post.title} slug={post.slug} />
      </MainContainer>

      <Footer />
    </>
  );
}
