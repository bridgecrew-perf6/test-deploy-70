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
        min-height: 100%;
        background: var(--background);
    } 

    *, button, input {
        border: 0;
        background: none;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'inter', sans-serif;
        color: var(--black);
    }

    ul {
        list-style: none;
    };

    :root {
        --background: #E8F1F2;
        --black: #000000;
        --red: #A4262C;
        --blue: #13293D;
    }
`