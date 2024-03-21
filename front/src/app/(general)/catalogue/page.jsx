import CardBasic from "@/components/cards/CardBasic";
import { metadata } from "../home/layout";
import GlobalList from "../../components/Main-Nav/DropDown/DropDownList";
metadata.title = 'Sixteen | Catálogo'

export default function Catalogue() {
    return <CardBasic title={'Catálogo.'}>
        <div className="w-full pt-8 md:pt-10 ">
            <hr className="border border-pink-500/25" />
            <div className="w-full flex flex-col items-center justify-center">
            </div>
        </div>
    </CardBasic>
};