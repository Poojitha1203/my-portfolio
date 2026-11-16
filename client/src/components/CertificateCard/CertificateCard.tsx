import type { Certificate } from '../../data/certificates';
import { durationLabel, formatFullDate, formatMonthYear } from '../../lib/dates';
import './CertificateCard.css';

type Props = { certificate: Certificate };

function CertificateCard({ certificate }: Props) {
  const { startDate, endDate, documentUrl, previewUrl, accentColors, issuedOn } = certificate;
  const monogramStyle = accentColors
    ? { background: `linear-gradient(135deg, ${accentColors[0]}, ${accentColors[1]})` }
    : undefined;

  return (
    <article className={previewUrl ? 'cert-card' : 'cert-card cert-card--plain'}>
      <div className="cert-body">
        <div className="cert-issuer">
          <span className="cert-monogram" style={monogramStyle} aria-hidden="true">
            {certificate.issuer.charAt(0)}
          </span>
          <div>
            <p className="cert-issuer-name">{certificate.issuer}</p>
            <p className="cert-issuer-type">{certificate.issuerType} · Internship</p>
          </div>
        </div>

        <h3 className="cert-title">{certificate.title}</h3>

        <dl className="cert-meta">
          <div>
            <dt>{endDate || certificate.durationNote ? 'Duration' : 'Started'}</dt>
            <dd>
              <time dateTime={startDate}>{formatMonthYear(startDate)}</time>
              {endDate && (
                <>
                  {' – '}
                  <time dateTime={endDate}>{formatMonthYear(endDate)}</time>
                </>
              )}
              {(endDate || certificate.durationNote) && (
                <span className="cert-pill">{endDate ? durationLabel(startDate, endDate) : certificate.durationNote}</span>
              )}
            </dd>
          </div>
          {issuedOn && (
            <div>
              <dt>Issued</dt>
              <dd><time dateTime={issuedOn}>{formatFullDate(issuedOn)}</time></dd>
            </div>
          )}
        </dl>

        <p className="cert-summary">{certificate.summary}</p>

        <ul className="cert-skills" aria-label="Skills">
          {certificate.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        {documentUrl && (
          <a className="underline-link" href={documentUrl} target="_blank" rel="noopener noreferrer">
            View certificate <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>

      {previewUrl && (
        <a
          className="cert-preview"
          href={documentUrl ?? previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${certificate.issuer} certificate`}
        >
          <img
            src={previewUrl}
            alt={`${certificate.issuer} internship completion certificate`}
            loading="lazy"
            width={695}
            height={900}
          />
          {documentUrl?.endsWith('.pdf') && <span className="cert-preview-tag">PDF</span>}
        </a>
      )}
    </article>
  );
}

export default CertificateCard;
