import Link from 'next/link';

export default function Contact() {
    return <nav className="w-screen h-10 text-slate-50 bg-stone-700 py-4 z-[1] px-10 md:flex  items-center fixed md:top-0 justify-between align-middle hidden">
                <ul className="flex flex-grow text-sm">
                    <li>Contácta con nosotros vía: <Link className='hover:text-slate-400' href="tel:+5491157416209">11-5741-6209</Link></li>
                    <li className='flex flex-grow justify-end hover:text-slate-400'><Link href="mailto:ivan.maidana9912@gmail.com">ivan.maidana9912@gmail.com</Link></li>
                </ul>
            </nav>
};