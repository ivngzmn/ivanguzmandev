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
    <div className="relative bg-zinc-900">
      <div className="relative mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="py-20 text-left lg:py-44">
            <h2
              className="text-6xl font-semibold tracking-normal text-white sm:text-4xl lg:text-8xl"
              id="blog"
            >
              Latest Posts
            </h2>
            <p className="mt-5 text-3xl font-light tracking-normal text-slate-50 lg:text-4xl">
              Thoughts on what I'm learning, what I'm thinking, and what I'm
              doing.
            </p>
          </div>
        </div>
        <section className="mb-20 pb-20">
          <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`} key={index}>
                <a>
                  <div
                    key={index}
                    className="group flex h-[45rem] flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl"
                  >
                    <div className="relative h-[25rem] w-full flex-shrink-0 overflow-hidden object-cover duration-500 ease-in-out hover:h-[26rem]">
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

                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="">
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
                        <p className="mt-2 items-start text-xl font-semibold text-gray-900 hover:text-indigo-700">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </p>
                        <p className="mt-2 text-base text-gray-500">
                          {post.description}
                        </p>
                      </div>
                      <div className="justify-left mt-4 mr-8 hidden items-center md:flex lg:mb-0 lg:w-auto">
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
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostWidget;
