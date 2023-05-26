import Balance from 'react-wrap-balancer'

import underline from '../../assets/underline.svg'
import heroImage from "../../assets/mock-mobile-2.png";

export function Hero() {
    return (
        <section className="w-full mt-14 relative">
            <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto relative">
                <div className="flex flex-col items-start mb-20">
                    <p className="border border-zinc-400/20 bg-zinc-400/5 py-1 px-3 rounded-full text-zinc-400 mb-4 text-xs">
                        Confira as ofertas de sua região
                    </p>
                    <h2 className="text-7xl font-bold font-sans tracking-tight text-zinc-100 leading-tight">
                        <Balance>
                            Os melhores <span className="relative"><img src={underline} className="absolute right-0 top-20 -rotate-3 opacity-70" alt="Underline" />
                                {' '}benefícios</span>  em{' '}
                            <span className="bg-clip-text text-transparent bg-gradient-to-t from-cyan-300 to-violet-300">
                                poucos passos
                            </span>
                        </Balance>
                    </h2>

                    <p className="text-zinc-400 max-w-[500px] my-6">
                        <Balance>
                            Conheça a Earth Connection, uma plataforma voltada ao bem estar, onder
                            os melhores benefícios da região, você encontra aqui.
                        </Balance>
                    </p>


                    <button className='py-4 px-5 rounded-full border-2 border-violet-400 bg-violet-400/60 text-white font-bold z-40
                        hover:bg-transparent transition-colors duration-150'
                    >
                        Começar agora
                    </button>
                </div>
                <div className="bg-hero w-1/4 h-[300px] blur-lg absolute" />
                <img src={heroImage} className="object-cover w-1/3" alt="" data-aos="zoom" data-aos-delay="500" />
            </div>
        </section>
    )
}