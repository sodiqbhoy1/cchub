import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import CreativeEconomy from '../assets/creative-economy.jpeg';
import Innovation from '../assets/innovation.jpeg';
import SocialImpact from '../assets/social-impact.jpeg';
import Education from '../assets/education.jpeg';
import Startup from '../assets/startup.jpeg';
import HeroImage from '../assets/Hero.jpeg'; // Example image import

const Home = () => {

  const blogs = [
    {
      heading: "SUSTAINABLE TECHNOLOGY",
      title: "Mainstraming Green and Sustainable Technology for a Resilient Future",
      content: "Contribute Image: Panelist session at the GCIP Launch in Nambia Across Africa, a growing number of businesses are stepping up to tackle continet's most urgent challenges-climate change, energy",
      date: "1 WEEK AGO"
    },

    {
      heading: "STARTUP INSIGHTS ",
      title: "How African Startups Can Win Investors in 2025",
      content: "Photo Credit: Envato Elements A fintech founder once walked into a pitch meeting armed with charts, downloads, and dazzling user numbers. It was 2021—and that was enough. Fast forward...",
      date: "2 WEEKs AGO"

    },

    {
      heading: " TECHNOLOGY AND SOCIETY",
      title: "Empowering Women for Africa’s Transformation",
      content: "Access to digital tools and the internet is crucial for women’s empowerment as it offers opportunities in education, financial inclusion, and business growth. However, many women globally and especially...",
      date: "2 WEEKs AGO"
    },
  ];


  const focusAreas = [
    { title: "Creative Economy", image: CreativeEconomy },
    { title: "Technology Innovation", image: Innovation },
    { title: "Social Impact", image: SocialImpact },
    { title: "Education", image: Education },
    { title: "Startup Support", image: Startup },
  ];
  



  return (
    <>
 <Navbar/>
      <section className="bg-white">
        {/* Hero Section with Image */}
        <div 
          className="py-20 px-4 text-left"
          style={{ 
            backgroundColor: '#0A2540',
            color: '#FFFFFF',
          }}
        >
          <div 
            className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 animate-fade-in"
          >
            {/* Text Content */}
            <div className="flex-1">
              <h3 
                className="text-lg font-semibold mb-4 tracking-wide"
                style={{ color: '#6BDFF2' }}
              >
                WHO WE ARE
              </h3>
              <h2 
                className="text-3xl md:text-5xl font-bold leading-tight mb-8"
                style={{ maxWidth: '36rem' }}
              >
                We are the leading pan-African creative and innovation ecosystem enabler
              </h2>
              <p 
                className="text-xl max-w-2xl"
                style={{ color: '#A3B5C6' }}
              >
                Our vision is to accelerate the application of social capital and technology 
                for economic prosperity across Africa.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full">
              <img 
                src={HeroImage} 
                alt="African innovation ecosystem" 
                className="w-full h-full object-cover rounded-xl shadow-lg"
                style={{ maxHeight: '500px' }}
              />
            </div>
          </div>

          <style jsx>{`
            @keyframes fadeInUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .animate-fade-in {
              animation: fadeInUp 1s ease-out forwards;
            }
          `}</style>
        </div>

    {/* Focus Areas Section */}
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-blue-600 mb-2">OUR WORKS</h3>
          <h2 className="text-3xl font-bold text-gray-900">Area Of Focus</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => (
            <div 
              key={index}
              className="group relative h-64 overflow-hidden rounded-xl shadow-lg"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundImage: `url(${area.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative h-full flex items-end justify-center p-6">
                <h2 className="text-2xl font-bold text-white text-center">
                  {area.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Blog Section */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">FROM OUR BLOG</h4>
          <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <article 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder - Add your image URL */}
               
              <div className="p-6">
                <div className="mb-3 flex items-center text-sm text-gray-500">
                  <span className="font-medium text-blue-600">{blog.heading}</span>
                  <span className="mx-2">•</span>
                  <time>{blog.date} </time>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {blog.title}
                </h2>

                <p className="text-gray-600 line-clamp-3 mb-4">
                  {blog.content}
                </p>

                <a 
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group"
                >
                  Read more
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  </section>
  <Footer/>
          </>
);
};


export default Home