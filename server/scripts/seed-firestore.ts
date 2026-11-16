

import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { certificates } from '../../client/src/data/certificates.ts';
import { credentials } from '../../client/src/data/credentials.ts';
import { education } from '../../client/src/data/education.ts';
import { links } from '../../client/src/data/links.ts';
import { projects } from '../../client/src/data/projects.ts';

const collections: Record<string, { id: string }[]> = { certificates, credentials, education, links, projects };

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error('GOOGLE_APPLICATION_CREDENTIALS is not set. Add it to server/.env (see README).');
  process.exit(1);
}

initializeApp({ credential: applicationDefault() });
const db = getFirestore();

for (const [name, items] of Object.entries(collections)) {
  const batch = db.batch();

  const existing = await db.collection(name).get();
  const keep = new Set(items.map((item) => item.id));
  existing.docs.filter((doc) => !keep.has(doc.id)).forEach((doc) => batch.delete(doc.ref));

  items.forEach(({ id, ...data }, index) => {
    batch.set(db.collection(name).doc(id), { ...data, order: index });
  });

  await batch.commit();
  console.log(`✓ ${name}: ${items.length} documents`);
}

console.log('Firestore is up to date.');
