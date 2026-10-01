import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '@/firebase/config.js'

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
      const email = `${nomorRumah.toLowerCase()}@kasndb.app`
      const result = await signInWithEmailAndPassword(auth, email, namaDepan)
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
   * Login untuk admin - menggunakan email admin@kasndb.app
   */
  async function loginAdmin(password) {
    error.value = null
    loading.value = true
    try {
      const result = await signInWithEmailAndPassword(auth, 'admin@kasndb.app', password)
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

  /**
   * Inisialisasi listener auth state - dipanggil saat app dimuat
   */
  function init() {
    return new Promise(resolve => {
      onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
          user.value = currentUser
          // Cek apakah email adalah admin
          isAdmin.value = currentUser.email === 'admin@kasndb.app'
        } else {
          user.value = null
          isAdmin.value = false
        }
        loading.value = false
        resolve(currentUser)
      })
    })
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
