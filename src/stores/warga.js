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
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { db, auth } from '@/firebase/config.js'

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
   * 1. Buat akun Firebase Auth untuk warga
   * 2. Simpan data ke Firestore
   * 3. Login kembali sebagai admin
   *
   * @param {Object} data - Data warga (nomorRumah, namaDepan, namaLengkap, noHp)
   * @param {string} adminEmail - Email admin untuk re-login
   * @param {string} adminPassword - Password admin untuk re-login
   */
  async function add(data, adminEmail, adminPassword) {
    loading.value = true
    error.value = null
    try {
      // Buat akun Firebase Auth dengan email format: nomorRumah@kasndb.app
      const email = `${data.nomorRumah.toLowerCase()}@kasndb.app`
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        data.namaDepan
      )
      const uid = userCredential.user.uid

      // Simpan data warga ke Firestore
      const docRef = await addDoc(collection(db, 'warga'), {
        nomorRumah: data.nomorRumah,
        namaDepan: data.namaDepan,
        namaLengkap: data.namaLengkap,
        noHp: data.noHp || '',
        uid: uid,
        createdAt: serverTimestamp()
      })

      // Login kembali sebagai admin setelah membuat akun warga
      await signInWithEmailAndPassword(auth, adminEmail, adminPassword)

      // Tambahkan ke state lokal
      wargas.value.push({
        id: docRef.id,
        nomorRumah: data.nomorRumah,
        namaDepan: data.namaDepan,
        namaLengkap: data.namaLengkap,
        noHp: data.noHp || '',
        uid: uid
      })

      return docRef.id
    } catch (err) {
      error.value = 'Gagal menambah warga: ' + err.message
      // Pastikan admin re-login jika terjadi error setelah create user
      if (adminEmail && adminPassword) {
        try {
          await signInWithEmailAndPassword(auth, adminEmail, adminPassword)
        } catch (reLoginErr) {
          console.error('Gagal re-login admin:', reLoginErr)
        }
      }
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Update data warga berdasarkan document ID
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
