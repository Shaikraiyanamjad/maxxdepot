import AboutUs from '@/components/AboutUs'
import Header from '@/components/Header'
import React from 'react'
import Footer from '../Footer'
import TopBar from '@/components/TopBar'

const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <AboutUs />
    <Footer />
    </>
  )
}

export default page