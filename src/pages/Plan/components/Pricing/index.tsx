import { Divider } from "../../../../components/Divider";
import { pricingCard } from "../../../../constants";
import {
    BlurPlanPricing,
    PricingCardContainer,
    PricingContainer,
    PricingContent,
    PricingStats,
    Trigger,
} from "./styles";
import { Check } from 'phosphor-react';

import 'aos/dist/aos.css';

interface CardPricingProps {
    title: string;
}

function CardPricing({ title }: CardPricingProps) {
    return (
        <div data-aos="fade-left" data-aos-delay="1000" data-aos-mirror="true">
            <Check size={20} weight="bold" />
            <p>
                {title}
            </p>
        </div>
    )
}

export function Pricing() {
    return (
        <PricingContainer>
            <BlurPlanPricing />
            <PricingContent>
                <div id="pricing">
                    <h2 data-aos="fade-right" >
                        Tudo por apenas R$
                        <em>
                            50,00
                        </em>
                        <span>
                            {" "}39,90 por mês
                        </span>
                    </h2>
                    <p data-aos="fade-right" data-aos-delay="500">
                        Inclui todos os benefícios que oferecemos de todos os parceiros disponíveis
                    </p>
                </div>
                <Trigger href="#" target='_blank'>
                    Criar minha conta
                </Trigger>
            </PricingContent>
            <Divider direction="horizontal" />
            <PricingStats>
                <div>
                    <span data-aos="fade-right" data-aos-delay="1000">
                        E tem mais
                    </span>
                    <h2 data-aos="fade-right" data-aos-delay="1200">
                        Tudo em um só plano
                    </h2>
                    <p data-aos="fade-right" data-aos-delay="1400">
                        Aproveite o melhor dos benefícios em sua região ou onde estiver, voltado a diversos segmentos de consumo.
                    </p>
                </div>

                <PricingCardContainer>
                    {pricingCard.map((card) => {
                        return (
                            <CardPricing title={card.title} key={card.id} />
                        )
                    })}
                </PricingCardContainer>
            </PricingStats>
        </PricingContainer>
    )
}