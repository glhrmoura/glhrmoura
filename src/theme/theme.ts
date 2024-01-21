const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blue: {
    light: '#A1ECF7',
    dark: '#1C2541',
  },
  gray: {
    light: '#D0D0D1',
  },
};

export const dark = {
  colors: {
    text: colors.gray.light,
    border: colors.gray.light,
    background: colors.blue.dark,
    highlight: colors.blue.light,
  },
};

export const light = {
  colors: {
    text: colors.black,
    border: colors.black,
    background: colors.white,
    highlight: colors.blue.light,
  }
};

export type Theme = typeof dark;
