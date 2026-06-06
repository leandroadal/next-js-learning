'use client';

import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    display: block;       /* volta ao comportamento padrão */
    max-width: 100%;      /* mantém responsiva */
    margin: 0 auto 2rem;
    margin-bottom: ${theme.spacings.medium};
  `}
`;
