import { profile } from '../../data/profile';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>Built with React, TypeScript &amp; Firebase</span>
    </footer>
  );
}

export default Footer;
