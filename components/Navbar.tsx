import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dropbox from './Dropbox';


const Navbar = () => {
    const [isOpen, toggleOpen] =useState(false)

    return (
        <div>
        <nav className="flex absolute items-center w-full justify-between px-4 py-3 z-50">
        <div className="flex items-center text-3xl font-bold text-white mr-6">
        <h1 tabIndex={1}>sunnyside</h1>
        </div>
            <div className='md:hidden' >
                <button onClick={()=> (!isOpen)}>
                    <Image
                        className="m-4"
                        src={"/images/icon-hamburger.svg"}
                        alt="hamburger icon"
                        width={40}
                        height={40}
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