import { aboutCompany, cardDash } from "../../../../assets";
import { cardAbout, cardFeatures } from "../../../../constants";
import {
    AboutUsContainer,
    AboutUsContent,
    AboutUsDescriptionContainer,
    AboutUsDescriptionContent,
    AboutUsFeaturesCardsContainer,
    AboutUsFeaturesContainer,
    BlurHomeAbout,
    BlurHomeAboutUs,
    CardAboutUsContainer,
    CardAboutUsContent,
    CardAboutUsIcon,
    CardFeaturesContainer
} from "./styles";

import { ButtonLink } from "../../../../components/Button";

import 'aos/dist/aos.css';

interface CardAboutUsProps {
    title: string;
    content: string;
    img: string
}

function CardAboutUs({ title, content, img }: CardAboutUsProps) {
    return (
        <CardAboutUsContainer>
            <CardAboutUsIcon hasFeature="false">
                <img src={img} alt="" />
            </CardAboutUsIcon>
            <CardAboutUsContent hasFeature="false">
                <h4>{title}</h4>
                <p>{content}</p>
            </CardAboutUsContent>
        </CardAboutUsContainer>
    )
}

interface CardFeaturesProps {
    title: string;
    content: string;
    icon: string
}

function CardFeatures({ title, content, icon }: CardFeaturesProps) {
    return (
        <CardFeaturesContainer data-aos="fade-up" data-aos-delay="500">
            <CardAboutUsIcon hasFeature="true">
                <img src={icon} alt="" />
            </CardAboutUsIcon>
            <CardAboutUsContent hasFeature="true">
                <h4>{title}</h4>
                <p>{content}</p>
            </CardAboutUsContent>
        </CardFeaturesContainer>
    )
}

export function AboutUs() {
    return (
        <AboutUsContainer>
            <h2 data-aos="fade-up">
                Venha fazer parte dessa conexão também!
            </h2>
            <p data-aos="fade-up" data-aos-delay="500">
                Confira as vantagens que é fazer parte desta conexão.
            </p>

            <AboutUsContent>
                <BlurHomeAboutUs />

                <div data-aos="fade-right" >
                    {cardAbout.map((card) => {
                        return (
                            <CardAboutUs title={card.title} content={card.content} img={card.icon} key={card.id} />
                        )
                    })}
                </div>
                <img src={aboutCompany} alt="Mock" data-aos="fade-left" />
            </AboutUsContent>
        </AboutUsContainer>
    )
}

export function AboutUsDescription() {
    return (
        <AboutUsDescriptionContainer>
            <BlurHomeAbout />
            <img src={cardDash} alt="Dash illustration" data-aos="fade-right" />
            <AboutUsDescriptionContent data-aos="fade-left">
                <h2>
                    Qualidade & conexão é com a gente
                </h2>
                <p data-aos="fade-left">
                    A Earth Connection surgiu para beneficiar a vida das pessoas e estimular a conexão dentro dos bairros e
                    cidades, e em breve de todo os território nacional. O intuito é desenvolver o comércio local e promover
                    a comunidade, unindo os consumidores e empresários em uma camada mais próxima. O conceito é simples, o
                    empresário divulga sua empresa e promove os benefícios dentro da plataforma, e os associados, no caso
                    consumidores, aproveitam essas promoções.
                </p>
                <ButtonLink href="#" target='' data-aos="fade-left">
                    Ler mais
                </ButtonLink>
            </AboutUsDescriptionContent>
        </AboutUsDescriptionContainer>
    )
}

export function AboutUsFeatures() {
    return (
        <AboutUsFeaturesContainer>
            <h2 data-aos="fade-up">
                Encontre o melhor benefício em poucos passos
            </h2>
            <p data-aos="fade-up" data-aos-delay="500">
                Pronto pra embarcar nessa? Confira mais algumas vantagens!
            </p>

            <AboutUsFeaturesCardsContainer>
                {cardFeatures.map((card) => {
                    return (
                        <CardFeatures key={card.id} title={card.title} content={card.content} icon={card.icon} />
                    )
                })}
            </AboutUsFeaturesCardsContainer>
        </AboutUsFeaturesContainer>
    )
}