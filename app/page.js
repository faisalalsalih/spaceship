import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '@/sections/Hero'


const Page = () => {
  return (
    <>
    <div className="bg-primary-black text-white overflow-hidden">
      <Navbar />
      <Hero />
    </div>
    </>
  )
}

export default Page
