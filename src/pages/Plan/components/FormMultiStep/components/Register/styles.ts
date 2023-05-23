import styled from "styled-components";

export const Container = styled.div`
    max-width: 32rem;
`

export const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;

    label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        span {
            font-size: 0.875rem;
            color: ${props => props.theme["gray-300"]};
            font-weight: semibold;
        }

        input {
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            background: ${props => props.theme["gray-800"]};
            color: ${props => props.theme["gray-300"]};
            border: none;
            font-size: 0.875rem;

            :focus {
                outline: 0;
                box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
            }

            ::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }
        
    }
    button {
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            background: ${props => props.theme["purple-500"]};
            color: ${props => props.theme.white};
            border: none;
            font-size: 0.875rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme["purple-600"]};
                transition: 0.2s;
            }
        }
`

export const FormError = styled.p`
    color: ${props => props.theme["red-500"]};
    font-size: 0.875rem;
`