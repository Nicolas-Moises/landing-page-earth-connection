import { FacebookLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo-footer.png'

export function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-10 items-center justify-between w-full max-w-7xl mx-auto py-14 mt-20 border-t border-zinc-400/20">
      <div className="flex items-center gap-10 flex-col sm:flex-row">
        <img src={logo} alt="" className="w-20 h-20 object-contain" />
        <span className="text-sm text-zinc-400 leading-loose">
          © Earth Connection. Todos os direitos reservados 2023
          <br />
          Desenvolvido com 💜 por
          <a
            href="https://www.linkedin.com/in/nicolas-moises-ba91ba1a3/"
            target="_blank"
            className="underline hover:text-zinc-200"
            rel="noreferrer"
          >
            {' '}
            Nicolas
          </a>{' '}
          e{' '}
          <a
            href="https://www.linkedin.com/in/p-medeiros/"
            target="_blank"
            className="underline hover:text-zinc-200"
            rel="noreferrer"
          >
            {' '}
            Pedro
          </a>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="text-zinc-300 hover:text-cyan-500 transition-colors duration-150"
          to="#"
          target="_blank"
        >
          <InstagramLogo weight="bold" size={22} />
        </Link>
        <Link
          className="text-zinc-300 hover:text-cyan-500 transition-colors duration-150"
          to="#"
          target="_blank"
        >
          <FacebookLogo weight="bold" size={22} />
        </Link>
        <Link
          className="text-zinc-300 hover:text-cyan-500 transition-colors duration-150"
          to="#"
          target="_blank"
        >
          <LinkedinLogo weight="bold" size={22} />
        </Link>
      </div>
    </footer>
  )
}
