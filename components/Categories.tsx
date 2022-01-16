import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/blog/category/${category.slug}`} passHref>
          <span
            className={`cursor-pointer text-sm font-semibold inline-block bg-purple-600 rounded-full text-white px-3 py-2 m-1 hover:shadow-lg hover:-translate-y-1 hover:bg-indigo-700 active:scale-90 transition duration-500 ${
              index === categories.length - 1 ? 'border-b-0' : 'border-b'
            } py-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
