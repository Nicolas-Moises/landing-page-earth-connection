import styled from "styled-components";

export const AboutUsContainer = styled.section`
    h2 {
        font-family: 'Inter';
        font-weight: bold;
        text-align: center;
        font-size: 2.25rem;
        color: ${props => props.theme.white};
        margin: 8rem 0 1rem;

    }
    > p {
        font-weight: 500;
        color: ${props => props.theme["gray-300"]};
        text-align: center;
        margin-bottom: 4rem;
    }
`
export const BlurHomeAboutUs = styled.div`
    position: absolute;
    width: 189px;
    height: 189px;
    z-index: -10;
    right: 0;

    /* gradient-associado */

    background: linear-gradient(139.95deg, #485BFF 21.01%, #FF59F8 73.4%);
    filter: blur(180px);
`

export const BlurHomeAbout = styled(BlurHomeAboutUs)`
    left: 0;
`

export const AboutUsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    position: relative;

    > img {
        width: 100%;
        max-width: 35rem;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between !important;

        > img {
            max-width: 30rem;
        } 

    }
`

export const CardAboutUsContainer = styled.div`
    padding: 1.5rem;
    margin-bottom: 0.875rem;
    border-radius: 0.75rem;
    max-width: 35rem;
    width: 100%;

    background: transparent;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;

    &:hover {
        background:  linear-gradient(to right,#29292E, transparent);
    }
`
interface CardAboutUsIconProps {
    hasFeature: 'true' | 'false'
}

export const CardAboutUsIcon = styled.div<CardAboutUsIconProps>`
    border-radius: 0.75rem;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    
    margin-top: ${(props) =>
        props.hasFeature === "true" ? '-2rem' : 0};

    background: ${props => props.theme["gray-800"]};

    img {
        width: 2rem;
    }
    svg {
        color: ${props => props.theme["green-500"]};
    }
`

export const CardAboutUsContent = styled.div<CardAboutUsIconProps>`
    max-width: 24rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    h4 {
        font-weight: bold;
        text-align: ${(props) =>
        props.hasFeature === "true" ? 'center' : ''};
        color: ${props => props.theme["gray-100"]};
        margin-top: ${(props) =>
        props.hasFeature === "true" ? '1rem' : 0};
    }

    p {
        font-size: 0.875rem;
        color: ${props => props.theme["gray-400"]};
        text-align: ${(props) =>
        props.hasFeature === "true" ? 'center' : ''};
    }
`

export const AboutUsDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    position: relative;
    margin-top: 8rem;
    margin-bottom: 4rem;

    > img {
        width: 100%;
        max-width: 35rem;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between !important;
        align-items: center;
        gap: 3rem;

        > img {
            width: 100%;
            max-width: 30rem;
        }

    }
`

export const AboutUsDescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    max-width: 30rem;

    h2 {
        font-family: 'Sora';
        font-weight: bold;
        font-size: 2.25rem;
        color: ${props => props.theme.white};
        margin: 0 0 1rem;
        text-align: center;
    }

    > p {
        color: ${props => props.theme["gray-400"]};
        margin-bottom: 4rem;
        text-align: center;
        max-width: 35rem;
    }
    @media (min-width: 769px) {
        align-items: flex-start;
        h2 {
            text-align: left;
            margin-top: 0;
        }
        p {
            text-align: left;
            margin-bottom: 1rem;
        }   

    }
    
`

export const AboutUsFeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 8rem;
    
    > h2 {
        font-family: 'Sora';
        font-weight: bold;
        
        font-size: 2.25rem;
        color: ${props => props.theme.white};
        margin: 4rem 0 1rem;
        text-align: center;
    }
    > p {
        color: ${props => props.theme["gray-400"]};
        margin-bottom: 8rem;
        text-align: center;
    }
`

export const AboutUsFeaturesCardsContainer = styled.section`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

export const CardFeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem 2rem;
    background: transparent;
    border-radius: 0.75rem;
    max-width: 20rem;
    &:hover {
        background:  linear-gradient(to right,#29292E, transparent);
    }
`