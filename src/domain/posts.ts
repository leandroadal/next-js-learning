export type PostID = number;

export type PostAuthor = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCategory = {
  id: PostID;
  documentId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null | string;
  size: number;
  width: number;
  height: number;
  sizeInBytes?: number;
  provider_metadata?: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  documentId: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: null;
  previewUrl: null | string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  formats: {
    thumbnail?: PostCoverFormat;
    small?: PostCoverFormat;
    medium?: PostCoverFormat;
    large?: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  documentId: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: PostCover | null;
  author: PostAuthor | null;
  category: PostCategory | null;
};

export type PostMeta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type PostsResponse = {
  data: PostData[];
  meta: PostMeta;
};
