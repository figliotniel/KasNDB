import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  serverTimestamp
} from 'firebase/firestore'
import { initializeApp, deleteApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signOut
} from 'firebase/auth'
import { db, app } from '@/firebase/config.js'

// Store untuk manajemen data warga perumahan
export const useWargaStore = defineStore('warga', () => {
  // State
  const wargas = ref([])
  const loading = ref(false)
  const error = ref(null)

  /**
   * Ambil semua data warga dari Firestore, diurutkan berdasarkan nomorRumah
   */
  async function fetchAll() {
    loading.value = true
    error.value = null
    try {
      const q = query(collection(db, 'warga'), orderBy('nomorRumah'))
      const snapshot = await getDocs(q)
      wargas.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    } catch (err) {
      error.value = 'Gagal memuat data warga: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Tambah warga baru:
   * 1. Buat akun Firebase Auth untuk warga via secondary app (tanpa mengganggu sesi admin)
   * 2. Simpan data warga ke Firestore
   *
   * @param {Object} data - Data warga (nomorRumah, namaDepan, namaLengkap, noHp)
   */
  async function add(data) {
    loading.value = true
    error.value = null
    try {
      const cleanNomor = (data.nomorRumah || '').trim().replace(/\s+/g, '').toUpperCase()
      const cleanNamaDepan = (data.namaDepan || '').trim()

      if (!cleanNomor) {
        throw { code: 'local/invalid', message: 'Nomor rumah wajib diisi.' }
      }
      if (!cleanNamaDepan) {
        throw { code: 'local/invalid', message: 'Nama depan wajib diisi.' }
      }
      if (cleanNamaDepan.length < 6) {
        throw { code: 'auth/weak-password', message: 'Nama depan minimal 6 karakter untuk digunakan sebagai kata sandi.' }
      }

      // Cek apakah nomor rumah sudah terdaftar di Firestore
      const sudahAda = wargas.value.some(
        w => (w.nomorRumah || '').toLowerCase() === cleanNomor.toLowerCase()
      )
      if (sudahAda) {
        throw { code: 'local/duplicate', message: 'Nomor rumah ini sudah terdaftar.' }
      }

      // Buat akun Firebase Auth via secondary app instance agar sesi login admin tetap aman
      const email = `${cleanNomor.toLowerCase()}@kasndb.app`
      const secondaryAppName = `userCreator-${Date.now()}`
      const secondaryApp = initializeApp(app.options, secondaryAppName)
      const secondaryAuth = getAuth(secondaryApp)

      let uid = ''
      try {
        const userCredential = await createUserWithEmailAndPassword(
          secondaryAuth,
          email,
          cleanNamaDepan
        )
        uid = userCredential.user.uid
        await signOut(secondaryAuth)
      } finally {
        await deleteApp(secondaryApp)
      }

      // Simpan data warga ke Firestore
      const docRef = await addDoc(collection(db, 'warga'), {
        nomorRumah: cleanNomor,
        namaDepan: cleanNamaDepan,
        namaLengkap: (data.namaLengkap || '').trim(),
        noHp: (data.noHp || '').trim(),
        uid: uid,
        createdAt: serverTimestamp()
      })

      // Tambahkan ke state lokal
      wargas.value.push({
        id: docRef.id,
        nomorRumah: cleanNomor,
        namaDepan: cleanNamaDepan,
        namaLengkap: (data.namaLengkap || '').trim(),
        noHp: (data.noHp || '').trim(),
        uid: uid
      })

      return docRef.id
    } catch (err) {
      let pesan = err.message
      if (err.code === 'auth/email-already-in-use' || err.code === 'local/duplicate') {
        pesan = 'Nomor rumah ini sudah terdaftar. Gunakan nomor rumah yang berbeda.'
      } else if (err.code === 'auth/weak-password') {
        pesan = 'Nama depan terlalu pendek (min. 6 karakter) untuk digunakan sebagai kata sandi.'
      } else if (err.code === 'auth/invalid-email') {
        pesan = 'Format nomor rumah tidak valid untuk email akun.'
      }
      error.value = 'Gagal menambah warga: ' + pesan
      throw new Error(pesan)
    } finally {
      loading.value = false
    }
  }


  /**
   * Update data warga berdasarkan document ID
   * CATATAN: Mengubah namaDepan TIDAK mengubah password Firebase Auth.
   * Warga tetap login menggunakan namaDepan yang LAMA.
   * Untuk mengubah password, diperlukan Firebase Admin SDK (server-side).
   */
  async function update(id, data) {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'warga', id)
      await updateDoc(docRef, {
        nomorRumah: data.nomorRumah,
        namaDepan: data.namaDepan,
        namaLengkap: data.namaLengkap,
        noHp: data.noHp || ''
      })
      // Update state lokal
      const index = wargas.value.findIndex(w => w.id === id)
      if (index !== -1) {
        wargas.value[index] = { ...wargas.value[index], ...data }
      }
    } catch (err) {
      error.value = 'Gagal mengupdate data warga: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Hapus data warga dari Firestore
   * Catatan: Penghapusan akun Firebase Auth tidak bisa dilakukan dari client-side
   * tanpa admin SDK, jadi hanya data Firestore yang dihapus
   */
  async function remove(id) {
    loading.value = true
    error.value = null
    try {
      await deleteDoc(doc(db, 'warga', id))
      // Hapus dari state lokal
      wargas.value = wargas.value.filter(w => w.id !== id)
    } catch (err) {
      error.value = 'Gagal menghapus data warga: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    wargas,
    loading,
    error,
    fetchAll,
    add,
    update,
    remove
  }
})
