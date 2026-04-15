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
    }

    :focus-visible {
        outline: none; /* убираем стандартный, чтобы не накладывался */
        box-shadow: 0 0 0 2px #232121; /* ваша "рамка" */
        border-radius: 5px;
        transition: box-shadow 0.2s ease, filter 0.2s ease;
        padding: 0 1px;
    }
`