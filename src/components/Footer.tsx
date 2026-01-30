'use client';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white pt-12 pb-6 border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About CODE IT
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              CODE IT Software Training Institute delivers industry-focused IT training, emphasizing practical skills and career readiness.
            </p>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-200">Our Courses</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {['Full Stack Development', 'Data Science', 'Cloud Computing', 'Software Testing'].map((item) => (
                  <li key={item} className="hover:text-pink-400 transition-colors cursor-pointer">
                    › {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-200">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                {['About Us', 'Courses', 'Contact', 'Privacy Policy'].map((item) => (
                  <li key={item} className="hover:text-pink-400 transition-colors cursor-pointer">
                    › {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-purple-200">Contact Us</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-start gap-3">
                <span className="text-pink-500">📍</span>
                Office No. 33, 3rd Floor, Mata Vaishnavir Complex, Shewalewadi, Pune
              </p>
              <p className="flex items-center gap-3">
                <span className="text-pink-500">📞</span>
                +91 72319 23146
              </p>
              <p className="flex items-center gap-3">
                <span className="text-pink-500">✉️</span>
                codeit@example.com
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-900/30 pt-8 mt-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs text-gray-500 mb-6 uppercase tracking-wider">
            <span>Trusted by students & institutions</span>
            <span>Industry-experienced trainers</span>
            <span>Practical learning approach</span>
            <span>Career-oriented training</span>
          </div>
          <div className="text-center text-xs text-gray-600">
            © 2024 CODE IT Software Training Institute • All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;