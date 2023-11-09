"use client"
import './styles.css'
export default function Prueba ({color, heightpg, time, opacity }) {
    return (
        <div className='p-10 flex flex-col space-y-3'>
            <div className='relative w-full sm:w-1/2 bg-gray-200 rounded'>
                <div style={{'--clrpg': `${color}`, height: `${heightpg}`, '--timepg': `${time}s`, '--opacitypg': `${opacity}`}} className={` top-0 rounded shimpg after:animate-shimmer-pg`}></div>
            </div>
        </div>
    )
};