import EducationCard from '../../components/EducationCard/EducationCard';
import type { Education as EducationItem } from '../../data/education';
import './Education.css';

type Props = { items: EducationItem[] };

function Education({ items }: Props) {
  return (
    <section className="content-section" id="education">
      <p className="eyebrow">02 / EDUCATION</p>
      <h2>Where I studied</h2>
      <div className="edu-list">
        {items.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default Education;
