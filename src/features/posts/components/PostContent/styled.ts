'use client';

import styled from 'styled-components';
import { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      margin-bottom: ${theme.spacings.small};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      line-height: 1.8;
      margin-bottom: ${theme.spacings.medium};
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: underline;
    }

    img {
      width: 100%;
      height: auto;
    }

    ul, ol {
      padding-left: 2rem;
      margin-bottom: ${theme.spacings.medium};
    }

    blockquote {
      border-left: 4px solid ${theme.colors.primary};
      padding-left: ${theme.spacings.small};
      color: ${theme.colors.darkGray};
      font-style: italic;
    }

    code {
      background: ${theme.colors.lightGray};
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-size: ${theme.font.sizes.medium};
    }

    pre {
      background: ${theme.colors.lightGray};
      padding: ${theme.spacings.medium};
      border-radius: 8px;
      overflow-x: auto;
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
