import { Link } from 'react-router';
import Logo from '../assets/logo.png'

const Footer = () => {
    return (
      <footer className="bg-[#0A2540] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="mb-8 md:mb-0">
              <img 
                src={Logo} 
                alt="Oyo Tech Hub Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-300 mb-4">
                Driving innovation across Africa through technology and creativity
              </p>
              <div className="text-gray-400">
                <p>km 45, Kasali Elesan Building, Oyo Town. Nigeria</p>
                <p>+234 903 949 777</p>
                <p> info@Oyotechub.com </p>
              </div>
            </div>
  
            {/* Quick Links */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-100">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="hover:text-[#6BDFF2] transition-colors">About Us</Link></li>
                <li><Link to="/programs" className="hover:text-[#6BDFF2] transition-colors">Programs</Link></li>
                <li><Link to="/blog" className="hover:text-[#6BDFF2] transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-[#6BDFF2] transition-colors">Contact</Link></li>
              </ul>
            </div>
  
            {/* Innovation */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-lg font-bold mb-4 text-gray-100">Innovation</h3>
              <ul className="space-y-2">
                <li><Link to="/startups" className="hover:text-[#6BDFF2] transition-colors">Startups</Link></li>
                <li><Link to="/research" className="hover:text-[#6BDFF2] transition-colors">Research</Link></li>
                <li><Link to="/partners" className="hover:text-[#6BDFF2] transition-colors">Partnerships</Link></li>
                <li><Link to="/careers" className="hover:text-[#6BDFF2] transition-colors">Careers</Link></li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-100">Stay Updated</h3>
              <form className="flex flex-col gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="p-2 rounded-lg bg-[#0A2540] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BDFF2]"
                />
                <button 
                  type="submit"
                  className="bg-[#6BDFF2] text-[#0A2540] px-4 py-2 rounded-lg font-semibold hover:bg-[#5AC8E0] transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <div className="flex gap-4 mt-6">
                <a href="#" className="hover:text-[#6BDFF2]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#6BDFF2]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-[#6BDFF2]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Oyo Tech Hub Africa. All rights reserved.
            </p>
            <a 
              href="#top" 
              className="mt-4 inline-block text-[#6BDFF2] hover:text-white transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;