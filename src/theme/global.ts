import { createGlobalStyle } from 'styled-components';

import '~/theme/font.css';

export default createGlobalStyle`
  * {
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Okta Neue', sans-serif;
    letter-spacing: 0.5px;
    user-select: none;
    transition: fill 300ms, border-color 300ms, color 300ms, background-color 300ms;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
  }

  body {
    margin: 0px;
  }

  a {
    color: #A1ECF7;
    text-decoration: none;
    text-underline-offset: 4px;

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }
`;
