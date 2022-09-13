import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --vh: 100%;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    html, body {
        overflow-x: hidden;
    }
    a {
        text-decoration-line: none;
        color: black;
        border-radius: 4px;
        &:hover {
            background-color: #f8f4f4;
        }
    }

`;

export default GlobalStyle;
