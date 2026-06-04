'use client'; // ← obrigatório aqui pois o globals styles ta usando o tema padrão

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/globals-styles';
import theme from '@/styles/theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* Disponibiliza o temas para as paginas */}
      {children}
    </ThemeProvider>
  );
}
