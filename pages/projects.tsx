import { Navbar, MyProjects, Footer } from '../components';
import Head from 'next/head';

function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Navbar />
      <MyProjects />

      <Footer />
    </>
  );
}

export default Projects;
