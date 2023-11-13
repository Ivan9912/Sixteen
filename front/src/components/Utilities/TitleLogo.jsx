import Link from "next/link";

export default function TitleLogo({ component }) {
    return <>
        <div className={`${component == 'nav' ? 'flex' : 'hidden'}  flex-grow basis-0 justify-start md:justify-items-start select-none`}>
            <Link href="/" title='Home' className="font-extrabold text-lg basis-0 flex items-center justify-center ">
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 duration-500 hover:before:bg-white relative inline-block [&_span]:relative [&_span]:text-white [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:text-xl">
                    <span>Sixteen</span>
                </span>
            </Link>
        </div>
        <blockquote className={`${component == 'body' ? 'flex' : 'hidden'} lg:text-2xl font-semibold italic text-center text-slate-900 my-8 z-[2]`}>
            Bienvenidos a&nbsp;&nbsp;&nbsp;
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:z-0 before:bg-pink-500 duration-500 hover:before:bg-[#f5f5f5] relative inline-block [&_span]:relative [&_span]:text-[#f5f5f5] [&:hover_span]:text-pink-500 [&:hover_span]:underline [&:hover_span]:underline-offset-4 [&_span]:duration-500 [&_span]:italic [&_span]:lg:text-xl [&_span]:z-[1]">
                <span>Sixteen</span>
            </span>
        </blockquote>
    </>
};