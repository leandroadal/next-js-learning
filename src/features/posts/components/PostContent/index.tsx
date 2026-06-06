import ReactMarkdown from 'react-markdown';

export type PostContentProps = {
  content: string;
};

export function PostContent({ content }: PostContentProps) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}
