
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SiteConfig } from '../types';

interface NavbarProps {
  config: SiteConfig;
}

const Navbar: React.FC<NavbarProps> = ({ config }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '홈', href: '#home' },
    { name: '시설소개', href: '#facility' },
    { name: '이용요금', href: '#pricing' },
    { name: '오시는길', href: '#location' },
    { name: '예약신청', href: '#inquiry' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-40 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span 
              className="text-2xl font-black tracking-tighter italic" 
              style={{ color: config.primaryColor }}
            >
              {config.brandName}
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-gray-600 hover:text-black font-medium transition-colors ${link.name === '예약신청' ? 'text-emerald-700 font-bold underline underline-offset-4' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: config.primaryColor }}
            >
              <Phone size={16} />
              {config.contact.phone}
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${config.contact.phone}`}
            className="flex items-center justify-center gap-2 text-white p-4 rounded-xl text-lg font-bold w-full"
            style={{ backgroundColor: config.primaryColor }}
          >
            <Phone size={20} />
            전화 예약하기
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
