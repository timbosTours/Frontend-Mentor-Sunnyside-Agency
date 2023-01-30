import { Barlow } from '@next/font/google'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const barlow = Barlow ({
    weight: ['600', '900'],
    subsets: ['latin']
})

function Footer() {
    return (
        <div className="bg-teal-200 h-full text-center xs:w-screen sm:w-full">
        <div className={barlow.className}>
            <h1 className="xs:text-5xl text-teal-700 font-black m-20 mb-14 tracking-wide xxs:m-10 xxs:text-4xl">sunnyside</h1>       
            <ul className="text-teal-600 text-xl font-thin ">
                <Link className="xxs:m-1 xs:m-3 sm:m-7 hover:text-white hover:cursor-pointer" href="/About">About</Link>
                <Link className="xxs:m-1 xs:m-4 sm:m-7 hover:text-white hover:cursor-pointer" href="/Services">Services</Link>
                <Link className="xxs:m-1 xs:m-4 sm:m-7 hover:text-white hover:cursor-pointer" href="/Projects">Projects</Link>
            </ul>
            </div>
            <div className="flex justify-center xxs:m-8 xs:m-16">
                <Image
                className="m-6 mb-20 hover:cursor-pointer"
                    src={"/images/icon-facebook.svg"}
                    alt="facebook"
                    width={30}
                    height={30}
                />
                <Image
                className="m-6 mb-20 hover:cursor-pointer"
                    src={"/images/icon-instagram.svg"}
                    alt="instagram"
                    width={30}
                    height={30}
                />
                <Image
                className="m-6 mb-20 hover:cursor-pointer "
                    src={"/images/icon-twitter.svg"}
                    alt="twitter"
                    width={30}
                    height={30}
                />
                <Image
                className="m-6 mb-20 hover:cursor-pointer "
                    src={"/images/icon-pinterest.svg"}
                    alt="pinterest"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    )
}

export default Footer