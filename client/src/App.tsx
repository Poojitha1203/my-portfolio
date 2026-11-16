import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { certificates as localCertificates, type Certificate } from './data/certificates';
import { credentials as localCredentials, type Credential } from './data/credentials';
import { education as localEducation, type Education as EducationItem } from './data/education';
import { links as localLinks, type ProfileLink } from './data/links';
import { projects as localProjects, type Project } from './data/projects';
import { useCollection } from './hooks/useCollection';
import About from './sections/About/About';
import Certificates from './sections/Certificates/Certificates';
import Contact from './sections/Contact/Contact';
import Education from './sections/Education/Education';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';

function App() {
  const certificates = useCollection<Certificate>('certificates', localCertificates);
  const credentials = useCollection<Credential>('credentials', localCredentials);
  const education = useCollection<EducationItem>('education', localEducation);
  const links = useCollection<ProfileLink>('links', localLinks);
  const projects = useCollection<Project>('projects', localProjects);

  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero
          internshipCount={certificates.length}
          certificationCount={credentials.length}
          projectCount={projects.length}
        />
        <About />
        <Education items={education} />
        <Projects projects={projects} />
        <Certificates certificates={certificates} credentials={credentials} />
        <Contact links={links} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
