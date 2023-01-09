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
        <div className="bg-teal-200 h-full w-full text-center">
        <div className={barlow.className}>
            <h1 className="text-5xl text-teal-700 font-black m-20 mb-14 tracking-wide">sunnyside</h1>       
            <ul className="text-teal-700 text-xl font-thin">
                <Link className="m-12" href="/About">About</Link>
                <Link className="m-12" href="/Services">Services</Link>
                <Link className="m-12" href="/Projects">Projects</Link>
            </ul>
            </div>
            <div className="flex justify-center m-16">
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
                className="m-6 mb-20 hover:cursor-pointer"
                    src={"/images/icon-twitter.svg"}
                    alt="twitter"
                    width={30}
                    height={30}
                />
                <Image
                className="m-6 mb-20 hover:cursor-pointer"
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