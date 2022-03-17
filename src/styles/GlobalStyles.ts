import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
        scrollbar-color: blue orange;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-thumb {
        background: black;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 20px;       /* roundness of the scroll thumb */
    }

    html {
        scroll-behavior: smooth;
        font-size: var(--smaller-font-size);

        @media (min-width: 320px) {
            font-size: var(--small-font-size);
        }

        @media (min-width: 425px) {
            font-size: var(--normal-font-size);
        }
    }

    body {
        background: var(--bg-color);
        font-family: 'inter', sans-serif;
    }

    ul {
        list-style: none;
    };

    li {
        list-style: none;
    }

    :root {
        --bg-color: #E8F1F2;
        --black: #000000;
        --red: #A4262C;
        --blue: #13293D;
        --icon-color: #000;

        --height-header: 50px;

         /* font sizes */
        --big-font-size: 2rem;
        --h1-font-size: 1.5rem;
        --h2-font-size: 1.25rem;
        --h3-font-size: 1.125rem;
        --normal-font-size: .938rem;
        --small-font-size: .813rem;
        --smaller-font-size: .75rem;

        --font-light: 300;
        --font-medium: 500;
        --font-semi-bold: 600;
        --font-bold: 700;

        --z-tooltip: 10;
        --z-fixed: 100;
        --z-modal: 1000;
    }
`