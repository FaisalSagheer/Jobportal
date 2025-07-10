'use client'

import Footer from "@/app/components/Footer"
import Hero from "@/app/components/Hero"
import JobListings from "@/app/components/JobListing"

function Home() {
  return (
    <>
      <Hero/>
      <JobListings/>
      <Footer/>
    </>
  )
}

export default Home
