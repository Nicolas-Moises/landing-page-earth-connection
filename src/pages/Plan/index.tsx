import { Faq } from "./components/Faq";
import { BlurPlan, PlanContainer } from "./styles";

export function Plan() {
    return (
        <PlanContainer>
            <Faq />
            <BlurPlan />
        </PlanContainer>
    )
}