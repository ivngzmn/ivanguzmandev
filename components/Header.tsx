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
      <div className="w-full inline-block py-10 lg:py-20">
        <div className="md:float-left block">
          <Link href="/blog" passHref>
            <span className="cursor-pointer text-5xl lg:text-8xl font-semibold leading-8 tracking-tight text-slate-900 ">
              Blog
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
