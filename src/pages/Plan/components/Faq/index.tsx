import { faqCard } from "../../../../constants";
import { FaqCardContainer, FaqContainer } from "./styles";

interface FaqCardProps {
    title: string;
    subtitle: string;
}

function FaqCard({ title, subtitle }: FaqCardProps) {
    return (
        <FaqCardContainer>
            <h4 data-aos="fade-up">
                {title}
            </h4>
            <p data-aos="fade-up" data-aos-delay="500">
                {subtitle}
            </p>
        </FaqCardContainer>
    )
}

export function Faq() {
    return (
        <FaqContainer>
            <span data-aos="fade-up">
                Confira nossa FAQ
            </span>
            <h2 data-aos="fade-up" data-aos-delay="500">
                Perguntas frequentes
            </h2>

            <div>
                {faqCard.map((card) => {
                    return (
                        <FaqCard title={card.title} key={card.id} subtitle={card.subtitle} />
                    )
                })}
            </div>
        </FaqContainer>
    )
}