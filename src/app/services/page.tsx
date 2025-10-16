import Header from '@/components/Header'
import Services from '@/components/Services'
import React from 'react'
import Footer from '../../components/Footer'
import TopBar from '@/components/TopBar'

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Services />
      <Footer />
    </>
  )
}

export default page