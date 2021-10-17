import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};

    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    *, *::after, *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        text-decoration: none;
        outline: 0;
        font-family: 'S-CoreDream-3Light';
        font-weight: 600;
    }

    a, a:active {
        user-select: none;
        font-family: 'STIX Two Text', serif;
        color: black;
    }

    *::selection {
        background: #171717;
        color: #fff;
    }

    html {
        background-color: #f5f5f5;
    }
`;