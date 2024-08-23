import React from 'react';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      image: '/src/assets/images/tour-img01.jpg',
      title: 'Amazing Adventure',
      location: 'Himalayas',
      originalPrice: '₹25,000',
      discountPrice: '₹18,000',
      discount: '28% OFF',
      description: 'Explore the breathtaking peaks and enjoy a thrilling adventure with our exclusive package. Book now to save big!',
    },
    {
      id: 2,
      image: '/src/assets/images/tour-img02.jpg',
      title: 'Beach Bliss',
      location: 'Goa',
      originalPrice: '₹15,000',
      discountPrice: '₹12,000',
      discount: '20% OFF',
      description: 'Relax on the serene beaches of Goa and experience luxury like never before. Special offer for a limited time!',
    },
    {
      id: 3,
      image: '/src/assets/images/tour-img03.jpg',
      title: 'City Lights',
      location: 'Mumbai',
      originalPrice: '₹10,000',
      discountPrice: '₹8,000',
      discount: '20% OFF',
      description: 'Discover the vibrant city life of Mumbai with our discounted city tour. Don\'t miss out on this exciting offer!',
    },
    {
      id: 4,
      image: '/src/assets/images/tour-img04.jpg',
      title: 'Desert Safari',
      location: 'Rajasthan',
      originalPrice: '₹22,000',
      discountPrice: '₹17,000',
      discount: '22% OFF',
      description: 'Experience the mystique of the desert with our safari tour. Book now to take advantage of our special discount!',
    },
  ];

  return (
    <main className="bg-yellow-50 py-16 px-4">
      <section className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-yellow-600 mb-12">
          Special Offers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="relative bg-yellow-200 text-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{offer.title}</h2>
                <p className="text-lg font-medium mb-1">Location: {offer.location}</p>
                <p className="text-gray-600 line-through">{offer.originalPrice}</p>
                <p className="text-xl font-bold text-red-600 mb-2">{offer.discountPrice}</p>
                <p className="bg-red-600 text-white px-3 py-1 inline-block rounded-full text-sm">{offer.discount}</p>
                <p className="mt-4 text-gray-700">{offer.description}</p>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default SpecialOffers;





