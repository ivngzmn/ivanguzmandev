import { Navbar, MyProjects, Footer } from "../components";
import Head from "next/head";

function Links() {
  return (
    <>
      <Head>
        <title>Links</title>
      </Head>

      <Navbar />
      <MyProjects />

      <Footer />
    </>
  );
}

export default Links;
