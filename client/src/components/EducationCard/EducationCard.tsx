import type { Education } from '../../data/education';
import './EducationCard.css';

type Props = { item: Education };

function EducationCard({ item }: Props) {
  return (
    <article className="edu-card">
      <span className="edu-mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9.5 12 5l10 4.5-10 4.5L2 9.5Z" />
          <path d="M6 11.5v4.25c0 1.25 2.7 2.75 6 2.75s6-1.5 6-2.75V11.5" />
          <path d="M22 9.5v5" />
        </svg>
      </span>

      <div className="edu-body">
        <p className="edu-years">
          <time dateTime={String(item.startYear)}>{item.startYear}</time>
          {' – '}
          <time dateTime={String(item.endYear)}>{item.endYear}</time>
        </p>
        <h3 className="edu-degree">
          {item.degree}, {item.field}
        </h3>
        <p className="edu-institution">{item.institution}</p>
        <p className="edu-location">{item.location}</p>
        {item.note && <p className="edu-note">{item.note}</p>}
      </div>
    </article>
  );
}

export default EducationCard;
