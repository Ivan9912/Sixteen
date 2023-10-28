"use client";
import LogoMenuHamburg from '../../../../public/img_svg/menu.jsx';
import LogoExit from '../../../../public/img_svg/close.jsx';
import Link from 'next/link.js';
import { useState } from 'react';

export default function MenuHamburgButton({ props }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <>
            <ul className={`md:hidden basis-0 flex justify-center content-center cursor-pointer p-3 hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl ${isOpenMenu ? 'activeMenuHamburg' : ''} hover:text-red-800`}>
                <span onClick={() => { setIsOpenMenu(!isOpenMenu, 2) }}>
                    {
                        isOpenMenu ? <LogoExit className="w-5 h-5 text-black hover:text-red-800" /> : <LogoMenuHamburg className="w-5 h-5" />
                    }
                </span>
            </ul>
            <nav className={`bg-transparent md:hidden w-screen fixed top-16 z-auto flex justify-center ${isOpenMenu ? '' : 'hidden'}`}>
                <div className={`w-72 h-72 bg-white justify-center flex border-b-2 border-purple-900`}>
                    <ul className="flex flex-col w-full items-center z-auto justify-center fixed top-16 [&>li]:text-black [&>li]:pb-2 [&>li]:text-base [&>li]:py-2 [&>li]:px-6 [&>li]:text-center [&]:first:mt-6">

                        {
                            props.map((categorias, i) => {
                                return <li key={`$ID-${i}-${categorias.name}`} className="hover:border-b-2 hover:border-purple-900  hover:text-purple-600 hover:bg-gray-100" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                            <Link href={categorias.linknav}>{categorias.name}</Link>
                                        </li>
                            })
                        }
                        <li className="hover:border-b-2 hover:border-purple-900  hover:text-purple-600 hover:bg-gray-100">
                            <Link href="#" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                Carrito
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

