import { createGlobalStyle } from "styled-components";

import { font, typography } from "./typography";

export const GlobalStyles = createGlobalStyle`
  * , *::before , *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body, #__next {
    padding: 0;
    height: 100vh;
    width: 100vw;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${font.base};
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: always;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  ul{
    list-style: none;
  }
  input{
    ${typography.p};
    border: none;
  }
  a{
    text-decoration: none;
  }
  a,button {
    cursor: pointer;
  }
`;
