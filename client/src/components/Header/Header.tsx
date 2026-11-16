import { navSections, profile } from '../../data/profile';
import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label={`${profile.name}, home`}>
        <span className="wordmark-badge" aria-hidden="true">{profile.initials}</span>
        <span className="wordmark-name">{profile.name}</span>
      </a>
      <div className="header-right">
        <nav className="site-nav" aria-label="Main navigation">
          {navSections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`}>{section}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let’s talk</a>
      </div>
    </header>
  );
}

export default Header;
