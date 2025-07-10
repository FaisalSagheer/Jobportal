import { Briefcase, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from './ui/Button';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">JobPortal</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner in finding the perfect career opportunity. 
              Connect with top employers and take your career to the next level.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Browse Companies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post a Job</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Career Advice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Salary Guide</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Job Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Marketing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Finance</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <a href="mailto:contact@jobportal.com" className="text-gray-400 hover:text-white transition-colors">contact@jobportal.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-400">123 Business Ave, Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 JobPortal. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;