import CardBasic from "@/components/cards/CardBasic";
import { metadata } from "../layout";
metadata.title = 'Sixteen | Preguntas Frecuentes';

export default function FrequentQuestions () {
    return  <CardBasic title={'Preguntas Frecuentes.'}>
                <div className="w-full pt-8 md:pt-10 ">
                    <hr className="border border-pink-500/25" />
                </div>
            </CardBasic>
};