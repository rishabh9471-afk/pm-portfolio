import { useEffect } from 'react';
import About from './components/About';
import CaseStudyPage from './components/CaseStudyPage';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Work from './components/Work';
import { useHashRoute } from './hooks';

export default function App() {
  const { hash, caseId } = useHashRoute();

  // Case pages open at the top; section links scroll to their section
  // (also when coming back from a case page, where the section didn't exist yet).
  useEffect(() => {
    if (caseId) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace('#', '');
    if (id) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
    }
  }, [hash, caseId]);

  return (
    <>
      <div className="bg" aria-hidden="true" />
      <Nav onCasePage={Boolean(caseId)} />
      {caseId ? (
        <>
          <CaseStudyPage id={caseId} />
          <Contact />
        </>
      ) : (
        <main>
          <About />
          <Work />
          <Experience />
          <Projects />
          <Contact />
        </main>
      )}
    </>
  );
}
