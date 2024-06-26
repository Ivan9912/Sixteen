import CardBasic from "@/components/cards/CardBasic";
import { metadata } from "../home/layout";
metadata.title = 'Sixteen | Cart';

export default function Cart() {
    return <CardBasic title={'Carrito.'}>
        <div className="w-full pt-8 md:pt-10">
            <hr className="border border-pink-500/25" />
        </div>
    </CardBasic>
};