import Link from 'next/link';
import Image from 'next/image';

import { Container, PostCardCover, PostCardHeading } from './styled';
import { PostCover } from '@/domain/posts';
import { getCoverUrl } from '@/domain/helpers';

export type PostCardProps = {
  slug: string;
  title: string;
  cover: PostCover | null;
};

export function PostCard({ slug, title, cover }: PostCardProps) {
  const coverUrl = getCoverUrl(cover, 'large');
  const postUrl = `/post/${slug}`;

  return (
    <Container>
      <PostCardCover>
        <Link href={'/post/[slug]'} as={postUrl}>
          <Image
            src={coverUrl}
            alt={title}
            fill
            priority
            sizes="
              (max-width: 600px) 100vw,
              (max-width: 900px) 50vw,
              (max-width: 1400px) 33vw,
              280px
            "
            style={{ objectFit: 'cover' }}
          />
          {/*
  O grid cria colunas de no mínimo 280px. Então:
  até 600px     1 coluna          ~100vw   → tela até 600px: imagem ocupa 100% da largura
  até 900px     2 colunas         ~50vw    → tela até 900px: imagem ocupa 50% da largura
  até 1400px    3 colunas         ~33vw    → tela até 1400px: imagem ocupa ~33% da largura
  acima disso   colunas fixas de 280px     → fallback: imagem sempre tem 280px
  */}
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
