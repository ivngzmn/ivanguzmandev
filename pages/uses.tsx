import { Navbar, Setup, Footer } from '../components';
import Head from 'next/head';
import Image from 'next/image';

function Uses() {
  return (
    <>
      <Head>
        <title>Uses | Ivan Guzman</title>
      </Head>

      <Navbar />
      <section>
        <Setup />
      </section>

      <Footer />
    </>
  );
}

export default Uses;
