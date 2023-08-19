import { createGlobalStyle } from 'styled-components';

import OktaNeueBold from '../assets/fonts/OktaNeue-Bold.ttf';
import OktaNeueLight from '../assets/fonts/OktaNeue-Light.ttf';
import OktaNeueMedium from '../assets/fonts/OktaNeue-Medium.ttf';
import OktaNeueRegular from '../assets/fonts/OktaNeue-Regular.ttf';
import OktaNeueSemiBold from '../assets/fonts/OktaNeue-SemiBold.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Okta Neue';
    font-weight: 200;
    src: url(${OktaNeueLight})  format('truetype');
  }

  @font-face {
    font-family: 'Okta Neue';
    font-weight: 400;
    src: url(${OktaNeueRegular})  format('truetype');
  }

  @font-face {
    font-family: 'Okta Neue';
    font-weight: 500;
    src: url(${OktaNeueMedium})  format('truetype');
  }

  @font-face {
    font-family: 'Okta Neue';
    font-weight: 600;
    src: url(${OktaNeueSemiBold})  format('truetype');
  }

  @font-face {
    font-family: 'Okta Neue';
    font-weight: 700;
    src: url(${OktaNeueBold})  format('truetype');
  }

  * {
    color: #D0D0D1;
    font-family: 'Okta Neue', sans-serif;
    letter-spacing: 1px;
  }

  body {
    margin: 0px;
  }
`;
