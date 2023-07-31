import logoHeader from '../assets/logo-header.png'
import { Navigation } from './navigation'
import { Button } from './ui/button'

export function Header() {
  return (
    <header
      className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      data-aos="fade-down"
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between py-2 items-center">
        <img
          src={logoHeader}
          alt=""
          className="p-2 border border-zinc-800 rounded-lg max-w-xs bg-zinc-900/70"
        />
        <Navigation />
        <div className="lg:flex items-center gap-3 hidden ">
          <Button variant="ghost">Entrar</Button>
          <Button>Assinar clube</Button>
        </div>
      </div>
    </header>
  )
}
