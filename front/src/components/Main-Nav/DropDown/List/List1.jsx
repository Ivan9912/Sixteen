import Link from 'next/link';
import SubList2 from './SubList1';

export default function SubList1({ sub_1 }) {
    return <>
        {
            sub_1.length > 0 && sub_1.map((item, it) => {
                return (
                    <li key={`${item.name}-${it}`} className="w-full relative hover:bg-white hover:text-black flex flex-row justify-center group/list_next hover:flex">
                        {
                            item.sub_content_1.length == 0
                                ?
                                (<Link className='' href={item.href}>{item.name}</Link>)
                                :
                                (<span className=''>{item.name}</span>)
                        }
                        <SubList2 sub_2={item} />
                    </li>
                )
            })
        }
    </>
};