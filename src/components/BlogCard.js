import React from 'react';
import SocialLinks from './SocialLinks';
import Rating from './Rating';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import avocadoPhoto1 from '../assets/avocadopic1.jpg'
import avocadoPhoto2 from '../assets/avocado23.jpg'


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

        <LazyLoadImage
          src={avocadoPhoto1}
          alt="Avocado on a plate"
          effect="blur"
          className="rounded-lg w-full object-cover mb-2"
        />
        <p className="text-gray-600">
          Known as a superfood, avocados are versatile and can be used in salads, smoothies, and even desserts. Their creamy texture makes every dish delightful.
        </p>
      </div>

      {/* Two Paragraphs with Image */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-700">Avocados Are Good for Health</h2>
        <p className="text-gray-600 mb-2">
          Besides their culinary uses, avocados promote heart health and aid in weight management. They're also rich in antioxidants that combat free radicals.
        </p>

        <LazyLoadImage
          src={avocadoPhoto2}
          alt="Avocado on a plate"
          effect="blur"
          className="rounded-lg w-full object-cover mb-2"
        />
        <p className="text-gray-600">
          Whether you love guacamole or enjoy them plain with a sprinkle of salt, avocados never fail to impress.
        </p>
      </div>

      {/* Rating Stars */}

      <Rating />

      {/* Social Links */}
      <SocialLinks />
    </div>
  );
};

export default BlogCard;
