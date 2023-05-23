import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* a:focus {
        outline: 0;

        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    } */

    body {
        background-color: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-100']};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    body, input, textarea, button{
        font: 400 1rem Roboto, sans-serif;
    }

    ul, li {
        list-style: none;
    }
    
    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
        background-color: #121214;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #202024;
        border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: hsl(228, 8%, 54%);
    }

    @media (max-width: 768px) {
        html {
            font-size: 85%;
        }
    }

`