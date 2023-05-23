import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (min-width: 480px) {
        flex-direction: row;
        justify-content: space-between !important;
        align-items: flex-start;

        > img {
            max-width: 10rem;
        } 

    }
`

export const FooterLogo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
        max-width: 18rem;
    }

    span {
        color: ${props => props.theme["gray-500"]};
        font-size: 0.875rem;
    }

    a {
        color: ${props => props.theme["purple-500"]}
    }

    @media (min-width: 769px) {
        flex-direction: row;
        align-items: flex-start;
        gap: 5rem;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    gap: 0.5rem;

    a {
        color: ${props => props.theme["gray-100"]};

        &:hover {
            color: ${props => props.theme["purple-600"]};
            transition: all .2s ease;
        }
    }
`