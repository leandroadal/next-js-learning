const theme = {
  colors: {
    primary: '#010101',
    secondary: '#0070f3',
    background: '#fff',
    text: '#333',
    white: '#fafafa',
    lightGray: '#dddddd',
    gray: '#999999',
    darkGray: '#333333',
  },
  spacings: {
    small: '1rem',
    medium: '2rem',
    large: '3rem',
  },
  font: {
    sizes: {
      small: '1.2rem',
      medium: '1.8rem',
      large: '2rem',
      superLarge: '5rem',
    },
  },
};

export type Theme = typeof theme;
export default theme;
