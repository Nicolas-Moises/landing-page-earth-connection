import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
} from "phosphor-react";
import { logoFooter } from "../../assets";
import { FooterContainer, FooterLinks, FooterLogo } from "./styles";

import 'aos/dist/aos.css';

export function Footer() {
    return (
        <FooterContainer>
            <FooterLogo>
                <img src={logoFooter} data-aos="zoom-in" />
                <span data-aos="zoom" data-aos-delay="500">
                    © Desenvolvido por
                    <a href="https://www.linkedin.com/in/nicolas-moises-ba91ba1a3/" target="_blank">
                        {" "}
                        Nicolas
                    </a>{" "}
                    e{" "}
                    <a href="https://www.linkedin.com/in/p-medeiros/" target="_blank">
                        {" "}
                        Pedro
                    </a>{" "}
                    ツ. Earth Connection. <br />
                    Todos os direitos reservados 2022
                </span>
            </FooterLogo>
            <FooterLinks>
                <a
                    href=""
                    target="_blank"
                    data-aos="zoom" data-aos-delay="700"
                >
                    <InstagramLogo weight="fill" size={24} />
                </a>
                <a
                    href=""
                    target="_blank"
                    data-aos="zoom" data-aos-delay="900"
                >
                    <FacebookLogo weight="fill" size={24} />
                </a>
                <a
                    href=""
                    target="_blank"
                    data-aos="zoom" data-aos-delay="1000"
                >
                    <LinkedinLogo weight="fill" size={24} />
                </a>
            </FooterLinks>
        </FooterContainer>
    )
}