import { PostCover } from './posts';

const PLACEHOLDER = '/images/placeholder.jpg';

export const getCoverUrl = (cover: PostCover | null): string => {
  if (!cover) return PLACEHOLDER;

  const { formats, url } = cover;
  return (
    formats?.large?.url ||
    formats?.medium?.url ||
    formats?.small?.url ||
    formats?.thumbnail?.url ||
    url
  );
};

export const getCoverSize = (cover: PostCover | null) => {
  if (!cover) return { width: 800, height: 600 }; // fallback padrão

  return {
    width: cover.width,
    height: cover.height,
  };
};
