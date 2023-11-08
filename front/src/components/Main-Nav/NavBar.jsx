import Contact from './Contact.jsx';
import Title from './Title.jsx';
import ListNoSvg from './List/ListNoSvg.jsx';
import ListSvg from './List/ListSvg.jsx';

const listNav = [
    {
        name: "Inicio",
        linknav: "/"
    },
    {
        name: "Catálogo",
        linknav: "/catalogue",
        list: [
            {
                'id': 1,
                'name': 'VESTIDOS',
                'sub_content_1': [
                    {
                        'name': 'VALE',
                        'href': '/'
                    },
                    {
                        'name': 'BÁSICO RULETEX',
                        'href': '/'
                    },
                    {
                        'name': 'RAYADO CON TAJO',
                        'href': '/'
                    },
                    {
                        'name': 'LARGO RAYADO',
                        'href': '/'
                    },
                    {
                        'name': 'MORLEY RAYADO',
                        'href': '/'
                    },
                    {
                        'name': 'FRUNCIDO SPORT',
                        'href': '/'
                    },
                    {
                        'name': 'TIRA CON RULETEX',
                        'href': '/'
                    },
                    {
                        'name': 'CHOMBA',
                        'href': '/'
                    },
                    {
                        'name': 'FRUNCIDO MORLEY',
                        'href': '/'
                    }
                ]
            },
            {
                'id': 2,
                'name': 'TOPS',
                'sub_content_1': [
                    {
                        'name': 'VENICE',
                        'href': '/'
                    },
                    {
                        'name': 'FRANCESCA',
                        'href': '/'
                    },
                    {
                        'name': 'CAROLA',
                        'href': '/'
                    },
                    {
                        'name': 'SOPHIE',
                        'href': '/'
                    },
                    {
                        'name': 'EMMA',
                        'href': '/'
                    },
                    {
                        'name': 'CHOMBA',
                        'href': '/'
                    },
                    {
                        'name': 'SHINE',
                        'href': '/'
                    },
                    {
                        'name': 'ISA',
                        'href': '/'
                    },
                    {
                        'name': 'ARGOLLA',
                        'href': '/'
                    }
                ]
            },
            {
                'id': 3,
                'name': 'REMERONES',
                'sub_content_1': [
                    {
                        'name': 'OVERSIZE ESTAMPADOS',
                        'href': '/'
                    },
                    {
                        'name': 'ALGODÓN SUBLIMADOS',
                        'href': '/'
                    },
                    {
                        'name': 'ESTAMPADOS',
                        'href': '/'
                    }
                ]
            },
            {
                'id': 4,
                'name': 'REMERAS',
                'sub_content_1': [
                    {
                        'name': 'MODAL VISCOSA',
                        'href': '/'
                    }
                ]
            },
            {
                'id': 5,
                'name': 'PANTALONES',
                'sub_content_1': [
                    {
                        'name': 'PALAZZO',
                        'href': '/'
                    }
                ]
            },
            {
                'id': 6,
                'name': 'LONAS',
                'href': '/catalogue',
                'sub_content_1': [

                ]
            },
            {
                'id': 7,
                'name': 'BODYS',
                'sub_content_1': [
                    {
                        'name': 'GOTA',
                        'href': '/'
                    },
                    {
                        'name': 'ESPALDA X',
                        'href': '/'
                    },
                    {
                        'name': 'BÁSICO',
                        'href': '/'
                    }
                ]
            },
            {
                'id': 8,
                'name': 'Promociones',
                'href': '/catalogue',
                'sub_content_1': [

                ]
            }
        ]
    },
    {
        name: "Ofertas",
        linknav: "/offers"
    },
    {
        name: "Preguntas Frecuentes",
        linknav: "/frequent-questions"
    },
    {
        name: "Galería",
        linknav: "/gallery",
    },
    {
        name: "Contacto",
        linknav: "/contact-us"
    },
    {
        name: "Carrito",
        linknav: "/cart"
    }
]

export default function NavBar() {
    return (
        <header className='divide-y-2 divide-y-reverse divide-pink-500/25'>
            <Contact />
            <nav className="text-black bg-white py-2 px-10 h-auto md:h-20 flex z-[100] items-center fixed top-0 md:top-10 w-screen justify-between">
                <Title />
                <ListNoSvg props={listNav} />
                <ListSvg />
            </nav>
        </header>
    );
};