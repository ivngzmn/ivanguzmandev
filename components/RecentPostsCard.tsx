import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostWidget = ({ post, index }) => {
  return (
    <section className="mb-6">
      <div className="relative h-full w-full lg:h-full lg:w-full">
        <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={index}>
          <a>
            <div
              key={index}
              className="group flex h-[45rem] flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
            >
              <div className="relative h-[25rem] duration-500 ease-in-out md:h-[35rem] lg:h-[40rem]">
                <Image
                  loader={grpahCMSImageLoader}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  unoptimized
                  src={post.featuredImage.url}
                />
              </div>

              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 inline h-6 w-6 text-indigo-600"
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
                  <span className="font-xs align-middle text-gray-500">
                    {moment(post.createdAt).format('MMM DD, YYYY')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="mt-2 items-start text-2xl font-semibold text-gray-900 hover:text-indigo-700 lg:text-4xl">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </p>
                  <p className="mt-2 text-lg text-gray-500 lg:text-xl">
                    {post.description}
                  </p>
                </div>
                <div className="justify-left mt-4 mr-8 items-center md:flex lg:mb-0 lg:w-auto">
                  <Image
                    alt={post.author.name}
                    height="40px"
                    width="40px"
                    className="align-left rounded-full"
                    src={post.author.photo.url}
                  />
                  <p className="align-left ml-2 inline text-lg font-light text-gray-700">
                    {post.author.name}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default PostWidget;
