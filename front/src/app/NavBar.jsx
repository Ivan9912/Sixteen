export default function NavBar() {
    return (
        <nav className="bg-black text-yellow-50 py-6 px-10 flex items-center fixed top-0 w-full justify-between">
            <h1 className="font-extrabold text-lg">Sixteen</h1>
            <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-yellow-50">
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a>contact Us</a></li>
            </ul>
            <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-yellow-50">
                <li><a href="/">C</a></li>
                <li><a href="/">User</a></li>
            </ul>
        </nav>
    )
}