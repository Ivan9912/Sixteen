import Link from 'next/link';

export default function Title() {
    return  <div className='flex flex-grow basis-0 justify-center md:justify-items-start'>
                <Link href="/" className="font-extrabold text-lg basis-0 flex items-center justify-center "><span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 duration-500 hover:before:bg-white relative inline-block">
                    <span className="relative text-white duration-500 hover:text-pink-500">Sixteen</span>
                </span></Link>
            </div>
};