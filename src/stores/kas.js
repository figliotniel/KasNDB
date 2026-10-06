import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '@/firebase/config.js'

// Store untuk pengaturan dan kalkulasi saldo kas
export const useKasStore = defineStore('kas', () => {
  // State: pengaturan aplikasi dari Firestore /config/settings
  const settings = ref({
    jumlahKasBulanan: 50000,
    namaPerumahan: 'Perumahan NDB',
    tahunAktif: new Date().getFullYear()
  })
  const loading = ref(false)
  const error = ref(null)

  /**
   * Ambil pengaturan dari Firestore /config/settings
   */
  async function fetchSettings() {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'config', 'settings')
      const snapshot = await getDoc(docRef)
      if (snapshot.exists()) {
        settings.value = { ...settings.value, ...snapshot.data() }
      } else {
        // Jika belum ada, buat dengan nilai default
        await setDoc(docRef, {
          jumlahKasBulanan: 50000,
          namaPerumahan: 'Perumahan NDB',
          tahunAktif: new Date().getFullYear(),
          createdAt: serverTimestamp()
        })
      }
    } catch (err) {
      error.value = 'Gagal memuat pengaturan: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Update pengaturan di Firestore
   */
  async function updateSettings(data) {
    loading.value = true
    error.value = null
    try {
      const docRef = doc(db, 'config', 'settings')
      await setDoc(docRef, {
        ...settings.value,
        ...data
      }, { merge: true })
      settings.value = { ...settings.value, ...data }
    } catch (err) {
      error.value = 'Gagal menyimpan pengaturan: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Getter: hitung total pemasukan dari array pembayaran
   */
  function totalPemasukan(pembayarans) {
    return pembayarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
  }

  /**
   * Getter: hitung saldo kas = pemasukan - pengeluaran
   */
  function saldoKas(pembayarans, pengeluarans) {
    const masuk = totalPemasukan(pembayarans)
    const keluar = pengeluarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
    return masuk - keluar
  }

  return {
    settings,
    loading,
    error,
    fetchSettings,
    updateSettings,
    totalPemasukan,
    saldoKas
  }
})
