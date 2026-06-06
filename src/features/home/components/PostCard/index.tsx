import Link from 'next/link';

import {
  Container,
  PostCardCover,
  PostCardHeading,
  PostCardImage,
} from './styled';
import { PostCover } from '@/domain/posts';
import { getCoverSize, getCoverUrl } from '@/domain/helpers';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: PostCover | null;
};

export function PostCard({ slug, title, cover }: PostCardProps) {
  const coverUrl = getCoverUrl(cover, 'large');
  const { width, height } = getCoverSize(cover);
  const postUrl = `/post/${slug}`;

  return (
    <Container>
      <PostCardCover>
        <Link href={'/post/[slug]'} as={postUrl}>
          <PostCardImage
            src={coverUrl}
            alt={title}
            width={width} // tamanho real da imagem
            height={height} // vem da API
            priority
          />
        </Link>
      </PostCardCover>

      <PostCardHeading>
        <Link href={'/post/[slug]'} as={`/post/${slug}`}>
          {title}
        </Link>
      </PostCardHeading>
    </Container>
  );
}
