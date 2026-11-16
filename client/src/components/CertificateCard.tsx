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
  const end = parseDate(certificate.endDate);
  const issued = parseDate(certificate.issuedOn);

  return (
    <article className="cert-card">
      <div className="cert-body">
        <div className="cert-issuer">
          <span className="cert-monogram" aria-hidden="true">{certificate.issuer.charAt(0)}</span>
          <div>
            <p className="cert-issuer-name">{certificate.issuer}</p>
            <p className="cert-issuer-type">{certificate.issuerType} · Internship</p>
          </div>
        </div>

        <h3 className="cert-title">{certificate.title}</h3>

        <dl className="cert-meta">
          <div>
            <dt>Duration</dt>
            <dd>
              <time dateTime={certificate.startDate}>{monthYear.format(start)}</time>
              {' – '}
              <time dateTime={certificate.endDate}>{monthYear.format(end)}</time>
              <span className="cert-pill">{durationLabel(start, end)}</span>
            </dd>
          </div>
          <div>
            <dt>Issued</dt>
            <dd><time dateTime={certificate.issuedOn}>{fullDate.format(issued)}</time></dd>
          </div>
        </dl>

        <p className="cert-summary">{certificate.summary}</p>

        <ul className="cert-skills" aria-label="Skills">
          {certificate.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>

        <a className="cert-link" href={certificate.documentUrl} target="_blank" rel="noopener noreferrer">
          View certificate <span aria-hidden="true">↗</span>
        </a>
      </div>

      <a
        className="cert-preview"
        href={certificate.documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${certificate.issuer} certificate (PDF)`}
      >
        <img
          src={certificate.previewUrl}
          alt={`${certificate.issuer} internship completion certificate`}
          loading="lazy"
          width={695}
          height={900}
        />
        <span className="cert-preview-tag">PDF</span>
      </a>
    </article>
  );
}

export default CertificateCard;
