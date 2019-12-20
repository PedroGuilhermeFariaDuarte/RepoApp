import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,*::before,*::after {
    box-sizing:border-box;
    margin:0px;
    outline:none;
    padding:0;
  }

  html,#root {
    min-height:100%;
  }

  body {
    background-color:#7159c1;
    -webkit-font-size-smoothing: antialiased !important;
    font-size:14px;
    font-family:Arial, Helvetica, sans-serif
  }

  button {
    cursor:pointer;
  }
`;
