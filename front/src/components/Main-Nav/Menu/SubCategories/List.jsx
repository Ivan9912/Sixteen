import { useState } from 'react';

export default function SubList1({ props }) {
    const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
    const { list } = props;
    return (
        <span onClick={() => { setIsOpenSubMenu(!isOpenSubMenu) }}>
            {props.name}
            {
                <ul className={`mt-2 bg-gray-100/90 text-black/90 flex-col text-start [&>li]:px-3 [&>li]:py-2 [&>li]:w-full w-full ${isOpenSubMenu ? '' : 'hidden'}`}>
                    {
                        list.map((sub_1, i) => {
                            return (
                                <li key={`${sub_1}+-${i}`} className='text-xs border-b-2 border-black/0 hover:border-b-2 hover:border-pink-500 hover:text-pink-500 bg-gray-200 cursor-pointer group-hover/sub_list_1:bg-gray-300/90'>{sub_1.name}</li>
                            )
                        })
                    }
                </ul>
            }
        </span>
    )
};