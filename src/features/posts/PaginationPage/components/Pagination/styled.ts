'use client';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr auto 1fr;

  align-items: center;

  margin: ${({ theme }) => theme.spacings.large} 0;
`;

export const PreviousLink = styled.div`
  justify-self: start;
`;

export const NextLink = styled.div`
  justify-self: end;
`;
