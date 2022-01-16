import React from 'react';
import Head from 'next/head';
import NextImage from 'next/image';
import { FeaturedPosts } from '../sections/index';
import {
  Navbar,
  PostCard,
  Header,
  Categories,
  PostWidget,
  Footer
} from '../components';

import { getPosts } from '../services';

export default function BlogPosts({ posts }) {
  return (
    <>
      <Head>
        <title>Blog | Ivan Guzman</title>
      </Head>

      <Navbar />
      <Header />
      <div className="bg-zinc-900 h-full">
        <div className="relative max-w-7xl mx-auto px-4 pb-8">
          <FeaturedPosts />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:px-4">
            <div className="col-span-1 lg:col-span-9">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-3 mb-8">
              <div className="relative top-8 lg:sticky">
                <PostWidget categories={undefined} slug={undefined} />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// Fetch data at build time

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  };
}
