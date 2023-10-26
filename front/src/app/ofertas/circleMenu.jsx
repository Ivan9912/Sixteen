"use client";
import Link from "next/link";
import { useState } from 'react';
import './circle_menu.css'

import IconPlus from '../../../public/redes/add.svg'
import IconFacebook from '../../../public/redes/facebook-option.svg'
import IconInstagram from '../../../public/redes/instagram.svg'
import IconEmail from '../../../public/redes/mail-option.svg'
import IconPhone from '../../../public/redes/phone.svg'
import IconTictok from '../../../public/redes/tictok.svg'
import IconWhatsapp from '../../../public/redes/icons8-whatsapp-96.svg'

export default function CircleMenu() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
        <div className="w-full flex justify-end align-middle fixed right-1 bottom-10">
            <div className={`menu_1 socialMediaMenu ${isOpen ? 'active' : ''} [&>li]:w-5 [&>li]:h-5`} >
                <div className="toggle_menu">
                    <button onClick={toggleMenu}>
                        <IconPlus />
                    </button>      
                </div>
                <li style={{ '--i': 0, '--clr': '#1877f2' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/">
                        <IconFacebook />
                    </Link>
                </li>
                <li style={{ '--i': 1, '--clr': '#25d366' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/">
                        <IconInstagram />
                    </Link>
                </li>
                <li style={{ '--i': 2, '--clr': '#1da1f2' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="mailto:ivan.maidana9912@gmail.com">
                        <IconEmail />
                    </Link>
                </li>
                <li style={{ '--i': 3, '--clr': '#ea4c89' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="tel:+5491157416209">
                        <IconPhone />
                    </Link>
                </li>
                <li style={{ '--i': 4, '--clr': '#0a66c2' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/es/">
                        <IconTictok />
                    </Link>
                </li>
                <li style={{ '--i': 5, '--clr': '#632000' }}>
                    <Link target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5491157416210">
                        <IconWhatsapp />
                    </Link>
                </li> 
                {/* Ver si agregar box-sizing: border-box
                bd081c  ff0000  */}
            </div>
        </div>
    )
}