import MenuHamburgButton from './Menu/MenuHamburgButton.jsx';
import Contact from './Contact.jsx';
import Title from './Title.jsx';
import ListNoSvg from './ListNoSvg.jsx';
import ListSvg from './ListSvg.jsx'; 

const listNav = [
    {
        name: "Catálogo",
        linknav:"/about-us"
    },
    {
        name: "Ofertas",
        linknav: "/ofertas"
    },
    {
        name: "Preguntas Frecuentes",
        linknav: "/about-us"
    },
    {
        name: "Galeria", 
        linknav: "/contact-us",
    },
    {
        name: "Contacto", 
        linknav: "/contact-us"
    }
]

export default function NavBar() {
    return (
        <header className='md:divide-y-2 md:divide-y-reverse md:divide-slate-400/25'>
            <Contact />
            <nav className="text-black bg-white py-2 px-10 flex items-center fixed top-0 md:top-10 w-screen justify-between">
                <Title />
                <ListNoSvg props={listNav} />
                <ListSvg />
                <MenuHamburgButton props={listNav} />
            </nav>
        </header>
    );
};