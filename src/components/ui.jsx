import { useInView } from '../hooks';

/** Fades/slides children in when scrolled into view. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** A button-styled link.
 *  Empty href → hidden on the live site; shown as a dashed "add link" hint in `npm run dev`. */
export function LinkButton({ href, children, variant = 'ghost', download, newTab = true }) {
  if (!href) {
    const isDev = typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV;
    if (!isDev) return null;
    return (
      <span className="btn btn-missing" title="Add this URL in src/config.js">
        {children} <small>· add link in config.js</small>
      </span>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={`btn btn-${variant}`}
      href={href}
      download={download}
      target={external && newTab ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export function SectionHeader({ eyebrow, title, intro }) {
  return (
    <Reveal className="section-header">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
