import Link from 'next/link';
import Next from '../../../../public/img_svg/form-next';

export default function GlobalList({ sub, title }) {
    return (
        <li className="list-none group/list_1 hover:flex">
            <span className="w-full inline-block box-content focus-visible:border focus-visible:border-zinc-300 focus-visible:rounded focus-visible:text-pink-500 focus-visible:bg-slate-100 focus-visible:shadow-xl border border-transparent hover:border hover:border-zinc-300 hover:rounded hover:text-pink-500 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl p-3">{`${title}`}</span>
            <ul className="hidden group-hover/list_1:flex flex-col w-40 justify-center mt-10 absolute bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg">
                {
                    sub.length > 0 && sub.map((item, it) => {
                        return (
                            <li key={`${item.name}-${it}`} className="w-full relative hover:bg-white hover:text-black flex flex-row justify-center group/list_next hover:flex">
                                {
                                    item.sub_content_1.length == 0
                                        ?
                                        (<Link className='' href={item.href}>{item.name}</Link>)
                                        :
                                        (<span className=''>{item.name}</span>)
                                }
                                {
                                    item.sub_content_1.length > 0 && <div className='absolute right-2 invisible group-hover/list_next:visible group/list_2 hover:flex'>
                                        <Next className="w-5 h-5 hover:border hover:border-black/50 hover:rounded-full " />
                                        <ul key={`${item.name}-${it}`} className='absolute hidden ml-4 group-hover/list_2:flex flex-col w-44 justify-center bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg'>
                                            {
                                                item.sub_content_1.length > 0 && item.sub_content_1.map((item_2, i) => {
                                                    return (
                                                        <li key={`${item_2.name}-${i}`} className="w-full relative hover:bg-white hover:text-black flex flex-row justify-center">
                                                            <Link className='w-full' href={item_2.href}>{item_2.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                            </li>
                        )
                    })
                }
            </ul>
        </li>
    )
};