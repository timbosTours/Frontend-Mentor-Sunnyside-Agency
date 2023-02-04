import React, {useState} from 'react'
import Image from 'next/image'
import { Fraunces, Barlow } from '@next/font/google'
import Dropbox from './Dropbox'
import Link from 'next/link'



const fraunces = Fraunces({
    weight: ['600', '700', '800', '900' ],
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
            <header className="relative flex justify-center w-full" >
                <div className={barlow.className}>
        <nav tabIndex={0} className="flex absolute w-full justify-between px-4 py-3 z-50">
        <Link href="/" className="flex items-center text-3xl text-white xxs:ml-1 ml-3 md:text-3xl xl:text-4xl md:-mt-2">
        <h1 tabIndex={0} className="md:font-extrabold
        ">sunnyside</h1>
        </Link>
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
        <span className='hidden md:block md:m-2'>
        <Link tabIndex={0} href="/About" className="nav-link">
            About
        </Link>
        <Link tabIndex={0} href="/Services" className="nav-link">
            Services
        </Link>
        <Link tabIndex={0} href="Projects" className="nav-link">
            Projects
                            </Link>
                            <span className={fraunces.className}>
        <Link tabIndex={0} href="Contact" className="px-5 py-3 font-extrabold text-xs text-black bg-white hover:text-white hover:bg-opacity-40 rounded-full focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mr-2">
            CONTACT
                                </Link>
                            </span>
        </span>
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
                    <h2 tabIndex={0} className="banner-heading leading-tight uppercase xs:text-3xl text-center  text-white absolute top-1/4 xl:text-6xl"> we are <br className="md:hidden"/> creatives</h2>
                <Image className="absolute h-32 top-1/2" src="/images/icon-arrow-down.svg" alt="down arrow"
                height={50}
                width={40}/>
                <div className="flex absolute top-1/4 max-md:right-7 xs:top-32 xxs:top-24 md:hidden">
                {isOpen &&
                        <Dropbox />}
                </div>
                
            </header>
        </div>
    )
}

export default Banner