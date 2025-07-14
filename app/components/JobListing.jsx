'use client'

import JobCard from "@/app/components/JobCard";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import Link from "next/link";
import { categories_home, jobs } from "../constant";

const JobListings = () => {

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
          <p className="text-xl text-gray-600">Discover your next opportunity from top companies</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories_home.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={`${category.active ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50 hover:text-blue-600'}`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Link href="/view-jobs">
            <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:text-blue-600">
              Load More Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobListings;