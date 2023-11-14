'use client';
import CARROULSELCONTENT from '@/BBDD/CARROULSELCONTENT.json';
import Image from "next/image";
import Carrousel from "./Carrousel";

export default function CarrouselMain({ widthCarrouselT, widTh, autoSlice=false, autoSlideInterval=10000, colorpg='236, 72, 153', heightpg='0.3rem', opacitypg=1}) {
    return (
        <div style={{width: `${widTh ? widTh : ''}`}} className={`relative ${widthCarrouselT ? widthCarrouselT : ''} flex items-center`}>
            <main>
                <div className="w-full flex flex-row justify-center">
                    <Carrousel autoSlice={autoSlice} autoSlideInterval={autoSlideInterval} colorpg={colorpg} heightpg={heightpg} opacitypg={opacitypg}>
                        {
                            [... CARROULSELCONTENT.images.map((image) => (
                                <Image src={`https://i.imgur.com/${image}.jpg`} width={1800} height={600} key={`${image}-img-01`} alt={`${image}`} priority={true} />
                            )),
                            <video key={`${CARROULSELCONTENT.videos}-V`} src={`https://i.imgur.com/${CARROULSELCONTENT.videos}.mp4`} width={1800} height={600} className="lg:px-8" autoPlay loop muted />
                            ]}
                    </Carrousel>
                </div>            
            </main>
        </div>
    )
};