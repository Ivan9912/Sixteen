import Link from "next/link";
import Carrito from '../../../../public/img_svg/shopping_cart.jsx';
import UserSVG from '../../../../public/img_svg/user-manager.jsx';
import SearchBar from "@/components/Main-Nav/SearchBar.jsx";

export default function ListSvg() {
    return <ul className="hidden md:static absolute md:flex flex-grow justify-end basis-0 text-sm [&>li>a]:inline-block [&>li>a]:p-3 [&>li>a]:text-black [&>li]:gap-2 [&>li]:border [&>li]:border-transparent [&>li]:box-border">
        <SearchBar />
        <li className='hover:box-content hover:border hover:border-pink-500/20 hover:rounded hover:bg-pink-500/10 hover:shadow-xl active:shadow-2xl'>
            {/* <span class="relative flex h-4 w-4 [&>span]:w-4 [&>span]:h-4 justify-center">
            <span class="animate-ping absolute inline-flex rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full bg-sky-500">1</span>
            </span> */}
            <Link href="/cart" title="Carrito">
                <Carrito className="w-5 h-5" />
            </Link>
        </li>
        <li className='hover:box-content hover:border hover:border-pink-500/20 hover:rounded hover:bg-pink-500/10 hover:shadow-xl active:shadow-2xl'>
            <Link href="/admin" title="Admin">
                <UserSVG className="w-5 h-5" />
            </Link>
        </li>
    </ul>
};