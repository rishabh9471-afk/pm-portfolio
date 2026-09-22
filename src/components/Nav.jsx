import { useEffect, useState } from 'react';
import { profile } from '../config';
import { useActiveSection } from '../hooks';
import { Close, Menu } from './Icons';

const links = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];
const ids = links.map((l) => l.id);

export default function Nav({ onCasePage }) {
  const observed = useActiveSection(ids, onCasePage);
  const active = onCasePage ? 'work' : observed;
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reading progress: 0 at the top of the page, 1 at the bottom.
  useEffect(() => {
    let raf;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(h.scrollTop / max, 1) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [onCasePage]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#about" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">{profile.name}</span>
        </a>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Sections">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </header>
  );
}
