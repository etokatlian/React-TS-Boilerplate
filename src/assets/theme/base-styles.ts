import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import variables from './variables';

const baseStyles = createGlobalStyle`
  ${reset}

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    margin: 0px;
    /* color: ${variables.colors.blue}; */
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    transition-delay: 99999s;
  }

  a {
    text-decoration: none;

    &:focus,
    &:hover {
      text-decoration: none;
    }
  }

  h1 {
    color: ${variables.colors.green};
    font-size: 40px;
  }

  h2 {
    color: ${variables.colors.blue};
    font-size: 18px;
    font-weight: bold;
    line-height: 14px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: ${variables.colors.blue};
    line-height: 24px;
  }
`;

export default baseStyles;
