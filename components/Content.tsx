import React from 'react'
import { Barlow, Fraunces } from '@next/font/google'
import Link from 'next/link'
import UnderlineYellow from './UnderlineYellow'
import UnderlineRose from './UnderlineRose'
import Image from 'next/image'
import Testimonials from './Testimonials'


const fraunces = Fraunces({
    weight: ['900'],
    subsets: ['latin']
})

const barlow = Barlow({
    weight: ['600'],
    subsets: ['latin']
})

function Content() {
    return (
        <>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2">
            <Image
            className="md:hidden"
            src='/images/mobile/image-transform.jpg'
            alt="egg"
            width={800}
            height={1000}
        />
            <Image
            className=" max-md:hidden"
            src='/images/desktop/image-transform.jpg'
            alt="egg"
            width={800}
            height={1000}
        />
    <section className="h-96 text-center m-8 ">
            <div className={"text-gray-900 text-4xl weight"}>
            <h1 className={fraunces.className}>Transform your <br /> brand</h1>
            </div>
            <p className="m-7 text-gray-500 text-xl">  We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <div className={fraunces.className}>
            <Link
                className="text-xl"
                    href="/about"
                >LEARN MORE</Link>
                <UnderlineYellow/>
            </div>
            </section>
            <Image
            className="md:hidden"
            src='/images/mobile/image-stand-out.jpg'
            alt="cup"
            width={800}
            height={1000}
            />
            <Image
            className=" max-md:hidden"
            src='/images/desktop/image-stand-out.jpg'
            alt="cup"
            width={800}
            height={1000}
            />
            <section className="h-96 text-center m-10">
            <div className={"text-gray-900 text-4xl weight"}>
            <h1 className={fraunces.className}>Stand out too the <br /> right audience</h1>
            </div>
            <p className="m-4 text-gray-500 text-xl"> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
            <div className={fraunces.className}>
            <Link
                className="text-xl"
                    href="/about"
                >LEARN MORE</Link>
                <UnderlineRose/>
            </div>
            </section>
            <div className="relative md:w-1/2">
            <Image
                className="md:hidden"
            src='/images/mobile/image-graphic-design.jpg'
            alt="cherry"
            width={800}
            height={1000}    
                />
            <Image
                className="max-md:hidden w-screen"
            src='/images/desktop/image-graphic-design.jpg'
            alt="cherry"
            width={800}
            height={1000}    
                />
                <div className="absolute top-2/3 text-center text-4xl text-emerald-900">
                    <h1 className={fraunces.className}>Graphic Design</h1>
                    <div className={barlow.className}>
                        <p className="text-xl p-4">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
                    </div>
                </div>
            </div>
            <div className="relative m-0 p-0 md:w-1/2">
            <Image
                className="md:hidden"
            src='/images/mobile/image-photography.jpg'
            alt="orange"
            width={800}
            height={1000}    
                />
            <Image
                className="max-md:hidden"
            src='/images/desktop/image-photography.jpg'
            alt="orange"
            width={800}
            height={1000}    
                />
                <div className="absolute top-2/3 text-center text-4xl text-cyan-800">
                    <h1 className={fraunces.className}>Photography</h1>
                    <div className={barlow.className}>
                        <p className="text-xl m-4 p-2">  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
                </div>
            </div>
        <Testimonials/>
        </>
    )
}

export default Content