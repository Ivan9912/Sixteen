import { metadata } from "../layout";
metadata.title = 'Sixteen | Home';
import CARDS from '@/BBDD/CARDS.json';
import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import CardInfo from "@/components/Cards/CardInfo";
import CardRecomemnd from "@/components/Cards/CardRecommend";
import CardTop from "@/components/Cards/CardTop";
import HrPersonality from "@/components/Utilities/HrPersonality";
import TitleLogo from "@/components/Utilities/TitleLogo";

export default function Home() {
    return <main className="flex text-black flex-col items-center justify-center h-full select-none mt-16 lg:mt-28">
        <TitleLogo component={'body'} title={'Sixteen'}/>
        <CarrouselMain widthCarrouselT={'w-11/12'} $autoSlice autoSlideInterval={10000} colorpg={'236, 72, 153'} heightpg={'0.3rem'} opacitypg={1} />
        <CardInfo informations={CARDS.Info} />
        <HrPersonality title={'RECOMENDACIONES'} />
        <CardRecomemnd recommedcontents={CARDS.Recommend} />
        <HrPersonality title={'PRODUCTOS DESTACADOS'} />
        <CardTop tops={CARDS.Top} />
    </main>
};