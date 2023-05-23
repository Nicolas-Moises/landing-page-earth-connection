import styled from "styled-components";
import { BlurHomeAboutUs } from "../AboutUs/styles";

export const ContactContainer = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    
    align-items: center;
    gap: 3rem;
    margin-bottom: 4rem;

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between !important;
        align-items: center;
    }
`

export const BlurHomeContact = styled(BlurHomeAboutUs)`
    right: 0;
    filter: blur(250px);
`

export const ContactHeading = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 30rem;

    h2 {
        font-family: 'Sora';
        font-weight: bold;
        
        font-size: 2.25rem;
        color: ${props => props.theme.white};
        margin: 0 0 1rem;
        text-align: center;
    }

    p {
        color: ${props => props.theme["gray-400"]};
        margin-bottom: 2rem;
        text-align: center;
    }

    @media (min-width: 769px) {
        h2, p {
            text-align: left;
        }
    }
`

export const ContactContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ContactContentItem = styled.div`
    display: flex;
    gap: 0.7rem;
    align-items: center;
    padding: 0.5rem 0.8rem;
    border-radius: 0.75rem;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));

    &:hover {
        background:  linear-gradient(to right,#29292E, transparent);
    }
`

