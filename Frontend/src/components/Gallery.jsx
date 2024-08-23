import React from "react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-8">
      <div className="text-center mb-8">
        <h2 className="text-yellow-500 text-3xl font-bold">Gallery</h2>
        <p className="text-xl">Visit our customers tour gallery</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-lg">
        <div className="col-span-2 row-span-2">
          <img 
            src="/src/assets/images/gallery-01.jpg" 
            alt="Gallery 1" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="col-span-2">
          <img 
            src="/src/assets/images/gallery-02.jpg" 
            alt="Gallery 2" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="col-span-1">
          <img 
            src="/src/assets/images/gallery-03.jpg" 
            alt="Gallery 3" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="col-span-1">
          <img 
            src="/src/assets/images/gallery-04.jpg" 
            alt="Gallery 4" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="col-span-1">
          <img 
            src="/src/assets/images/gallery-05.jpg" 
            alt="Gallery 5" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="col-span-2">
          <img 
            src="/src/assets/images/gallery-06.jpg" 
            alt="Gallery 6" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="col-span-1">
          <img 
            src="/src/assets/images/gallery-07.jpg" 
            alt="Gallery 7" 
            className="w-full h-full object-cover rounded-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;


