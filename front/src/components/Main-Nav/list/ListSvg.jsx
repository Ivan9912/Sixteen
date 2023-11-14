import Link from "next/link";
import { CartIcon, UserIcon } from '../../../../public/img_svg/IconsUtilities.js';
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
                {CartIcon}
            </Link>
        </li>
        <li className='hover:box-content hover:border hover:border-pink-500/20 hover:rounded hover:bg-pink-500/10 hover:shadow-xl active:shadow-2xl'>
            <Link href="/admin" title="Admin">
                {UserIcon}
            </Link>
        </li>
    </ul>
};