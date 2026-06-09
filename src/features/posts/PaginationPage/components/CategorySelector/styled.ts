'use client';

import styled from 'styled-components';

export const CategoryLink = styled.div`
  position: relative;
  justify-self: center;

  details {
    position: relative;
  }

  summary {
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    padding: 0.8rem 1.4rem;

    border-radius: 999px;

    border: 1px solid ${({ theme }) => theme.colors.primary};

    background: ${({ theme }) => theme.colors.background};

    font-weight: 600;

    user-select: none;

    white-space: nowrap;

    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;
  }

  summary:hover {
    background: ${({ theme }) => theme.colors.primary}15;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  nav {
    position: absolute;

    top: calc(100% + 8px);
    left: 50%;

    transform: translateX(-50%);

    min-width: 220px;

    display: flex;
    flex-direction: column;

    padding: 0.5rem;

    border-radius: 12px;

    background: ${({ theme }) => theme.colors.background};

    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

    z-index: 100;
  }

  nav a {
    padding: 0.75rem 1rem;

    border-radius: 8px;

    text-decoration: none;

    transition: background-color 0.2s ease;
  }

  nav a:hover {
    background: ${({ theme }) => theme.colors.primary}15;
  }

  @media (max-width: 768px) {
    summary {
      padding: 0.6rem 1rem;
      font-size: 1.4rem;
    }

    nav {
      min-width: 180px;
    }
  }

  @media (max-width: 480px) {
    summary {
      max-width: 170px;

      overflow: hidden;
      text-overflow: ellipsis;

      padding: 0.5rem 0.8rem;

      font-size: 1.2rem;
    }

    nav {
      min-width: 160px;
      max-width: 90vw;
    }
  }
`;
