import React from 'react';

// Import images
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";

const SeminarUpdates = () => {
  const images = [image1, image2, image3, image4];
  const centerImage = image5;
  const bottomImages = [image6, image7, image8, image9];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 text-[#1c4330] min-h-screen pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Seminar Updates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {images.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img
                src={image}
                alt={`Seminar Update ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <div className="aspect-w-16 aspect-h-9 w-full md:w-2/3">
            <img
              src={centerImage}
              alt="Seminar Update 5"
              className="object-cover w-full h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bottomImages.map((image, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img
                src={image}
                alt={`Seminar Update ${index + 6}`}
                className="object-cover w-full h-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 text-lg sm:text-xl text-gray-700">
          <p className="hover:text-gray-900 transition duration-300">
            Stay updated with the latest seminar information and highlights.
          </p>
          <p className="hover:text-gray-900 transition duration-300">
            Check back regularly for new images and updates from the Sustainable Industrial Parks Seminar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeminarUpdates;