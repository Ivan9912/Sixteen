import CardBasic from "@/components/cards/CardBasic";
import { metadata } from "../layout";
metadata.title = 'PRUEBA';

export default function Gallery() {
    return <CardBasic title={'Esta es una Prueba...'}>
        <div className="w-full pt-8 md:pt-10">
            <hr className="border border-pink-500/25" />
        </div>
    </CardBasic>
};