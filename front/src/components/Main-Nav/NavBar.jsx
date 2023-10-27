"use client";

import Carrito from '../../../public/img_svg/shopping_cart.jsx';
import UserSVG from '../../../public/img_svg/user-manager.jsx';
import LogoMenuHamburg from '../../../public/img_svg/menu.jsx';
import LogoExit from '../../../public/img_svg/close.jsx';
import Link from 'next/link';
import { useState } from 'react';

export default function NavBar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenuHamburg = () => {
        setIsOpenMenu(!isOpenMenu);
    };
    return (
        <header className='divide-y-2 divide-y-reverse divide-slate-400/25'>
            <nav className="w-screen h-10 text-slate-50 bg-stone-700 py-4 px-10 md:flex items-center fixed md:top-0 justify-between align-middle hidden">
                <ul className="flex flex-grow text-sm [&>li>a]:inline-block [&>li>a]:py-3 [&>li>a]:bg-stone-700">
                    <li>Contácta con nosotros vía: <Link href="tel:+5491157416209">11-5741-6209</Link></li>
                    <li className='flex flex-grow justify-end'><Link href="mailto:ivan.maidana9912@gmail.com">ivan.maidana9912@gmail.com</Link></li>
                </ul>
            </nav>
            <nav className="text-black bg-white py-2 px-10 flex items-center fixed top-0 md:top-10 w-screen justify-between">
                <div className='flex flex-grow basis-0 justify-items-start'>
                    <Link href="/" className="font-extrabold text-lg basis-0 flex items-center justify-center "><span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 hover:before:bg-white relative inline-block">
                    <span class="relative text-white hover:text-pink-500">Sixteen</span>
                </span></Link>
                </div>
                <ul className="hidden md:static absolute md:flex flex-grow justify-center basis-0 text-sm [&>li>a]:inline-block [&>li>a]:p-3 [&>li>a]:text-black">
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/about-us">Catalogos</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/ofertas">Ofertas</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/about-us">Preguntas&nbsp;Frecuentes</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/contact-us">Galeria</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/about-us">Carrito</Link></li>
                    <li className=' hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/contact-us">Contacto</Link></li>
                </ul>
                <ul className="hidden md:static absolute md:flex flex-grow justify-end basis-0 text-sm [&>li>a]:inline-block [&>li>a]:p-3 [&>li>a]:text-black">
                    <li className='hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/"><Carrito className="w-5 h-5" /></Link></li>
                    <li className='hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/"><UserSVG className="w-5 h-5" /></Link></li>
                </ul>
                <ul className={`md:hidden basis-0 flex justify-center content-center cursor-pointer p-3 hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl ${isOpenMenu ? 'activeMenuHamburg' : ''} hover:text-red-800`}>
                    <button onClick={toggleMenuHamburg}>
                        {
                            isOpenMenu ? <LogoExit className="w-5 h-5 text-black hover:text-red-800" /> : <LogoMenuHamburg className="w-5 h-5" />
                        }
                    </button>
                </ul>
            </nav>
        </header>
    )
};