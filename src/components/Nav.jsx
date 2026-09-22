import { useState } from 'react';
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
    </header>
  );
}
