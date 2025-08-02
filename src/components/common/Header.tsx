'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#hero', active: true },
    { label: 'About', href: '#about', active: false }
  ];

  const handleNavClick = (href: string) => {
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  const handleGetInTouchClick = () => {
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4 lg:py-0">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="p-4 lg:p-6">
              <div className="flex items-center">
                <Image
                  src="/images/solar-concepts-logo.png"
                  alt="Solar Concepts - Arizona Premier Dealer"
                  width={500}
                  height={200}
                  className="w-[250px] h-[100px] sm:w-[350px] sm:h-[140px] lg:w-[500px] lg:h-[200px] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button 
            className="block lg:hidden p-4" 
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-14">
            <nav className="flex items-center gap-14">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  role="menuitem"
                  onClick={() => handleNavClick(item.href)}
                  className="text-[28px] font-lato font-normal leading-[34px] text-center transition-all duration-200 hover:opacity-80 cursor-pointer text-global-2"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            <Button
              variant="gradient"
              onClick={handleGetInTouchClick}
              className="px-6 py-5 text-[18px] font-lato font-bold leading-[22px] rounded-[24px]"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
          <div className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                role="menuitem"
                onClick={() => handleNavClick(item.href)}
                className="text-left py-2 text-[20px] font-lato font-normal transition-all duration-200 hover:opacity-80 cursor-pointer text-global-2"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4">
              <Button
                variant="gradient"
                onClick={handleGetInTouchClick}
                fullWidth
                className="px-6 py-4 text-[16px] font-lato font-bold rounded-[24px]"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;