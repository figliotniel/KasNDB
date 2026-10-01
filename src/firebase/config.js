import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Konfigurasi Firebase untuk proyek KasNDB
// Ini adalah public client config, aman untuk di-commit
const firebaseConfig = {
  apiKey: 'AIzaSyA7C5UUFIf7pPpatI6YURsnJr-bZ0VVMt4',
  authDomain: 'kasndb-25448.firebaseapp.com',
  projectId: 'kasndb-25448',
  storageBucket: 'kasndb-25448.firebasestorage.app',
  messagingSenderId: '574454150358',
  appId: '1:574454150358:web:f7ef160ca551f3362c0577',
  measurementId: 'G-T75ELH2NS2'
}

// Inisialisasi Firebase app
const app = initializeApp(firebaseConfig)

// Inisialisasi layanan Firebase yang digunakan
const auth = getAuth(app)
const db = getFirestore(app)

export { app, auth, db }
