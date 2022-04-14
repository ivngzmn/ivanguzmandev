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
    <div className="bg-zinc-900">
      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="inline-block w-full py-10 lg:py-20">
          <div className="block md:float-left">
            <Link href="/blog" passHref>
              <span
                className="cursor-pointer text-6xl font-semibold tracking-tight lg:text-8xl"
                id="blog"
              >
                Blog
              </span>
            </Link>
            <h2 className="pt-5 text-3xl font-light tracking-normal text-slate-50 lg:text-4xl">
              Thoughts. Blurbs. Tech.
            </h2>
          </div>
          <div className="hidden md:float-left md:contents">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/blog/category/${category.slug}`}
                passHref
              >
                <span className="mt-2 ml-4 cursor-pointer align-middle text-lg text-gray-100 transition duration-300 ease-in-out hover:text-gray-500 md:float-right">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
