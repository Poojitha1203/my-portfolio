import type { Credential } from '../data/credentials';

type Props = { credential: Credential };

function CredentialCard({ credential }: Props) {
  return (
    <a className="cred-card" href={credential.url} target="_blank" rel="noopener noreferrer">
      <span className="cred-top">
        <span className="cred-issuer">{credential.issuer}</span>
        {credential.verified && (
          <span className="cred-verified">
            <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Verified
          </span>
        )}
      </span>
      <span className="cred-name">{credential.name}</span>
      <span className="cred-bottom">
        <span className="cred-level">{credential.level}</span>
        <span className="cred-arrow" aria-hidden="true">↗</span>
      </span>
    </a>
  );
}

export default CredentialCard;
