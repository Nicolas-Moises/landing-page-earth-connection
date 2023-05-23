import { CTA } from "../../components/CTA";
import { Faq } from "./components/Faq";
import { Pricing } from "./components/Pricing";
import { BlurPlan, PlanContainer } from "./styles";

export function Plan() {
    return (
        <PlanContainer>
            <Pricing />
            <Faq />
            <BlurPlan />
        </PlanContainer>
    )
}