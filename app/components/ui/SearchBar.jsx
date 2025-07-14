
'use client'
import React from 'react'
import { Search, MapPin, Briefcase } from "lucide-react";
import { Input } from "./Input";
import { Button } from "./Button";
function SearchBar() {
  return (
    <>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 mb-12 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Job title, keywords, or company" 
                className="pl-10 h-12 border-0 bg-gray-50 focus:bg-gray-100"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <Input 
                placeholder="Location" 
                className="pl-10 h-12 border-0 bg-gray-50 focus:bg-gray-100"
              />
            </div>
            <Button className="h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">
              Search Jobs
            </Button>
          </div>
        </div>

    </>
  )
}

export default SearchBar;
