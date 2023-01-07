import React from 'react'
import Image from 'next/image'

function Banner() {
    return (
        <>
            <header className="relative flex justify-center items-center " >
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
                <h1 className="uppercase text-6xl w-96 text-center text-white absolute top-1/4">we are creatives</h1>
                <img className="absolute h-44 top-1/2 lg:h-72" src="/images/icon-arrow-down.svg" alt="down arrow" />
            </header>
        </>
    )
}

export default Banner