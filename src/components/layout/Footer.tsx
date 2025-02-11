import React from 'react';
import FooterAnimation from '../three/FooterAnimation';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <FooterAnimation />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-2">Email: your.email@example.com</p>
            <p>Location: Your Location</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400 transition-colors">LinkedIn</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">GitHub</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">Twitter</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block hover:text-blue-400 transition-colors">Projects</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="block hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;