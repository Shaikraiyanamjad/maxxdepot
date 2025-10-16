import AboutUs from '@/components/AboutUs'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import TopBar from '@/components/TopBar'
import React from 'react'
import Footer from './Footer'
import Blog from '@/components/Blog'
import Testimonial from '@/components/Testimonial'
import ContactUs from '@/components/ContactUs'

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Gallery />
      <ContactUs />
      <Testimonial />
      <Blog/>
      <Footer />  
    </>
  )
}

export default page