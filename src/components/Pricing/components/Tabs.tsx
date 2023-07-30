import * as TabsPrimitive from '@radix-ui/react-tabs'
import { Check } from 'phosphor-react'

export function Tabs() {
  return (
    <TabsPrimitive.Root
      defaultValue="month"
      className="flex flex-col items-center"
    >
      <TabsPrimitive.List className="p-1 rounded-full inline-flex gap-1 items-center bg-zinc-400/10">
        <TabsPrimitive.Trigger
          value="month"
          className="px-3 py-1 text-sm font-bold rounded-full inline-flex gap-6 items-center data-[state=active]:bg-violet-400"
        >
          Mensal
        </TabsPrimitive.Trigger>
        <TabsPrimitive.Trigger
          value="semester"
          className="rounded-full inline-flex gap-6 items-center px-3 py-1 text-sm font-bold data-[state=active]:bg-violet-400"
        >
          Anual
        </TabsPrimitive.Trigger>
      </TabsPrimitive.List>
      <TabsPrimitive.Content
        value="month"
        className="mt-10 w-full max-w-md border-2 border-violet-500 rounded-2xl bg-zinc-600/10 p-10"
      >
        <div className="flex justify-between items-center">
          <p className="font-extrabold text-lg text-zinc-200">Ideal</p>
          <span className="text-sm py-1 px-3 rounded-full bg-cyan-500 font-bold text-zinc-800">
            Mais popular
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <p className="text-zinc-400">
            A plan that scales with your rapidly growing business.
          </p>
          <h2 className="text-7xl font-bold text-zinc-100 tracking-tight">
            R$15{' '}
            <span className="font-medium text-zinc-300 text-base tracking-normal">
              /mês
            </span>
          </h2>
          <button className="py-4 rounded-lg bg-violet-500 font-bold border-2 border-violet-500 hover:bg-transparent transition-colors duration-150">
            Assinar agora
          </button>
          <div className="flex flex-col gap-4 w-full mt-6 items-start">
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Utilizar quantos benefícios quiser no mês
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Participar de sorteios regulares
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Aumentar a rede comercial de sua região
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Possibilidade de avaliar os serviços
              </p>
            </div>
          </div>
        </div>
      </TabsPrimitive.Content>
      <TabsPrimitive.Content
        value="semester"
        className="mt-10 w-full max-w-md border-2 border-violet-500 rounded-2xl bg-zinc-800/20 p-10"
      >
        <div className="flex justify-between items-center">
          <p className="font-extrabold text-lg text-zinc-200">Ideal</p>
          <span className="text-sm py-1 px-3 rounded-full bg-cyan-500 font-semibold text-zinc-800">
            Mais popular
          </span>
        </div>
        <div className="flex flex-col gap-6 mt-6">
          <p className="text-zinc-400">
            A plan that scales with your rapidly growing business.
          </p>
          <h2 className="text-7xl font-bold text-zinc-100 tracking-tight">
            R$ 150{' '}
            <span className="font-medium text-zinc-300 text-base tracking-normal">
              /ano
            </span>
          </h2>
          <button
            className="py-4 rounded-lg bg-violet-500 font-bold border-2 border-violet-500 hover:bg-transparent transition-colors duration-150
                    "
          >
            Assinar agora
          </button>
          <div className="flex flex-col gap-4 w-full mt-6 items-start ">
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Utilizar quantos benefícios quiser no mês
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Participar de sorteios regulares
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Aumentar a rede comercial de sua região
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Check size={20} className="text-green-500" />
              <p className="text-zinc-400 font-semibold">
                Possibilidade de avaliar os serviços
              </p>
            </div>
          </div>
        </div>
      </TabsPrimitive.Content>
    </TabsPrimitive.Root>
  )
}
