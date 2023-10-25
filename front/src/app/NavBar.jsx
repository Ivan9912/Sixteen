import Carrito from '../../public/shopping_cart.svg'
import Link from 'next/link'

export default function NavBar() {
    return (
        <header>
            <nav className="w-full h-10 text-slate-50 bg-black py-6 px-10 flex items-center fixed top-0 justify-between">
                <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:bg-black">
                    <li>Contácta con nosotros vía <a href="tel:+5491157416209">11 57416209</a></li>
                    <li><a href="mailto:ivan.maidana9912@gmail.com">ivan.maidana9912@gmail.com</a></li>
                </ul>
            </nav>
            <nav className="text-black bg-yellow-50 py-6 px-10 flex items-center fixed top-10 w-full justify-between">
                <h1 className="flex flex-grow basic-0 font-extrabold text-lg">Sixteen</h1>
                <ul className="flex flex-grow justify-center basic-0 text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-black">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link>Contact Us</Link></li>
                </ul>
                <ul className="flex flex-grow justify-end basic-0 text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-black">
                    <li><Link href="/"><Carrito className="w-5 h-5"/></Link></li>
                    <li><Link href="/">User</Link></li>
                </ul>
            </nav>
        </header>
    )
}