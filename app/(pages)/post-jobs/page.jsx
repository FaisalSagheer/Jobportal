'use client'
import { useState } from 'react';
import { Building, MapPin, DollarSign, Clock, Users, FileText } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { Input } from '@/app/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/Card';
import { Textarea } from '@/app/components/ui/Textarea';
import { Badge } from '@/app/components/ui/Badge';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/Select';

const PostJob = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);

  const skillOptions = [
    'JavaScript', 'React', 'Node.js', 'Python', 'Java', 'TypeScript',
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Figma', 'Adobe Creative Suite'
  ];

  const benefitOptions = [
    'Health Insurance', 'Dental Insurance', '401k', 'Remote Work',
    'Flexible Hours', 'Unlimited PTO', 'Professional Development',
    'Stock Options', 'Gym Membership', 'Free Lunch'
  ];

  const toggleSkill = (skill) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const toggleBenefit = (benefit) => {
    if (selectedBenefits.includes(benefit)) {
      setSelectedBenefits(selectedBenefits.filter(b => b !== benefit));
    } else {
      setSelectedBenefits([...selectedBenefits, benefit]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post a Job</h1>
          <p className="text-xl text-gray-600">
            Find the perfect candidate for your team. Reach thousands of qualified professionals.
          </p>
        </div>

        <form className="space-y-8">
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                Basic Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <Input placeholder="e.g. Senior Frontend Developer" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <Input placeholder="Your company name" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Type *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="executive">Executive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="hr">Human Resources</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Salary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Location & Compensation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <Input placeholder="e.g. San Francisco, CA or Remote" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Type
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select work type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Salary Range
                  </label>
                  <div className="flex items-center space-x-2">
                    <Input placeholder="Min salary" />
                    <span className="text-gray-500">to</span>
                    <Input placeholder="Max salary" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Currency
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="USD" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Job Description
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Summary *
                </label>
                <Textarea 
                  placeholder="Provide a brief overview of the role and what the candidate will be doing..."
                  rows={4}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Responsibilities *
                </label>
                <Textarea 
                  placeholder="List the key responsibilities and duties for this position..."
                  rows={6}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements *
                </label>
                <Textarea 
                  placeholder="List the required qualifications, skills, and experience..."
                  rows={6}
                />
              </div>
            </CardContent>
          </Card>

          {/* Skills & Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Skills & Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Required Skills
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} className="cursor-pointer" onClick={() => toggleSkill(skill)}>
                      {skill} ×
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillOptions.filter(skill => !selectedSkills.includes(skill)).map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-blue-100"
                      onClick={() => toggleSkill(skill)}
                    >
                      + {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Benefits & Perks
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedBenefits.map((benefit) => (
                    <Badge key={benefit} className="cursor-pointer" onClick={() => toggleBenefit(benefit)}>
                      {benefit} ×
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {benefitOptions.filter(benefit => !selectedBenefits.includes(benefit)).map((benefit) => (
                    <Badge 
                      key={benefit} 
                      variant="secondary" 
                      className="cursor-pointer hover:bg-blue-100"
                      onClick={() => toggleBenefit(benefit)}
                    >
                      + {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex justify-end space-x-4">
            <Button variant="outline" size="lg">
              Save as Draft
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Post Job
            </Button>
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default PostJob;
