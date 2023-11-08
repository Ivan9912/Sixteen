'use client';
import Image from "next/image";
import Carrousel from "./Carrousel";
const images = [
    "Carrousel01",
    "Carrousel02",
    "Carrousel03"
];


export default function CarrouselMain() {
    return (
        <main className="carroulselApp">
            <div className="w-full">
                <Carrousel>
                    {
                        images.map((image) => (
                            <Image src={require(`../../../public/img_png/${image}.jpg`).default} width={1400} height={500} key={`${image}`} alt={`${image}`} priority={true}/>
                        ))
                    }
                </Carrousel>
            </div>
        </main>
    )
};