import { Navbar, Footer } from "../components";
import Head from "next/head";
import Image from "next/image";

function Uses() {
  return (
    <>
      <Head>
        <title>Uses</title>
      </Head>

      <Navbar />
      <Image
        alt={`Decked out computer and desk`}
        src={`https://res.cloudinary.com/dbr8xxx2m/image/upload/v1627045601/Personal-Website/desk_qnmcyd.jpg`}
        width={2500}
        height={1500}
        priority
      />

      <Footer />
    </>
  );
}

export default Uses;
