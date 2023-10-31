export default function ContactUs() {
    return (
        <main className="mt-40 mb-10 w-full h-screen flex justify-center">
            <section className="w-11/12 mb-10 bg-white flex flex-col justify-start items-center rounded border border-pink-500/25">
                <h1 className="text-center text-2xl md:text-4xl mt-2 md:mt-6 p-6 font-bold text-pink-500">Contáctanos</h1>
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Rlsa5HfbzEtIr4S-BJxRBDt7NTqhYPM&ehbc=2E312F&noprof=1" className="w-10/12 h-3/6 sm:h-[30rem] mt-3 md:mt-8"/>
                <div className="w-full pt-8 md:pt-10 ">
                    <hr className="border border-pink-500/25" />
                </div>
            </section>
        </main>
    )
};