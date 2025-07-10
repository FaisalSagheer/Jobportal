'use client'
import { Search, MapPin, Briefcase } from 'lucide-react';
import { Input } from './ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/Select';
import { Button } from './ui/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Find Your Dream
            <span className="text-blue-600 block">Career Today</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover thousands of job opportunities from top companies worldwide. 
            Your next career move is just a search away.
          </p>
        </div>

        {/* Search Bar */}
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-gray-600">Active Jobs</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Companies</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-blue-600 mb-2">2M+</div>
            <div className="text-gray-600">Job Seekers</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
