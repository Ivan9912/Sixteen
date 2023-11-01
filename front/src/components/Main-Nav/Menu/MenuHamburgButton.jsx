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
                <span onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                    {
                        isOpenMenu ? <LogoExit className="w-5 h-5 text-black hover:text-red-800" /> : <LogoMenuHamburg className="w-5 h-5" />
                    }
                </span>
            </ul>
            <nav className={`bg-transparent md:hidden w-screen fixed top-16 z-auto flex justify-center ${isOpenMenu ? '' : 'hidden'}`}>
                <div className={`w-72 h-72 bg-white/90 justify-center flex border-b-2 border-pink-500`}>
                    <ul className="flex flex-col w-full items-center z-auto justify-center fixed top-16 [&>li]:text-black [&>li]:text-base [&>li]:py-2 [&>li]:px-6 [&>li]:text-center nth-2:pt-6 nth-1:hidden">
                        {
                            props.map((categorias, i) => {
                                return <li key={`$ID-${i}-${categorias.name}`} className="w-72 [&_a]:inline-block [&_a]:w-full border-b-2 border-transparent active:border-b-2 active:border-pink-500  active:text-pink-500 active:bg-gray-100 hover:border-b-2 hover:border-pink-500  hover:text-pink-500 hover:bg-gray-100 group/List_H active:flex cursor-pointer" onClick={() => { setIsOpenMenu(!isOpenMenu) }}>
                                    {
                                        categorias.name == 'Catálogo'
                                            ?
                                            (<span className='w-full group/List_H active:flex'>
                                                {categorias.name}                                           
                                                {
                                                    <ul className='relative bg-black text-white hidden group-active/List_H:flex'>
                                                        <li>Item 1</li>
                                                        <li>Item 2</li>
                                                        <li>Item 3</li>
                                                    </ul>
                                                }
                                            </span>)
                                            :
                                            (<Link href={categorias.linknav}>{categorias.name}</Link>)
                                    }
                                </li>
                            })
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
};