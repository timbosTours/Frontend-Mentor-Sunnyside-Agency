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
        <>
        <div className="text-center">
            <div className={fraunces.className}>
                    <h4 tabIndex={0} className="xs:text-2xl tracking-widest m-10 md:mb-0 text-gray-400">CLIENT TESTIMONIALS</h4>
            </div>
                <div className="md:grid md:grid-cols-3">
            <div className="md:m-0">        
            <img
                    className="m-auto rounded-full mt-10"
                    src={"/images/image-emily.jpg"}
                    alt={'header image'}
                    width={80}
                    height={80}
            />
            <div>
                <div className={barlow.className}>
                    <p tabIndex={0} className="m-10 text-gray-600 text-lg">We put our trust in Sunnyside and they       delivered, making sure our needs were met and deadlines were always hit.</p>
                </div>
                <div className={fraunces.className}>
                    <h5 tabIndex={0} className="text-xl m-3">Emily R.</h5>
                </div>
                <div className={barlow.className}>
                    <h6 tabIndex={0}className="text-gray-600">Marketing Director</h6>
                            </div>
                        </div>
                    </div>
            <div className="md:-m-4">
            <img
                    className="m-auto rounded-full mt-14"
                    src={"/images/image-thomas.jpg"}
                    alt={'header image'}
                    width={80}
                    height={80}
            />
            <div>
                <div className={barlow.className}>
                    <p tabIndex={0} className="m-10 text-gray-600 text-lg">Sunnyside`s enthusiasm coupled with their keen interest in our brand`s success made it a satisfying and enjoyable experience.</p>
                </div>
                <div className={fraunces.className}>
                    <h5 tabIndex={0} className="text-xl m-3">Thomas S.</h5>
                </div>
                <div className={barlow.className}>
                    <h6 tabIndex={0} className="text-gray-600">Chief Operating Officer</h6>
                </div>
                        </div>
                    </div>
            <div>
            <img
                    className="m-auto rounded-full mt-14 md:mt-10"
                    src={"/images/image-jennie.jpg"}
                    alt={'header image'}
                    width={80}
                    height={80}
            />
            <div className='mb-10'>
                <div className={barlow.className}>
                    <p tabIndex={0} className="m-10 text-gray-600 text-lg">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                </div>
                <div className={fraunces.className}>
                    <h5 tabIndex={0} className="text-xl m-3">Jennie F.</h5>
                </div>
                <div className={barlow.className}>
                    <h6 tabIndex={0} className="text-gray-600">Business Owner</h6>
                </div>
                </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4">
                <img
                    className="md:hidden"
                    src="/images/mobile/image-gallery-milkbottles.jpg"
                    alt=""
                    width={400}
                    height={400}
                />
                <img
                    className="max-md:hidden"
                    src="/images/desktop/image-gallery-milkbottles.jpg"
                    alt=""
                    width={800}
                    height={800}
                />
                <img
                    className="md:hidden"
                    src="/images/mobile/image-gallery-orange.jpg"
                    alt=""
                    width={400}
                    height={400}
                />
                <img
                    className="max-md:hidden"
                    src="/images/desktop/image-gallery-orange.jpg"
                    alt=""
                    width={800}
                    height={800}
                />
                <img
                    className="md:hidden"
                    src="/images/mobile/image-gallery-cone.jpg"
                    alt=""
                    width={400}
                    height={400}
                />
                <img
                    className="max-md:hidden"
                    src="/images/desktop/image-gallery-cone.jpg"
                    alt=""
                    width={800}
                    height={800}
                />
                <img
                    className="md:hidden"
                    src="/images/mobile/image-gallery-sugar-cubes.jpg"
                    alt=""
                    width={400}
                    height={400}
                />
                <img
                    className="max-md:hidden"
                    src="/images/desktop/image-gallery-sugarcubes.jpg"
                    alt=""
                    width={800}
                    height={800}
                />
            </div>
            
        </>
    )
}

export default Testimonials