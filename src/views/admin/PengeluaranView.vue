<template>
  <!-- Halaman Kelola Pengeluaran -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-4 pt-12 pb-4 sticky top-0 z-10">
      <h1 class="text-lg font-bold text-gray-800">💸 Pengeluaran</h1>

      <!-- Filter Bulan & Tahun -->
      <div class="flex gap-2 mt-3">
        <select
          v-model="filterBulan"
          class="flex-1 px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
        >
          <option value="">Semua Bulan</option>
          <option v-for="(nama, idx) in namaBulan" :key="idx" :value="idx + 1">{{ nama }}</option>
        </select>
        <select
          v-model="filterTahun"
          class="w-24 px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          @change="loadData"
        >
          <option v-for="y in tahunOptions" :key="y" :value="y">{{ y }}</option>
        </select>
      </div>

      <!-- Total -->
      <div class="mt-3 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 flex items-center justify-between">
        <span class="text-sm text-gray-600">Total Pengeluaran</span>
        <span class="text-sm font-bold text-red-600">{{ formatRupiah(totalTerfilter) }}</span>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="pengeluaranStore.loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <!-- Daftar Pengeluaran -->
    <div v-else class="px-4 py-4 space-y-3">
      <div v-if="filteredPengeluarans.length === 0" class="text-center py-10">
        <p class="text-4xl">📭</p>
        <p class="text-gray-500 mt-2 text-sm">Belum ada pengeluaran</p>
      </div>

      <div
        v-for="item in filteredPengeluarans"
        :key="item.id"
        class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
      >
        <div class="flex items-start justify-between">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-1">
              <span class="text-xs bg-orange-100 text-orange-600 font-medium px-2 py-0.5 rounded-full">
                {{ item.kategori }}
              </span>
              <span class="text-xs text-gray-400">{{ formatTanggal(item.tanggal) }}</span>
            </div>
            <p class="text-sm font-semibold text-gray-800 truncate">{{ item.keterangan }}</p>
            <p class="text-base font-bold text-red-500 mt-1">{{ formatRupiah(item.jumlah) }}</p>
          </div>
          <div class="flex gap-1 ml-2 flex-shrink-0">
            <button @click="openEdit(item)" class="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors">✏️</button>
            <button @click="openDelete(item)" class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">🗑️</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Floating Add Button -->
    <button
      @click="openAdd"
      class="fixed bottom-24 right-4 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-200 active:scale-95 z-20"
    >
      +
    </button>
  </div>

  <!-- Modal Tambah/Edit -->
  <Modal
    :is-open="showModal"
    :title="isEditing ? 'Edit Pengeluaran' : 'Tambah Pengeluaran'"
    @close="closeModal"
  >
    <form @submit.prevent="handleSave" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal *</label>
        <input
          v-model="form.tanggal"
          type="date"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Keterangan *</label>
        <input
          v-model="form.keterangan"
          type="text"
          placeholder="Contoh: Bayar listrik pos jaga"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah *</label>
        <div class="relative">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm">Rp</span>
          <input
            v-model="form.jumlah"
            type="number"
            placeholder="0"
            min="0"
            class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            required
          />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Kategori *</label>
        <select
          v-model="form.kategori"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm bg-white"
          required
        >
          <option value="">Pilih kategori...</option>
          <option v-for="kat in kategoriList" :key="kat" :value="kat">{{ kat }}</option>
        </select>
      </div>

      <!-- Error -->
      <div v-if="formError" class="bg-red-50 border border-red-200 rounded-xl p-3">
        <p class="text-red-600 text-xs">{{ formError }}</p>
      </div>

      <div class="flex gap-2 pt-2">
        <button type="button" @click="closeModal"
          class="flex-1 py-3 border border-gray-300 text-gray-600 font-medium rounded-xl text-sm hover:bg-gray-50 transition-colors">
          Batal
        </button>
        <button type="submit" :disabled="saving"
          class="flex-1 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
          <span v-if="saving" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          {{ saving ? 'Menyimpan...' : 'Simpan' }}
        </button>
      </div>
    </form>
  </Modal>

  <!-- Konfirmasi Hapus -->
  <ConfirmDialog
    :is-open="showConfirm"
    title="Hapus Pengeluaran"
    :message="`Hapus pengeluaran '${selectedItem?.keterangan}' sebesar ${formatRupiah(selectedItem?.jumlah || 0)}?`"
    @confirm="handleDelete"
    @cancel="showConfirm = false"
  />

  <BottomNav role="admin" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePengeluaranStore } from '@/stores/pengeluaran.js'
import BottomNav from '@/components/BottomNav.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const pengeluaranStore = usePengeluaranStore()

// State
const showModal = ref(false)
const showConfirm = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const selectedItem = ref(null)
const formError = ref('')

// Filter
const now = new Date()
const filterBulan = ref('')
const filterTahun = ref(now.getFullYear())
const tahunOptions = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)

const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const kategoriList = [
  'Kebersihan', 'Keamanan', 'Utilitas', 'Perbaikan', 'Administrasi',
  'Kegiatan', 'Taman', 'Lainnya'
]

const form = ref({
  tanggal: now.toISOString().split('T')[0],
  keterangan: '',
  jumlah: '',
  kategori: ''
})

// Filter pengeluaran berdasarkan bulan yang dipilih
const filteredPengeluarans = computed(() => {
  if (!filterBulan.value) return pengeluaranStore.pengeluarans
  return pengeluaranStore.pengeluarans.filter(p => {
    if (!p.tanggal) return false
    return new Date(p.tanggal).getMonth() + 1 === Number(filterBulan.value)
  })
})

// Total setelah difilter
const totalTerfilter = computed(() =>
  filteredPengeluarans.value.reduce((sum, p) => sum + (p.jumlah || 0), 0)
)

function openAdd() {
  isEditing.value = false
  form.value = { tanggal: now.toISOString().split('T')[0], keterangan: '', jumlah: '', kategori: '' }
  formError.value = ''
  showModal.value = true
}

function openEdit(item) {
  isEditing.value = true
  selectedItem.value = item
  form.value = {
    tanggal: item.tanggal ? new Date(item.tanggal).toISOString().split('T')[0] : now.toISOString().split('T')[0],
    keterangan: item.keterangan,
    jumlah: item.jumlah,
    kategori: item.kategori
  }
  formError.value = ''
  showModal.value = true
}

function openDelete(item) {
  selectedItem.value = item
  showConfirm.value = true
}

function closeModal() {
  showModal.value = false
  formError.value = ''
}

async function handleSave() {
  formError.value = ''
  saving.value = true
  try {
    const data = {
      tanggal: new Date(form.value.tanggal),
      keterangan: form.value.keterangan,
      jumlah: Number(form.value.jumlah),
      kategori: form.value.kategori
    }
    if (isEditing.value) {
      await pengeluaranStore.update(selectedItem.value.id, data)
    } else {
      await pengeluaranStore.add(data)
    }
    closeModal()
  } catch (err) {
    formError.value = pengeluaranStore.error || 'Gagal menyimpan pengeluaran.'
  } finally {
    saving.value = false
  }
}

async function handleDelete() {
  showConfirm.value = false
  try {
    await pengeluaranStore.remove(selectedItem.value.id)
  } catch (err) {
    console.error('Error deleting:', err)
  }
}

function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

async function loadData() {
  await pengeluaranStore.fetchAll(filterTahun.value)
}

onMounted(loadData)
</script>
