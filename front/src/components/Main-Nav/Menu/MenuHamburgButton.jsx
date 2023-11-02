"use client";
import LogoMenuHamburg from '../../../../public/img_svg/menu.jsx';
import LogoExit from '../../../../public/img_svg/close.jsx';

import { useState } from 'react';
import SubList1 from './SubCategories/List.jsx';

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
            <nav className={`bg-blaborder-black/0 md:hidden w-screen fixed top-16 z-auto flex justify-center ${isOpenMenu ? '' : 'hidden'}`}>
                <div className={`w-72 h-auto bg-white/90 justify-center flex border-b-4 border-pink-500`}>
                    <ul className="flex flex-col w-full items-center z-auto justify-center top-16 [&>li]:text-black [&>li]:text-base [&>li]:py-2 [&>li]:px-6 [&>li]:text-center nth-7:mb-6 nth-2:mt-6 nth-1:hidden">
                        <SubList1 props={props} />
                       
                    </ul>
                </div>
            </nav>
        </>
    )
};