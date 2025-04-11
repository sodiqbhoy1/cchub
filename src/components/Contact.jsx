import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-[#0A2540] text-white min-h-screen">
      {/* Hero Section */}
      <div className="py-16 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We'd love to hear from you! Reach out to us for inquiries, partnerships, or just to say hello.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              Feel free to reach out to us via email, phone, or visit our office. We're here to help!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-[#6BDFF2] p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l1.664 1.664a8 8 0 0011.312 0L18 10m-6 5v6m-4-6h8" />
                  </svg>
                </div>
                <span className="text-gray-300">hello@cchub.africa</span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#6BDFF2] p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 12h6" />
                  </svg>
                </div>
                <span className="text-gray-300">+234 123 456 789</span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#6BDFF2] p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <span className="text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-[#0A2540] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BDFF2]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-[#0A2540] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BDFF2]"
                  />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-[#0A2540] border border-gray-600 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6BDFF2]"
                  ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#6BDFF2] text-[#0A2540] px-6 py-3 rounded-lg font-semibold hover:bg-[#5AC8E0] transition-colors"
                >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <br />
<Footer/>

                  </>
  );
};

export default Contact;
