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
        <main>
            <section className="md:grid md:grid-cols-2 place-items-center">
            <Image
            className="md:hidden"
            src='/images/mobile/image-transform.jpg'
            alt="egg"
            width={800}
            height={1000}
        />
                <div className="h-96 text-center m-8 md:h-52 md:text-left md:w-80">
    
            <div className="text-gray-900 xxs:text-xl xs:text-4xl pt-4 md:text-2xl xl:text-4xl">
            <h1 className={fraunces.className}>Transform your <br /> brand</h1>
            </div>
            <p className="xxs:text-sm xs:text-base m-7 mx-10 text-gray-500 text-xl md:m-2 md:text-sm md:ml-0 xl:text-lg xl:py-3">  We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <div className={fraunces.className}>
            <Link
                className="text-xl md:text-sm xl:text-lg"
                    href="/about"
                >LEARN MORE</Link>
                <UnderlineYellow/>
                        </div>
    
            </div>
            <Image
            className=" max-md:hidden"
            src='/images/desktop/image-transform.jpg'
            alt="egg"
            width={1000}
            height={1000}
        />
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
            width={1000}
            height={1000}
            />
            <div className="h-96 text-center m-10 md:h-60 md:text-left md:w-80">
            <div className="text-gray-900 pt-4 xxs:text-xl xs:text-4xl md:text-2xl xl:text-4xl">
            <h1 className={fraunces.className}>Stand out too the <br /> right audience</h1>
            </div>
            <p className="xxs:text-sm xs:text-base m-4 text-gray-500 text-xl md:m-2 md:text-sm md:ml-0 xl:text-lg xl:py-3"> Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places. </p>
            <div className={fraunces.className}>
            <Link
                className="text-xl md:text-sm xl:text-lg"
                    href="/about"
                >LEARN MORE</Link>
                <UnderlineRose/>
            </div>
            </div>
            <div className="relative ">
            <Image
                className="md:hidden"
            src='/images/mobile/image-graphic-design.jpg'
            alt="cherry"
            width={800}
            height={1000}    
                />
            <Image
                className="max-md:hidden"
            src='/images/desktop/image-graphic-design.jpg'
            alt="cherry"
            width={1200}
            height={1000}    
                />
                <div className="absolute top-2/3 text-center sm:text-4xl text-emerald-900  xs:text-2xl md:text-lg sm:-mt-5 xl:text-4xl">
                    <h1 className={fraunces.className}>Graphic Design</h1>
                    <div className={barlow.className}>
                        <p className="xxs:text-sm xs:text-sm sm:text-md sm:m-4 mx-10 p-2 md:text-sm md:mx-20 xl:text-xl">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.</p>
                    </div>
                </div>
            </div>
            <div className="relative m-0 p-0 ">
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
            width={1200}
            height={1000}    
                />
                <div className="absolute top-2/3 text-center sm:text-4xl text-teal-900  xs:text-2xl md:text-lg md:-mt-5 xl:text-4xl">
                    <h1 className={fraunces.className}>Photography</h1>
                    <div className={barlow.className}>
                        <p className="xxs:text-sm xs:text-sm sm:text-md xs:m-4 mx-10 p-2 md:text-sm md:mx-20 xl:text-xl ">  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                    </div>
                </div>
                </div>
            </section>
        <Testimonials/>
        </main>
    )
}

export default Content