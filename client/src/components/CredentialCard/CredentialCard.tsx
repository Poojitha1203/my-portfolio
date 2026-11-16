import type { Credential } from '../../data/credentials';
import './CredentialCard.css';

const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

function formatIssued(iso: string) {
  const [year, month] = iso.split('-').map(Number);
  return monthYear.format(new Date(year, month - 1, 1));
}

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
      {credential.expiresOn && (
        <span className="cred-expiry">
          Valid until <time dateTime={credential.expiresOn}>{formatIssued(credential.expiresOn)}</time>
        </span>
      )}
      <span className="cred-bottom">
        <span className="cred-level">
          {credential.level}
          {credential.issuedOn && (
            <>
              {' · '}
              <time dateTime={credential.issuedOn}>{formatIssued(credential.issuedOn)}</time>
            </>
          )}
        </span>
        <span className="cred-arrow" aria-hidden="true">↗</span>
      </span>
    </a>
  );
}

export default CredentialCard;
