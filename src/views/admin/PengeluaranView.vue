<template>
  <!-- Halaman Kelola Pengeluaran (Kas Keluar) -->
  <div class="min-h-screen bg-zinc-50 pb-28">
    <!-- Header App Bar -->
    <header class="bg-white border-b border-zinc-200/80 sticky top-0 z-20 pt-safe">
      <div class="max-w-md mx-auto px-4 pt-3.5 pb-3">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <AppIcon name="receipt" className="w-4 h-4" />
            </div>
            <div>
              <h1 class="text-base font-bold text-zinc-900 leading-tight">Pengeluaran Kas</h1>
              <p class="text-[11px] text-zinc-400">Pencatatan biaya & operasional</p>
            </div>
          </div>

          <div class="text-right">
            <span class="text-xs font-bold text-rose-600 block">{{ formatRupiah(totalTerfilter) }}</span>
            <span class="text-[10px] text-zinc-400">Total Periode Ini</span>
          </div>
        </div>

        <!-- Filter Bulan & Tahun -->
        <div class="grid grid-cols-3 gap-2 mb-3">
          <div class="col-span-2 relative">
            <select
              v-model="filterBulan"
              class="w-full pl-3 pr-8 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 appearance-none transition-all"
            >
              <option value="">Semua Bulan</option>
              <option v-for="(nama, idx) in namaBulan" :key="idx" :value="idx + 1">
                Bulan {{ nama }}
              </option>
            </select>
            <div class="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              <AppIcon name="chevron-down" className="w-3.5 h-3.5" />
            </div>
          </div>

          <div class="relative">
            <select
              v-model="filterTahun"
              @change="loadData"
              class="w-full pl-3 pr-7 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 appearance-none transition-all"
            >
              <option v-for="y in tahunOptions" :key="y" :value="y">{{ y }}</option>
            </select>
            <div class="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              <AppIcon name="chevron-down" className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        <!-- Search Input -->
        <div class="relative mb-2.5">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari keperluan atau kategori..."
            class="w-full pl-9 pr-8 py-2.5 bg-zinc-100/80 border border-transparent focus:border-zinc-300 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-400"
          />
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            <AppIcon name="search" className="w-3.5 h-3.5" />
          </div>
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5"
          >
            <AppIcon name="x" className="w-3.5 h-3.5" />
          </button>
        </div>

        <!-- Category Filter Pills -->
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <button
            type="button"
            @click="filterKategori = ''"
            :class="[
              'px-3 py-1 rounded-lg font-medium whitespace-nowrap transition-colors text-[11px]',
              !filterKategori
                ? 'bg-zinc-900 text-white font-semibold'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            ]"
          >
            Semua ({{ pengeluaranStore.pengeluarans.length }})
          </button>
          <button
            v-for="kat in daftarKategori"
            :key="kat"
            type="button"
            @click="filterKategori = (filterKategori === kat ? '' : kat)"
            :class="[
              'px-2.5 py-1 rounded-lg font-medium whitespace-nowrap transition-colors text-[11px]',
              filterKategori === kat
                ? 'bg-zinc-900 text-white font-semibold'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            ]"
          >
            {{ kat }}
          </button>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="pengeluaranStore.loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main Content List -->
    <main v-else class="max-w-md mx-auto px-4 pt-4 space-y-2.5">
      <div v-if="filteredPengeluarans.length === 0" class="py-14 text-center text-zinc-400">
        <AppIcon name="receipt" className="w-9 h-9 mx-auto mb-2 opacity-50" />
        <p class="text-sm font-semibold text-zinc-700">Belum ada catatan pengeluaran</p>
        <p class="text-xs text-zinc-400 mt-0.5">Tekan tombol Tambah Pengeluaran di bawah untuk mencatat</p>
      </div>

      <div
        v-for="item in filteredPengeluarans"
        :key="item.id"
        class="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-xs flex items-start justify-between gap-3"
      >
        <div class="min-w-0 flex-1 space-y-1">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-700 text-[11px] font-semibold">
              {{ item.kategori }}
            </span>
            <span class="text-[11px] text-zinc-400">
              {{ formatTanggal(item.tanggal) }}
            </span>
          </div>
          <p class="text-xs sm:text-sm font-medium text-zinc-900 leading-snug">
            {{ item.keterangan }}
          </p>
          <p class="text-sm font-bold text-rose-600">
            {{ formatRupiah(item.jumlah) }}
          </p>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-1 flex-shrink-0">
          <button
            type="button"
            @click="openEdit(item)"
            class="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            title="Edit pengeluaran"
            aria-label="Edit"
          >
            <AppIcon name="pencil" className="w-4 h-4" />
          </button>
          <button
            type="button"
            @click="openDelete(item)"
            class="p-2 rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            title="Hapus pengeluaran"
            aria-label="Hapus"
          >
            <AppIcon name="trash" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>

    <!-- Floating Action Button (Catat Pengeluaran) -->
    <div class="fixed bottom-20 right-4 z-20 mb-safe max-w-md mx-auto">
      <button
        type="button"
        @click="openAdd"
        class="inline-flex items-center gap-2 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full shadow-lg shadow-zinc-900/20 text-xs font-semibold active:scale-95 transition-all duration-150"
      >
        <AppIcon name="plus" className="w-4 h-4" :strokeWidth="2.5" />
        <span>Tambah Pengeluaran</span>
      </button>
    </div>

    <!-- Modal Tambah / Edit Pengeluaran -->
    <Modal
      :is-open="showModal"
      :title="isEditing ? 'Edit Pengeluaran' : 'Catat Pengeluaran Baru'"
      subtitle="Catatan arus kas keluar"
      @close="closeModal"
    >
      <form @submit.prevent="handleSave" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Tanggal Pengeluaran *
          </label>
          <input
            v-model="form.tanggal"
            type="date"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Keterangan / Keperluan *
          </label>
          <input
            v-model="form.keterangan"
            type="text"
            placeholder="Contoh: Honor satpam, Pembelian lampu jalan"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Jumlah Biaya (Rp) *
          </label>
          <input
            v-model="form.jumlah"
            type="number"
            min="0"
            placeholder="0"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm font-semibold"
            required
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-1.5">
            <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider">
              Kategori Pengeluaran *
            </label>
          </div>
          <!-- Quick Category Selection Pills -->
          <div class="flex flex-wrap gap-1.5 mb-2">
            <button
              v-for="kat in daftarKategori"
              :key="kat"
              type="button"
              @click="form.kategori = kat"
              :class="[
                'px-2.5 py-1 rounded-lg text-xs font-medium transition-colors',
                form.kategori === kat
                  ? 'bg-zinc-900 text-white font-semibold'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              ]"
            >
              {{ kat }}
            </button>
          </div>
        </div>

        <!-- Error Alert -->
        <div v-if="formError" class="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs">
          {{ formError }}
        </div>

        <button
          type="submit"
          :disabled="saving"
          class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors min-h-[46px]"
        >
          <span v-if="saving" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>{{ saving ? 'Menyimpan...' : (isEditing ? 'Simpan Perubahan' : 'Catat Pengeluaran') }}</span>
        </button>
      </form>
    </Modal>

    <!-- Dialog Konfirmasi Hapus -->
    <ConfirmDialog
      :is-open="showDeleteConfirm"
      title="Hapus Pengeluaran?"
      :message="selectedItem ? `Apakah Anda yakin ingin menghapus catatan '${selectedItem.keterangan}' senilai ${formatRupiah(selectedItem.jumlah)}?` : ''"
      confirmText="Ya, Hapus"
      @confirm="handleConfirmDelete"
      @cancel="showDeleteConfirm = false"
    />

    <!-- Bottom Navigation Admin -->
    <BottomNav role="admin" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePengeluaranStore } from '@/stores/pengeluaran.js'
import BottomNav from '@/components/BottomNav.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'

const pengeluaranStore = usePengeluaranStore()

const now = new Date()
const filterBulan = ref('')
const filterTahun = ref(now.getFullYear())
const tahunOptions = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)

const searchQuery = ref('')
const filterKategori = ref('')

const showModal = ref(false)
const showDeleteConfirm = ref(false)
const isEditing = ref(false)
const selectedItem = ref(null)
const saving = ref(false)
const formError = ref('')

const daftarKategori = [
  'Keamanan',
  'Kebersihan',
  'Fasilitas',
  'Listrik/Air',
  'Perbaikan',
  'Konsumsi',
  'Lainnya'
]

const form = ref({
  tanggal: getLocalDateString(),
  keterangan: '',
  jumlah: '',
  kategori: 'Keamanan'
})

const namaBulan = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

function getLocalDateString(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d)
  if (isNaN(date.getTime())) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function parseDateFromInput(str) {
  if (!str) return new Date()
  const [y, m, d] = str.split('-').map(Number)
  return new Date(y, m - 1, d, 12, 0, 0)
}

function formatRupiah(angka) {
  return 'Rp ' + Number(angka || 0).toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return ''
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

const filteredPengeluarans = computed(() => {
  return pengeluaranStore.pengeluarans.filter(item => {
    // Filter bulan
    if (filterBulan.value !== '') {
      if (!item.tanggal) return false
      const bulan = item.tanggal.getMonth() + 1
      if (bulan !== Number(filterBulan.value)) return false
    }

    // Filter kategori
    if (filterKategori.value && item.kategori !== filterKategori.value) {
      return false
    }

    // Search query
    if (searchQuery.value.trim()) {
      const q = searchQuery.value.trim().toLowerCase()
      const matchKet = (item.keterangan || '').toLowerCase().includes(q)
      const matchKat = (item.kategori || '').toLowerCase().includes(q)
      if (!matchKet && !matchKat) return false
    }

    return true
  })
})

const totalTerfilter = computed(() =>
  filteredPengeluarans.value.reduce((sum, item) => sum + (item.jumlah || 0), 0)
)

function openAdd() {
  isEditing.value = false
  selectedItem.value = null
  formError.value = ''
  form.value = {
    tanggal: getLocalDateString(),
    keterangan: '',
    jumlah: '',
    kategori: 'Keamanan'
  }
  showModal.value = true
}

function openEdit(item) {
  isEditing.value = true
  selectedItem.value = item
  formError.value = ''
  form.value = {
    tanggal: getLocalDateString(item.tanggal),
    keterangan: item.keterangan,
    jumlah: item.jumlah,
    kategori: item.kategori || 'Lainnya'
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedItem.value = null
  formError.value = ''
}

async function handleSave() {
  formError.value = ''
  saving.value = true
  try {
    const tanggalObj = parseDateFromInput(form.value.tanggal)
    const payload = {
      tanggal: tanggalObj,
      keterangan: form.value.keterangan.trim(),
      jumlah: Number(form.value.jumlah),
      kategori: form.value.kategori
    }

    if (isEditing.value && selectedItem.value) {
      await pengeluaranStore.update(selectedItem.value.id, payload)
    } else {
      await pengeluaranStore.add(payload)
    }
    closeModal()
  } catch (err) {
    formError.value = err.message || 'Gagal menyimpan pengeluaran.'
  } finally {
    saving.value = false
  }
}

function openDelete(item) {
  selectedItem.value = item
  showDeleteConfirm.value = true
}

async function handleConfirmDelete() {
  if (!selectedItem.value) return
  try {
    await pengeluaranStore.remove(selectedItem.value.id)
    showDeleteConfirm.value = false
    selectedItem.value = null
  } catch (err) {
    alert('Gagal menghapus pengeluaran: ' + err.message)
  }
}

async function loadData() {
  try {
    await pengeluaranStore.fetchAll(filterTahun.value)
  } catch (err) {
    console.error('Error loading pengeluaran:', err)
  }
}

onMounted(loadData)
</script>
