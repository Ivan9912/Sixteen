import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
import Image from "next/image";
import Link from "next/link";
metadata.title = 'Sixteen | Home';

export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-center h-full select-none mt-16 lg:mt-28">
            <blockquote className="lg:text-2xl font-semibold italic text-center text-slate-900 my-8 z-[2]">
                Bienvenidos a&nbsp;&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-0 before:bg-pink-500 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-[#f5f5f5] [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:lg:text-xl [&_span]:z-[1]">
                    <span>Sixteen</span>
                </span>
            </blockquote>
            <CarrouselMain widthCarrouselT={'w-11/12'} autoSlice={true} autoSlideInterval={10000} colorpg={'236, 72, 153'} heightpg={'0.3rem'} opacitypg={1} />
            <div className=" grid grid-cols-2 lg:grid-cols-4 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>div]:my-10 [&>div]:my-5">
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="flex justify-center items-center">
                            <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600">

                            </div>
                            <Image className={`absolute w-8 h-8 lg:w-20 lg:h-20 invert`} alt={"shop"} src={'https://i.imgur.com/hp3LhM4.png'} width={80} height={80} />
                        </div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">REALIZÁ TÚ PEDIDO:</h1>
                        <span className="text-[8px] lg:text-xs/4">Elegí lo que te guste y agregalo al carrito de compra, recuerda que el mínimo de compra es: $<b>10000</b>.</span>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="flex justify-center items-center">
                            <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600">

                            </div>
                            <Image className={`absolute w-8 h-8 lg:w-20 lg:h-20 invert`} alt={"wpp"} src={'https://i.imgur.com/0eqocWR.png'} width={80} height={80} />
                        </div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">ENVIA TU PEDIDO</h1>
                        <span className="text-[8px] lg:text-xs/4">Una vez agregado tu pedido al carrito de compra, dale click a “enviar pedido”, nos comunicaremos por whatsaap en 24 hs hábiles.</span>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="flex justify-center items-center">
                            <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600">

                            </div>
                            <Image className={`absolute w-8 h-8 lg:w-20 lg:h-20 invert`} alt={"card"} src={'https://i.imgur.com/0kXtFrS.png'} width={80} height={80} />
                        </div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">REALIZA EL PAGO</h1>
                        <span className="text-[8px] lg:text-xs/4">Tenes para abonar hasta 48 horas hábiles por deposito o transferencia bancaria y efectivo únicamente para retiros por el deposito.</span>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="flex justify-center items-center">
                            <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600">

                            </div>
                            <Image className={`absolute w-8 h-8 lg:w-20 lg:h-20 invert`} alt={"card"} src={'https://i.imgur.com/yBRNOco.png'} width={80} height={80} />
                        </div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">DESPACHOS</h1>
                        <span className="text-[8px] lg:text-xs/4">LOS ENVIOS SON martes y viernes por Oca, viacargo y correo argentino. transportes y motos se coordina por whatsaap</span>
                    </div>
                </div>
            </div>
            {/* ------------------------Desde aca estan las cards de categorias de los 3 ------------------------------------------*/}
            <div div className=" grid grid-cols-1 lg:grid-cols-3 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>div]:my-10 [&>div]:my-5 2xl:px-80 lg:px-16">
                <div className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75">
                    <div className="lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative">
                        <Image alt={"01"} src={'https://i.imgur.com/IglFLkP.png'} layout="cover" width={286} height={286} className="rounded-t-lg"/>
                    </div>
                    <div className="h-full w-full flex justify-center">
                        <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block" href={'/'}>VESTIDO DE MORLEY RAYADO</Link>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75">
                    <div className="lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative">
                        <Image alt={"01"} src={'https://i.imgur.com/mrOkLUB.png'} layout="cover" width={286} height={286} className="rounded-t-lg"/>
                    </div>
                    <div className="h-full w-full flex justify-center">
                        <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block" href={'/'}>VESTIDO RAYADO CON TAJO</Link>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75">
                    <div className="lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center">
                        <Image alt={"01"} src={'https://i.imgur.com/SpPNf9T.png'} layout="cover" width={286} height={286} className="rounded-t-lg"/>
                    </div>
                    <div className="h-full w-full flex justify-center">
                        <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block" href={'/'}>LONAS</Link>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="lg:text-[3rem] text-lg my-4">PRODUCTOS DESTACADOS</h1>
            </div>
        </main>
    )
};