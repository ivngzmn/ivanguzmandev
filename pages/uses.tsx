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
      <div className="relative max-w-7xl mx-auto px-4 mb-8">
        <Setup />
      </div>

      <Footer />
    </>
  );
}

export default Uses;
