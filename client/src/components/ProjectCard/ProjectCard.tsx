import type { Project } from '../../data/projects';
import './ProjectCard.css';

type Props = { project: Project };

function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      <header className="project-head">
        <p className="project-context">{project.context}</p>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-tagline">{project.tagline}</p>
      </header>

      <p className="project-description">{project.description}</p>
      {project.role && (
        <p className="project-role">
          <span>My role</span>
          {project.role}
        </p>
      )}

      <div className="project-features">
        {project.featureGroups.map((group) => (
          <div key={group.title} className="project-feature-group">
            <h4>{group.title}</h4>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <ul className="project-stack" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <footer className="project-foot">
        {project.isPrivate && (
          <span className="project-private">
            <svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
              <rect x="3" y="7" width="10" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            {project.privateNote ?? 'Private project'}
          </span>
        )}
        {project.links?.map((link) => (
          <a key={link.url} className="underline-link" href={link.url} target="_blank" rel="noopener noreferrer">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </footer>
    </article>
  );
}

export default ProjectCard;
