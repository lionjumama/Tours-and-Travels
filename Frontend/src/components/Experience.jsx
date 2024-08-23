import React from 'react';

const Experience = () => {
  return (
    <div className="experience-section bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left">
          <div className="bg-orange-500 text-white px-4 py-2 inline-block rounded-full">
            Experience
          </div>
          <h1 className="text-4xl font-bold mt-4">
            Unforgettable Experiences Await
          </h1>
          <p className="text-gray-300 mt-4">
            With years of expertise, we offer unforgettable adventures and unique experiences. Explore the world with confidence as we guide you through breathtaking destinations and enriching journeys.
          </p>
          <div className="flex justify-center md:justify-start mt-8 space-x-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-500">12k+</h2>
              <p>Successful Trips</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-500">2k+</h2>
              <p>Regular Clients</p>
            </div>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-orange-500">15+</h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <img
            src="/src/assets/images/experience.png" 
            alt="Experience"
            className="w-full h-auto rounded-lg"
            style={{ maxWidth: '80%' }}
          />
          <div className="absolute bottom-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-full">
            Los Angeles
          </div>
          <div className="absolute bottom-0 right-0 transform translate-x-10 translate-y-8 text-sm">
            <p>Mountain Hiking</p>
            <p className="text-gray-400">Discover thrilling adventures and join us for an unforgettable journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

