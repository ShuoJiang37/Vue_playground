import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAflKHppGZgiRkUkLUT7dwfKYp8y-wNG6s',
  authDomain: 'vue-http-demo-21dd2.firebaseapp.com',
  databaseURL: 'https://vue-http-demo-21dd2-default-rtdb.firebaseio.com',
  projectId: 'vue-http-demo-21dd2',
  storageBucket: 'vue-http-demo-21dd2.firebasestorage.app',
  messagingSenderId: '737534045566',
  appId: '1:737534045566:web:a73d1569ebc14a34a0172f',
  measurementId: 'G-B7Z7Q8V9DD',
};

// initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// get database
export const db = getFirestore(firebaseApp);

export const test = collection(db, 'tests');
