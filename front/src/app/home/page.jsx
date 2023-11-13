import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
import CardInfo from "@/components/Cards/CardInfo";
import CardRecomemnd from "@/components/Cards/CardRecommend";
import CardTop from "@/components/Cards/CardTop";
import HrPersonality from "@/components/Utilities/HrPersonality";
import TitleLogo from "@/components/Utilities/TitleLogo";
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
    return <main className="flex text-black flex-col items-center justify-center h-full select-none mt-16 lg:mt-28">
        <TitleLogo component={'body'} />
        <CarrouselMain widthCarrouselT={'w-11/12'} $autoSlice autoSlideInterval={10000} colorpg={'236, 72, 153'} heightpg={'0.3rem'} opacitypg={1} />
        <CardInfo informations={cardInfo.Info} />
        <HrPersonality title={'RECOMENDACIONES'} />
        <CardRecomemnd recommedcontents={cardInfo.Recommend} />
        <HrPersonality title={'PRODUCTOS DESTACADOS'} />
        <CardTop tops={cardInfo.Top} />
    </main>
};