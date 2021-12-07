import React from 'react';
import Head from 'next/head';
import NextImage from 'next/image';
import ProfilePic from '../public/images/profile-photo.jpg';
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
        <title>Blog</title>
      </Head>

      <Navbar />
      <Header />
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget categories={undefined} slug={undefined} />
              <Categories />
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
