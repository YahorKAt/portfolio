import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.tsx";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: clamp(12px, 0.8vw, 100%);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: ${theme.colors.font};
        line-height: 1.44444;
        scroll-padding-top: 80px;
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
        width: 15px;
    }

    *::-webkit-scrollbar-thumb {
        background: ${theme.colors.font};
        border-radius: 10px;
        border: 4px solid transparent;
        background-clip: content-box;
        transition: all 0.2s ease;
    }

    :hover::-webkit-scrollbar-thumb {
        border: 6px solid transparent;
    }

    body {
        background-color: ${theme.colors.primaryBg};
        min-height: 100vh;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        border: none;
        background-color: unset;
    }

    :focus-visible {
        outline: 2px black solid;
        border-radius: 2px;
    }
`