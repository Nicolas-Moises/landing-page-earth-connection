import { Heading, Text } from '@ignite-ui/react'
import featureSignup from '../../assets/feature-1.png'
import featurePayment from '../../assets/feature-2.png'
import featureToken from '../../assets/feature-3.png'
import arrowDown from '../../assets/arrow-down.png'

import Balance from 'react-wrap-balancer'
import { Underline } from '../Underline'
import { Star } from 'phosphor-react'

export function Features() {
  return (
    <section className="w-full mt-20 relative">
      <div className="absolute left-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500/30 to-violet-500 opacity-50 blur-full" />
      <div className="w-full max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center justify-center mb-8">
          <img src={arrowDown} className="mb-8" />
          <h2 className="text-4xl font-semibold tracking-tightest">
            <Balance>
              Simples e{' '}
              <span className="relative">
                <div className="absolute top-10 right-0">
                  <Underline />
                </div>
                prático
              </span>
            </Balance>
          </h2>
          <p className="mt-6 text-zinc-400">
            Conheça a Earth Connection e faça parte dessa conexão.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mt-14">
          <div className="relative p-8 rounded-3xl bg-zinc-950 border border-zinc-400/10 overflow-hidden flex flex-col items-center">
            <img src={featureSignup} className="md:w-full object-cover" />
            <div className="mt-6 flex flex-col gap-4">
              <p className="font-semibold text-zinc-200 text-lg">
                Sign-up simples
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Cadastro rápido com poucos campos de preenchimento e informações
                de perfil editáveis. Após o cadastro você terá acesso ao painel
                de benefícios ativos.
              </p>
            </div>
          </div>

          <div
            className="px-8 pt-8 pb-0 rounded-3xl flex flex-col-reverse lg:items-start gap-8 bg-zinc-950 border border-zinc-400/10 lg:col-span-2 
                    lg:row-span-1 row-span-2 lg:flex-row items-center
                    "
          >
            <img
              src={featurePayment}
              className="w-full max-w-xs object-cover"
            />
            <div className="mt-6 flex flex-col justify-between items-center gap-4 lg:w-2/3 flex-1 h-full pb-16">
              <div className="">
                <p className="font-semibold text-zinc-200 text-lg mb-4 text-center">
                  Assinatura facilitada
                </p>
                <p className="text-zinc-400 leading- mb-2 text-sm">
                  Diversas formas de pagamento também em poucos passos para a
                  ativação do plano e possibilidade de utilizar os benefícios
                  desejados.
                </p>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  Antes de fechar o plano, leia os termos de uso, por lá
                  constará todas as informações relacionadas a aderência do
                  plano, vantagens e política de cancelamento.
                </p>
              </div>

              <button className="py-4 px-5 rounded-full border-2 border-violet-400 bg-violet-400/60 text-white font-bold hover:bg-transparent transition-colors duration-150">
                Assinar agora mesmo
              </button>
            </div>
          </div>

          <div
            className="px-8 pt-8 pb-0 rounded-3xl flex flex-col items-start gap-8 bg-zinc-950 border border-zinc-400/10 lg:col-span-2 row-span-2
                    lg:row-span-1"
          >
            <div className="mt-6 flex flex-col gap-4 flex-1">
              <p className="font-semibold text-zinc-200 text-lg mb-4">
                Prático e seguro
              </p>
              <p className="text-zinc-400 leading-relaxed mb-2 text-sm">
                Com o plano ativo, basta navegar pelos benefícios, escolher o
                que te atrair e ir ao estabelecimento. Sempre confira as regras
                para a utilização, pois existem particularidades promovidas por
                cada serviço.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Chegando no estabelecimento, basta abrir sua conta e clicar em
                "Gerar token". Forneça seu código ao Responsável e pronto! Seu
                benefício será aplicado.
              </p>
            </div>
            <img
              src={featureToken}
              className="w-full max-w-md object-cover self-center"
            />
          </div>

          <div className="p-8 rounded-3xl bg-zinc-950 border border-zinc-400/10">
            <div className="mt-6 flex flex-col gap-4 items-center">
              <p className="font-semibold text-zinc-200 text-lg">Tudo certo!</p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Seu benefício foi registrado e você poderá deixar sua mensagem
                de avaliação para os próximos usuários.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Na página "Histórico" você terá acesso ao extrato de uso dos
                benefícios.
              </p>
              <Star
                size={200}
                weight="fill"
                className="text-yellow-500 self-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
