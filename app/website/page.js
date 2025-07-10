'use client'

import ReactLenis from "@studio-freight/react-lenis"
import Home from "../(pages)/home"
import { usePathname } from "next/navigation"
import Navbar from "../components/Navbar"

function Website() {
  const pathname = usePathname()

  const pagecontent = () => {
    switch (pathname) {
      case "":
        return;
      case "/":
      default:
        return <Home />
    }
  }

  return (
    <>
      <Navbar />
      <ReactLenis root>
          {pagecontent()}
      </ReactLenis>
    </>
  )
}

export default Website
