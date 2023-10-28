import Link from "next/link";
import Carrito from '../../../public/img_svg/shopping_cart.jsx';
import UserSVG from '../../../public/img_svg/user-manager.jsx';

export default function ListSvg () {
    return  <ul className="hidden md:static absolute md:flex flex-grow justify-end basis-0 text-sm [&>li>a]:inline-block [&>li>a]:p-3 [&>li>a]:text-black">
                <li className='hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/"><Carrito className="w-5 h-5" /></Link></li>
                <li className='hover:rounded hover:border-zinc-600 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'><Link href="/"><UserSVG className="w-5 h-5" /></Link></li>
            </ul>
};