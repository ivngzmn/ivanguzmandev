import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { RecentPostsCard } from '../components';
import { getRecentPosts } from '../services';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

const FeaturedPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getRecentPosts().then((result) => {
      setRecentPosts(result);
      setDataLoaded(true);
    });
  }, []);

  const customLeftArrow = (
    <div className="arrow-btn absolute left-0 cursor-pointer rounded-full bg-indigo-600 py-3 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-full text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
    </div>
  );

  const customRightArrow = (
    <div className="arrow-btn absolute right-0 cursor-pointer rounded-full bg-indigo-600 py-3 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-full text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  );

  return (
    <div className="bg-zinc-900">
      <div className="relative mx-auto max-w-[90rem] py-8 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="relative">
          <div className="py-20 text-left lg:py-44">
            <h2
              className="text-6xl font-semibold tracking-tight lg:text-8xl"
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
      </div>
      <div className="mx-auto max-w-[100rem] pb-20 lg:pb-60">
        <Carousel
          infinite
          swipeable={true}
          draggable={false}
          autoPlay={true}
          autoPlaySpeed={6000}
          transitionDuration={800}
          customLeftArrow={customLeftArrow}
          customRightArrow={customRightArrow}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          showDots={true}
          responsive={responsive}
          itemClass="px-8"
        >
          {dataLoaded &&
            recentPosts.map((post, index) => (
              <RecentPostsCard key={index} post={post} index={undefined} />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedPosts;
