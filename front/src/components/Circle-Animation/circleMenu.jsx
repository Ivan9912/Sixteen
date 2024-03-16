"use client";
import Link from "next/link";
import { useState } from 'react';
import SOCIALNETWORKS from '@/BBDD/SOCIALNETWORKS.json';
import * as Icons from '../../../public/img_redes_svg/IconsSocialNetwork.js';
import { Add } from '../../../public/img_svg/IconsUtilities.js';

export default function CircleMenu() {
    const listSocial = SOCIALNETWORKS.length;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-52 hidden md:flex justify-end align-middle fixed right-1 bottom-10" style={{ '--list_social': listSocial }}>
            <div className={`menu_1 ${isOpen ? 'active' : ''} min-h-[25vh] bg-fixed flex justify-center items-center relative w-52 h-52`} style={{'--colorCicle': colorCicle,'--colorCicleHover': colorCicleHover}} >
                <div className="toggle_menu w-14 h-14 absolute bg-white flex justify-center z-[10000] rounded-full cursor-pointer text-3xl">
                    <button onClick={toggleMenu} className="w-full h-full flex justify-center items-center">
                        {Add}
                    </button>
                </div>
                {
                    SOCIALNETWORKS.map((net, i) => {
                        return <li style={{ '--i': i, '--clr': net.background_color }} key={net.name}>
                            <Link target="_blank" rel="noopener noreferrer" href={net.link}>
                                {Icons[net.component]}
                            </Link>
                        </li>
                    })
                }
                {/* Ver si agregar box-sizing: border-box. Los logos quedan muy anchos provocando un hover no programado pero que queda bien visualmente.*/}
            </div>
        </div>
    )
};