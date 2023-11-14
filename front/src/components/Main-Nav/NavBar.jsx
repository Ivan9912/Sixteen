import LISTNAV from '@/BBDD/LISTNAV.json'
import Contact from './Contact.jsx';
import ListNoSvg from './List/ListNoSvg.jsx';
import ListSvg from "./List/ListSvg.jsx";
import TitleLogo from '../Utilities/TitleLogo.jsx';

export default function NavBar() {
    return (
        <header className='divide-y-2 divide-y-reverse divide-pink-500/25'>
            <Contact />
            <nav className="text-black bg-white py-2 px-10 h-auto md:h-20 flex z-[100] items-center fixed top-0 md:top-10 w-screen justify-between">
                <TitleLogo component={'nav'} title={'Sixteen'}/>
                <ListNoSvg props={LISTNAV} />
                <ListSvg />
            </nav>
        </header>
    );
};