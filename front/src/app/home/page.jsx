import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
metadata.title = 'Sixteen | Home';

export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-center h-screen select-none mt-4">
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900 my-8 z-[2]">
                Bienvenidos a&nbsp;&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-0 before:bg-pink-500 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-[#f5f5f5] [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:text-xl [&_span]:z-[1]">
                    <span>Sixteen</span>
                </span>
            </blockquote>
            <CarrouselMain widthCarrouselT={'w-11/12'} autoSlice={true} autoSlideInterval={10000} colorpg={'236, 72, 153'} heightpg={'0.3rem'} opacitypg={1}/>           
        </main>
    )
};