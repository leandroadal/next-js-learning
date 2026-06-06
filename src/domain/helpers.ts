import { PostCover } from './posts';

type ImageFormat = 'large' | 'medium' | 'small' | 'thumbnail';

const PLACEHOLDER = '/images/placeholder.jpg';

export const getCoverUrl = (
  cover: PostCover | null,
  preferredFormat: ImageFormat = 'large',
): string => {
  if (!cover) return PLACEHOLDER;

  const { formats, url } = cover;
  //console.log(formats);

  // Tenta o formato preferido primeiro
  if (formats?.[preferredFormat]?.url) {
    return formats[preferredFormat].url;
  }

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

export const getAltText = (cover: PostCover | null) => {
  if (!cover?.alternativeText) return 'Capa da publicação'; // fallback padrão

  return cover.alternativeText;
};
