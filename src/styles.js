import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Comfortaa', cursive;
    font-size: 14px;
    color: #ecf0f1;
    background-color: #263e50;
    -webkit-font-smoothing: antialiased !important;
  }
`;
