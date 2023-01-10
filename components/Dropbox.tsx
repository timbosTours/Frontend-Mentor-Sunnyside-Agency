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
        <div>
            <div>
                <Triangle />
            </div>
        <div className="absolute flex h-96 w-96 bg-white z-40 -left-48 -top-52">
            <div>
                <div className={barlow.className}>
                <Link href="/About" className="drop-link">
            About
        </Link>
        <Link href="/Services" className="drop-link">
            Services
        </Link>
        <Link href="Projects" className="drop-link mb-10">
            Projects
                    </Link>
                    <div className={fraunces.className}>
        <Link href="/Contact" className="px-8 py-4 m-32 font-bold text-neutral-800 bg-yellow-300 rounded-full hover:bg-slate-200 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            CONTACT
                        </Link>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Dropbox