import GlobalList from '@/components/Main-Nav/DropDown/DropDownList';
import Link from 'next/link';

export default function ListNoSvg({ props }) {
    return <ul className="z-[-1] md:z-auto md:static absolute bg-white w-full left-0 py-4 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:flex md:flex-grow md:justify-center basis-0 md:text-sm md:[&>li>a]:inline-block md:[&>li>a]:p-3 md:[&>li>a]:text-black md:nth-1:hidden md:nth-4:w-[172px] lg:nth-1:block select-none nth-7:hidden">
        {
            props.map((categorias, i) => {
                return (
                    categorias.name == 'Catálogo' ? 
                        (<GlobalList title={categorias.name} />) 
                        : 
                        (<li key={`$ID-${i}`} className='hover:box-content hover:border hover:border-zinc-300 hover:rounded [&>a]:hover:text-pink-500 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl'>
                            <Link href={categorias.linknav}>{categorias.name}</Link>
                        </li>)
                )
            })
        }
    </ul>
};