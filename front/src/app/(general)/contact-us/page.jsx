import CardBasic from "@/components/cards/CardBasic";
import { metadata } from "../home/layout";
metadata.title = 'Sixteen | Contactànos';

export default function ContactUs() {
    return <CardBasic title={'Contactános'}>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Rlsa5HfbzEtIr4S-BJxRBDt7NTqhYPM&ehbc=2E312F&noprof=1" className="w-10/12 h-3/6 sm:h-[30rem] mt-3 md:mt-8" />
        <div className="w-full pt-8 md:pt-10 ">
            <hr className="border border-pink-500/25" />
        </div>
    </CardBasic>
};