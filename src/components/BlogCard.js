import React from 'react';

const BlogCard = () => {
  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800 mb-4">The Wonders of Avocado</h1>

      {/* Subtitle with Paragraph */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Why Avocados Are Amazing</h2>
        <p className="text-gray-600 mt-2">
          Avocados are not just delicious but also packed with nutrients that benefit your body. From healthy fats to vitamins, they are nature's gift for a balanced diet.
        </p>
      </div>

      {/* Paragraph with Image */}
      <div className="mb-4">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Avocado"
          className="rounded-lg w-full object-cover mb-2"
        />
        <p className="text-gray-600">
          Known as a superfood, avocados are versatile and can be used in salads, smoothies, and even desserts. Their creamy texture makes every dish delightful.
        </p>
      </div>

      {/* Two Paragraphs with Image */}
      <div className="mb-4">
        <p className="text-gray-600 mb-2">
          Besides their culinary uses, avocados promote heart health and aid in weight management. They're also rich in antioxidants that combat free radicals.
        </p>
        <img
          src="https://via.placeholder.com/300x200"
          alt="Avocado on a plate"
          className="rounded-lg w-full object-cover mb-2"
        />
        <p className="text-gray-600">
          Whether you love guacamole or enjoy them plain with a sprinkle of salt, avocados never fail to impress.
        </p>
      </div>

      {/* Rating Stars */}
      <div className="flex items-center justify-center my-4">
        <span className="text-yellow-400 text-xl mr-1">★</span>
        <span className="text-yellow-400 text-xl mr-1">★</span>
        <span className="text-yellow-400 text-xl mr-1">★</span>
        <span className="text-yellow-400 text-xl mr-1">★</span>
        <span className="text-gray-300 text-xl">★</span>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
          aria-label="Facebook"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-blue-400 hover:text-blue-600 transition-colors duration-200"
          aria-label="Twitter"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-pink-500 hover:text-pink-700 transition-colors duration-200"
          aria-label="Instagram"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
