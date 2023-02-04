import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Image from 'next/image'

function About() {
  return (
    <>
      <Banner />
      <Image
            className="h-full-w-full blur-sm -mb-10"
            src={"/images/desktop/Ai-bg-1.png"}
            alt={'header image'}
            width={2000}
            height={2000}
      />
      <Footer/>
    </>
  )
}

export default About