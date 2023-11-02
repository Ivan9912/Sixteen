import Link from 'next/link';
import { useState } from 'react';

export default function SubList({ props }) {
    const [isOpenSubList, setIsOpenSubList] = useState(false);
    return <ul className='w-full flex flex-col'>
        <span className='w-52' onClick={() => { setIsOpenSubList(!isOpenSubList) }}>{props.name}</span>

        {
            props.sub_content_1.map((sub_cot, i) => {
                return <li key={`$ID-${i}---${sub_cot.name}`} className={`${isOpenSubList ? '' : 'hidden'} ${i == 0 ? 'mt-3' : ''} w-full [&_a]:inline-block [&_a]:w-full border-b-2 border-black/0 hover:border-b-2 hover:border-pink-500 hover:text-pink-500 hover:bg-gray-100 cursor-pointer`}>
                    <Link className={`px-2 py-1 ml-4`} href={sub_cot.href}>{sub_cot.name}</Link>
                </li>
            })
        }
    </ul>
};