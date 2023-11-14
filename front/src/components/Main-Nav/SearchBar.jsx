'use client';
import WORDS from '@/BBDD/WORDS.json';
import { Search } from '../../../public/img_svg/IconsUtilities.js';
import { useState } from 'react';

export default function SearchBar() {

    const [activeSearch, setActiveSearch] = useState([]);

    const handleSearch = (e) => {
        if (e.target.value == '') {
            setActiveSearch([])
            return false
        }
        setActiveSearch(WORDS.filter(word => word.includes(e.target.value)).slice(0, 8))
    }

    return <form className='hidden min-[1073px]:flex items-center px-3'>
        <div className="w-60 relative">
            <input type="search" name="busqueda" id="searching" placeholder="Buscar" className="w-full p-2 pl-8 rounded-full bg-slate-100 hover:bg-black/10 text-black text-xs border border-stone-400 focus:border-transparent" onChange={(e) => handleSearch(e)} />
            <button className='absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-transparent hover:bg-black/10 text-black rounded-full' type='button'>
                {Search}
            </button>
        </div>
        {
            activeSearch.length > 0 && (
                <div className='absolute top-14 lg:right-[51px] bg-white bg-black/20 text-black w-52 rounded-b-lg -translate-x-1/2 flex flex-col gap-2'>
                    {
                        activeSearch.map((search, i) => (
                            <span key={`${i}--${search}`} className='hover:bg-black/20 w-full p-4 cursor-pointer'>{search}</span>
                        ))
                    }
                </div>
            )
        }
    </form>
};