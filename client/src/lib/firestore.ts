import type { Firestore } from 'firebase/firestore/lite';

// Firebase web config is public by design; access is controlled by firestore.rules.
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId);

let dbPromise: Promise<Firestore> | undefined;

// Firebase is loaded only when it is configured, so it never slows down the first paint.
function getDb() {
  dbPromise ??= Promise.all([import('firebase/app'), import('firebase/firestore/lite')]).then(
    ([{ initializeApp }, { getFirestore }]) => getFirestore(initializeApp(config)),
  );
  return dbPromise;
}

/** Reads a collection ordered by its `order` field. Returns null when Firebase isn't set up. */
export async function loadCollection<T>(name: string): Promise<T[] | null> {
  if (!isFirebaseConfigured) return null;
  const db = await getDb();
  const { collection, getDocs, orderBy, query } = await import('firebase/firestore/lite');
  const snapshot = await getDocs(query(collection(db, name), orderBy('order')));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as T);
}
