import React from 'react'
import Image from 'next/image'
import { Fraunces } from '@next/font/google'
import Dropbox from './Dropbox'
import Triangle from './Triangle'
import Navbar from './Navbar'

const fraunces = Fraunces({
    weight: '900',
    subsets: ['latin'],
})

function Banner() {
    return (
        <div className={fraunces.className}>
            <header className="relative flex justify-center" >
                <Navbar/>
                <Image
                    className="md:hidden"
                    src={"/images/mobile/image-header.jpg"}
                    alt={'header image'}
                    width={800}
                    height={500}
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
                    <h1 className="banner-heading leading-tight uppercase text-4xl text-center  text-white absolute top-1/4 "> we are <br /> creatives</h1>
                <img className="absolute h-32 top-1/2 lg:h-60" src="/images/icon-arrow-down.svg" alt="down arrow" />
                
            {/* <Triangle />
                    <Dropbox /> */}
                
            </header>
        </div>
    )
}

export default Banner