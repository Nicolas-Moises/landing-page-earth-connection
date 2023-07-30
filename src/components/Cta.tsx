import { Link } from 'react-router-dom'

import Balance from 'react-wrap-balancer'

export function Cta() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center my-40">
      <h1 className="font-bold text-zinc-100 text-7xl tracking-tight text-center">
        <Balance>
          Venha fazer parte dessa{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-cyan-300 to-violet-300">
            conexão
          </span>{' '}
          também!
        </Balance>
      </h1>
      <p className="text-lg mt-6 leading-relaxed text-center text-zinc-400 max-w-2xl">
        Clube de benefícios com as melhores ofertas da região, trazendo uma
        combinação de qualidade e prêmios.
      </p>

      <div className="flex items-center gap-6 mt-6">
        <button
          className="py-4 px-5 rounded-full border-2 border-violet-400 bg-violet-400/60 text-white font-bold z-40
          hover:bg-transparent transition-colors duration-150"
        >
          Contratar agora
        </button>
        <Link
          to="#"
          className="text-sm text-white font-bold hover:text-violet-300 transition-colors duration-150"
        >
          Fale conosco
        </Link>
      </div>
    </div>
  )
}
