import styled from "styled-components";

export const FaqContainer = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4rem;
    margin-bottom: 8rem;

    span {
        color: ${props => props.theme["purple-500"]};
        max-width: 35rem;
        text-align: center;
    } 

    h2 {
        font-family: 'Sora';
        font-size: 2.25rem;
        color: ${props => props.theme.white};
        text-align: center;
    }

    > div {
        margin-top: 4rem;
        display: flex;
        gap: 3rem;
        flex-wrap: wrap; 
        align-items: flex-start;
        justify-content: center;
    } 
`

export const FaqCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 25rem;

    h4 {
        font-size: 1rem;
        color: ${props => props.theme["gray-100"]};
        font-weight: 500;
    }
    p {
        font-size: 0.875rem;
        color: ${props => props.theme["gray-400"]};
    }
`