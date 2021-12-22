import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="w-full inline-block py-8">
        <div className="md:float-left block">
          <Link href="/blog" passHref>
            <span className="cursor-pointer text-3xl lg:text-7xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
              / Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/blog/category/${category.slug}`} passHref>
              <span className="md:float-right mt-2 align-middle text-gray-900 ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
