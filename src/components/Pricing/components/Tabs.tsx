import { Heading, Text } from '@ignite-ui/react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { Check } from 'phosphor-react';

export function Tabs() {
    return (
        <TabsPrimitive.Root defaultValue='month' className='flex flex-col items-center'>
            <TabsPrimitive.List className='p-1 rounded-full inline-flex gap-1 items-center bg-zinc-400/10'>
                <TabsPrimitive.Trigger value='month' className='px-3 py-1 text-sm font-bold rounded-full inline-flex gap-6 items-center data-[state=active]:bg-violet-400'>
                    Mensal
                </TabsPrimitive.Trigger>
                <TabsPrimitive.Trigger value='semester' className='rounded-full inline-flex gap-6 items-center px-3 py-1 text-sm font-bold data-[state=active]:bg-violet-400'>
                    Anual
                </TabsPrimitive.Trigger>
            </TabsPrimitive.List>
            <TabsPrimitive.Content value='month' className='mt-10 w-full max-w-md border-2 border-violet-500 rounded-2xl bg-zinc-600/10 p-10'>
                <div className='flex justify-between items-center'>
                    <Text className='font-extrabold text-lg text-zinc-200'>Inicial</Text>
                    <span className='text-sm py-1 px-3 rounded-full bg-cyan-500 font-bold text-zinc-800'>
                        Mais popular
                    </span>
                </div>
                <div className='flex flex-col gap-6 mt-6'>
                    <Text className='text-zinc-400'>
                        A plan that scales with your rapidly growing business.
                    </Text>
                    <Heading className='text-5xl font-bold text-zinc-100'>
                        R$ 30,00 <span className='font-medium text-zinc-300 text-base'>/mês</span>
                    </Heading>
                    <button className='py-4 rounded-lg bg-violet-500 font-bold border-2 border-violet-500 hover:bg-transparent transition-colors duration-150'>
                        Assinar agora
                    </button>
                    <div className='flex flex-col gap-4 w-full mt-6 items-start'>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Utilizar quantos benefícios quiser no mês</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Participar de sorteios regulares</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Aumentar a rede comercial de sua região</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Possibilidade de avaliar os serviços</Text>
                        </div>
                    </div>
                </div>
            </TabsPrimitive.Content>
            <TabsPrimitive.Content value='semester' className='mt-10 w-full max-w-md border-2 border-violet-500 rounded-2xl bg-zinc-800/20 p-10'>
                <div className='flex justify-between items-center'>
                    <Text className='font-extrabold text-lg text-zinc-200'>Inicial</Text>
                    <span className='text-sm py-1 px-3 rounded-full bg-cyan-500 font-semibold text-zinc-800'>
                        Mais popular
                    </span>
                </div>
                <div className='flex flex-col gap-6 mt-6'>
                    <Text className='text-zinc-400'>
                        A plan that scales with your rapidly growing business.
                    </Text>
                    <Heading className='text-5xl font-bold text-zinc-100'>
                        R$ 240,00 <span className='font-medium text-zinc-300 text-base'>/ano</span>
                    </Heading>
                    <button className='py-4 rounded-lg bg-violet-500 font-bold border-2 border-violet-500 hover:bg-transparent transition-colors duration-150
                    '>
                        Assinar agora
                    </button>
                    <div className='flex flex-col gap-4 w-full mt-6 items-start '>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Utilizar quantos benefícios quiser no mês</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Participar de sorteios regulares</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Aumentar a rede comercial de sua região</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Possibilidade de avaliar os serviços</Text>
                        </div>
                        <div className='flex items-center gap-4'>
                            <Check size={20} className='text-green-500' />
                            <Text className='text-zinc-400 font-semibold'>Nesse plano, são R$ 20,00 por mês</Text>
                        </div>

                    </div>
                </div>
            </TabsPrimitive.Content>
        </TabsPrimitive.Root>
    )
}
