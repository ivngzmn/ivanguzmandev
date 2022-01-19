import { Navbar, HeadContainer, Hero, Footer } from '../components';
import RecentPosts from 'components/RecentPosts';

function Home() {
  return (
    <>
      <HeadContainer />
      <header className="w-full absolute z-20">
        <Navbar />
      </header>
      <section className="hero">
        <Hero />
      </section>

      <RecentPosts categories={undefined} slug={undefined} />
      <section className="my-projects"></section>
      <Footer />
    </>
  );
}

export default Home;
