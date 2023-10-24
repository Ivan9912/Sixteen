export default function Footer() {
    return (
        <footer className="bg-black w-screen py-6 px-10 h-48 flex items-center justify-between">
            <ul className="flex flex-col [&>li>a]:inline-block [&>li>a]:px-2 [&>li>a]:py-3 [&>li>a]:text-yellow-50">
                <li>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                </li>
            </ul>
            <ul className="flex flex-col [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-3 [&>li>a]:text-yellow-50">
                <li>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                    <a href="/">una cosa</a>
                </li>
            </ul>
        </footer>
    )
}