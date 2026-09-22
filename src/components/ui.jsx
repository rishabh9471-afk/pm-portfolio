import { useInView } from '../hooks';

/** Gentle fade-in on scroll. */
export function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Button-styled link; renders nothing when href is empty. */
export function LinkButton({ href, children, variant = 'ghost', download }) {
  if (!href) return null;
  const external = /^https?:\/\//.test(href);
  return (
    <a
      className={`btn btn-${variant}`}
      href={href}
      download={download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export function SectionHeader({ eyebrow, title, intro }) {
  return (
    <Reveal className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </Reveal>
  );
}
