import CertificateCard from '../../components/CertificateCard/CertificateCard';
import CredentialCard from '../../components/CredentialCard/CredentialCard';
import type { Certificate } from '../../data/certificates';
import type { Credential } from '../../data/credentials';
import './Certificates.css';

type Props = {
  certificates: Certificate[];
  credentials: Credential[];
};

function Certificates({ certificates, credentials }: Props) {
  return (
    <section className="content-section" id="certificates">
      <p className="eyebrow">04 / CERTIFICATES</p>
      <h2>Experience &amp; credentials</h2>
      <p className="body-copy">Internships and certifications that shaped how I build software.</p>
      <ol className="cert-list">
        {certificates.map((certificate) => (
          <li key={certificate.id} className="cert-item">
            <CertificateCard certificate={certificate} />
          </li>
        ))}
      </ol>

      {credentials.length > 0 && (
        <div className="cred-block">
          <h3 className="sub-heading">Skill certifications</h3>
          <div className="cred-grid">
            {credentials.map((credential) => (
              <CredentialCard key={credential.id} credential={credential} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
