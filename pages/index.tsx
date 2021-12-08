import { useRouter } from 'next/router';
import { Navbar, Hero, MyProjectCards, Footer } from '../components';

import RecentPosts from 'components/RecentPosts';
import Head from 'next/head';

function Home(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Ivan Guzman – Software Engineer',
    description: `Full Stack Software Engineer, JavaScript enthusiast, and father.`,
    image: '/static/images/webBanner.png',
    type: 'website',
    ...customMeta
  };
  return (
    <>
      <Head>
        <title>Home</title>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://ivanguzman.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://ivanguzman.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Ivan Guzman" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@zaku_dev" />
      </Head>

      <Navbar />

      <section className="hero">
        <Hero />
      </section>
      <RecentPosts categories={undefined} slug={undefined} />
      <section className="my-projects">
        <MyProjectCards />
      </section>
      <Footer />
    </>
  );
}

export default Home;
