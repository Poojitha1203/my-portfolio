import { profile } from '../../data/profile';
import './Hero.css';

type Props = {
  internshipCount: number;
  certificationCount: number;
  projectCount: number;
};

function Hero({ internshipCount, certificationCount, projectCount }: Props) {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <p className="hero-hello">
          <span className="status-dot" aria-hidden="true" />
          Hi, I’m {profile.name}
        </p>
        <h1>
          I build apps people <span className="accent-text">enjoy using.</span>
        </h1>
        <p className="hero-intro">
          I work across the <strong>frontend and backend</strong> with React, TypeScript, Node.js and Firebase.
          Recently I helped build an internal canteen app with <strong>Razorpay payments</strong>, and I’m a
          <strong> certified Stripe developer</strong>.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">View my work <span aria-hidden="true">→</span></a>
          <a className="btn btn-ghost" href={profile.resumeUrl} download="Poojitha-B-Resume.pdf">
            Download resume <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <aside className="hero-card" aria-label="Profile summary">
        <div className="hero-avatar">
          {profile.photoUrl ? (
            <img src={profile.photoUrl} alt={profile.name} width={92} height={92} />
          ) : (
            <span aria-hidden="true">{profile.initials}</span>
          )}
        </div>
        <p className="hero-card-name">{profile.name}</p>
        <p className="hero-card-role">{profile.role} · {profile.education}</p>
        <dl className="hero-stats">
          <div>
            <dt>{internshipCount === 1 ? 'Internship' : 'Internships'}</dt>
            <dd>{internshipCount}</dd>
          </div>
          <div>
            <dt>{certificationCount === 1 ? 'Certification' : 'Certifications'}</dt>
            <dd>{certificationCount}</dd>
          </div>
          <div>
            <dt>{projectCount === 1 ? 'Project' : 'Projects'}</dt>
            <dd>{projectCount}</dd>
          </div>
        </dl>
        {profile.openToWork && (
          <p className="hero-card-foot">
            <span className="status-dot" aria-hidden="true" />
            Open to opportunities
          </p>
        )}
      </aside>
    </section>
  );
}

export default Hero;
