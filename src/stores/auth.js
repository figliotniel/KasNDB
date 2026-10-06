import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase/config.js'

const ADMIN_EMAIL = (import.meta.env.VITE_ADMIN_EMAIL || 'admin@kasndb.app').toLowerCase()

// Store untuk manajemen autentikasi pengguna
export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref(null)
  const isAdmin = ref(false)
  const loading = ref(true)
  const error = ref(null)

  // Getter: apakah user sudah login
  const isAuthenticated = computed(() => !!user.value)

  /**
   * Login untuk warga - konversi nomorRumah + namaDepan ke email Firebase
   * Email format: {nomorRumah}@kasndb.app, password: namaDepan
   */
  async function login(nomorRumah, namaDepan) {
    error.value = null
    loading.value = true
    try {
      const cleanNomor = (nomorRumah || '').trim().replace(/\s+/g, '').toLowerCase()
      const cleanNama = (namaDepan || '').trim()
      const email = `${cleanNomor}@kasndb.app`
      const result = await signInWithEmailAndPassword(auth, email, cleanNama)
      user.value = result.user
      isAdmin.value = false
      return result.user
    } catch (err) {
      error.value = getPesanError(err.code)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Login untuk admin - menggunakan email admin
   */
  async function loginAdmin(password) {
    error.value = null
    loading.value = true
    try {
      const result = await signInWithEmailAndPassword(auth, ADMIN_EMAIL, password)
      user.value = result.user
      isAdmin.value = true
      return result.user
    } catch (err) {
      error.value = getPesanError(err.code)
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Logout pengguna
   */
  async function logout() {
    try {
      await signOut(auth)
      user.value = null
      isAdmin.value = false
    } catch (err) {
      error.value = 'Gagal keluar. Silakan coba lagi.'
      throw err
    }
  }

  let unsubscribeAuth = null
  let initPromise = null

  /**
   * Inisialisasi listener auth state - dipanggil saat app dimuat
   * Mengembalikan Promise yang sama jika dipanggil lebih dari sekali
   */
  function init() {
    if (initPromise) return initPromise

    initPromise = new Promise(resolve => {
      if (unsubscribeAuth) {
        unsubscribeAuth()
      }
      unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          user.value = currentUser
          isAdmin.value = currentUser.email?.toLowerCase() === ADMIN_EMAIL
        } else {
          user.value = null
          isAdmin.value = false
        }
        loading.value = false
        resolve(currentUser)
      })
    })

    return initPromise
  }

  /**
   * Konversi error code Firebase ke pesan Indonesia
   */
  function getPesanError(code) {
    const pesan = {
      'auth/user-not-found': 'Pengguna tidak ditemukan. Periksa nomor rumah Anda.',
      'auth/wrong-password': 'Kata sandi salah. Silakan coba lagi.',
      'auth/invalid-credential': 'Nomor rumah atau nama depan tidak valid.',
      'auth/invalid-email': 'Format email tidak valid.',
      'auth/too-many-requests': 'Terlalu banyak percobaan login. Coba lagi nanti.',
      'auth/network-request-failed': 'Koneksi internet bermasalah. Periksa jaringan Anda.',
      'auth/user-disabled': 'Akun ini telah dinonaktifkan.'
    }
    return pesan[code] || 'Terjadi kesalahan. Silakan coba lagi.'
  }

  return {
    user,
    isAdmin,
    loading,
    error,
    isAuthenticated,
    login,
    loginAdmin,
    logout,
    init
  }
})
