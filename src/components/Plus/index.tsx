import { Heading, Text } from '@ignite-ui/react'

import Balance from 'react-wrap-balancer'
import { Underline } from '../Underline'
import { cardFeatures } from '../../constants'
import { CardPlus } from './components/CardPlus'

export function Plus() {
    return (
        <section className="w-full mt-48">
            <div className="w-full max-w-7xl mx-auto relative">
                <div className='flex flex-col items-center'>
                    <Heading className='text-4xl font-semibold tracking-tightest'>
                        <Balance>Qualidade e  {' '}
                            <span className='relative'>
                                <div className='absolute top-10 right-0'>
                                    <Underline />
                                </div>
                                conexão
                            </span>
                        </Balance>
                    </Heading>
                    <Text className='mt-6 text-zinc-400'>
                        Assine a Earth Connection e faça parte dessa conexão.
                    </Text>
                </div>

                <div id='cards' className='grid grid-cols-4 gap-2 mt-14'>
                    {cardFeatures.map((feature) => {
                        return (
                            <CardPlus
                                id={feature.id}
                                title={feature.title}
                                key={feature.id}
                                content={feature.content}
                                icon={<feature.icon size={20} />}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}