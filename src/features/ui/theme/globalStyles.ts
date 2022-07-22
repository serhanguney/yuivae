import { createGlobalStyle } from "styled-components";

import { font } from "./typography";

export const GlobalStyles = createGlobalStyle`
  * , *::before , *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body, #__next {
    padding: 0;
    height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${font.base};
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: awlays;
  }

  button {
    background: none;
    border: none;
  }

  ul{
    list-style: none;
  }
`;
