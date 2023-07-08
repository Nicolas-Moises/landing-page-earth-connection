import { Heading, Text } from "@ignite-ui/react";
import Balance from 'react-wrap-balancer'
import { Tabs } from "./components/Tabs";

export function Pricing() {
    return (
        <section className="w-full mt-48" id="pricing">
            <div className="w-full max-w-7xl mx-auto relative">
                <div className='flex flex-col items-center'>
                    <span className="border border-zinc-400/20 bg-zinc-400/5 py-1 px-3 rounded-full text-zinc-400 mb-4 text-xs">
                        Planos
                    </span>
                    <h2 className='text-4xl font-semibold tracking-tightest'>
                        <Balance>
                            Plano justo e sem truques
                        </Balance>
                    </h2>
                    <p className='mt-6 text-zinc-400 max-w-2xl text-center'>
                        Por enquanto temos somente uma opção de plano, que pode ser assinada mensalmente, ou com desconto se for anual.
                    </p>
                </div>

                <div className="mt-10">
                    <Tabs />
                </div>
            </div>
        </section>
    )
}