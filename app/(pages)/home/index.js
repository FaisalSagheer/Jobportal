'use client'

import Hero from "@/app/components/Hero"
import JobListings from "@/app/components/JobListing"
import Navbar from "@/app/components/Navbar"

function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <JobListings/>
    </>
  )
}

export default Home
