<template>
  <!-- Halaman Kelola Pembayaran (Kas Masuk) -->
  <div class="min-h-[100dvh] bg-zinc-50 pb-28">
    <!-- Header App Bar -->
    <header class="bg-white border-b border-zinc-200/80 sticky top-0 z-20 pt-safe">
      <div class="max-w-md mx-auto px-4 pt-3.5 pb-3">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <AppIcon name="wallet" className="w-4 h-4" />
            </div>
            <div>
              <h1 class="text-base font-bold text-zinc-900 leading-tight">Iuran Kas Masuk</h1>
              <p class="text-[11px] text-zinc-400">Pencatatan iuran per rumah</p>
            </div>
          </div>

          <div class="text-right">
            <span class="text-xs font-bold text-emerald-700 block">{{ formatRupiah(totalBulanIni) }}</span>
            <span class="text-[10px] text-zinc-400">Terkumpul</span>
          </div>
        </div>

        <!-- Month & Year Selectors -->
        <div class="grid grid-cols-3 gap-2 mb-3">
          <div class="col-span-2 relative">
            <select
              v-model="selectedBulan"
              class="w-full pl-3 pr-8 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 appearance-none transition-all"
            >
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
              v-model="selectedTahun"
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
        <div class="relative mb-3">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Cari nomor rumah atau nama..."
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

        <!-- Status Filter Tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
          <button
            type="button"
            @click="statusFilter = 'all'"
            :class="[
              'px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors',
              statusFilter === 'all'
                ? 'bg-zinc-900 text-white font-semibold'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            ]"
          >
            Semua ({{ wargaStore.wargas.length }})
          </button>
          <button
            type="button"
            @click="statusFilter = 'unpaid'"
            :class="[
              'px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1',
              statusFilter === 'unpaid'
                ? 'bg-rose-600 text-white font-semibold'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
            ]"
          >
            <span>Belum ({{ belumCount }})</span>
          </button>
          <button
            type="button"
            @click="statusFilter = 'paid'"
            :class="[
              'px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors flex items-center gap-1',
              statusFilter === 'paid'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            ]"
          >
            <span>Lunas ({{ lunasCount }})</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main List -->
    <main v-else class="max-w-md mx-auto px-4 pt-4 space-y-2.5">
      <div v-if="filteredWargas.length === 0" class="py-12 text-center text-zinc-400">
        <AppIcon name="search" className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p class="text-sm font-medium text-zinc-600">Tidak ada warga yang sesuai</p>
        <p class="text-xs text-zinc-400 mt-0.5">Ubah kata kunci pencarian atau filter status</p>
      </div>

      <!-- Card per Rumah -->
      <div
        v-for="warga in filteredWargas"
        :key="warga.id"
        @click="openPaymentAction(warga)"
        :class="[
          'bg-white rounded-2xl p-3.5 border transition-all duration-150 cursor-pointer active:scale-[0.99] flex items-center justify-between gap-3 shadow-xs',
          isPaid(warga.nomorRumah)
            ? 'border-emerald-200/90 hover:border-emerald-300'
            : 'border-zinc-200/80 hover:border-zinc-300'
        ]"
      >
        <div class="flex items-center gap-3 min-w-0">
          <!-- House Number Badge -->
          <div
            :class="[
              'w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors',
              isPaid(warga.nomorRumah)
                ? 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-600/20'
                : 'bg-zinc-100 text-zinc-700'
            ]"
          >
            {{ warga.nomorRumah }}
          </div>

          <!-- Name & Details -->
          <div class="min-w-0">
            <p class="text-xs sm:text-sm font-semibold text-zinc-900 truncate">
              {{ warga.namaLengkap || warga.namaDepan }}
            </p>
            <div class="flex items-center gap-2 mt-0.5">
              <span v-if="isPaid(warga.nomorRumah)" class="text-[11px] text-emerald-700 font-semibold">
                {{ formatRupiah(getPayment(warga.nomorRumah)?.jumlah) }}
              </span>
              <span v-else class="text-[11px] text-zinc-400">
                Belum tercatat
              </span>
              <span v-if="isPaid(warga.nomorRumah) && getPayment(warga.nomorRumah)?.tanggal" class="text-[10px] text-zinc-400">
                • {{ formatTanggal(getPayment(warga.nomorRumah)?.tanggal) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Status / Action Button -->
        <div class="flex-shrink-0">
          <StatusBadge :status="isPaid(warga.nomorRumah) ? 'lunas' : 'belum'" size="sm" />
        </div>
      </div>
    </main>

    <!-- Modal Form Aksi Pembayaran -->
    <Modal
      :is-open="showModal"
      :title="selectedWarga ? `Rumah ${selectedWarga.nomorRumah} - ${selectedWarga.namaDepan}` : ''"
      :subtitle="`Iuran Bulan ${namaBulan[selectedBulan - 1]} ${selectedTahun}`"
      @close="closeModal"
    >
      <div v-if="selectedWarga" class="space-y-4">
        <!-- Status Banner -->
        <div
          :class="[
            'p-3.5 rounded-2xl border flex items-center justify-between',
            isPaid(selectedWarga.nomorRumah)
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
              : 'bg-zinc-50 border-zinc-200 text-zinc-700'
          ]"
        >
          <div class="flex items-center gap-2">
            <AppIcon
              :name="isPaid(selectedWarga.nomorRumah) ? 'check-circle' : 'wallet'"
              className="w-5 h-5"
              :class="isPaid(selectedWarga.nomorRumah) ? 'text-emerald-600' : 'text-zinc-400'"
            />
            <span class="text-xs font-semibold">
              {{ isPaid(selectedWarga.nomorRumah) ? 'Sudah Tercatat Lunas' : 'Belum Membayar' }}
            </span>
          </div>
          <span v-if="isPaid(selectedWarga.nomorRumah)" class="text-xs font-bold text-emerald-700">
            {{ formatRupiah(payForm.jumlah) }}
          </span>
        </div>

        <form @submit.prevent="handleSavePayment" class="space-y-3.5">
          <!-- Preset Nominal Pills -->
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                Jumlah Pembayaran (Rp)
              </label>
              <span class="text-[11px] text-zinc-400">Pilihan cepat:</span>
            </div>
            <div class="flex gap-2 mb-2">
              <button
                type="button"
                @click="payForm.jumlah = kasStore.settings.jumlahKasBulanan || 50000"
                class="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
              >
                1 Bln ({{ formatRupiah(kasStore.settings.jumlahKasBulanan || 50000) }})
              </button>
              <button
                type="button"
                @click="payForm.jumlah = (kasStore.settings.jumlahKasBulanan || 50000) * 2"
                class="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
              >
                2 Bln
              </button>
              <button
                type="button"
                @click="payForm.jumlah = (kasStore.settings.jumlahKasBulanan || 50000) * 3"
                class="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
              >
                3 Bln
              </button>
            </div>
            <input
              v-model="payForm.jumlah"
              type="number"
              class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm font-semibold"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
              Tanggal Bayar
            </label>
            <input
              v-model="payForm.tanggal"
              type="date"
              class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
              Keterangan / Catatan (Opsional)
            </label>
            <input
              v-model="payForm.keterangan"
              type="text"
              placeholder="Contoh: Transfer BCA, Titip tunai pos"
              class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
            />
          </div>

          <!-- Error Message -->
          <div v-if="formError" class="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs">
            {{ formError }}
          </div>

          <!-- Action Buttons -->
          <div class="flex gap-2 pt-2">
            <button
              v-if="isPaid(selectedWarga.nomorRumah)"
              type="button"
              @click="confirmDeletePayment"
              :disabled="saving"
              class="py-3 px-4 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <AppIcon name="trash" className="w-4 h-4" />
              <span>Hapus</span>
            </button>
            <button
              type="submit"
              :disabled="saving"
              class="flex-1 py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors min-h-[46px]"
            >
              <span v-if="saving" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>
                {{ saving ? 'Menyimpan...' : (isPaid(selectedWarga.nomorRumah) ? 'Perbarui Data' : 'Tandai Lunas Sekarang') }}
              </span>
            </button>
          </div>
        </form>
      </div>
    </Modal>

    <!-- Dialog Konfirmasi Hapus Pembayaran -->
    <ConfirmDialog
      :is-open="showDeleteConfirm"
      title="Hapus Catatan Pembayaran?"
      message="Status pembayaran rumah ini untuk bulan ini akan kembali menjadi Belum Lunas."
      confirmText="Ya, Hapus"
      @confirm="handleExecuteDelete"
      @cancel="showDeleteConfirm = false"
    />

    <!-- Bottom Navigation Admin -->
    <BottomNav role="admin" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import StatusBadge from '@/components/StatusBadge.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'

const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const showModal = ref(false)
const showDeleteConfirm = ref(false)
const saving = ref(false)
const selectedWarga = ref(null)
const formError = ref('')

const searchQuery = ref('')
const statusFilter = ref('all') // 'all', 'paid', 'unpaid'

const now = new Date()
const selectedBulan = ref(now.getMonth() + 1)
const selectedTahun = ref(now.getFullYear())
const tahunOptions = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)

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
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
}

const payForm = ref({
  jumlah: 50000,
  tanggal: getLocalDateString(),
  keterangan: ''
})

function getPayment(nomorRumah) {
  return pembayaranStore.pembayarans.find(
    p => p.nomorRumah === nomorRumah &&
         Number(p.bulan) === Number(selectedBulan.value) &&
         Number(p.tahun) === Number(selectedTahun.value)
  )
}

function isPaid(nomorRumah) {
  return !!getPayment(nomorRumah)
}

const lunasCount = computed(() =>
  wargaStore.wargas.filter(w => isPaid(w.nomorRumah)).length
)
const belumCount = computed(() =>
  Math.max(0, wargaStore.wargas.length - lunasCount.value)
)

const totalBulanIni = computed(() =>
  pembayaranStore.pembayarans
    .filter(p => Number(p.bulan) === Number(selectedBulan.value) && Number(p.tahun) === Number(selectedTahun.value))
    .reduce((sum, p) => sum + (p.jumlah || 0), 0)
)

const filteredWargas = computed(() => {
  let list = wargaStore.wargas

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.trim().toLowerCase()
    list = list.filter(w =>
      (w.nomorRumah || '').toLowerCase().includes(q) ||
      (w.namaLengkap || '').toLowerCase().includes(q) ||
      (w.namaDepan || '').toLowerCase().includes(q)
    )
  }

  if (statusFilter.value === 'paid') {
    list = list.filter(w => isPaid(w.nomorRumah))
  } else if (statusFilter.value === 'unpaid') {
    list = list.filter(w => !isPaid(w.nomorRumah))
  }

  return list
})

function openPaymentAction(warga) {
  selectedWarga.value = warga
  formError.value = ''
  const existing = getPayment(warga.nomorRumah)
  if (existing) {
    payForm.value = {
      jumlah: existing.jumlah,
      tanggal: getLocalDateString(existing.tanggal),
      keterangan: existing.keterangan || ''
    }
  } else {
    payForm.value = {
      jumlah: kasStore.settings.jumlahKasBulanan || 50000,
      tanggal: getLocalDateString(),
      keterangan: ''
    }
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedWarga.value = null
  formError.value = ''
}

async function handleSavePayment() {
  if (!selectedWarga.value) return
  saving.value = true
  formError.value = ''

  try {
    const tanggalObj = parseDateFromInput(payForm.value.tanggal)
    const existing = getPayment(selectedWarga.value.nomorRumah)

    if (existing) {
      await pembayaranStore.update(existing.id, {
        jumlah: Number(payForm.value.jumlah),
        tanggal: tanggalObj,
        keterangan: payForm.value.keterangan
      })
    } else {
      await pembayaranStore.add({
        nomorRumah: selectedWarga.value.nomorRumah,
        wargaId: selectedWarga.value.uid || '',
        bulan: selectedBulan.value,
        tahun: selectedTahun.value,
        jumlah: Number(payForm.value.jumlah),
        tanggal: tanggalObj,
        keterangan: payForm.value.keterangan
      })
    }
    closeModal()
  } catch (err) {
    formError.value = err.message || 'Gagal menyimpan pembayaran.'
  } finally {
    saving.value = false
  }
}

function confirmDeletePayment() {
  showDeleteConfirm.value = true
}

async function handleExecuteDelete() {
  if (!selectedWarga.value) return
  const existing = getPayment(selectedWarga.value.nomorRumah)
  if (!existing) return

  saving.value = true
  try {
    await pembayaranStore.remove(existing.id)
    showDeleteConfirm.value = false
    closeModal()
  } catch (err) {
    formError.value = err.message || 'Gagal menghapus pembayaran.'
  } finally {
    saving.value = false
  }
}

async function loadData() {
  loading.value = true
  try {
    await Promise.all([
      kasStore.fetchSettings(),
      wargaStore.fetchAll(),
      pembayaranStore.fetchAll(selectedTahun.value)
    ])
  } catch (err) {
    console.error('Error loading pembayaran:', err)
  } finally {
    loading.value = false
  }
}

onMounted(loadData)
</script>
