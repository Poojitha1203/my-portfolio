import { skillGroups } from '../../data/profile';
import './About.css';

function About() {
  return (
    <section className="content-section" id="about">
      <p className="eyebrow">01 / ABOUT</p>
      <h2>A little about me</h2>
      <div className="about-grid">
        <div>
          <p className="body-copy">
            I enjoy working on the whole product: clean interfaces in React, the APIs and Cloud Functions behind
            them, and getting payments right. I care about clear code and the small details that make an app feel
            good to use.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
