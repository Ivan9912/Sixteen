import Link from "next/link";

export default function CircleMenu() {
    return (
        <div className="menu_1">
            <div className="toggle_menu">
                <li style={{'--i':0,'--clr':'#1877f2'}}>
                    <Link href="#"></Link>
                </li>
                <li style={{'--i':1,'--clr':'#1877f2'}}>
                    <Link href="#"></Link>
                </li>
                <li style={{'--i':2,'--clr':'#1877f2'}}>
                    <Link href="#"></Link>
                </li>
                <li style={{'--i':3,'--clr':'#1877f2'}}>
                    <Link href="#"></Link>
                </li>
                <li style={{'--i':4,'--clr':'#1877f2'}}>
                    <Link href="#"></Link>
                </li>
                <li style={{'--i':5,'--clr':'#1877f2'}}>
                    <Link href="#"></Link>
                </li>
            </div>
        </div>
    )
}