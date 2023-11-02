import { useState } from 'react';

export default function SubList({ props }) {
    const [isOpenSubList, setIsOpenSubList] = useState(false);
    return <>
        {
            props.map((sub_cat, i) => {
                return <li key={`$ID-${i}-${sub_cat.name}`} className="w-72 [&_a]:inline-block [&_a]:w-full border-b-2 border-black/0 hover:border-b-2 hover:border-pink-500 hover:text-pink-500 hover:bg-gray-100 cursor-pointer group/sub_list_1">
                    <span onClick={() => { setIsOpenSubList(!isOpenSubList) }}>
                        {sub_cat.name}   
                    </span>
                </li>
            })}
    </>
};