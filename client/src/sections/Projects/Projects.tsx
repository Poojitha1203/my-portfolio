import ProjectCard from '../../components/ProjectCard/ProjectCard';
import type { Project } from '../../data/projects';
import './Projects.css';

type Props = { projects: Project[] };

function Projects({ projects }: Props) {
  return (
    <section className="content-section" id="projects">
      <p className="eyebrow">03 / SELECTED WORK</p>
      <h2>Projects</h2>
      <p className="body-copy">Work and personal projects I’ve built.</p>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
