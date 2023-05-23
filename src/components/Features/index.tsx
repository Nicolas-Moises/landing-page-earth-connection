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
        <section className="w-full mt-20">
            <div className="w-full max-w-7xl mx-auto relative">
                <div className='flex flex-col items-center justify-center mb-8'>
                    <img src={arrowDown} className='mb-8' />
                    <Heading className='text-4xl font-semibold tracking-tightest'>
                        <Balance>Simples e {' '}
                            <span className='relative'>
                                <div className='absolute top-10 right-0'>
                                    <Underline />
                                </div>
                                prático
                            </span>
                        </Balance>
                    </Heading>
                    <Text className='mt-6 text-zinc-400'>
                        Conheça a Earth Connection e faça parte dessa conexão.
                    </Text>
                </div>

                <div className='grid grid-cols-3 gap-2 mt-14'>
                    <div className='relative p-8 rounded-3xl bg-zinc-950 border border-zinc-400/10 overflow-hidden'>
                        <img src={featureSignup} className='w-full object-cover' />
                        <div className='mt-6 flex flex-col gap-4'>
                            <Text className='font-semibold text-zinc-200 text-lg'>
                                Sign-up simples
                            </Text>
                            <Text size='sm' className='text-zinc-400 leading-'>
                                Cadastro rápido com poucos campos de preenchimento e informações de perfil editáveis.
                                Após o cadastro você terá acesso ao painel de benefícios ativos.
                            </Text>
                        </div>
                    </div>

                    <div className='px-8 pt-8 pb-0 rounded-3xl flex items-start gap-8 bg-zinc-950 border border-zinc-400/10 col-span-2'>
                        <img src={featurePayment} className='w-full max-w-xs object-cover' />
                        <div className='mt-6 flex flex-col justify-between gap-4 w-2/3 flex-1 h-full pb-16'>
                            <div className=''>
                                <Text className='font-semibold text-zinc-200 text-lg mb-4 text-center'>
                                    Assinatura facilitada
                                </Text>
                                <Text size='sm' className='text-zinc-400 leading- mb-2'>
                                    Diversas formas de pagamento também em poucos passos para a ativação do plano e
                                    possibilidade de utilizar os benefícios desejados.
                                </Text>
                                <Text size='sm' className='text-zinc-400 leading-'>
                                    Antes de fechar o plano, leia os termos de uso, por lá constará todas as
                                    informações relacionadas a aderência do plano, vantagens e política de cancelamento.
                                </Text>
                            </div>

                            <button className='py-4 px-5 rounded-full border-2 border-violet-400 bg-violet-400/60 text-white font-bold hover:bg-transparent transition-colors duration-150'>Assinar agora mesmo</button>
                        </div>
                    </div>

                    <div className='px-8 pt-8 pb-0 rounded-3xl flex flex-col items-start gap-8 bg-zinc-950 border border-zinc-400/10 col-span-2'>
                        <div className='mt-6 flex flex-col gap-4 flex-1'>

                            <Text className='font-semibold text-zinc-200 text-lg mb-4'>
                                Prático e seguro
                            </Text>
                            <Text size='sm' className='text-zinc-400 leading- mb-2'>
                                Com o plano ativo, basta navegar pelos benefícios, escolher o que te atrair e ir ao estabelecimento.
                                Sempre confira as regras para a utilização, pois existem particularidades promovidas por cada serviço.
                            </Text>
                            <Text size='sm' className='text-zinc-400 leading-relaxed'>
                                Chegando no estabelecimento, basta abrir sua conta e clicar em "Gerar token". Forneça seu código ao
                                Responsável e pronto! Seu benefício será aplicado.
                            </Text>
                        </div>
                        <img src={featureToken} className='w-full max-w-md object-cover self-center' />
                    </div>

                    <div className='p-8 rounded-3xl bg-zinc-950 border border-zinc-400/10'>
                        <div className='mt-6 flex flex-col gap-4 items-center'>
                            <Text className='font-semibold text-zinc-200 text-lg'>
                                Tudo certo!
                            </Text>
                            <Text size='sm' className='text-zinc-400 leading-relaxed'>
                                Seu benefício foi registrado e você poderá deixar sua mensagem de avaliação para os próximos usuários.
                            </Text>
                            <Text size='sm' className='text-zinc-400 leading-relaxed'>
                                Na página "Histórico" você terá acesso ao extrato de uso dos benefícios.
                            </Text>
                            <Star size={200} weight='fill' className='text-yellow-500 self-center' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}