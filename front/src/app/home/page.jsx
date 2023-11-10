import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
metadata.title = 'Sixteen | Home';

export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-center h-full select-none mt-16 lg:mt-28">
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900 my-8 z-[2]">
                Bienvenidos a&nbsp;&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-0 before:bg-pink-500 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-[#f5f5f5] [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:text-xl [&_span]:z-[1]">
                    <span>Sixteen</span>
                </span>
            </blockquote>
            <CarrouselMain widthCarrouselT={'w-11/12'} autoSlice={false} autoSlideInterval={10000} colorpg={'236, 72, 153'} heightpg={'0.3rem'} opacitypg={1}/>       
            <div className=" grid grid-cols-2 lg:grid-cols-4 h-12/12 w-screen justify-items-center m-10 bg-black/5 [&>div]:my-10 ">
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600"></div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">REALIZÁ TÚ PEDIDO:</h1>
                        <span className="text-[8px] lg:text-xs/4">Elegí lo que te guste y agregalo al carrito de compra, recuerda que el mínimo de compra es: $<b>10000</b>.</span>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600"></div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">ENVIA TU PEDIDO</h1>
                        <span className="text-[8px] lg:text-xs/4">Una vez agregado tu pedido al carrito de compra, dale click a “enviar pedido”, nos comunicaremos por whatsaap en 24 hs hábiles.</span>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600"></div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">REALIZA EL PAGO</h1>
                        <span className="text-[8px] lg:text-xs/4">Tenes para abonar hasta 48 horas hábiles por deposito o transferencia bancaria y efectivo únicamente para retiros por el deposito.</span>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center">
                    <div className="h-32 flex items-center my-4">
                        <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600"></div>
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center">
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1">DESPACHOS</h1>
                        <span className="text-[8px] lg:text-xs/4">LOS ENVIOS SON martes y viernes por Oca, viacargo y correo argentino. transportes y motos se coordina por whatsaap</span>
                    </div>
                </div>
            </div>    
        </main>
    )
};