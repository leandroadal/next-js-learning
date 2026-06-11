'use client'; // Precisa ja que esta chamando o theme

import styled, { css } from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const PostCardCover = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 100%;
    height: 30vh;
    margin-bottom: ${theme.spacings.small};
  `}

  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const PostCardHeading = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    a {
      color: ${theme.colors.darkGray};
    }
  `}
`;
