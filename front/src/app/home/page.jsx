import CarrouselMain from "@/components/Carrousel/CarrouselMain";
import { metadata } from "../layout";
metadata.title = 'Sixteen | Home';

export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-center h-screen select-none">
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900 my-8 -z-[9]">
                Bienvenidos a&nbsp;&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-[11] before:bg-pink-500 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-[#f5f5f5] [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:text-xl [&_span]:-z-10">
                    <span>Sixteen</span>
                </span>
            </blockquote>
            <div className="relative  w-11/12 flex items-center">
                <CarrouselMain />
            </div>
        </main>
    )
};