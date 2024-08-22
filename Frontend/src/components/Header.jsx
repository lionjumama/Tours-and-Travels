import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold text-blue-600">SafarShandar Travels</span>
            </NavLink>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10 relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              Home
              {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              About Us
              {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />}
            </NavLink>
            <NavLink
              to="/tours"
              className={({ isActive }) =>
                `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              Tours
              {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              Contact Us
              {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />}
            </NavLink>
            <NavLink
              to="/specialoffers"
              className={({ isActive }) =>
                `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
              }
            >
              Special Offers
              {({ isActive }) => isActive && <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600" />}
            </NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <NavLink
              to="/book"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Book Now
            </NavLink>
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




