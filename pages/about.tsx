import { Navbar, AboutMe, Bio, Footer } from '../components';
import Head from 'next/head';

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />
      <AboutMe />
      <Bio />
      <Footer />
    </>
  );
}

export default About;
