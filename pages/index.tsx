import { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Content from '../components/Content'
import Footer from '../components/Footer'



export default function Home() {
  return (
    <>
      <Head>
        <title>Sunnyside Agency App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main tabIndex={0} className={styles.main} >
        <Banner/>
        <Content />
        <Footer/>
      </main>
    </>
  )
}
