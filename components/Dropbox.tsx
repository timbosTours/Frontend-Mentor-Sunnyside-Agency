import React from 'react'
import Link from 'next/link'
import { Barlow, Fraunces } from '@next/font/google'
import Triangle from './Triangle'

const barlow = Barlow({
    weight: ['600'],
    subsets: ['latin']
})

const fraunces = Fraunces({
    weight: ['800'],
    subsets: ['latin']
})

function Dropbox() {
    return (
        <div className="justify-center flex ">
        <div className=" h-80 xxs:w-60 xs:w-80 bg-white z-40">
            <Triangle/>
            <div>
                    <div className={barlow.className}>
                        <div className="xxs:w-60 xs:w-80">
                <Link href="/About" className="drop-link">
            About
        </Link>
        <Link href="/Services" className="drop-link">
            Services
        </Link>
        <Link href="Projects" className="drop-link mb-8">
            Projects
                    </Link>
                    <div className={fraunces.className}>
        <Link href="/Contact" className="px-6 py-4 xxs:m-14 xs:m-24 font-bold text-neutral-800 bg-yellow-300 rounded-full hover:bg-slate-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            CONTACT
                                </Link>
                            </div>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Dropbox