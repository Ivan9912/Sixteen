import Carrito from '../../../public/img_svg/shopping_cart.jsx';
import UserSVG from '../../../public/img_svg/user-manager.jsx';

import Link from 'next/link';
import MenuHamburgButton from './Menu/MenuHamburgButton.jsx';
import Contact from './Contact.jsx';

export default function NavBar() {
    return (
        <header className='md:divide-y-2 md:divide-y-reverse md:divide-slate-400/25'>
            <Contact />
            <nav className="text-black bg-white py-2 px-10 flex items-center fixed top-0 md:top-10 w-screen justify-between">
                <div className='flex flex-grow basis-0 justify-center md:justify-items-start'>
                    <Link href="/" className="font-extrabold text-lg basis-0 flex items-center justify-center "><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 duration-500 hover:before:bg-white relative inline-block">
                        <span className="relative text-white duration-500 hover:text-pink-500">Sixteen</span>
                    </span></Link>
                </div>
                <ul className="z-[-1] md:z-auto md:static absolute bg-white w-full left-0 py-4  pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:flex md:flex-grow md:justify-center basis-0 md:text-sm md:[&>li>a]:inline-block md:[&>li>a]:p-3 md:[&>li>a]:text-black">
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/about-us">Catalogos</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/ofertas">Ofertas</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/about-us">Preguntas&nbsp;Frecuentes</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/contact-us">Galeria</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/contact-us">Contacto</Link></li>
                </ul>
                <ul className="hidden md:static absolute md:flex flex-grow justify-end basis-0 text-sm [&>li>a]:inline-block [&>li>a]:p-3 [&>li>a]:text-black">
                    <li className='hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/"><Carrito className="w-5 h-5" /></Link></li>
                    <li className='hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/"><UserSVG className="w-5 h-5" /></Link></li>
                </ul>
                <MenuHamburgButton />
            </nav>
        </header>
    );
};