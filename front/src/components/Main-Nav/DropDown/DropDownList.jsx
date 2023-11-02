import SubList1 from './List/List1';

export default function GlobalList({ sub, title }) {
    return (
        <li className="list-none group/list_1 hover:flex">
            <span className="w-full inline-block box-content focus-visible:border focus-visible:border-zinc-300 focus-visible:rounded focus-visible:text-pink-500 focus-visible:bg-slate-100 focus-visible:shadow-xl border border-transparent hover:border hover:border-zinc-300 hover:rounded hover:text-pink-500 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl p-3">{`${title}`}</span>
            <ul className="hidden group-hover/list_1:flex flex-col w-40 justify-center mt-10 absolute bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg">
                <SubList1 sub_1={sub} />
            </ul>
        </li>
    )
};