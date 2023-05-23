import styled from "styled-components";

export const PlanContainer = styled.section`
    position: relative;
`

export const BlurPlan = styled.div`
    position: absolute;
    width: 189px;
    height: 189px;
    z-index: -10;
    right: 0;
    bottom: 100px;

    /* gradient-associado */

    background: linear-gradient(139.95deg, #485BFF 21.01%, #FF59F8 73.4%);
    filter: blur(180px);
`