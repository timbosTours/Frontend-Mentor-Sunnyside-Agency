import React from 'react'
import { Fraunces } from '@next/font/google'
import Link from 'next/link'


// TO DO!!!!
        // - move and border radius underline on learn more link.


const fraunces = Fraunces({
    weight: ['900'],
    subsets: ['latin']
})
function Content() {
    return (
    <section className="h-96 w-96 text-center">
            <div className={"text-gray-900 text-4xl weight"}>
            <h1 className={fraunces.className}>Transform your <br /> brand</h1>
            </div>
            <p className="m-3 text-gray-500 text-xl">  We are a full-service creative agency specializing in helping brands grow fast. 
    Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <div className={fraunces.className}>
            <Link
                className="text-xl underline decoration-yellow-200 decoration-8"
                href="/about"
            >LEARN MORE</Link>
            </div>
        </section>
    )
}

export default Content