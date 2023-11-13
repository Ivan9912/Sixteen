import Image from "next/image";
import Link from "next/link";

export default function CardTop({ tops }) {
    return <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>a]:my-10 [&>a]:my-5 2xl:px-40 lg:px-44 mb-10">
        {
            tops.map((top) => <Link className="lg:h-[21rem] lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75 hover:shadow-[25px_25px_30px_10px_rgba(236,72,156,.3)]" href={top.hreF} key={`${top.title}-a01T`}>
                <Image alt={`${top.alT}-Top-A`} src={top.srC} width={286} height={286} className="rounded-t-lg flex justify-center relative bg-center" key={`${top.title}-Img01T`} />
                <span className="w-full h-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-4 inline-block" key={`${top.title}-Span01T`}>
                    {top.title}
                </span>
            </Link>)
        }
    </div>
};