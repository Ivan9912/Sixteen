import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
import Image from "next/image";
import Link from "next/link";
import CardInfo from "@/components/Cards/CardInfo";
metadata.title = 'Sixteen | Home';

const cardInfo = [

    {
        title: `REALIZÁ TÚ PEDIDO:`,
        description:`Elegí lo que te guste y agregalo al carrito de compra, recuerda que el mínimo de compra es: $<b>10000</b>.`,
        aLt:`Shop`,
        URL:`https://i.imgur.com/hp3LhM4.png`
    },
    {
        title:`ENVIÁ TÚ PEDIDO:`,
        description:`Una vez agregado tu pedido al carrito de compra, dale click a “enviar pedido”, nos comunicaremos por whatsaap en 24 hs hábiles.`,
        aLt:`WPP`,
        URL:`https://i.imgur.com/0eqocWR.png`
    },
    
    {
        title:`REALIZÁ EL PAGO:`,
        description:`Tenes para abonar hasta 48 horas hábiles por deposito o transferencia bancaria y efectivo únicamente para retiros por el deposito.`,
        aLt:`Card`,
        URL:`https://i.imgur.com/0kXtFrS.png`
    },
    
    {
        title:`DESPACHOS:`,
        description:`LOS ENVIOS SON martes y viernes por Oca, viacargo y correo argentino. transportes y motos se coordina por whatsaap`,
        aLt:`Drop`,
        URL:`https://i.imgur.com/yBRNOco.png`
    },
];

export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-center h-full select-none mt-16 lg:mt-28">
            <blockquote className="lg:text-2xl font-semibold italic text-center text-slate-900 my-8 z-[2]">
                Bienvenidos a&nbsp;&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-0 before:bg-pink-500 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-[#f5f5f5] [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:lg:text-xl [&_span]:z-[1]">
                    <span>Sixteen</span>
                </span>
            </blockquote>
            <CarrouselMain widthCarrouselT={'w-11/12'} $autoSlice autoSlideInterval={10000} colorpg={'236, 72, 153'} heightpg={'0.3rem'} opacitypg={1} />
            
            <CardInfo informations={cardInfo}/>
            <div className="w-full h-full flex flex-row items-center">
                <div className="2xl:h-2 h-[4px] w-4/12 bg-pink-900" />
                <span className="lg:text-[1.5rem] text-sm font-bold 2xl:text-4xl my-4 w-4/12 text-center border border-x-4 2xl:border-x-8 border-x-pink-900 text-pink-900">RECOMENDACIONES</span>
                <div className="2xl:h-2 h-[4px] bg-pink-900 w-4/12" />
            </div>
            {/* ------------------------Desde aca estan las cards de categorias de los 3 ------------------------------------------*/}
            <div div className="grid grid-cols-1 lg:grid-cols-3 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>div]:my-10 [&>div]:my-5 2xl:px-80 lg:px-16">
                <div className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75">
                    <div className="lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative">
                        <Image alt={"01"} src={'https://i.imgur.com/IglFLkP.png'} layout="cover" width={286} height={286} className="rounded-t-lg" />
                    </div>
                    <div className="h-full w-full flex justify-center">
                        <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block" href={'/'}>VESTIDO DE MORLEY RAYADO</Link>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75">
                    <div className="lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative">
                        <Image alt={"02"} src={'https://i.imgur.com/mrOkLUB.png'} layout="cover" width={286} height={286} className="rounded-t-lg" />
                    </div>
                    <div className="h-full w-full flex justify-center">
                        <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block" href={'/'}>VESTIDO RAYADO CON TAJO</Link>
                    </div>
                </div>
                <div className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75">
                    <div className="lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center">
                        <Image alt={"03"} src={'https://i.imgur.com/SpPNf9T.png'} layout="cover" width={286} height={286} className="rounded-t-lg" />
                    </div>
                    <div className="h-full w-full flex justify-center">
                        <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block" href={'/'}>LONAS</Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex flex-row items-center">
                <div className="2xl:h-2 h-[4px] w-4/12 bg-pink-900" />
                <span className="lg:text-[1.5rem] text-sm font-bold 2xl:text-4xl my-4 w-4/12 text-center border border-x-4 2xl:border-x-8 border-x-pink-900 text-pink-900">PRODUCTOS DESTACADOS</span>
                <div className="2xl:h-2 h-[4px] bg-pink-900 w-4/12" />
            </div>
            {/* De Aca va lo Descatacado!. */}
            <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>a]:my-10 [&>a]:my-5 2xl:px-40 lg:px-44 mb-10">
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"01AB"} src={'https://i.imgur.com/WkXoGvN.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RS.FEARLESS</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"02AB"} src={'https://i.imgur.com/PbwNjFr.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RO.ONLY FLANS BLANCO</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"03AB"} src={'https://i.imgur.com/TBl3TOy.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RS.BAD BUNNY</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"04AB"} src={'https://i.imgur.com/Z20PcfM.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RO.ONLY FLANS NEGRO</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"05AB"} src={'https://i.imgur.com/WkXoGvN.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RS.FEARLESS</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"06AB"} src={'https://i.imgur.com/PbwNjFr.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RO.ONLY FLANS BLANCO</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"07AB"} src={'https://i.imgur.com/TBl3TOy.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RS.BAD BUNNY</span>
                </Link>
                <Link className="lg:h-80 lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={'/'}>
                    <Image alt={"08AB"} src={'https://i.imgur.com/Z20PcfM.png'} layout="cover" width={286} height={286} className="rounded-t-lg lg:h-64 lg:w-72 h-44 w-64 flex justify-center relative bg-center" />
                    <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-5 inline-block">RO.ONLY FLANS NEGRO</span>
                </Link>
            </div>
        </main>
    )
};