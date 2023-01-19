import { Fraunces, Barlow } from '@next/font/google'
import React from 'react'
import Image from 'next/image'

const fraunces = Fraunces({
    weight: ['900'],
    subsets: ['latin']
})

const barlow = Barlow({
    weight: ['600'],
    subsets: ['latin']
})

function Testimonials() {
    return (
        <div className="text-center">
            <div className={fraunces.className}>
                <h1 className="text-2xl tracking-widest m-10 text-gray-400">CLIENT TESTIMONIALS</h1>
            </div>
            <Image
                    className="m-auto rounded-full mt-8"
                    src={"/images/image-emily.jpg"}
                    alt={'header image'}
                    width={80}
                    height={80}
            />
            <div>
                <div className={barlow.className}>
                    <p className="m-10 text-gray-600 text-lg">We put our trust in Sunnyside and they       delivered, making sure our needs were met and deadlines were always hit.</p>
                </div>
                <div className={fraunces.className}>
                    <h2 className="text-xl m-3">Emily R.</h2>
                </div>
                <div className={barlow.className}>
                    <h3 className="text-gray-400">Marketing Director</h3>
                </div>
            </div>
            <Image
                    className="m-auto rounded-full mt-14"
                    src={"/images/image-thomas.jpg"}
                    alt={'header image'}
                    width={80}
                    height={80}
            />
            <div>
                <div className={barlow.className}>
                    <p className="m-10 text-gray-600 text-lg">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                </div>
                <div className={fraunces.className}>
                    <h2 className="text-xl m-3">Thomas S.</h2>
                </div>
                <div className={barlow.className}>
                    <h3 className="text-gray-400">Chief Operating Officer</h3>
                </div>
            </div>
            <Image
                    className="m-auto rounded-full mt-14"
                    src={"/images/image-jennie.jpg"}
                    alt={'header image'}
                    width={80}
                    height={80}
            />
            <div className='mb-10'>
                <div className={barlow.className}>
                    <p className="m-10 text-gray-600 text-lg">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
</p>
                </div>
                <div className={fraunces.className}>
                    <h2 className="text-xl m-3">Jennie F.</h2>
                </div>
                <div className={barlow.className}>
                    <h3 className="text-gray-400">Business Owner</h3>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <Image
                    className=""
                    src="/images/mobile/image-gallery-milkbottles.jpg"
                    alt=""
                    width={500}
                    height={400}
                />
                <Image
                    className=""
                    src="/images/mobile/image-gallery-orange.jpg"
                    alt=""
                    width={500}
                    height={400}
                />
                <Image
                    className=""
                    src="/images/mobile/image-gallery-cone.jpg"
                    alt=""
                    width={500}
                    height={400}
                />
                <Image
                    className=""
                    src="/images/mobile/image-gallery-sugar-cubes.jpg"
                    alt=""
                    width={500}
                    height={400}
                />
            </div>
        </div>
    )
}

export default Testimonials