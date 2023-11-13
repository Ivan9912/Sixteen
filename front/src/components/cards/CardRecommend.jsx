import Image from "next/image";
import Link from "next/link";

export default function CardRecomemnd({ recommedcontents }) {
    return <div className="grid grid-cols-1 lg:grid-cols-3 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>div]:my-10 [&>div]:my-5 2xl:px-80 lg:px-16">
        {
            recommedcontents.map((cont) => <div className="lg:h-[21rem] lg:w-72 h-56 w-64 bg-pink-600 rounded-lg border border-black/50 flex flex-col items-center hover:transition-transform hover:scale-105 hover:delay-75" key={`${cont.title}-div01R`}>
            <div className="flex justify-center relative" key={`${cont.title}-div02R`}>
                <Image alt={`${cont.aLt}-alt-info`} src={cont.sRc} width={286} height={286} className="rounded-t-lg" key={`${cont.title}-Img01R`}/>
            </div>
            <div className="h-full w-full flex justify-center" key={`${cont.title}-div03R`}>
                <Link className="w-full text-center text-white text-xs font-semibold lg:text-sm lg:font-bold py-4 inline-block" href={cont.hREF} key={`${cont.title}-a01R`}>{cont.title}</Link>
            </div>
        </div>)
        }
    </div>
};