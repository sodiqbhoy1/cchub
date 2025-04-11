import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="CcHub Logo" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {/* <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">Programs</Link> */}
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            {/* <Link to="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link> */}
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-2">
              {/* <Link to="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Programs</Link> */}
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">About</Link>
              {/* <Link to="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Blog</Link> */}
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;