import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
    // const [isOpen, toggleOpen] = useState(null)

    return (
        <nav className="flex absolute items-center w-full justify-between px-4 py-3 z-50">
        <div className="flex items-center text-2xl font-bold text-white mr-6">
        <h1 tabIndex={1}>sunnyside</h1>
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
            <div className='md:hidden' >
                <button>
                    <Image
                        src={"/images/icon-hamburger.svg"}
                        alt="hamburger icon"
                        width={50}
                        height={50}
                    />
                </button>
        </div>
    </nav>
    );
};

export default Navbar;