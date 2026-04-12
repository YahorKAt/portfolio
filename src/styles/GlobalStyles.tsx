import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        color: #666666;
    }

    body {
        background-color: #F5F5F5;
        height: 100vh;
    }
`