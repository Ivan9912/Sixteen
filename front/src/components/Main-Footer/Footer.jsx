import Link from "next/link";
import Desarrollo from "./Desarrollo";

export default function Footer() {
    return (
        <div className="divide-y-2 divide-slate-200">
            <footer className="bg-white w-full h-48 md:block flex justify-center">
                <div className="py-6 px-10 flex items-center justify-between md:justify-evenly">
                    <div className="hidden md:flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-black">
                        <ul className="block">
                            <p className="text-center font-semibold mb-3">Sucursales</p>
                            <li>LOCAL: Helguera 463</li>
                            <li>Flores, CABA</li>
                            <li>Lunes a viernes: 08:00 a 17:00</li>
                            <li>Sabado 08:00 a 13:00</li>
                            <li>Minimo de compra: 3 PRENDAS SURTIDAS</li>
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-black">
                        <ul className="block">
                            <p className="text-center font-semibold mb-3">Ventas Online</p>
                            <li>Pedidos por 
                                <Link href="https://www.google.com">
                                    WWW.MAYORISTAFLORES.COM.AR
                                </Link>
                            </li>
                            <li>Minimo de compra: <b>$10000</b></li>
                            <li>Envio a todo el país</li>
                            <li>Bahía blanca 718 Local 1</li>
                            <li>Floresta</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-black">
                        <ul className="flex flex-col md:block text-center md:text-start">
                            <p className="text-center font-semibold mb-3">Redes</p>
                            <li>Instagram: @mayoristaflores</li>
                            <li>Facebook: mayoristaflores.baires</li>
                            <li>Tit Tok: mayoristafloress</li>
                            <li>Whatsapp:&nbsp;
                                <Link href="https://api.whatsapp.com/send?phone=5491157416210">
                                    11-5741-6210
                                </Link>
                            </li>
                            <li>
                                <Link href="tel:+5491157416209">11-5741-6209</Link>
                                /&nbsp;
                                <Link href="tel:+5491173607225">11-7360-7225</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <Desarrollo />
        </div>
    )
};