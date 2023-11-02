import { metadata } from "../layout";
metadata.title = 'Sixteen | Sobre Nosotros';

export default function AboutUs() {
    return <CardBasic title={'Sobre Nosotros.'}>
        <div className="w-full pt-8 md:pt-10">
            <hr className="border border-pink-500/25" />
        </div>
    </CardBasic>
};