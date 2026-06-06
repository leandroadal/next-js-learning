'use client';

import styled, { css } from 'styled-components';

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 100%;
    width: 100%;
    height: 50vh; /* ou qualquer altura desejada */
    margin-bottom: ${theme.spacings.medium};
  `}
`;
