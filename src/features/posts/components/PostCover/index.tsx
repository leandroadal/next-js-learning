import Image from 'next/image';
import { ImageWrapper } from './styled';

export type PostCoverProps = {
  coverUrl: string;
  alt: string;
};

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
  return (
    <>
      <ImageWrapper>
        <Image src={coverUrl} alt={alt} fill style={{ objectFit: 'contain' }} />
      </ImageWrapper>
    </>
  );
};
