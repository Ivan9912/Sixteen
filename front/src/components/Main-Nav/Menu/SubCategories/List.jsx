import { useState } from 'react';

export default function SubList1({ props }) {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    const { list } = props;
    return (
        <span className='w-full' onClick={() => { setIsOpenSubMenu(!isOpenSubMenu) }}>
            {props.name}
            {
                <ul className={`relative bg-black text-white flex-col [&>li]:px-3 [&>li]:py-2 [&>li]:w-full text-start w-5/12 ${isOpenSubMenu ? '' : 'hidden'}`}>
                    {
                        list.map((sub_1, i) => {
                            return (
                                <li key={`${sub_1}+-${i}`} className='text-xs'>{sub_1.name}</li>
                            )
                        })
                    }
                </ul>
            }
        </span>
    )
};