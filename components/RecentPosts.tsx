import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((result) => {
      setPosts(result);
    });
  }, []);

  return (
    <div className="relative bg-gray-50">
      <div className="relative max-w-7xl mx-auto bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-normal font-extrabold text-gray-900 sm:text-4xl">
              Recent Posts from the Blog
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Thoughts on what I'm learning, what I'm thinking, and what I'm
              doing.
            </p>
          </div>
        </div>
        <div className="max-w-lg mt-12 mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post, index) => (
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={index}>
              <a>
                <div
                  key={index}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 relative object-cover overflow-hidden h-96 w-full">
                    <Image
                      loader={grpahCMSImageLoader}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="h-48 w-full object-cover"
                      src={post.featuredImage.url}
                    />
                  </div>

                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-grow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 inline mr-2 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-gray-500 font-xs align-middle">
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="mt-2 text-xl font-semibold text-gray-900 hover:text-indigo-700">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </p>
                      <p className="mt-2 text-base text-gray-500">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-4 hidden md:flex items-center justify-left lg:mb-0 lg:w-auto mr-8">
                      <Image
                        alt={post.author.name}
                        height="40px"
                        width="40px"
                        className="align-left rounded-full"
                        src={post.author.photo.url}
                      />
                      <p className="inline align-left text-gray-700 ml-2 font-light text-lg">
                        {post.author.name}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
