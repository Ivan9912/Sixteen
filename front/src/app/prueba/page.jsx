import CardBasic from "@/components/Cards/CardBasic";
import { metadata } from "../layout";
import Prueba from "./Prueba";

metadata.title = 'PRUEBA';

export default function Gallery() {
    return <CardBasic title={'Esta es una Prueba...'}>
        <div className="w-full pt-8 md:pt-10">
            <hr className="border border-pink-500/25" />              
            <Prueba color={'236, 72, 153, 1'} heightpg={'1rem'} time={10} opacity={1} />
        </div>
    </CardBasic>
};