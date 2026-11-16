import ContactLinks from '../../components/ContactLinks/ContactLinks';
import type { ProfileLink } from '../../data/links';
import './Contact.css';

type Props = { links: ProfileLink[] };

function Contact({ links }: Props) {
  return (
    <section className="content-section contact-section" id="contact">
      <p className="eyebrow">05 / CONTACT</p>
      <h2>Let’s make something useful.</h2>
      <p className="body-copy">Email me, or find me on these platforms.</p>
      <ContactLinks links={links} />
    </section>
  );
}

export default Contact;
