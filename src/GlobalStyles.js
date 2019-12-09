import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  a{
    text-decoration:none;
    color:#333;
  }
  a:hover{
    text-decoration:none;
    color:#333;
  }


  html {
  }

  body {
    box-sizing: border-box;
    font-family: Open Sans,Helvetica,Arial,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-size: 100%;
    line-height: 1.4;
    color: #333;
    background-color: #f7f8f9;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width:100%;
  }
`;

export default GlobalStyles;