import CertificateCard from './components/CertificateCard/CertificateCard';
import ContactLinks from './components/ContactLinks/ContactLinks';
import CredentialCard from './components/CredentialCard/CredentialCard';
import EducationCard from './components/EducationCard/EducationCard';
import ProjectCard from './components/ProjectCard/ProjectCard';
import { certificates as localCertificates, type Certificate } from './data/certificates';
import { credentials as localCredentials, type Credential } from './data/credentials';
import { education as localEducation, type Education } from './data/education';
import { links as localLinks, type ProfileLink } from './data/links';
import { projects as localProjects, type Project } from './data/projects';
import { useCollection } from './hooks/useCollection';

const sections = ['About', 'Education', 'Projects', 'Certificates', 'Contact'];

function App() {
  const certificates = useCollection<Certificate>('certificates', localCertificates);
  const credentials = useCollection<Credential>('credentials', localCredentials);
  const education = useCollection<Education>('education', localEducation);
  const links = useCollection<ProfileLink>('links', localLinks);
  const projects = useCollection<Project>('projects', localProjects);

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

      <section className="content-section" id="education">
        <p className="eyebrow">02 / EDUCATION</p>
        <h2>Where I studied</h2>
        <div className="edu-list">
          {education.map((item) => (
            <EducationCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2>Projects</h2>
        <p className="body-copy">Things I’ve built, from real products used every day to side projects.</p>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section" id="certificates">
        <p className="eyebrow">04 / CERTIFICATES</p>
        <h2>Experience &amp; credentials</h2>
        <p className="body-copy">Internships and certifications that shaped how I build software.</p>
        <ol className="cert-list">
          {certificates.map((certificate) => (
            <li key={certificate.id} className="cert-item">
              <CertificateCard certificate={certificate} />
            </li>
          ))}
        </ol>

        {credentials.length > 0 && (
          <div className="cred-block">
            <h3 className="sub-heading">Skill certifications</h3>
            <div className="cred-grid">
              {credentials.map((credential) => (
                <CredentialCard key={credential.id} credential={credential} />
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className="content-section footer" id="contact">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Let’s make something useful.</h2>
        <p className="body-copy">Open to opportunities and collaborations. Email me, or find me on these platforms.</p>
        <ContactLinks links={links} />
      </footer>
    </main>
  );
}

export default App;
