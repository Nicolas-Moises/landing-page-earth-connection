
import logoHeader from '../../assets/logo-header.png'
import { MenuNav } from './components/MenuNav';
export function Header() {

    return (
        <header className="w-full">
            <div className="w-full max-w-7xl mx-auto flex justify-between py-10 items-center">
                <img src={logoHeader} alt="" />
                <MenuNav />
                <div className='flex items-center gap-6'>
                    <button className='text-sm text-white font-bold hover:text-violet-300 transition-colors duration-150'>
                        Entrar
                    </button>
                    <button className='text-sm py-2 px-4 rounded-full border-2  border-violet-400 bg-violet-400/60 text-white font-bold hover:bg-transparent transition-colors duration-150'>
                        Assinar clube
                    </button>
                </div>
            </div>

        </header>
    )
}