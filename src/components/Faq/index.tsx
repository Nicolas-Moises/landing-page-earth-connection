import { Heading, Text } from "@ignite-ui/react";

import Balance from 'react-wrap-balancer'
import { faqCard } from "../../constants";
import { Underline } from "../Underline";

export function Faq() {
    return (
        <section className="w-full mt-48">
            <div className="w-full max-w-7xl mx-auto relative">
                <div className='flex flex-col items-center'>
                    <Text size='xs' className="border border-zinc-400/20 bg-zinc-400/5 py-1 px-3 rounded-full text-zinc-400 mb-4">
                        Dúvidas?
                    </Text>
                    <Heading className='text-4xl font-semibold tracking-tightest'>
                        <Balance>
                            <span className='relative'>
                                <div className='absolute top-10 left-0 -rotate-6'>
                                    <Underline />
                                </div>
                                Perguntas
                            </span> frequentes sobre a Earth Connection
                        </Balance>
                    </Heading>
                    <Text className='mt-6 text-zinc-400 max-w-2xl text-center'>
                        Caso sua dúvida não esteja aqui, você pode nos contatar para um bate papo sobre tudo.
                    </Text>
                </div>

                <div className="grid grid-cols-3 gap-x-6 gap-y-10 mt-20">
                    {faqCard.map(card => {
                        return (
                            <div key={card.id} className="flex flex-col items-start gap-4">
                                <Heading className="font-semibold text-lg text-zinc-200">{card.title}</Heading>
                                <Text className="text-sm text-zinc-400 leading-relaxed">{card.subtitle}</Text>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}