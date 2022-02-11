import {
  Navbar,
  HeadContainer,
  Hero,
  Footer,
  RecentProjects
} from '../components';
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
      <section className="my-projects">
        <RecentProjects />
      </section>
      <section className="posts">
        <RecentPosts categories={undefined} slug={undefined} />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default Home;
