import {
    FacebookLogo,
    InstagramLogo,
    LinkedinLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="flex items-center justify-between w-full max-w-7xl mx-auto py-14 mt-20 border-t border-zinc-400/20">
            <div className="flex items-center gap-10">
                <img src='' />
                <span className="text-xs text-zinc-400">
                    
                     © Earth Connection. 
                    Todos os direitos reservados 2023
                    <br />
                    Desenvolvido com 💜 por
                    <a href="https://www.linkedin.com/in/nicolas-moises-ba91ba1a3/" target="_blank">
                        {" "}
                        Nicolas
                    </a>{" "}
                    e{" "}
                    <a href="https://www.linkedin.com/in/p-medeiros/" target="_blank">
                        {" "}
                        Pedro
                    </a>
                </span>
            </div>
            <div className="flex items-center gap-4">
                <Link
                    to="#"
                    target="_blank"
                    data-aos="zoom" data-aos-delay="700"
                >
                    <InstagramLogo weight="bold" size={22} />
                </Link>
                <Link
                    to="#"
                    target="_blank"
                    data-aos="zoom" data-aos-delay="900"
                >
                    <FacebookLogo weight="bold" size={22} />
                </Link>
                <Link
                    to="#"
                    target="_blank"
                    data-aos="zoom" data-aos-delay="1000"
                >
                    <LinkedinLogo weight="bold" size={22} />
                </Link>
            </div>
        </footer>
    )
}