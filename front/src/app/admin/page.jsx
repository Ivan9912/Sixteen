'use client'
import Link from 'next/link.js';
import AdminLayout from './layoutAdm.js';
import { metadata } from './layoutAdm.js';
metadata.title = 'Sixteen | Admin';

export default function Admin() {
    let username = ''

    const handleSearch = (e) => {
        username = e.target.value
        console.log(username);
    }

    return <AdminLayout>
        <main className="h-screen w-full flex justify-center items-center">
            <section className="w-2/12 h-60 md:h-72 bg-white flex flex-col justify-start items-center rounded border border-pink-500/25 ">
                <span className="text-center text-sm md:text-4xl mt-2 md:mt-4 p-6 font-bold select-none before:block before:absolute before:-inset-1 before:-skew-y-12 before:z-0 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white z-1">Iniciar Sesión</span>
                </span>
                <input className='border-2 border-pink-500/70 hover:border-pink-500/90 rounded mt-8 mb-6 focus:border-pink-500/90 text-pink-500 placeholder-pink-500/70 transition-colors' placeholder='Email' type="email" name="user" id="email-user" onChange={(e) => handleSearch(e)} />
                <input className='border-2 border-pink-500/70 hover:border-pink-500/90 rounded focus:border-pink-500/90  active:focus:border-pink-500/90 text-pink-500 placeholder-pink-500/70 transition-colors' placeholder='Password' type="password" name="pass" id="pass-user" />
                <div className='mt-4'>
                    <Link href={`/`} className='text-pink-500 rounded-lg border border-pink-500 p-2 ml-3 hover:text-white hover:bg-pink-500 hover:border-white transition-colors select-none'>Iniciar</Link>
                    <Link href={`/user/${username}`} className='text-pink-500 rounded-lg border border-pink-500 p-2 ml-3 hover:text-white hover:bg-pink-500 hover:border-white transition-colors select-none'>Iniciar</Link>
                </div>
            </section>
        </main>
    </AdminLayout>
};