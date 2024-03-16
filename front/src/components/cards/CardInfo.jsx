import Image from "next/image";

export default function CardInfo({ informations }) {
    return (<div className=" grid grid-cols-2 lg:grid-cols-4 h-12/12 w-full justify-items-center lg:m-10 m-4 bg-black/5 lg:[&>div]:my-10 [&>div]:my-5">
        {
            informations.map((info, i) => 
                <div className="lg:h-80 lg:w-72 h-52 w-44 bg-slate-50 rounded border border-pink-400 flex flex-col justify-start items-center" key={`${info.title}-div01`}>
                    <div className=" h-32 flex items-center my-4 justify-center" key={`${info.title}-div02`}>
                        <div className="rounded-full lg:h-28 lg:w-28 h-14 w-14 bg-pink-600" key={`${info.title}-divcircle`}></div>
                        <Image key={`${info.title}-img0B${i}`} className={`absolute w-8 h-8 lg:w-20 lg:h-20 invert`} alt={`${info.title}-img0B${i}`} src={info.URL} width={80} height={80} />
                    </div>
                    <div className="h-6/12 px-4 pb-4 text-center" key={`${info.title}-div03`}>
                        <h1 className="text-xs font-semibold lg:text-sm lg:font-bold mb-1" key={`${info.title}-h101`}>{info.title}</h1>
                        <span className="text-[8px] lg:text-xs/4" key={`${info.title}-span01`}>{info.description}</span>
                    </div>
                </div>
            )
        }
    </div>)
    
    
};