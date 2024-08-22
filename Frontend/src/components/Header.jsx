import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes, FaBars, FaCartPlus, FaSignInAlt } from 'react-icons/fa';

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/tours"
                className={({ isActive }) =>
                  `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                }
              >
                Tours
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                }
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/specialoffers"
                className={({ isActive }) =>
                  `relative ${isActive ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600`
                }
              >
                Special Offers
              </NavLink>
            </div>

            {/* CTA Button and Hamburger */}
            <div className="flex items-center space-x-4">
              {isLoggedIn ? (
                <NavLink
                  to="/cart"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
                >
                  <FaCartPlus />
                  <span>Your Cart</span>
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
                >
                  <FaSignInAlt />
                  <span>Sign In</span>
                </NavLink>
              )}

              {/* Hamburger Menu for All Screens */}
              <button onClick={handleMenuToggle} className="text-gray-700 focus:outline-none">
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Right-Side Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end">
          <div className="w-64 bg-gray-800 text-white p-4 relative">
            <button onClick={handleMenuToggle} className="absolute top-4 right-4 text-white">
              <FaTimes className="h-6 w-6" />
            </button>
            <div className="flex flex-col space-y-4">
              <NavLink to="/login" className="text-white hover:text-blue-400">Login</NavLink>
              <NavLink to="/register" className="text-white hover:text-blue-400">Register</NavLink>
              <NavLink to="/tours" className="text-white hover:text-blue-400">Tours</NavLink>
              <NavLink to="/contact" className="text-white hover:text-blue-400">Contact Us</NavLink>
              <NavLink to="/specialoffers" className="text-white hover:text-blue-400">Special Offers</NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;





