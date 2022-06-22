import React from 'react';
import { FeaturedPosts } from '../sections/index';
import {
  Navbar,
  PostCard,
  Header,
  Categories,
  PostWidget,
  Footer,
  HeadContainer,
  BackToTopBtn
} from '../components';

import { getPosts } from '../services';

export default function BlogPosts({ posts }) {
  return (
    <>
      <HeadContainer
        title={`Blog | Ivan Guzman`}
        description={`Thoughts on what I'm learning, what I'm thinking, and what I'm doing.`}
      />
      <Navbar />
      <Header />
      <div className="h-full bg-zinc-900">
        <div className="relative mx-auto max-w-[100rem] px-4 pb-8">
          <FeaturedPosts />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:px-4">
            <div className="col-span-1 lg:col-span-9">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 mb-8 lg:col-span-3">
              <div className="relative top-8 lg:sticky">
                <PostWidget categories={undefined} slug={undefined} />
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </>
  );
}

// Fetch data at build time

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    revalidate: 60
  };
}
