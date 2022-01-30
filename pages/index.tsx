import { Navbar, HeadContainer, Hero, Footer } from '../components';
import RecentPosts from 'components/RecentPosts';

function Home() {
  return (
    <>
      <HeadContainer />
      <header className="absolute z-20 w-full">
        <Navbar />
      </header>
      <section className="hero">
        <Hero />
      </section>
      <section>
        <RecentPosts categories={undefined} slug={undefined} />
      </section>
      <section className="my-projects"></section>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
