import Link from 'next/link';
import { Container } from './styled';
import { Date } from '@/components/ ui/date';

export type PostDetailsProps = {
  date: string;
  author: string;
  category: string;
};

export const PostDetails = ({ author, category, date }: PostDetailsProps) => {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} |{' '}
      <Link as={`/post/page/1/${category}`} href="/post/page/[...param]">
        {category}
      </Link>
    </Container>
  );
};
