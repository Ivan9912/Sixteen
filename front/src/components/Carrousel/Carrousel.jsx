import { useState } from 'react';
import Next from '../../../public/img_svg/form-next';
import Previous from '../../../public/img_svg/form-previous';

export default function Carrousel({ children: cont }) {

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

    return (       
        <div className="overflow-hidden relative">            
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>{cont}</div>
            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white' onClick={prev}>
                    <Previous size={40} />
                </button>
                <button className='p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white' onClick={next}>
                    <Next size={40} />
                </button>
            </div>
        </div>
    )
};