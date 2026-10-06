import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Konfigurasi Firebase untuk proyek KasNDB
// Gunakan env vars jika tersedia, fallback ke default public client config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyA7C5UUFIf7pPpatI6YURsnJr-bZ0VVMt4',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'kasndb-25448.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'kasndb-25448',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'kasndb-25448.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '574454150358',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:574454150358:web:f7ef160ca551f3362c0577',
  measurementId: 'G-T75ELH2NS2'
}

// Inisialisasi Firebase app
const app = initializeApp(firebaseConfig)

// Inisialisasi layanan Firebase yang digunakan
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
