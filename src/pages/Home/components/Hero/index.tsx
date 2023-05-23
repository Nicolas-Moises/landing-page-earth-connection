import { BlurHomeHero, HeroAvatarGroup, HeroContainer, HeroStats, HeroStatsAvatar, HeroStatsBenefits, HeroStatsValuesContainer, StatWithIconContainer } from "./styles";
import { heroImage } from "../../../../assets";
import { usersAvatar } from "../../../../constants";

import { Divider } from "../../../../components/Divider";
import { CheckCircle } from "phosphor-react";
import { Link } from "react-router-dom";

import 'aos/dist/aos.css';

interface HeroStatsValuesProps {
    title: string;
    subtitle: string;
}

function HeroStatsValues({ title, subtitle }: HeroStatsValuesProps) {
    return (
        <HeroStatsValuesContainer>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </HeroStatsValuesContainer>
    )
}

interface StatWithIconProps {
    title: string;
    subtitle: string;
}

function StatWithIcon({ title, subtitle }: StatWithIconProps) {
    return (
        <StatWithIconContainer>
            <CheckCircle size={40} weight="fill" />
            <div>
                <span>{title}</span>
                <h2>{subtitle}</h2>
            </div>
        </StatWithIconContainer>
    )

}

export function Hero() {

    return (
        <HeroContainer>
            <BlurHomeHero />
            <HeroStats data-aos="fade-right">
                <p>
                    Os melhores benefícios da região você encontra aqui, basta escolher o benefício dentre a listagem dos
                    disponíveis a sua volta, ir ao estabelecimento e apresentar o número da matrícula.
                </p>

                <div>
                    <HeroStatsAvatar>
                        <HeroAvatarGroup>

                        </HeroAvatarGroup>
                        <HeroStatsValues title="+200" subtitle="pessoas estão usando" />
                    </HeroStatsAvatar>

                    <Link to='/plan'>
                        Assinar clube de benefícios
                    </Link>


                    <Divider direction="horizontal" />
                    <HeroStatsBenefits>

                        <StatWithIcon title="+30" subtitle="Benefícios disponíveis" />
                        <StatWithIcon title="+1000" subtitle="Benefícios utilizados" />
                    </HeroStatsBenefits>
                </div>

            </HeroStats>
            <img src={heroImage} alt="" data-aos="fade-left" />
        </HeroContainer>
    )
}