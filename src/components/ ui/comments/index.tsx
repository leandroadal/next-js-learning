'use client';

import { SITE_URL } from '@/config/app-config';
import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';

type CommentsProps = {
  slug: string;
  title: string;
};

export function Comments({ slug, title }: CommentsProps) {
  const disqusConfig = {
    url: `${SITE_URL}/post/${slug}`,
    identifier: slug,
    title,
    language: 'pt_BR',
  };

  return (
    <Container>
      <DiscussionEmbed shortname="leu-blog" config={disqusConfig} />
    </Container>
  );
}
