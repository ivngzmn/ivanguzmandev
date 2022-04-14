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
        <title>Blog Catagories | Ivan Guzman</title>
      </Head>
      <Navbar />
      <Header />
      <div className="h-full bg-zinc-900">
        '
        <div className="container mx-auto max-w-[100rem] px-4 pb-8">
          <div className="absolute lg:px-4">
            <Link href={`/blog/`} passHref>
              <a className="flex items-center space-x-1 text-lg text-gray-100 transition duration-300 ease-in-out hover:text-gray-500">
                <HiArrowNarrowLeft className="h-5 w-5" />
                <span>Back to all posts</span>
              </a>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:px-4">
            <div className="col-span-1 lg:col-span-8">
              {posts.map((post, index) => (
                <PostCard key={index} post={post.node} />
              ))}
            </div>
            <div className="col-span-1 mt-10 lg:col-span-4">
              <div className="relative top-8 lg:sticky">
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
