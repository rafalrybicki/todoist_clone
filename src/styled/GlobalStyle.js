import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

   #root {
      width: 100vw;
      height: 100vh;
      padding-top: 44px;
      background-color: #fafafa;
   }

   button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      transition: background-color 0.1s;
      border-radius: 3px;
      border: 1px solid transparent;
   }

   button[disabled] {
      cursor: no-drop;
   }

   ul {
      list-style: none;
   }

   li {
      list-style-type: none;
   }

   a {
      text-decoration: none;
      color: inherit;
   }

`;

export default GlobalStyle;