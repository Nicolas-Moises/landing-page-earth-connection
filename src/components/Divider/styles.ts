import styled from "styled-components";

interface DividerContainerProps {
    direction: 'horizontal' | 'vertical'
}

export const DividerContainer = styled.div<DividerContainerProps>`
    width: ${(props) =>
        props.direction === "horizontal" ? "100%" : "1px"
    };
    height: ${(props) =>
        props.direction === "horizontal" ? "1px" : "4rem"
    };
    margin: 2rem 0;

    background: ${props => props.theme["gray-600"]};

`