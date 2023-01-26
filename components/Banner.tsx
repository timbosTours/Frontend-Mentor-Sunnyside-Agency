import React, {useState} from 'react'
import Image from 'next/image'
import { Fraunces, Barlow } from '@next/font/google'
import Dropbox from './Dropbox'
import Triangle from './Triangle'
import Link from 'next/link'

// TODO
    // - set smaller breakpoint
    // - fix dropbox position 



const fraunces = Fraunces({
    weight: '900',
    subsets: ['latin'],
})

const barlow = Barlow({
    weight: ['600', '700'],
    subsets: ['latin']
})

function Banner() {
    const [isOpen, toggleOpen] = useState(false);

    function handleClick() {
        toggleOpen(isOpen => !isOpen)
    }

    return (
        <div className={fraunces.className}>
            <header className="relative flex justify-center" >
                <div className={barlow.className}>
        <nav className="flex absolute w-full justify-between px-4 py-3 z-50">
        <div className="flex items-center text-2xl text-white mr-4 md:text-3xl md:-mt-2">
        <h1 tabIndex={1} className="md:font-extrabold
        ">sunnyside</h1>
        </div>
            <div className='md:hidden' >
                <button onClick={handleClick}>
                    <Image
                        className="m-3"
                        src={"/images/icon-hamburger.svg"}
                        alt="hamburger icon"
                        width={25}
                        height={25}
                    />
                </button>
        </div>
        <ul className='hidden md:block md:m-2'>
        <Link href="/About" className="nav-link">
            About
        </Link>
        <Link href="/Services" className="nav-link">
            Services
        </Link>
        <Link href="Projects" className="nav-link">
            Projects
        </Link>
        <Link href="Contact" className="px-4 py-2 font-bold text-black bg-white rounded-full hover:bg-transparent focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-2">
            Contact
        </Link>
        </ul>
            </nav>
        </div>
                <Image
                    className="md:hidden"
                    src={"/images/mobile/image-header.jpg"}
                    alt={'header image'}
                    width={1000}
                    height={1200}
                />
                <Image
                    className="max-md:hidden"
                    src={"/images/desktop/image-header.jpg"}
                    alt={'header image'}
                    width={2000}
                    height={1000}
                />
                <div className="absolute justify-center">
                </div>
                    <h1 className="banner-heading leading-tight uppercase text-4xl text-center  text-white absolute top-1/4 xl:text-6xl"> we are <br className="md:hidden"/> creatives</h1>
                <img className="absolute h-32 top-1/2" src="/images/icon-arrow-down.svg" alt="down arrow" />
                <div className="flex absolute top-1/4 max-md:right-7 max-md:top-32 md:hidden">
                {isOpen &&
                        <Dropbox />}
                </div>
                
            </header>
        </div>
    )
}

export default Banner