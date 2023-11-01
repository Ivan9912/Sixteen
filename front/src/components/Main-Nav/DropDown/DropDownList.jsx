import Link from 'next/link';
import Next from '../../../../public/img_svg/form-next';
const list = [
    {
        'id': 1,
        'name': 'VESTIDOS',
        'sub_content_1': [
            {
                'name':'VALE',
                'href': '/'
            },
            {
                'name':'BÁSICO RULETEX',
                'href': '/'
            },
            {
                'name':'RAYADO CON TAJO',
                'href': '/'
            },
            {
                'name':'LARGO RAYADO',
                'href': '/'
            },
            {
                'name':'MORLEY RAYADO',
                'href': '/'
            },
            {
                'name':'FRUNCIDO SPORT',
                'href': '/'
            },
            {
                'name':'TIRA CON RULETEX',
                'href': '/'
            },
            {
                'name':'CHOMBA',
                'href': '/'
            },
            {
                'name':'FRUNCIDO MORLEY',
                'href': '/'
            }
        ]
    },
    {
        'id': 2,
        'name': 'TOPS',
        'sub_content_1': [
            {
                'name':'VENICE',
                'href': '/'
            },
            {
                'name':'FRANCESCA',
                'href': '/'
            },
            {
                'name':'CAROLA',
                'href': '/'
            },
            {
                'name':'SOPHIE',
                'href': '/'
            },
            {
                'name':'EMMA',
                'href': '/'
            },
            {
                'name':'CHOMBA',
                'href': '/'
            },
            {
                'name':'SHINE',
                'href': '/'
            },
            {
                'name':'ISA',
                'href': '/'
            },
            {
                'name':'ARGOLLA',
                'href': '/'
            }      
        ]
    },
    {
        'id': 3,
        'name': 'REMERONES',
        'sub_content_1': [
            {
                'name':'OVERSIZE ESTAMPADOS',
                'href': '/'
            },
            {
                'name':'ALGODÓN SUBLIMADOS',
                'href': '/'
            },
            {
                'name':'ESTAMPADOS',
                'href': '/'
            }
        ]
    },
    {
        'id': 4,
        'name': 'REMERAS',
        'sub_content_1': [
            {
                'name':'MODAL VISCOSA',
                'href': '/'
            }
        ]
    },
    {
        'id': 5,
        'name': 'PANTALONES',
        'sub_content_1': [
            {
                'name':'PALAZZO',
                'href': '/'
            }
        ]
    },
    {
        'id': 6,
        'name': 'LONAS',
        'sub_content_1': [

        ]
    },
    {
        'id': 7,
        'name': 'BODYS',
        'sub_content_1': [
            {
                'name':'GOTA',
                'href': '/'
            },
            {
                'name':'ESPALDA X',
                'href': '/'
            },
            {
                'name':'BÁSICO',
                'href': '/'
            }
        ]
    },
    {
        'id': 8,
        'name': 'Promociones',
        'sub_content_1': [
            
        ]
    }
];

export default function GlobalList({ title = 'Botoncito' }) {

    return (
        <li className="list-none group/list_1 hover:flex">
            <span className="w-full inline-block hover:box-content hover:border hover:border-zinc-300 hover:rounded hover:text-pink-500 hover:bg-slate-100 hover:shadow-xl active:shadow-2xl p-3">{`${title}`}</span>
            <ul className="hidden group-hover/list_1:flex flex-col w-40 justify-center mt-10 absolute bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg">
                {
                    list.length > 0 && list.map((item, it) => {
                        return (
                            <li key={`${item.name}-${it}`} className="w-full relative hover:bg-white hover:text-black flex flex-row justify-center group/list_next hover:flex">
                                {item.name}
                                {
                                    item.sub_content_1.length > 0 && <div className='absolute right-2 invisible group-hover/list_next:visible group/list_2 hover:flex'>
                                        <Next className="w-5 h-5 hover:border hover:border-black/50 hover:rounded-full " />
                                        <ul key={`${item.name}-${it}`} className='absolute hidden ml-4 group-hover/list_2:flex flex-col w-40 justify-center bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg'>
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