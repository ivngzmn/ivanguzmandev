import React from 'react';
import { useRouter } from 'next/router';
import {
  PostDetail,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
  Navbar,
  Footer,
  Header
} from '../../components';
import { getPosts, getPostDetails } from '../../services';
import { AdjacentPosts } from '../../sections';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="h-full bg-zinc-900">
        <div className="mx-auto max-w-[100rem] px-4 pb-8">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:px-4">
            <div className="col-span-1 mt-10 lg:col-span-9">
              <PostDetail post={post} />
              <Author author={post.author} />
              <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
              <CommentsForm slug={post.slug} />
              <Comments slug={post.slug} />
            </div>
            <div className="col-span-1 lg:col-span-3">
              <div className="relative top-8 lg:sticky">
                <PostWidget
                  slug={post.slug}
                  categories={post.categories.map(
                    (category: any) => category.slug
                  )}
                />
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
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data
    }
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true
  };
}
