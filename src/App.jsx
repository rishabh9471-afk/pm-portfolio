import Analytics from './components/Analytics';
import Background from './components/Background';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import { Certifications, Skills } from './components/Skills';

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <Analytics />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
