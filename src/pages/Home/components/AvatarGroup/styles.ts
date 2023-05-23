import styled from "styled-components";

export const AvatarGroupContainer = styled.img`
    display: inline-block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    box-shadow: 0 0 0 4px ${(props) => props.theme['gray-800']};
    
    :not(:first-child) {
        margin-left: -10px;
    }
`