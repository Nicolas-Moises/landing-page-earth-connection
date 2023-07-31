import { Link } from 'react-router-dom'
import { Link as A } from 'react-scroll'

export function Navigation() {
  return (
    <nav className="px-5 py-2 rounded-full border border-zinc-400/20 bg-zinc-200/5 hidden lg:flex">
      <ul className="flex items-center gap-8">
        <li className="font-normal text-zinc-300 text-sm">
          <A
            className="hover:text-zinc-200 navlink cursor-pointer"
            to="hero"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            Início
          </A>
        </li>
        <li className="font-normal text-zinc-300 text-sm">
          <A
            className="hover:text-zinc-200 navlink cursor-pointer"
            to="about"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            Sobre
          </A>
        </li>
        <li className="font-normal text-zinc-300 text-sm">
          <A
            className="hover:text-zinc-200 navlink cursor-pointer"
            to="pricing"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            Plano
          </A>
        </li>
        <li className="font-normal text-zinc-300 text-sm">
          <A
            className="hover:text-zinc-200 navlink cursor-pointer"
            to="faq"
            smooth={true}
            spy={true}
            offset={-200}
            duration={500}
          >
            FAQ
          </A>
        </li>
        <li className="font-normal text-zinc-300 text-sm">
          <Link
            className="hover:text-zinc-200 navlink cursor-pointer"
            to="/blog"
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
