import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <>
            <header className="relative" >
                <Image
                    src={"/images/mobile/image-header.jpg"}
                    alt={'header image'}
                    width={500}
                    height={500}
                />
                    <h1 className="uppercase text-white absolute top-1/4">we are creatives</h1>
            </header>
        </>
    )
}

export default Header