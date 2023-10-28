"use client";
import Link from "next/link";
import { useState } from 'react';
import './css/circle_menu.css';

import IconPlus from '../../../public/img_svg/add.jsx';
import IconFacebook from '../../../public/img_redes_svg/facebook96.jsx';
import IconInstagram from '../../../public/img_redes_svg/instagram96.jsx';
import IconEmail from '../../../public/img_redes_svg/gmail96.jsx';
import IconPhone from '../../../public/img_redes_svg/telefono96.jsx';
import IconTiktok from '../../../public/img_redes_svg/tiktok96.jsx';
import IconWhatsapp from '../../../public/img_redes_svg/whatsapp96.jsx';

const SocialNetworks = [
    {
        name: "Facebook",
        background_color: "#0000001d",
        link: "https://www.facebook.com/",
        component: <IconFacebook />
    },
    {
        name: "Instagram",
        background_color: "#0000001d",
        link: "https://www.instagram.com/",
        component: <IconInstagram />
    },
    {
        name: "Gmail",
        background_color: "#0000001d",
        link: "mailto:ivan.maidana9912@gmail.com",
        component: <IconEmail />
    },
    {
        name: "Phone",
        background_color: "#0000001d",
        link: "tel:+5491157416209",
        component: <IconPhone />
    },
    {
        name: "Tik Tok",
        background_color: "#0000001d",
        link: "https://www.tiktok.com/es/",
        component: <IconTiktok />
    },
    {
        name: "Whatsapp",
        background_color: "#0000001d",
        link: "https://api.whatsapp.com/send?phone=5491157416210",
        component: <IconWhatsapp />
    }
];

export default function CircleMenu() {
    const listSocial = SocialNetworks.length;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-52 hidden md:flex justify-end align-middle fixed right-1 bottom-10" style={{ '--list_social': listSocial }}>
            <div className={`menu_1 ${isOpen ? 'active' : ''} min-h-[25vh] bg-fixed flex justify-center items-center relative w-[200px] h-[200px]`} >
                <div className="toggle_menu w-14 h-14 absolute bg-white flex justify-center z-[10000] rounded-full cursor-pointer text-3xl">
                    <button onClick={toggleMenu}>
                        <IconPlus />
                    </button>
                </div>
                {
                    SocialNetworks.map((net, i) => {
                        return <li style={{ '--i': i, '--clr': net.background_color }} key={net.name}>
                                    <Link target="_blank" rel="noopener noreferrer" href={net.link}>
                                        {net.component}
                                    </Link>
                                </li>
                    })
                }
                {/* Ver si agregar box-sizing: border-box. Los logos quedan muy anchos provocando un hover no programado pero que queda bien visualmente.*/}
            </div>
        </div>
    )
};