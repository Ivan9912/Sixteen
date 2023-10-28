import Link from "next/link";

export default function Desarrollo() {
    return  <div className="h-10 w-full text-slate-50 bg-stone-700 py-4 px-10 flex items-center justify-center md:justify-between align-middle">
                <ul className="flex flex-grow text-sm justify-center md:justify-center ">
                    <li>© 2023 SIXTEEN · All Rights Reserved.</li>
                    <li className="hidden md:flex flex-grow justify-end">Desarrollado por&nbsp; <Link href={"https://www.google.com"} className="hover:text-slate-400"> CodeCraze</Link></li>
                </ul>
            </div>
};