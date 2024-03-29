import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyleIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1552567587250'); /* IE9 */
  src: url('./iconfont.eot?t=1552567587250#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1552567587250') format('woff'),
  url('./iconfont.ttf?t=1552567587250') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1552567587250#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  `


  





