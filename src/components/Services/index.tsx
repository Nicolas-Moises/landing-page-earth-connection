import Balance from 'react-wrap-balancer'
import { Underline } from "../Underline";

import mockiMac from '../../assets/mock-imac.png'
import { cardServices } from "../../constants";
import { CardPlus } from "../Plus/components/CardPlus";

export function Services() {
    return (
        <section className="w-full mt-48">
            <div className="w-full max-w-7xl mx-auto relative">
                <div className='flex flex-col items-center'>
                    <span className="border border-zinc-400/20 bg-zinc-400/5 py-1 px-3 rounded-full text-zinc-400 mb-4 font-xs">
                        Expanda seu negócio
                    </span>
                    <h2 className='text-4xl font-semibold tracking-tightest'>
                        <Balance>
                            Parceria com as empresas
                        </Balance>
                    </h2>
                    <p className='mt-6 text-zinc-400'>
                        Seja um parceiro e receba acessa a essa linda plataforma para o cadastro de seus benefícios
                    </p>
                </div>

                <div className="flex flex-col items-center mt-20">
                    <img src={mockiMac} alt="Mockup" className="max-w-3xl" />
                </div>

                <div id='cards' className='grid grid-cols-4 gap-2 mt-14'>
                    {cardServices.map(service => {
                        return (
                            <CardPlus key={service.id} content={service.content} icon={<service.icon size={20} />} id={service.id} title={service.title} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}