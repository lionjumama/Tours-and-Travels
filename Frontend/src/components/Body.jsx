import React from 'react'

const Body = () => {
  return (
    <main className="bg-gray-100 py-8">
    {/* Hero Section */}
    <section className="text-center py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-4">Explore Amazing Tours</h1>
        <p className="text-xl mb-6">Discover breathtaking destinations with our expert-guided tours.</p>
        <a href="/tours" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-200">
          Explore Tours
        </a>
      </div>
    </section>

    {/* Features/Services Section */}
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Customized Tours</h3>
            <p>Personalized tour packages tailored to your preferences and interests.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Expert Guides</h3>
            <p>Experienced guides who provide insightful and engaging tours.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
            <p>Round-the-clock assistance to ensure a smooth and enjoyable experience.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-gray-200 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-4 mb-6">
            <p className="text-lg mb-4">"An unforgettable experience! The tour was well-organized, and the guide was fantastic."</p>
            <p className="font-semibold">- Alex Johnson</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs mx-4 mb-6">
            <p className="text-lg mb-4">"Highly recommend! The destinations were amazing and the support was excellent."</p>
            <p className="font-semibold">- Emily Davis</p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="bg-blue-600 text-white py-6 text-center">
      <p>&copy; 2024 Tours&Travels. All rights reserved.</p>
    </footer>
  </main>
);
};
  

export default  Body