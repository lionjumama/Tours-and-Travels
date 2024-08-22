import React from 'react';

const AboutUs = () => {
  return (
    <main className="bg-gray-100 py-8">
      {/* About Us Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl mb-6">We are a team of dedicated professionals committed to delivering the best travel experiences. Our expertise and passion for travel make us the perfect choice for your next adventure.</p>
          
          {/* Team Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Benukar Pal</h3>
              <p className="text-lg">Position or role description</p>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Kamlesh Kumar</h3>
              <p className="text-lg">Position or role description</p>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Chirag Yadav</h3>
              <p className="text-lg">Position or role description</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Sujal</h3>
              <p className="text-lg">Position or role description</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;

