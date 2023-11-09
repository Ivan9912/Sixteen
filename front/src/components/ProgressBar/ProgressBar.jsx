"use client"

export default function Prueba ({color='255, 255, 255, 1', heightpg='1rem', time=1, opacity=1 }) {
    return (
        <div className='flex flex-col space-y-3'>
            <div className='relative w-12/12'>
                <div style={{'--clrpg': `${color}`, height: `${heightpg}`, '--timepg': `${time}ms`, '--opacitypg': `${opacity}`}} className={` rounded-r-lg animpg shimpg after:animate-shimmer-pg`}></div>
            </div>
        </div>
    )
};