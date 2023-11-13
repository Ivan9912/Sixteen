import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
import Image from "next/image";
import Link from "next/link";
import CardInfo from "@/components/Cards/CardInfo";
import CardRecomemnd from "@/components/Cards/CardRecommend";
import CardTop from "@/components/Cards/CardTop";
metadata.title = 'Sixteen | Home';

const cardInfo = {
    Info: [

        {
            title: `REALIZÁ TÚ PEDIDO:`,
            description: `Elegí lo que te guste y agregalo al carrito de compra, recuerda que el mínimo de compra es: $<b>10000</b>.`,
            aLt: `Shop`,
            URL: `https://i.imgur.com/hp3LhM4.png`
        },
        {
            title: `ENVIÁ TÚ PEDIDO:`,
            description: `Una vez agregado tu pedido al carrito de compra, dale click a “enviar pedido”, nos comunicaremos por whatsaap en 24 hs hábiles.`,
            aLt: `WPP`,
            URL: `https://i.imgur.com/0eqocWR.png`
        },

        {
            title: `REALIZÁ EL PAGO:`,
            description: `Tenes para abonar hasta 48 horas hábiles por deposito o transferencia bancaria y efectivo únicamente para retiros por el deposito.`,
            aLt: `Card`,
            URL: `https://i.imgur.com/0kXtFrS.png`
        },

        {
            title: `DESPACHOS:`,
            description: `LOS ENVIOS SON martes y viernes por Oca, viacargo y correo argentino. transportes y motos se coordina por whatsaap`,
            aLt: `Drop`,
            URL: `https://i.imgur.com/yBRNOco.png`
        },
    ],
    Recommend: [
        {
            title: 'VESTIDO DE MORLEY RAYADO',
            aLt: '01',
            hREF: '/',
            sRc: 'https://i.imgur.com/IglFLkP.png'
        },
        {
            title: 'VESTIDO RAYADO CON TAJO',
            aLt: '02',
            hREF: '/',
            sRc: 'https://i.imgur.com/mrOkLUB.png'
        },
        {
            title: 'LONAS',
            aLt: '03',
            hREF: '/',
            sRc: 'https://i.imgur.com/SpPNf9T.png'
        }
    ],
    Top: [
        {
            title: 'RS.FEARLESS',
            alT: '01',
            hreF: '/',
            srC: 'https://i.imgur.com/WkXoGvN.png'
        },
        {
            title: 'RO.ONLY FLANS BLANCO',
            alT: '02',
            hreF: '/',
            srC: 'https://i.imgur.com/PbwNjFr.png'
        },
        {
            title: 'RS.BAD BUNNY',
            alT: '03',
            hreF: '/',
            srC: 'https://i.imgur.com/TBl3TOy.png'
        },
        {
            title: 'RO.ONLY FLANS NEGRO',
            alT: '04',
            hreF: '/',
            srC: 'https://i.imgur.com/Z20PcfM.png'
        },
        {
            title: 'RS.FEARLESS',
            alT: '05',
            hreF: '/',
            srC: 'https://i.imgur.com/WkXoGvN.png'
        },
        {
            title: 'RO.ONLY FLANS BLANCO',
            alT: '06',
            hreF: '/',
            srC: 'https://i.imgur.com/PbwNjFr.png'
        },
        {
            title: 'RS.BAD BUNNY',
            alT: '07',
            hreF: '/',
            srC: 'https://i.imgur.com/TBl3TOy.png'
        },
        {
            title: 'RO.ONLY FLANS NEGRO',
            alT: '08',
            hreF: '/',
            srC: 'https://i.imgur.com/Z20PcfM.png'
        },
    ]
};

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

            <CardInfo informations={cardInfo.Info} />
            <div className="w-full h-full flex flex-row items-center">
                <div className="2xl:h-2 h-[4px] w-4/12 bg-pink-900" />
                <span className="lg:text-[1.5rem] text-sm font-bold 2xl:text-4xl my-4 w-4/12 text-center border border-x-4 2xl:border-x-8 border-x-pink-900 text-pink-900">RECOMENDACIONES</span>
                <div className="2xl:h-2 h-[4px] bg-pink-900 w-4/12" />
            </div>
            {/* ------------------------Desde aca estan las cards de categorias de los 3 ------------------------------------------*/}
            <CardRecomemnd recommedcontents={cardInfo.Recommend} />
            {/* De Aca va lo Descatacado!. */}
            <CardTop tops={cardInfo.Top} />
        </main>
    )
};