'use client'

import { useRouter } from "next/router";


export default function Init() {
    const router = useRouter();
    const { id } = router.query
    return <main className="mt-40 mb-10 w-full h-screen flex justify-center">
        <section className="w-11/12 mb-10 bg-white flex flex-col justify-start items-center rounded border border-pink-500/25">
            <h1 className="text-center text-2xl md:text-4xl mt-2 md:mt-6 p-6 font-bold text-pink-500 select-none">`Hola ${id}`</h1>
        </section>
    </main>
};