import Balance from 'react-wrap-balancer'
import heroImage from '../assets/mock-mobile-2.png'
import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="w-full mt-40 relative" id="hero">
      <div className="flex flex-col  justify-between items-center w-full max-w-7xl mx-auto relative">
        <div
          className="flex flex-col items-center mb-20"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          <p
            className="border  border-zinc-800 py-1 px-3 rounded-full bg-clip-text text-transparent bg-gradient-to-r 
          from-zinc-400 via-zinc-200 to-zinc-100 text-sm tracking-tight"
          >
            Confira as ofertas de sua região
          </p>
          <h2 className="text-7xl font-extrabold font-sans tracking-tight text-zinc-100 leading-tight text-center w-full">
            <Balance>
              Aproveite os benefícios em{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 from-5% via-violet-500 to-purple-200 animate-bounce">
                poucos passos
              </span>
            </Balance>
          </h2>

          <p className="text-gray-300 font-normal mt-3 mb-6 leading-relaxed max-w-3xl text-center">
            <Balance>
              Conheça a Earth Connection, uma plataforma voltada ao bem estar,
              onder os melhores benefícios da região, você encontra aqui.
            </Balance>
          </p>

          <Button variant="tertiary" size="lg">
            Começar agora
          </Button>
        </div>
        <img
          src={heroImage}
          className="object-cover w-2/3 lg:max-w-lg"
          alt=""
          data-aos="fade-up"
          data-aos-delay="400"
        />
      </div>
    </section>
  )
}
