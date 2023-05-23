import styled from "styled-components";

export const MultiStepContainer = styled.div`
    margin: 2rem 0;`

export const Label = styled.p`
    color: ${props => props.theme["gray-500"]};
    font-size: 0.75rem;
`

export const Steps = styled.div`
    display: grid;
    gap: 0.4rem;
    margin-top: 1rem;
    grid-template-columns: repeat(4, 1fr);
`

interface StepProps {
    active: boolean
}

export const Step = styled.div<StepProps>`
    height: 4px;
    border-radius: 2px;
    background: ${(props) =>
        props.active === true ? props.theme["gray-100"] : props.theme["gray-600"]
    };


`