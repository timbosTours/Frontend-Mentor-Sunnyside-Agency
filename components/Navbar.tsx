import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface NavbarProps {
    heading: string;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ heading }) => {
    return (
        <nav className="flex absolute items-center w-full justify-between px-4 py-3 ">
        <div className="flex items-center text-2xl font-bold text-white mr-6">
        {heading}
        </div>
        <div className='hidden md:block'>
        <Link href="/About" className="px-4 py-2 font-bold text-white rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            About
        </Link>
        <Link href="/Services" className="px-4 py-2 font-bold text-white  rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
            Services
        </Link>
        <Link href="Projects" className="px-4 py-2 font-bold text-white  rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
            Projects
        </Link>
        <Link href="Contact" className="px-4 py-2 font-bold text-black bg-white rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Contact
        </Link>
        </div>
                <div className='sm:hidden' >
                    <Image
                        src={"/images/icon-hamburger.svg"}
                        alt="hamburger icon"
                        width={50}
                        height={50}
                    />
        </div>
    </nav>
    );
};

export default Navbar;