import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}


*,
*::before,
*::after {
  box-sizing: inherit;
}

 html {
    scroll-behavior: smooth;
  }

 body {
   

    // margin: 0;
  font-family: -apple-system, Montserrat, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #F9EBEA ;
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;}

p {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  text-align: center;
}
ul, nav {
  margin: 0;
  padding: 0;
  list-style: none;
}
a{
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

`;
