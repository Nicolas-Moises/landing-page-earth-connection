import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const PricingContainer = styled.div`
    margin: 4rem 0;
    position: relative;
`
export const BlurPlanPricing = styled.div`
    position: absolute;
    width: 189px;
    height: 189px;
    z-index: -10;

    /* gradient-associado */

    background: linear-gradient(139.95deg, #485BFF 21.01%, #FF59F8 73.4%);
    filter: blur(220px);
`

export const PricingContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        em {
            font-family: 'Sora';
            font-size: 2.25rem;
            color: ${props => props.theme["red-500"]};
            text-decoration: line-through;
        }

        h2 {
            font-family: 'Sora';
            font-size: 2.25rem;
            color: ${props => props.theme.white};
            text-align: center;

            span {
                font-size: 2.5rem;
                font-weight: bold;    
            }
        }

        p {
            color: ${props => props.theme["gray-400"]};
            text-align: center;
            max-width: 35rem;
        }
    }

    @media (min-width: 960px) {
        flex-direction: row;
        justify-content: space-between;

        > div {
            h2, p {
                text-align: left;
            }
        } 
    }
`

export const PricingStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 4rem;

    > div {

        display: flex;
        flex-direction: column;
        gap: 0.2rem;

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

        p {
            color: ${props => props.theme["gray-300"]};
            text-align: center;
            max-width: 35rem;
            margin-top: 1rem;
        }
    }

    @media (min-width: 960px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        
        > div {

            max-width: 35rem;
                span, h2, p {
                align-self: flex-start;
                text-align: left;
            }
        }
    }
    
`

export const PricingCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    > div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        border-bottom: 1px solid ${props => props.theme["gray-600"]};
        padding-bottom: 1rem;
        margin-bottom: 1rem;

        svg {
            color: ${props => props.theme["green-500"]};
        }

        p {
            color: ${props => props.theme["gray-400"]};
            max-width: 35rem;
            line-height: 1.3;
            margin-top: 0;
        }
    }
`

export const Trigger = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 8px;
    background:${props => props.theme["purple-500"]};
    color: ${props => props.theme.white};

    &:hover{
        background:${props => props.theme["purple-600"]};
        transition: all 0.2s ease-in;
    }
`