'use client'
import { useState } from 'react';
import { Search, MapPin, Filter, Calendar, Briefcase, Users, TrendingUp } from 'lucide-react';

import Footer from '@/app/components/Footer';
import JobCard from '@/app/components/JobCard';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Card, CardContent } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { categories, featuredJobs, stats } from '@/app/constant';

const ViewJobs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Your Dream Job</h1>
          <p className="text-xl text-gray-600 mb-8">Browse through thousands of job opportunities from top companies</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Search jobs, companies, categories or keywords..."
                  className="pl-10 h-12"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4 cursor-pointer hover:bg-blue-100 hover:text-blue-700 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Jobs */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Featured Jobs</h2>
            <Link href="/view-all-jobs">
              <Button variant="outline" className="hover:bg-blue-50 hover:text-blue-600">
                View All Jobs
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Next Opportunity?</h3>
          <p className="text-gray-600 mb-6">Join thousands of professionals who have found their dream jobs through our platform</p>
          <div className="flex justify-center gap-4">
            <Link href="/view-all-jobs">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Browse All Jobs
              </Button>
            </Link>
            <Link href="/post-job">
              <Button size="lg" variant="outline">
                Post a Job
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ViewJobs;