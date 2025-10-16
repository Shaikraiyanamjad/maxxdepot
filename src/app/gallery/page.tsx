import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import React from 'react'
import Footer from '../Footer'
import TopBar from '@/components/TopBar'

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Gallery />
      <Footer />
    </>
  )
}

export default page