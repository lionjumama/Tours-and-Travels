import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaTelegram, FaHackerrank, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-start space-x-12">
        
        {/* Developers Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Developers</h2>
          <hr className="border-gray-700 w-full mb-4" />
          <ul className="font-serif">
            <li><p>Benukar Pal</p></li>
            <li><p>Kamlesh Kumar</p></li>
            <li><p>Chirag Yadav</p></li>
            <li><p>Veer Singh Sodhi</p></li>
          </ul>
        </div>

        {/* Vertical Line */}
        <div className="border-l border-gray-700 h-full"></div>

        {/* Social Handles Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Social Handles</h2>
          <hr className="border-gray-700 w-full mb-4" />
          <div className="flex items-center mb-2 hover:text-blue-500">
            <FaInstagram className="mr-2" />
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="flex items-center mb-2 hover:text-blue-500">
            <FaGithub className="mr-2" />
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          <div className="flex items-center mb-2 hover:text-blue-500">
            <FaLinkedin className="mr-2" />
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="flex items-center mb-2 hover:text-blue-500">
            <FaTelegram className="mr-2" />
            <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">Telegram</a>
          </div>
          <div className="flex items-center hover:text-blue-500">
            <FaHackerrank className="mr-2" />
            <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer">HackerRank</a>
          </div>
        </div>

        {/* Vertical Line */}
        <div className="border-l border-gray-700 h-full"></div>

        {/* Pages Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Pages</h2>
          <hr className="border-gray-700 w-full mb-4" />
          <ol className="font-mono">
            <li className="hover:text-blue-500 mb-2">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-blue-500 mb-2">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:text-blue-500 mb-2">
              <a href="/tours">Tours</a>
            </li>
            <li className="hover:text-blue-500 mb-2">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="hover:text-blue-500">
              <a href="/specialoffers">Special Offers</a>
            </li>
          </ol>
        </div>

        {/* Vertical Line */}
        <div className="border-l border-gray-700 h-full"></div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <hr className="border-gray-700 w-full mb-4" />
          <ol className="font-mono">
            <li className="hover:text-blue-500 mb-2">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="hover:text-blue-500 mb-2">
              <a href="/login">Login</a>
            </li>
            <li className="hover:text-blue-500 mb-2">
              <a href="/register">Register</a>
            </li>
          </ol>
        </div>

        {/* Vertical Line */}
        <div className="border-l border-gray-700 h-full"></div>

        {/* Contact Us Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <hr className="border-gray-700 w-full mb-4" />
          <div className="flex items-center mb-2 hover:text-blue-500">
            <FaEnvelope className="mr-2" /> 
            <a href="mailto:contact@toursandtravels.com">contact@toursandtravels.com</a>
          </div>
          <div className="flex items-center mb-2 hover:text-blue-500">
            <FaPhone className="mr-2" /> 
            <span>+91 12345 67890</span>
          </div>
          <div className="flex items-center hover:text-blue-500">
            <FaMapMarkerAlt className="mr-2" /> 
            <span>123, Main Street, New Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




