import Blog from '@/components/Blog'
import Header from '@/components/Header'
import React from 'react'
import Footer from '../../components/Footer'
import TopBar from '@/components/TopBar'

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Blog />
      <Footer />
    </>
  )
}

export default page