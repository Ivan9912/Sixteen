import Link from "next/link";
import Carrito from '../../../public/img_svg/shopping_cart.jsx';
import UserSVG from '../../../public/img_svg/user-manager.jsx';
import SearchBar from "@/app/SearchBar.jsx";

export default function ListSvg () {
    return  <ul className="hidden md:static absolute md:flex flex-grow justify-end basis-0 text-sm [&>li>a]:inline-block [&>li>a]:p-3 [&>li>a]:text-black [&>li]:gap-2">
                <SearchBar />
                <li className='hover:box-content hover:border hover:border-pink-500/20 hover:rounded hover:bg-pink-500/10 hover:shadow-xl active:shadow-2xl'>
                    <Link href="/">
                        <Carrito className="w-5 h-5" />
                    </Link>
                </li>
                <li className='hover:box-content hover:border hover:border-pink-500/20 hover:rounded hover:bg-pink-500/10 hover:shadow-xl active:shadow-2xl'>
                    <Link href="/">
                        <UserSVG className="w-5 h-5" />
                    </Link>
                </li>
            </ul>
};