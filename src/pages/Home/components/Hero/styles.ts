import styled from "styled-components";

export const HeroContainer = styled.section`
    margin-top: 4rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 4rem;
    > img {
        width: 100%;
    }

    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 6;

        > img {
            width: 100%;
            max-width: 30rem;
        } 

    }
`

export const BlurHomeHero = styled.div`
    position: absolute;
    width: 189px;
    height: 189px;
    z-index: -10;

    /* gradient-associado */

    background: linear-gradient(139.95deg, #485BFF 21.01%, #FF59F8 73.4%);
    filter: blur(200px);
`

export const HeroStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 30rem;

    > img {
        width: 100%;
    }

    p {
        color: ${props => props.theme["gray-300"]};
        line-height: 1.6;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;

      > a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        cursor: pointer;
        background: ${props => props.theme["purple-500"]};
        color: ${props => props.theme.white};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: bold;

        &:hover {
            background: ${props => props.theme["purple-600"]};
            transition: 0.3s ease;
        }
      }
    }
`

export const HeroStatsAvatar = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`

export const HeroAvatarGroup = styled.div`
display: flex;
overflow: hidden;
`

export const HeroStatsValuesContainer = styled.div`
    display: flex;
    gap: 0.4rem;
    align-items: center;

    h4 {
        font-size: 1.5rem;
        line-height: .75rem;
        color: ${props => props.theme["purple-500"]}
    }

    p {
        font-weight: bold;
        color: ${props => props.theme["gray-300"]}
    }
`

export const HeroStatsBenefits = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
`

export const StatWithIconContainer = styled.div`
    display: flex;
    gap: 0.5rem;

    svg {
        color: ${props => props.theme["green-500"]}
    }
    > div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        
        span {
            font-weight: bold;
            font-size: 1.5rem;
            color: ${props => props.theme["purple-500"]};
        }
        h2 {
            font-weight: 400;
            color: ${props => props.theme["gray-100"]};
            font-size: 1rem;
            line-height: 1.6;
        }
    }
`

