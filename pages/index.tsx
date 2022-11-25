import Head from 'next/head';

// components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';

const Home = () => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-[#fff] h-screen snap-y snap-mandatory 
                overflow-y-scroll overflow-x-hidden scroll-smooth z-0
                scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
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
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* Contact Me */}
      <section id="contacts" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;
