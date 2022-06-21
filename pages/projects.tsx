import { Navbar, MyProjects, Skills, Footer } from '../components';
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
    </>
  );
}

export default Projects;
