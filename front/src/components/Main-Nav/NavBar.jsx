import MenuHamburgButton from './Menu/MenuHamburgButton.jsx';
import Contact from './Contact.jsx';
import Title from './Title.jsx';
import ListNoSvg from './list/ListNoSvg.jsx';
import ListSvg from './list/ListSvg.jsx'; 

const listNav = [
    {
        name: "Inicio",
        linknav:"/"
    },
    {
        name: "Catálogo",
        linknav:"/catalogue"
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
        <header className='md:divide-y-2 md:divide-y-reverse md:divide-pink-500/25'>
            <Contact />
            <nav className="text-black bg-white py-2 px-10 h-auto md:h-20 flex items-center fixed top-0 md:top-10 w-screen justify-between">
                <Title />
                <ListNoSvg props={listNav} />
                <ListSvg />
                <MenuHamburgButton props={listNav} />
            </nav>
        </header>
    );
};