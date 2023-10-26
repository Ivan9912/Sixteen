"use client";
import Link from "next/link";
import { useState } from 'react';
import './css/circle_menu.css'

import IconPlus from '../../../public/img_svg/add.svg'
import IconFacebook from '../../../public/img_redes_svg/facebook96.svg'
import IconInstagram from '../../../public/img_redes_svg/instagram96.svg'
import IconEmail from '../../../public/img_redes_svg/gmail96.svg'
import IconPhone from '../../../public/img_redes_svg/telefono96.svg'
import IconTiktok from '../../../public/img_redes_svg/tiktok96.svg'
import IconWhatsapp from '../../../public/img_redes_svg/whatsapp96.svg'

export default function CircleMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex justify-end align-middle fixed right-1 bottom-10">
            <div className={`menu_1 ${isOpen ? 'active' : ''}`} >
                <div className="toggle_menu">
                    <button onClick={toggleMenu}>
                        <IconPlus />
                    </button>      
                </div>
                <li style={{ '--i': 0, '--clr': '#fff' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                        <IconFacebook />
                    </Link>
                </li>
                <li style={{ '--i': 1, '--clr': '#fff' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                        <IconInstagram />
                    </Link>
                </li>
                <li style={{ '--i': 2, '--clr': '#fff' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="mailto:ivan.maidana9912@gmail.com">
                        <IconEmail />
                    </Link>
                </li>
                <li style={{ '--i': 3, '--clr': '#fff' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="tel:+5491157416209">
                        <IconPhone />
                    </Link>
                </li>
                <li style={{ '--i': 4, '--clr': '#fff' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/es/">
                        <IconTiktok />
                    </Link>
                </li>
                <li style={{ '--i': 5, '--clr': '#fff' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5491157416210">
                        <IconWhatsapp />
                    </Link>
                </li> 
                {/* Ver si agregar box-sizing: border-box. Los logos quedan muy anchos provocando un hover no programado pero que queda bien visualmente.*/}
            </div>
        </div>
    )
}