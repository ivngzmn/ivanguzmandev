import { Navbar, ContactMe, Footer, BackToTopBtn } from '../components';
import Head from 'next/head';

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Ivan Guzman</title>
      </Head>

      <Navbar />
      <ContactMe />
      <Footer />
      <BackToTopBtn />
    </>
  );
}

export default Contact;
