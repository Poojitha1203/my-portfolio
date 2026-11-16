import type { ProfileLink } from '../../data/links';
import './ContactLinks.css';

const marks: Record<ProfileLink['kind'], string> = {
  email: '@',
  linkedin: 'in',
  github: 'GH',
  leetcode: 'LC',
  hackerrank: 'HR',
};

type Props = { links: ProfileLink[] };

function ContactLinks({ links }: Props) {
  const email = links.find((link) => link.kind === 'email');
  const profiles = links.filter((link) => link.kind !== 'email');

  return (
    <div className="contact">
      {email && (
        <a className="contact-email" href={email.url}>
          <span>{email.handle}</span>
          <span className="contact-email-arrow" aria-hidden="true">→</span>
        </a>
      )}

      <ul className="profile-grid" aria-label="Profiles">
        {profiles.map((link) => (
          <li key={link.id}>
            <a className="profile-card" href={link.url} target="_blank" rel="noopener noreferrer">
              <span className={`profile-mark profile-mark--${link.kind}`} aria-hidden="true">
                {marks[link.kind]}
              </span>
              <span className="profile-text">
                <span className="profile-label">{link.label}</span>
                <span className="profile-handle">{link.handle}</span>
                {link.note && <span className="profile-note">{link.note}</span>}
              </span>
              <span className="profile-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactLinks;
