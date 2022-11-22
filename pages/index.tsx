import Head from 'next/head';

// components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-[#fff] h-screen snap-y snap-mandatory overflow-scroll scroll-smooth z-0">
      <Head>
        <title>Drew&rsquo;s Portfolio</title>
      </Head>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};

export default Home;
