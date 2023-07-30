import { Link } from 'react-router-dom'

export function Blog() {
  return (
    <div className="min-h-[calc(100vh-200px)] w-full flex flex-col gap-10 max-w-7xl mx-auto justify-center items-center">
      <h2 className="text-7xl font-bold font-sans tracking-tight text-zinc-100 leading-tight text-center animate-bounce">
        Quase lá ...
      </h2>
      <Link
        to="/"
        className="py-4 px-5 rounded-full border-2 border-violet-400 bg-violet-400/60 text-white font-bold z-40
                        hover:bg-transparent transition-colors duration-150"
      >
        Voltar pra home
      </Link>
    </div>
  )
}
