'use client'

import JobCard from "@/app/components/JobCard";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import Link from "next/link";

const JobListings = () => {
  const categories = [
    { name: 'All Jobs', count: 1200, active: true },
    { name: 'Technology', count: 450 },
    { name: 'Design', count: 230 },
    { name: 'Marketing', count: 180 },
    { name: 'Sales', count: 150 },
    { name: 'Finance', count: 120 },
  ];

  const jobs = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      postedDate: '2 days ago',
      description: 'We are looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for building user-facing features using React and modern web technologies.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      logo: '',
      featured: true,
    },
    {
      id: '2',
      title: 'UX/UI Designer',
      company: 'Design Studio',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$90k - $120k',
      postedDate: '1 day ago',
      description: 'Join our creative team as a UX/UI Designer. You will design intuitive and beautiful user interfaces for web and mobile applications.',
      tags: ['Figma', 'Sketch', 'Prototyping'],
      logo: '',
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      type: 'Full-time',
      salary: '$110k - $140k',
      postedDate: '3 days ago',
      description: 'Lead product development from conception to launch. Work closely with engineering and design teams to deliver exceptional user experiences.',
      tags: ['Product Strategy', 'Agile', 'Analytics'],
      logo: '',
      featured: true,
    },
    {
      id: '4',
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Seattle, WA',
      type: 'Full-time',
      salary: '$130k - $160k',
      postedDate: '1 week ago',
      description: 'Use machine learning and statistical analysis to derive insights from large datasets. Help drive data-driven decision making across the organization.',
      tags: ['Python', 'Machine Learning', 'SQL'],
      logo: '',
    },
    {
      id: '5',
      title: 'Marketing Manager',
      company: 'Growth Co.',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      salary: '$85k - $110k',
      postedDate: '5 days ago',
      description: 'Drive marketing campaigns and growth initiatives. Manage social media, content marketing, and paid advertising campaigns.',
      tags: ['Digital Marketing', 'SEO', 'Content Strategy'],
      logo: '',
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Remote',
      type: 'Full-time',
      salary: '$115k - $145k',
      postedDate: '4 days ago',
      description: 'Manage and optimize cloud infrastructure. Implement CI/CD pipelines and ensure system reliability and scalability.',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      logo: '',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Jobs</h2>
          <p className="text-xl text-gray-600">Discover your next opportunity from top companies</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
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
          <Link href="/view-all-jobs">
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