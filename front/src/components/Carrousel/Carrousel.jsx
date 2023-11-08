import { useEffect, useState } from 'react';
import Next from '../../../public/img_svg/form-next';
import Previous from '../../../public/img_svg/form-previous';

export default function Carrousel({ children: cont, autoSlice = false, autoSlideInterval = 3000 }) {

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

    useEffect(() => {
        if (autoSlice) {
        const slideInterval = setInterval(next, autoSlideInterval + 1000);
        return () => clearInterval(slideInterval);}
    }, [])

    return (       
        <div className="overflow-hidden relative flex w-full">            
            <div className="flex w-full transition-transform ease-out duration-1000 z-0" style={{ transform: `translateX(-${curr * 100}%)` }}>{cont}</div>
            <div className='absolute z-[1] inset-0 flex items-center flex-grow w-full h-full hover:bg-black/30'>

                <div className=' flex items-center p-4 '>
                    <button className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white' onClick={prev}>
                        <Previous size={40} />
                    </button>
                </div>
                <div className='w-full h-full'></div>
                <div className=' flex items-center p-4 '>

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
                                className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? 'p-2' : 'bg-opacity-50'}`}
                                key={`${i}-C`}
                            />
                        })
                    }                    
                </div>
            </div>
        </div>
    )
};