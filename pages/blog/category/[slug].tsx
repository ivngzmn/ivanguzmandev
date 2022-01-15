import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { getCategories, getCategoryPost } from '../../../services';
import {
  PostCard,
  Categories,
  Loader,
  Navbar,
  Footer,
  Header
} from '../../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Head>
        <title>Blog | Categories</title>
      </Head>
      <Navbar />
      <Header />
      <div className="bg-slate-900 h-full">
        '
        <div className="container max-w-7xl mx-auto px-4 pb-8">
          <div className="absolute lg:px-4">
            <Link href={`/blog/`} passHref>
              <a className="text-lg text-gray-100 hover:text-gray-500 flex items-center space-x-1 transition duration-300 ease-in-out">
                <HiArrowNarrowLeft className="w-5 h-5" />
                <span>Back to all posts</span>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:px-4">
            <div className="col-span-1 lg:col-span-8">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 lg:col-span-4 mt-10">
              <div className="relative lg:sticky top-8">
                <Categories />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts }
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true
  };
}
