import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
    user-select:none;
    outline:none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  html{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family:"Fangzheng ZY", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  }
  body{
    -webkit-overflow-scrolling: touch;
    overflow:scroll;
    margin:0 auto;
    min-height:100vh;
    position: relative;
  }
  #root{
    min-height:100vh;
    background-color:rgba(245, 230, 200);
  }

  @media screen and (min-width: 320px){
      html {
          font-size: 13px;
      }
  }
  @media screen and (min-width: 375px){
      html {
          font-size: 15px;
      }
  }
  @media screen and (min-width: 480px){
      html {
          font-size: 17px;
      }
  }
  @media screen and (min-width: 768px){
      html {
          font-size: 18px;
      }
  }
`;

export default GlobalStyle;
