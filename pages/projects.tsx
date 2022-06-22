import { Navbar, MyProjects, Footer, BackToTopBtn } from '../components';
import Head from 'next/head';

function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Ivan Guzman</title>
      </Head>
      <Navbar />
      <MyProjects />
      <Footer />
      <BackToTopBtn />
    </>
  );
}

export default Projects;
