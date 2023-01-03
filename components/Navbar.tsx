import * as React from 'react';
import orangeImg from '../public/images/desktop/image-gallery-orange.jpg'

interface NavbarProps {
    heading: string; 
    onButton1Click: () => void;
    onButton2Click: () => void;
    onButton3Click: () => void;
    onButton4Click: () => void;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ heading, onButton1Click, onButton2Click, onButton3Click, onButton4Click }) => {
    return (
        <nav className="flex items-center w-full justify-between px-4 py-3 ">
        <div className="flex items-center font-bold text-white mr-6">
        {heading}
        </div>
        <div className='hidden md:block'>
        <button onClick={onButton1Click} className="px-4 py-2 font-bold text-white rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            About
        </button>
        <button onClick={onButton2Click} className="px-4 py-2 font-bold text-white  rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
            Services
        </button>
        <button onClick={onButton3Click} className="px-4 py-2 font-bold text-white  rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-4">
            Projects
        </button>
        <button onClick={onButton4Click} className="px-4 py-2 font-bold text-black bg-white rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Contact
        </button>
        </div>
    </nav>
    );
};

export default Navbar;