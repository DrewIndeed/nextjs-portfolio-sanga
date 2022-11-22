import Head from 'next/head';

// components
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-[#fff] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Drew&rsquo;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
