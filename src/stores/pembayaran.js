import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore'
import { db } from '@/firebase/config.js'

// Store untuk manajemen data pembayaran kas
export const usePembayaranStore = defineStore('pembayaran', () => {
  // State
  const pembayarans = ref([])
  const loading = ref(false)
  const error = ref(null)

  /**
   * Ambil semua pembayaran, opsional filter berdasarkan tahun
   */
  async function fetchAll(tahun = null) {
    loading.value = true
    error.value = null
    try {
      let q
      if (tahun) {
        q = query(
          collection(db, 'pembayaran'),
          where('tahun', '==', tahun),
          orderBy('bulan')
        )
      } else {
        q = query(collection(db, 'pembayaran'), orderBy('tahun'), orderBy('bulan'))
      }
      const snapshot = await getDocs(q)
      pembayarans.value = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data(),
        // Konversi Timestamp ke Date untuk kemudahan penggunaan
        tanggal: d.data().tanggal?.toDate() || null,
        createdAt: d.data().createdAt?.toDate() || null
      }))
    } catch (err) {
      error.value = 'Gagal memuat data pembayaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Ambil pembayaran berdasarkan UID warga dan tahun
   */
  async function fetchByWarga(uid, tahun = null) {
    loading.value = true
    error.value = null
    try {
      let q
      if (tahun) {
        q = query(
          collection(db, 'pembayaran'),
          where('wargaId', '==', uid),
          where('tahun', '==', tahun),
          orderBy('bulan')
        )
      } else {
        q = query(
          collection(db, 'pembayaran'),
          where('wargaId', '==', uid),
          orderBy('tahun'),
          orderBy('bulan')
        )
      }
      const snapshot = await getDocs(q)
      pembayarans.value = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data(),
        tanggal: d.data().tanggal?.toDate() || null,
        createdAt: d.data().createdAt?.toDate() || null
      }))
    } catch (err) {
      error.value = 'Gagal memuat data pembayaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Tambah record pembayaran baru
   */
  async function add(data) {
    loading.value = true
    error.value = null
    try {
      // Konversi tanggal ke Timestamp Firestore jika berupa Date
      const tanggal = data.tanggal instanceof Date
        ? Timestamp.fromDate(data.tanggal)
        : Timestamp.fromDate(new Date(data.tanggal))

      const docData = {
        nomorRumah: data.nomorRumah,
        wargaId: data.wargaId,
        bulan: Number(data.bulan),
        tahun: Number(data.tahun),
        jumlah: Number(data.jumlah),
        tanggal: tanggal,
        keterangan: data.keterangan || '',
        createdAt: serverTimestamp()
      }

      const docRef = await addDoc(collection(db, 'pembayaran'), docData)

      // Tambah ke state lokal
      pembayarans.value.push({
        id: docRef.id,
        ...docData,
        tanggal: tanggal.toDate(),
        createdAt: new Date()
      })

      return docRef.id
    } catch (err) {
      error.value = 'Gagal menambah pembayaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Update record pembayaran
   */
  async function update(id, data) {
    loading.value = true
    error.value = null
    try {
      const tanggal = data.tanggal instanceof Date
        ? Timestamp.fromDate(data.tanggal)
        : Timestamp.fromDate(new Date(data.tanggal))

      const docRef = doc(db, 'pembayaran', id)
      await updateDoc(docRef, {
        jumlah: Number(data.jumlah),
        tanggal: tanggal,
        keterangan: data.keterangan || ''
      })

      // Update state lokal
      const index = pembayarans.value.findIndex(p => p.id === id)
      if (index !== -1) {
        pembayarans.value[index] = {
          ...pembayarans.value[index],
          jumlah: Number(data.jumlah),
          tanggal: tanggal.toDate(),
          keterangan: data.keterangan || ''
        }
      }
    } catch (err) {
      error.value = 'Gagal mengupdate pembayaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Hapus record pembayaran
   */
  async function remove(id) {
    loading.value = true
    error.value = null
    try {
      await deleteDoc(doc(db, 'pembayaran', id))
      pembayarans.value = pembayarans.value.filter(p => p.id !== id)
    } catch (err) {
      error.value = 'Gagal menghapus pembayaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Getter: cek apakah suatu rumah sudah lunas untuk bulan/tahun tertentu
   */
  const isPaid = computed(() => (nomorRumah, bulan, tahun) => {
    return pembayarans.value.some(
      p => p.nomorRumah === nomorRumah &&
           p.bulan === Number(bulan) &&
           p.tahun === Number(tahun)
    )
  })

  /**
   * Getter: total pemasukan dari semua pembayaran yang ada di state
   */
  const totalPemasukan = computed(() =>
    pembayarans.value.reduce((sum, p) => sum + (p.jumlah || 0), 0)
  )

  return {
    pembayarans,
    loading,
    error,
    fetchAll,
    fetchByWarga,
    add,
    update,
    remove,
    isPaid,
    totalPemasukan
  }
})
