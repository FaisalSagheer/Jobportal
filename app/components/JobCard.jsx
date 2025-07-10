'use client'
import { MapPin, Clock, Briefcase, Heart, Bookmark } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Card, CardContent } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

const JobCard = ({ job }) => {
  const navigate = usePathname();

  const handleApplyClick = () => {
    navigate(`/job/${job.id}`);
  };

  return (
    <Card className={`hover:shadow-lg transition-all duration-300 hover:scale-[1.02] ${job.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
      <CardContent className="p-6">
        {job.featured && (
          <Badge className="mb-4 bg-blue-600 text-white">Featured</Badge>
        )}
        
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-600">
                {job.company.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                {job.title}
              </h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="opacity-60 hover:opacity-100">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1" />
            {job.type}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {job.postedDate}
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">{job.salary}</span>
          <Button onClick={handleApplyClick}>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;