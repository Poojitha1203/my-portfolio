import CertificateCard from './components/CertificateCard';
import { certificates } from './data/certificates';

const sections = ['About', 'Projects', 'Certificates', 'Contact'];

function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Home">P.</a>
        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section} href={`#${section.toLowerCase()}`}>{section}</a>
          ))}
        </nav>
      </header>

      <section className="hero" id="home">
        <p className="eyebrow">SOFTWARE DEVELOPER · PORTFOLIO</p>
        <h1>Building thoughtful<br />digital experiences.</h1>
        <p className="intro">I’m a developer who enjoys turning ideas into useful, accessible products. This is a space for my work, experience, and the things I’m learning.</p>
        <a className="text-link" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
      </section>

      <section className="content-section" id="about">
        <p className="eyebrow">01 / ABOUT</p>
        <h2>A little about me</h2>
        <p className="body-copy">I care about clear interfaces, dependable software, and the details that make a product feel right. More about my background and interests will be added here.</p>
      </section>

      <section className="content-section" id="projects">
        <p className="eyebrow">02 / SELECTED WORK</p>
        <h2>Projects</h2>
        <p className="body-copy">A few things I’ve built will live here. Check back soon.</p>
      </section>

      <section className="content-section" id="certificates">
        <p className="eyebrow">03 / CERTIFICATES</p>
        <h2>Experience &amp; credentials</h2>
        <p className="body-copy">Internships and certifications that shaped how I build software.</p>
        <div className="cert-list">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </section>

      <footer className="content-section footer" id="contact">
        <p className="eyebrow">04 / CONTACT</p>
        <h2>Let’s make something useful.</h2>
        <p className="body-copy">Add your email and social links here when you’re ready.</p>
      </footer>
    </main>
  );
}

export default App;
