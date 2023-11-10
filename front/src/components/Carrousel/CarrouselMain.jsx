'use client';
import Image from "next/image";
import Carrousel from "./Carrousel";

const images = [
    "E3eVdMK",
    "0KzMgY9",
    "zfce9BB"
];

const videos = [
    "A2s9Iiv"
]

export default function CarrouselMain({ widthCarrouselT, widTh, autoSlice=false, autoSlideInterval=10000, colorpg='236, 72, 153', heightpg='0.3rem', opacitypg=1}) {
    return (
        <div style={{width: `${widTh ? widTh : ''}`}} className={`relative ${widthCarrouselT ? widthCarrouselT : ''} flex items-center`}>
            <main>
                <div className="w-full flex flex-row justify-center">
                    <Carrousel autoSlice={autoSlice} autoSlideInterval={autoSlideInterval} colorpg={colorpg} heightpg={heightpg} opacitypg={opacitypg}>
                        {
                            [...images.map((image) => (
                                <Image src={`https://i.imgur.com/${image}.jpg`} width={1800} height={600} key={`${image}`} alt={`${image}`} priority={true} />
                            )),
                            <video key={`${videos}-V`} src={`https://i.imgur.com/${videos}.mp4`} width={1800} height={600} className="lg:pl-8" autoPlay loop muted />
                            ]}
                    </Carrousel>
                </div>            
            </main>
        </div>
    )
};

// TENGO QUE METER LA ANIMACION DENTRO DE CARROUSEL.                                            | HECHO.
// TENGO QUE HACER CUANDO SE PRESIONE NEXT QUE REINICI CON ANIMATIONEND.                        | NO HECHO.
// TENGO QUE HACER QUE SOLO APAREZCA LA ANIMACION SI ES TRUE LA ITERACION INFINITA.             | NO HECHO.
// TENGO QUE HACER QUE AL TOCAR NEXT SE PARE MOMENTANEAMENTE LA ITETACION.                      | NO HECHO.
// TENGO QUE CALCULAR EL TIEMPO DE LA ITERACION DEL INTERVAL PARA QUE COMIENCE LA ANIMACION.    | NO HECHO.
// NO TIENE QUE SER INFINITE EL ANIMATION-ITERATION-COUNT.                                      | NO HECHO.