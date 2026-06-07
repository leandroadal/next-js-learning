import ReactMarkdown from 'react-markdown';
import { Container } from './styled';

export type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return (
    <Container>
      <ReactMarkdown>{content}</ReactMarkdown>
    </Container>
  );
}
