import CardBasic from '@/components/cards/CardBasic.jsx';
import AdminLayout from './layoutAdm.js';
import { metadata } from './layoutAdm.js';
metadata.title ='Sixteen | Admin';

export default function Admin () {
    return  <AdminLayout>
                <main className="h-screen w-full flex justify-center items-center">
                    <section className="w-5/12 h-60 md:h-96 mb-10 bg-white flex flex-col justify-start items-center rounded border border-pink-500/25">
                        <h1 className="text-center text-sm md:text-4xl mt-2 md:mt-6 p-6 font-bold text-pink-500 select-none">Inicia Sesión</h1>
                    </section>
                </main>
            </AdminLayout>
};