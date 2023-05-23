import { Phone, PaperPlaneTilt, MapPin, WhatsappLogo } from 'phosphor-react';
import { ButtonLink } from '../../../../components/Button';
import { CardAboutUsIcon } from '../AboutUs/styles';
import { BlurHomeContact, ContactContainer, ContactContentContainer, ContactContentItem, ContactHeading } from './styles';

import 'aos/dist/aos.css';

export function Contact() {
    return (
        <ContactContainer>
            <BlurHomeContact />
            <ContactHeading data-aos="fade-right">
                <h2>
                    Está com dúvidas? Fale conosco!
                </h2>
                <p>
                    Entre em contato conosco para ouvirmos suas dúvidas e te passarmos todos os detalhes.
                </p>
                <ButtonLink variant='primary' href="https://wa.me/5511954264849" target='_blank' >
                    <WhatsappLogo size={24} weight='fill' />
                    Entrar em contato
                </ButtonLink>
            </ContactHeading>
            <ContactContentContainer data-aos="fade-left">
                <ContactContentItem>
                    <CardAboutUsIcon hasFeature='false'>
                        <Phone size={24} />
                    </CardAboutUsIcon>
                    <span>
                        (11) 99999-9999
                    </span>
                </ContactContentItem>
                <ContactContentItem>
                    <CardAboutUsIcon hasFeature='false'>
                        <PaperPlaneTilt size={24} />
                    </CardAboutUsIcon>
                    <span>
                        flavio.felipe@earthconnection.com.br
                    </span>
                </ContactContentItem>
                <ContactContentItem>
                    <CardAboutUsIcon hasFeature='false'>
                        <MapPin size={24} />
                    </CardAboutUsIcon>
                    <span>
                        00000-000 • R. Avenida brasil, 744 - SP
                    </span>
                </ContactContentItem>
            </ContactContentContainer>
        </ContactContainer>
    )
}