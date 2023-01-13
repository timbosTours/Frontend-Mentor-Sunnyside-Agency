import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Barlow } from '@next/font/google';

const barlow = Barlow({
    weight: [ '700'],
    subsets: ['latin']
})

const Navbar = () => {
    
    return (
        <div className={barlow.className}>
        <nav className="flex absolute w-full justify-between px-4 py-3 z-50">
        <div className="flex items-center text-2xl font-extrabold text-white mr-4">
        <h1 tabIndex={1}>sunnyside</h1>
        </div>
            <div className='md:hidden' >
                <button>
                    <Image
                        className="m-3"
                        src={"/images/icon-hamburger.svg"}
                        alt="hamburger icon"
                        width={25}
                        height={25}
                    />
                </button>
        </div>
        <ul className='hidden md:block'>
        <Link href="/About" className="nav-link">
            About
        </Link>
        <Link href="/Services" className="nav-link">
            Services
        </Link>
        <Link href="Projects" className="nav-link">
            Projects
        </Link>
        <Link href="Contact" className="px-4 py-2 font-bold text-black bg-white rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Contact
        </Link>
        </ul>
            </nav>
        </div>
    );
};

export default Navbar;