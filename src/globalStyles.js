import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html, body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 62.5%; /* 10px */
    }

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyle;
