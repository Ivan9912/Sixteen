export default function HrPersonality({ title}) {
    return <div className="w-full h-full flex flex-row items-center">
        <div className="2xl:h-2 h-[4px] w-4/12 bg-pink-900" />
        <span className="lg:text-[1.5rem] text-sm font-bold 2xl:text-4xl my-4 w-4/12 text-center border border-x-4 2xl:border-x-8 border-x-pink-900 text-pink-900">{title}</span>
        <div className="2xl:h-2 h-[4px] bg-pink-900 w-4/12" />
    </div>
};