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

// Store untuk manajemen data pengeluaran kas
export const usePengeluaranStore = defineStore('pengeluaran', () => {
  // State
  const pengeluarans = ref([])
  const loading = ref(false)
  const error = ref(null)

  /**
   * Ambil semua pengeluaran, opsional filter berdasarkan tahun
   */
  async function fetchAll(tahun = null) {
    loading.value = true
    error.value = null
    try {
      let q
      if (tahun) {
        // Filter berdasarkan rentang tahun (1 Jan - 31 Des)
        const startDate = Timestamp.fromDate(new Date(tahun, 0, 1))
        const endDate = Timestamp.fromDate(new Date(tahun, 11, 31, 23, 59, 59))
        q = query(
          collection(db, 'pengeluaran'),
          where('tanggal', '>=', startDate),
          where('tanggal', '<=', endDate),
          orderBy('tanggal', 'desc')
        )
      } else {
        q = query(collection(db, 'pengeluaran'), orderBy('tanggal', 'desc'))
      }
      const snapshot = await getDocs(q)
      pengeluarans.value = snapshot.docs.map(d => ({
        id: d.id,
        ...d.data(),
        tanggal: d.data().tanggal?.toDate() || null,
        createdAt: d.data().createdAt?.toDate() || null
      }))
    } catch (err) {
      error.value = 'Gagal memuat data pengeluaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Tambah record pengeluaran baru
   */
  async function add(data) {
    loading.value = true
    error.value = null
    try {
      const tanggal = data.tanggal instanceof Date
        ? Timestamp.fromDate(data.tanggal)
        : Timestamp.fromDate(new Date(data.tanggal))

      const docData = {
        tanggal: tanggal,
        keterangan: data.keterangan,
        jumlah: Number(data.jumlah),
        kategori: data.kategori || 'Lainnya',
        createdAt: serverTimestamp()
      }

      const docRef = await addDoc(collection(db, 'pengeluaran'), docData)

      // Tambah ke state lokal
      pengeluarans.value.unshift({
        id: docRef.id,
        ...docData,
        tanggal: tanggal.toDate(),
        createdAt: new Date()
      })

      return docRef.id
    } catch (err) {
      error.value = 'Gagal menambah pengeluaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Update record pengeluaran
   */
  async function update(id, data) {
    loading.value = true
    error.value = null
    try {
      const tanggal = data.tanggal instanceof Date
        ? Timestamp.fromDate(data.tanggal)
        : Timestamp.fromDate(new Date(data.tanggal))

      const docRef = doc(db, 'pengeluaran', id)
      await updateDoc(docRef, {
        tanggal: tanggal,
        keterangan: data.keterangan,
        jumlah: Number(data.jumlah),
        kategori: data.kategori || 'Lainnya'
      })

      // Update state lokal
      const index = pengeluarans.value.findIndex(p => p.id === id)
      if (index !== -1) {
        pengeluarans.value[index] = {
          ...pengeluarans.value[index],
          tanggal: tanggal.toDate(),
          keterangan: data.keterangan,
          jumlah: Number(data.jumlah),
          kategori: data.kategori || 'Lainnya'
        }
      }
    } catch (err) {
      error.value = 'Gagal mengupdate pengeluaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Hapus record pengeluaran
   */
  async function remove(id) {
    loading.value = true
    error.value = null
    try {
      await deleteDoc(doc(db, 'pengeluaran', id))
      pengeluarans.value = pengeluarans.value.filter(p => p.id !== id)
    } catch (err) {
      error.value = 'Gagal menghapus pengeluaran: ' + err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Getter: total semua pengeluaran yang ada di state
   */
  const totalPengeluaran = computed(() =>
    pengeluarans.value.reduce((sum, p) => sum + (p.jumlah || 0), 0)
  )

  return {
    pengeluarans,
    loading,
    error,
    fetchAll,
    add,
    update,
    remove,
    totalPengeluaran
  }
})
