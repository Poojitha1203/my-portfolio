import type { Certificate } from '../data/certificates';

const monthYear = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });
const fullDate = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' });

function parseDate(iso: string) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function durationLabel(start: Date, end: Date) {
  const weeks = Math.round((end.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000));
  return weeks >= 8 ? `${Math.round(weeks / 4.345)} months` : `${weeks} weeks`;
}

type Props = { certificate: Certificate };

function CertificateCard({ certificate }: Props) {
  const start = parseDate(certificate.startDate);
  const end = certificate.endDate ? parseDate(certificate.endDate) : undefined;
  const { documentUrl, previewUrl, accentColors, issuedOn } = certificate;
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
            <dt>{end || certificate.durationNote ? 'Duration' : 'Started'}</dt>
            <dd>
              <time dateTime={certificate.startDate}>{monthYear.format(start)}</time>
              {end && (
                <>
                  {' – '}
                  <time dateTime={certificate.endDate}>{monthYear.format(end)}</time>
                </>
              )}
              {(end || certificate.durationNote) && (
                <span className="cert-pill">{end ? durationLabel(start, end) : certificate.durationNote}</span>
              )}
            </dd>
          </div>
          {issuedOn && (
            <div>
              <dt>Issued</dt>
              <dd><time dateTime={issuedOn}>{fullDate.format(parseDate(issuedOn))}</time></dd>
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
          <a className="cert-link" href={documentUrl} target="_blank" rel="noopener noreferrer">
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
