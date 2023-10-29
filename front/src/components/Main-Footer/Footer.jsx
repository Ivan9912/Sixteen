import Link from "next/link";
import Desarrollo from "./Desarrollo";

export default function Footer() {
    return (
        <div className="divide-y-2 divide-slate-200">
            <footer className="bg-white w-full h-48 md:block flex justify-center">
                <div className="py-6 px-10 flex items-center justify-between md:justify-evenly">
                    <div className="hidden md:flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-black">
                        <ul className="block">
                            <p className="text-center font-semibold mb-3 select-none text-pink-500">Sucursales</p>
                            <li>LOCAL: Helguera 463</li>
                            <li>Flores, CABA</li>
                            <li className="select-none">Lunes a viernes: 08:00 a 17:00</li>
                            <li className="select-none">Sabado 08:00 a 13:00</li>
                            <li className="select-none">Minimo de compra: <i>3 PRENDAS SURTIDAS</i></li>
                        </ul>
                    </div>
                    <div className="hidden md:flex flex-col [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-black">
                        <ul className="block">
                            <p className="text-center font-semibold mb-3 select-none text-pink-500">Ventas Online</p>
                            <li><span className="select-none">Pedidos por </span>
                                <Link className="cursor-pointer hover:underline" href="https://www.google.com">
                                    WWW.MAYORISTAFLORES.COM.AR
                                </Link>
                            </li>
                            <li className="select-none">Minimo de compra: <b>$10000</b></li>
                            <li className="select-none">Envio a todo el país</li>
                            <li>Bahía blanca 718 Local 1</li>
                            <li>Floresta</li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center [&>ul>li]:text-xs [&>ul>li]:py-1 [&>ul>li]:text-black">
                        <ul className="flex flex-col md:block text-center md:text-start">
                            <p className="text-center font-semibold mb-3 select-none text-pink-500">Redes</p>
                            <li><span className="select-none">Instagram: </span> @mayoristaflores</li>
                            <li><span className="select-none">Facebook:</span>  mayoristaflores.baires</li>
                            <li><span className="select-none">Tit Tok:</span> mayoristafloress</li>
                            <li><span className="select-none">Whatsapp: </span>
                                <Link className="cursor-pointer hover:underline" href="https://api.whatsapp.com/send?phone=5491157416210">
                                    11-5741-6210
                                </Link>
                            </li>
                            <li>
                                <Link className="cursor-pointer hover:underline" href="tel:+5491157416209">11-5741-6209</Link>
                                /&nbsp;
                                <Link className="cursor-pointer hover:underline" href="tel:+5491173607225">11-7360-7225</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <Desarrollo />
        </div>
    )
};