import Link from "next/link";

export default function Footer() {
    return (
        <div className="divide-y-2 divide-slate-200">
            <footer className="bg-white w-screen h-48">
                <div className="py-6 px-10 flex items-center justify-between">
                    <div className="flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-text-black">
                        <ul>
                            <p className="text-center font-semibold mb-3">Sucursales</p>
                            <li>LOCAL: Helguera 463</li>
                            <li>Flores, CABA</li>
                            <li>Lunes a viernes: 08:00 a 17:00</li>
                            <li>Sabado 08:00 a 13:00</li>
                            <li>Minimo de compra: 3 PRENDAS SURTIDAS</li>
                        </ul>
                    </div>
                    <div className="flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-text-black">
                        <ul>
                            <p className="text-center font-semibold mb-3">Ventas Online</p>
                            <li>Pedidos por <Link href="https://www.google.com">WWW.MAYORISTAFLORES.COM.AR</Link></li>
                            <li>Minimo de compra: <b>$10000</b></li>
                            <li>Envio a todo el país</li>
                            <li>Bahía blanca 718 Local 1</li>
                            <li>Floresta</li>
                        </ul>
                    </div>
                    <div className="flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-text-black">
                        <ul>
                            <p className="text-center font-semibold mb-3">Redes</p>
                            <li>Instagram: @mayoristaflores</li>
                            <li>Facebook: mayoristaflores.baires</li>
                            <li>Tit Tok: mayoristafloress</li>
                            <li>Whatsapp: <Link href="tel:+5491157416210">11-5741-6210</Link></li>
                            <li><Link href="tel:+5491157416209">11-5741-6209</Link>/ <Link href="tel:+5491173607225">11-7360-7225</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="h-10 w-full text-slate-50 bg-stone-700 py-4 px-10 flex items-center justify-between align-middle">
                <ul className="flex flex-grow text-sm [&>li>a]:inline-block [&>li>a]:py-3 [&>li>a]:bg-stone-700">
                    <li>© 2023 SIXTEEN · All Rights Reserved.</li>
                    <li className="flex flex-grow justify-end">Desarrollado por CodeCraze</li>
                </ul>
            </div>
        </div>
    )
}