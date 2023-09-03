import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --very-dark-gray: hsl(0, 0%, 17%);
        --dark-gray: hsl(0, 0%, 59%);
    }

    html {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-size: 18px; 
    }
    
    body {
        width: 100%;
        height: 100%;
        min-height: 100vh;
        font-family: 'Rubik', sans-serif;
        color: var(--dark-gray);
        font-weight: 400;
    }
`;
export default GlobalStyles;
