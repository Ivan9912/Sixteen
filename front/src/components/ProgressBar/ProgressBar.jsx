"use client";

export default function ProgressBar({ color, heightpg, time, opacity }) {
    return (
        <div className='flex flex-col space-y-3'>
            <div className='relative w-12/12'>
                <div style={{ '--clrpg': `${color}`, height: `${heightpg}`, '--timepg': `${time}ms`, '--opacitypg': `${opacity}` }} className={` rounded-r-lg animpg`}></div>
            </div>
        </div>
    )
};