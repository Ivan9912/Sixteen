export default function Home() {
    return (
        <main className="flex text-black flex-col items-center justify-between pt-96 pb-96 select-none">
            <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
                Bienvenidos a&nbsp;
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:-z-10 before:bg-pink-500 relative inline-block">
                    <span className="relative text-white">Sixteen</span>
                </span>
                !
            </blockquote>
        </main>
    )
};