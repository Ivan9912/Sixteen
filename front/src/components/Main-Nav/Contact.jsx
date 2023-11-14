import Link from 'next/link';

const email = 'ivan.maidana9912@gmail.com';

export default function Contact() {
    return <nav className="w-screen h-10 text-slate-50 bg-stone-700 py-4 z-[4] px-10 md:flex  items-center fixed md:top-0 justify-between align-middle hidden">
        <ul className="flex flex-grow text-sm">
            <li><span className='select-none'>Contácta con nosotros vía: </span> <Link className='hover:text-slate-400 hover:underline' href="tel:+5491157416209">11-5741-6209</Link></li>
            <li className='flex flex-grow justify-end'><Link className='hover:text-slate-400 hover:underline' href={`mailto:${email}`}>{email}</Link></li>
        </ul>
    </nav>
};