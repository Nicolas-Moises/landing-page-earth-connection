import { Link } from 'react-router-dom'
import { Link as A } from 'react-scroll'

export function MenuNav() {
  return (
    <nav className="px-6 py-2 rounded-full border border-zinc-400/20 bg-zinc-200/5 hidden lg:flex">
      <ul className="flex items-center gap-12">
        <li className="font-medium text-zinc-400 text-sm">
          <A
            className="hover:text-violet-300 navlink cursor-pointer"
            to="hero"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            Início
          </A>
        </li>
        <li className="font-medium text-zinc-400 text-sm">
          <A
            className="hover:text-violet-300 navlink cursor-pointer"
            to="about"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            Sobre
          </A>
        </li>
        <li className="font-medium text-zinc-400 text-sm">
          <A
            className="hover:text-violet-300 navlink cursor-pointer"
            to="pricing"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            Plano
          </A>
        </li>
        <li className="font-medium text-zinc-400 text-sm">
          <A
            className="hover:text-violet-300 navlink cursor-pointer"
            to="faq"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            FAQ
          </A>
        </li>
        <li className="font-medium text-zinc-400 text-sm">
          <Link
            className="hover:text-violet-300 navlink cursor-pointer active:text-violet-400"
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
