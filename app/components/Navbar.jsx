
'use client'

import { Bell, Briefcase, User } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/Button"

function Navbar() {
  return (
    <>
<header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">JobPortal</span>
            </Link>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <Link href="/view-jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">View Jobs</Link>
            <Link href="/find-jobs" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Find Jobs</Link>
            <Link href="/companies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Companies</Link>
            <Link href="/post-job" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Post Job</Link>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
          </nav> */}

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <Link href="/notifications">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </Link> */}
            <Link href="/login">
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link href="/post-job">
              <Button size="sm">
                Post Job
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>  
    </>
  )
}

export default Navbar
