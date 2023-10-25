import Image from 'next/image'
import Carrito from '../../public/shopping_cart.svg'
import logo from '../../public/logo.png'
import Link from 'next/link'


export default function NavBar() {
    return (
        <header className='divide-y-2 divide-y-reverse divide-slate-400/25'>
            <nav className="w-full h-10 text-slate-50 bg-stone-700 py-4 px-10 flex items-center fixed top-0 justify-between align-middle">
                <ul className="flex flex-grow text-sm [&>li>a]:inline-block [&>li>a]:py-3 [&>li>a]:bg-stone-700">
                    <li>Contácta con nosotros vía: <Link href="tel:+5491157416209">11-5741-6209</Link></li>
                    <li className='flex flex-grow justify-end'><Link href="mailto:ivan.maidana9912@gmail.com">ivan.maidana9912@gmail.com</Link></li>
                </ul>
            </nav>
            <nav className="text-black bg-white py-2 px-10 flex items-center fixed top-10 w-full justify-between">
                <div className='flex flex-grow basis-0 justify-items-start'>
                    <Link href="/"><Image className='basis-0' width={100} height={50} src={logo} alt='logo' /></Link>
                    <span className="font-extrabold text-lg basis-0">Sixteen</span>
                </div>   
                <ul className="flex flex-grow justify-center basis-0 text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-black">
                    <li><Link href="/about-us">Catalogos</Link></li>
                    <li><Link href="/contact-us">Ofertas</Link></li>
                    <li><Link href="/about-us">Preguntas&nbsp;Frecuentes</Link></li>
                    <li><Link href="/contact-us">Galeria</Link></li>
                    <li><Link href="/about-us">Carrito</Link></li>
                    <li><Link href="/contact-us">Contacto</Link></li>
                </ul>
                <ul className="flex flex-grow justify-end basis-0 text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-black">
                    <li><Link href="/"><Carrito className="w-5 h-5"/></Link></li>
                    <li><Link href="/">User</Link></li>
                </ul>
            </nav>
        </header>
    )
}