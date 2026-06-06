'use client'; // Precisa ja que esta chamando o theme

import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;

// estiliza o componente Image diretamente
export const PostCardImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
