import 'styled-components';
import type { Theme } from './theme';

// styled-components tem uma interface interna chamada DefaultTheme,
// que por padrão está vazia: {}
// Aqui a gente "estende" ela com o nosso Theme.
// Depois disso, em QUALQUER componente styled, o TypeScript
// já sabe que "theme" tem .colors.primary, .colors.background, etc.
declare module 'styled-components' {
  // União entre a interface DefaultTheme do 'styled-components' com o theme personalizado

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
