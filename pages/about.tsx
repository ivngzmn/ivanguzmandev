import { HeadContainer, Navbar, AboutMe, Bio, Footer } from '../components';
import Head from 'next/head';

function About() {
  return (
    <>
      <HeadContainer
        title={`About | Ivan Guzman`}
        description={`My journey to software engineering.`}
      />
      <header>
        <Navbar />
      </header>
      <section>
        <AboutMe />
      </section>
      <section>
        <Bio />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default About;
