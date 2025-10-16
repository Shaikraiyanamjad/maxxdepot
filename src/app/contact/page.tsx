import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import React from 'react'
import Footer from '../Footer'
import TopBar from '@/components/TopBar'

const page = () => {
  return (
    <>
      <TopBar />
      <Header/>
      <ContactUs />
      <Footer />
    </>
  )
}

export default page