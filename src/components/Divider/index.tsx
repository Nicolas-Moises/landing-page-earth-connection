import { DividerContainer } from "./styles";

interface DividerProps {
    direction: 'horizontal' | 'vertical'
}

export function Divider({ direction }: DividerProps) {
    return (
        <DividerContainer direction={direction} />
    )
}