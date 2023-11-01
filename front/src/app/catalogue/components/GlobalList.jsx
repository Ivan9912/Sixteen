import Next from '../../../../public/img_svg/form-next';
const list = [
    {
        'id': 1,
        'name': 'Item 1',
        'sub_content_1': [
            '1-Toalla',
            '1-Jabón',
            '1-Toalla',
            '1-Jabón',
            '1-Toalla',
            '1-Jabón',
        ]
    },
    {
        'id': 2,
        'name': 'Item 2',
        'sub_content_1': [
            '2-Toalla',
            '2-Jabón'
        ]
    },
    {
        'id': 3,
        'name': 'Item 3',
        'sub_content_1': [

        ]
    },
    {
        'id': 4,
        'name': 'Item 4',
        'sub_content_1': [
            '4-Toalla',
            '4-Jabón',
            '4-Toalla',
            '4-Jabón',
        ]
    },
    {
        'id': 5,
        'name': 'Item 5',
        'sub_content_1': [
            '5-Toalla',
        ]
    },
    {
        'id': 6,
        'name': 'Item 6',
        'sub_content_1': [

        ]
    }
];

export default function GlobalList({ title = 'Botoncito' }) {

    return (
        <li className="w-24 list-none text-center mt-4 group/list_1 hover:flex">
            <span className="inline-block border w-full border-pink-500/50 p-2 text-center text-pink-500/50 rounded hover:border-pink-500 hover:text-pink-500 hover:border-2">{`${title}`}</span>
            <ul className="hidden group-hover/list_1:flex flex-col w-40 justify-center mt-10 absolute bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg">
                {
                    list.length > 0 && list.map((item, it) => {
                        return (
                            <li key={`${item.name}-${it}`} className="w-full relative hover:bg-white hover:text-black flex flex-row justify-center group/list_next hover:flex">
                                {item.name}
                                {
                                    item.sub_content_1.length > 0 && <div className='absolute right-2 invisible group-hover/list_next:visible group/list_2 hover:flex'>
                                        <Next className="  w-5 h-5 hover:border hover:border-black/50 hover:rounded-full " />
                                        <ul className='absolute hidden ml-4 group-hover/list_2:flex flex-col w-40 justify-center bg-black/75 list-none select-none [&>li]:text-white [&>li]:py-3 [&>li]:px-4 rounded-b-lg border border-black/75 [&_li]:last:hover:rounded-b-lg [&_li]:nth-1:hover:rounded-b-lg'>
                                            {
                                                item.sub_content_1.length > 0 && item.sub_content_1.map((item_2, i) => {
                                                    return (
                                                        <li key={`${item_2.name}-${i}`} className="w-full relative hover:bg-white hover:text-black flex flex-row justify-center">
                                                            {item_2}
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