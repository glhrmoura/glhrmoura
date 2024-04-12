const colors = {
  white: '#FFFFFF',
  black: '#000000',
  blue: {
    light: '#A1ECF7',
    dark: '#0B141A',
  },
  gray: {
    light: '#D0D0D1',
  },
  green: {
    light: '#23C063'
  },
};

export const dark = {
  colors: {
    text: colors.gray.light,
    border: colors.gray.light,
    background: colors.blue.dark,
    foreground: colors.white,
    highlight: colors.green.light,
  },
};

export const light = {
  colors: {
    text: colors.black,
    border: colors.black,
    background: colors.white,
    foreground: colors.blue.dark,
    highlight: colors.green.light,
  }
};

export type Theme = typeof dark;
