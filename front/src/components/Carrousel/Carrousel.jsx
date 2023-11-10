"use client"
import { useEffect, useState } from 'react';
import Next from '../../../public/img_svg/form-next';
import Previous from '../../../public/img_svg/form-previous';
import Link from 'next/link';
import ProgressBar from '../ProgressBar/ProgressBar';

const dataInfo = [
    {
        title: "Sixteen Mayorista",
        subTitle: "La Fabrica Mayorista",
        HreF: "/"
    },
    {
        title: "NEW SEASON",
        subTitle: "Primavera - Verano | 2023",
        HreF: "/"
    },
    {
        title: "Somos Distribuidores",
        subTitle: "Fabricación y ventas mayoristas orientada a la industria de la moda",
        HreF: "/"
    },
    {
        title: "SIXTEEN | 2023"
    }
]

export default function Carrousel({ children: cont, autoSlice = false, autoSlideInterval = 3000, colorpg='255, 255, 255', heightpg='1rem', opacitypg=1 }) {

    const [curr, setCurr] = useState(0);

    const prev = () => {
        setCurr((c) => {
            return c === 0 ? cont.length - 1 : c - 1;
        })
    };

    const next = () => {
        setCurr((c) => {
            return c === cont.length - 1 ? 0 : c + 1;
        })
    };

    const nextAutomatic = () => {
        Animation();
        setCurr((c) => {
            return c === cont.length - 1 ? 0 : c + 1;
        })
    };

    const Animation = () => {
        const shimpgElement = document.querySelector('.animpg');
        shimpgElement.classList.remove('shimpg');
        shimpgElement.classList.remove('after:animate-shimmer-pg');
        void shimpgElement.offsetWidth; // Este paso fuerza un reflow, reiniciando la animación
        shimpgElement.classList.add('shimpg');
        shimpgElement.classList.add('after:animate-shimmer-pg');
    }

    useEffect(() => {
        if (autoSlice) {
            const slideInterval = setInterval(nextAutomatic, autoSlideInterval);
            return () => { clearInterval(slideInterval); }
        }
    }, []);

    return (
        <div className='w-full flex flex-col justify-center'>
            <div className="overflow-hidden relative flex w-full">
                <div className='absolute  bg-black w-full h-full'>
                </div>
                <div className="flex w-full transition-transform ease-out duration-1000" style={{ transform: `translateX(-${curr * 100}%)` }}>{cont}</div>
                <div className='absolute  inset-0 flex items-center flex-grow w-full h-full hover:bg-black/30'>

                    <div className=' flex items-center p-4'>
                        <button className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white' onClick={prev}>
                            <Previous size={40} />
                        </button>
                    </div>
                    <div className='w-full h-full flex flex-row items-center justify-between'>
                        <div className='w-6/12'></div>
                        <div className='flex flex-col mt-0 items-end p-4 rounded mb-40'>
                            <div className='bg-black/60 text-end'>
                                <h1 className={`text-pink-500/90 text-6xl font-bold ${dataInfo[curr].title ? 'p-4' : ''}`}>{`${dataInfo[curr].title ? dataInfo[curr].title : ''}`}</h1>
                            </div>
                            <div className='mb-4 bg-white/60 w-auto text-center'>
                                <h1 className={`text-black/90 text-xl ${dataInfo[curr].subTitle ? 'p-4' : ''}`}>{`${dataInfo[curr].subTitle ? dataInfo[curr].subTitle : ''}`}</h1>
                            </div>
                            <Link href={`${dataInfo[curr] ? dataInfo[curr].HreF : '/'}`} className={`${dataInfo[curr].HreF ? 'visible' : 'invisible'} px-4 py-2 text-white font-medium rounded-md transition ease-in-out delay-150 bg-pink-800 hover:-translate-y-1 hover:font-semibold hover:scale-110 hover:bg-pink-500 duration-100`}>Ver Más</Link>
                        </div>
                    </div>
                    <div className=' flex items-center p-4'>
                        <button className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white' onClick={next}>
                            <Next size={40} />
                        </button>
                    </div>
                </div>
                <div className='absolute bottom-4 left-0 right-0'>
                    <div className='flex items-center justify-center gap-0'>
                        {
                            cont.map((_, i) => {
                                return <div
                                    className={`transition-all w-3 h-3 ml-2 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}
                                    key={`${i}-C`}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
            <ProgressBar color={colorpg} heightpg={heightpg} time={autoSlideInterval} opacity={opacitypg} />
        </div>
    )
};