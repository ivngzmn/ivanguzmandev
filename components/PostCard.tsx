import React from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';

const PostCard = ({ post }) => (
  <div className="mb-8 mt-10 rounded-2xl bg-white pb-12 shadow-2xl">
    <Link href={`/blog/${post.slug}`} passHref>
      <a>
        <div className="relative mb-6 inline-block h-[25rem] w-full shadow-md transition-all duration-500 ease-in-out md:h-96 lg:h-[36rem]">
          <Image
            loader={grpahCMSImageLoader}
            alt={post.title}
            className="rounded-t-lg shadow-lg lg:rounded-t-lg"
            layout="fill"
            objectFit="cover"
            quality={65}
            src={post.featuredImage.url}
          />
        </div>

        <div className="px-2 lg:px-6">
          <h2 className="mb-6 cursor-pointer px-4 text-left text-3xl font-semibold transition duration-700 hover:text-indigo-600">
            {post.title}
          </h2>

          <p className="mb-8 px-4 text-left text-lg font-normal text-gray-700">
            {post.description}
          </p>
          <div className="mb-8 flex w-full items-center justify-start px-4 text-center">
            <div className="mb-4 mr-8 flex w-full items-center justify-start lg:mb-0 lg:w-auto">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.author.name}
                height="30px"
                width="30px"
                className="rounded-full align-middle"
                quality={65}
                src={post.author.photo.url}
              />
              <p className="mx-2 inline align-middle text-lg font-medium text-gray-700">
                {post.author.name}
              </p>
              <div className="font-medium text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 inline h-6 w-6 text-indigo-500"
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
                <span className="align-middle">
                  {moment(post.createdAt).format('MMM DD, YYYY')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end px-4">
            <Link href={`/blog/${post.slug}`} passHref>
              <span className="inline-block transform cursor-pointer rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-lg font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1">
                Read More {'>'}
              </span>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  </div>
);

export default PostCard;
