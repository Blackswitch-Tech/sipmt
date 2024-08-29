const SeminarUpdates = () => {
  const images = Array.from({ length: 5 }, (_, i) => `src/assets/${i + 1}.jpg`);

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 text-[#1c4330] min-h-screen pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
          Seminar Updates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((src, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <img
                src={src}
                alt={`Seminar Update ${index + 1}`}
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