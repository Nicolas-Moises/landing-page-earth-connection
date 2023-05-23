import { Link } from "react-router-dom";

export function MenuNav() {
    return (
        <nav className="px-8 py-3 rounded-full border border-zinc-400/20 bg-zinc-200/5">
            <ul className="flex items-center gap-12">
                <li className="font-medium text-zinc-400 text-sm">
                    <Link className='hover:text-violet-300' to="/">Início</Link>
                </li>
                <li className="font-medium text-zinc-400 text-sm">
                    <Link className='hover:text-violet-300' to="/plan">Sobre</Link>
                </li>
                <li className="font-medium text-zinc-400 text-sm">
                    <Link className='hover:text-violet-300' to="/association">Plano</Link>
                </li>
                <li className="font-medium text-zinc-400 text-sm">
                    <Link className='hover:text-violet-300' to="/association">FAQ</Link>
                </li>
                <li className="font-medium text-zinc-400 text-sm">
                    <Link className='hover:text-violet-300' to="/association">Blog</Link>
                </li>
            </ul>
        </nav>
    )
}