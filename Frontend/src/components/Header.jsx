import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md mt-4"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16"> {/* Added items-center */}
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-blue-600">SafarShandar Travels</a>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10"> {/* Removed extra items-center */}
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="/tours" className="text-gray-700 hover:text-blue-600">Tours</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</a>
            <a href="/offers" className="text-gray-700 hover:text-blue-600">Special Offers</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="/book" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Book Now
            </a>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

