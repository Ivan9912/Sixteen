import { metadata } from "../layout";
metadata.title = 'Sixteen | Home';

export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-center h-screen select-none">
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                Bienvenidos a&nbsp;&nbsp;&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-pink-500 duration-500 hover:before:bg-white relative inline-block [&_span]:relative [&_span]:text-white [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:text-xl [&_span]:-z-[9]">
                    <span>Sixteen</span>
                </span>
            </blockquote>
        </main>
    )
};