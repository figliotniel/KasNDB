<template>
  <!-- Halaman Kelola Pembayaran -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-4 pt-12 pb-4 sticky top-0 z-10">
      <h1 class="text-lg font-bold text-gray-800">💰 Pembayaran</h1>

      <!-- Selector Bulan & Tahun -->
      <div class="flex gap-2 mt-3">
        <select
          v-model="selectedBulan"
          class="flex-1 px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
        >
          <option v-for="(nama, idx) in namaBulan" :key="idx" :value="idx + 1">{{ nama }}</option>
        </select>
        <select
          v-model="selectedTahun"
          class="w-24 px-3 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          @change="loadData"
        >
          <option v-for="y in tahunOptions" :key="y" :value="y">{{ y }}</option>
        </select>
      </div>

      <!-- Ringkasan -->
      <div class="flex gap-3 mt-3">
        <span class="text-xs text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full">
          ✅ {{ lunasCount }} Lunas
        </span>
        <span class="text-xs text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full">
          ❌ {{ belumCount }} Belum
        </span>
        <span class="text-xs text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
          💰 {{ formatRupiah(totalBulanIni) }}
        </span>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <!-- Grid Rumah -->
    <div v-else class="px-4 py-4 grid grid-cols-2 gap-3">
      <div
        v-for="warga in wargaStore.wargas"
        :key="warga.id"
        @click="openPaymentAction(warga)"
        :class="[
          'rounded-2xl p-4 border-2 cursor-pointer transition-all duration-200 active:scale-95',
          isPaid(warga.nomorRumah)
            ? 'bg-primary-50 border-primary-300'
            : 'bg-white border-gray-200 hover:border-primary-300'
        ]"
      >
        <div class="flex items-start justify-between">
          <div>
            <p class="text-xs font-bold text-gray-500">{{ warga.nomorRumah }}</p>
            <p class="text-sm font-semibold text-gray-800 mt-0.5 truncate max-w-[90px]">{{ warga.namaDepan }}</p>
          </div>
          <span class="text-xl">{{ isPaid(warga.nomorRumah) ? '✅' : '❌' }}</span>
        </div>
        <div v-if="getPayment(warga.nomorRumah)" class="mt-2">
          <p class="text-xs text-primary-600 font-medium">{{ formatRupiah(getPayment(warga.nomorRumah).jumlah) }}</p>
          <p class="text-xs text-gray-400">{{ formatTanggal(getPayment(warga.nomorRumah).tanggal) }}</p>
        </div>
        <div v-else class="mt-2">
          <p class="text-xs text-gray-400">Tap untuk tandai lunas</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Aksi Pembayaran -->
  <Modal
    :is-open="showModal"
    :title="selectedWarga ? `${selectedWarga.nomorRumah} - ${selectedWarga.namaDepan}` : ''"
    @close="closeModal"
  >
    <div v-if="selectedWarga">
      <!-- Status saat ini -->
      <div :class="[
        'rounded-xl p-3 mb-4 text-center',
        isPaid(selectedWarga.nomorRumah) ? 'bg-primary-50' : 'bg-gray-50'
      ]">
        <p class="text-sm font-medium text-gray-600">
          {{ namaBulan[selectedBulan - 1] }} {{ selectedTahun }}
        </p>
        <p class="text-lg font-bold mt-1" :class="isPaid(selectedWarga.nomorRumah) ? 'text-primary-600' : 'text-gray-400'">
          {{ isPaid(selectedWarga.nomorRumah) ? '✅ Sudah Lunas' : '⏳ Belum Bayar' }}
        </p>
      </div>

      <!-- Form Pembayaran -->
      <form @submit.prevent="handleSavePayment" class="space-y-3">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Jumlah Pembayaran</label>
          <input
            v-model="payForm.jumlah"
            type="number"
            :placeholder="`${kasStore.settings.jumlahKasBulanan}`"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Tanggal Bayar</label>
          <input
            v-model="payForm.tanggal"
            type="date"
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Keterangan (opsional)</label>
          <input
            v-model="payForm.keterangan"
            type="text"
            placeholder="Keterangan tambahan..."
            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
        </div>

        <!-- Error -->
        <div v-if="formError" class="bg-red-50 border border-red-200 rounded-xl p-3">
          <p class="text-red-600 text-xs">{{ formError }}</p>
        </div>

        <div class="flex gap-2 pt-2">
          <!-- Tombol hapus jika sudah bayar -->
          <button
            v-if="isPaid(selectedWarga.nomorRumah)"
            type="button"
            @click="handleDeletePayment"
            :disabled="saving"
            class="flex-1 py-3 bg-red-50 border border-red-200 text-red-600 font-medium rounded-xl text-sm hover:bg-red-100 transition-colors"
          >
            Hapus
          </button>
          <button
            type="submit"
            :disabled="saving"
            class="flex-1 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
          >
            <span v-if="saving" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            {{ saving ? 'Menyimpan...' : (isPaid(selectedWarga.nomorRumah) ? 'Update' : 'Tandai Lunas') }}
          </button>
        </div>
      </form>
    </div>
  </Modal>

  <BottomNav role="admin" />
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import Modal from '@/components/Modal.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const kasStore = useKasStore()

// State
const loading = ref(true)
const showModal = ref(false)
const saving = ref(false)
const selectedWarga = ref(null)
const formError = ref('')

// Selector bulan/tahun
const now = new Date()
const selectedBulan = ref(now.getMonth() + 1)
const selectedTahun = ref(now.getFullYear())
const tahunOptions = Array.from({ length: 5 }, (_, i) => now.getFullYear() - i)

const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const payForm = ref({
  jumlah: '',
  tanggal: new Date().toISOString().split('T')[0],
  keterangan: ''
})

// Cek apakah nomorRumah sudah bayar bulan/tahun yang dipilih
function isPaid(nomorRumah) {
  return pembayaranStore.pembayarans.some(
    p => p.nomorRumah === nomorRumah &&
         p.bulan === selectedBulan.value &&
         p.tahun === selectedTahun.value
  )
}

// Ambil data pembayaran untuk nomor rumah tertentu
function getPayment(nomorRumah) {
  return pembayaranStore.pembayarans.find(
    p => p.nomorRumah === nomorRumah &&
         p.bulan === selectedBulan.value &&
         p.tahun === selectedTahun.value
  )
}

// Hitung lunas & belum
const lunasCount = computed(() =>
  wargaStore.wargas.filter(w => isPaid(w.nomorRumah)).length
)
const belumCount = computed(() => wargaStore.wargas.length - lunasCount.value)
const totalBulanIni = computed(() =>
  pembayaranStore.pembayarans
    .filter(p => p.bulan === selectedBulan.value && p.tahun === selectedTahun.value)
    .reduce((sum, p) => sum + p.jumlah, 0)
)

function openPaymentAction(warga) {
  selectedWarga.value = warga
  const existing = getPayment(warga.nomorRumah)
  if (existing) {
    payForm.value = {
      jumlah: existing.jumlah,
      tanggal: existing.tanggal
        ? new Date(existing.tanggal).toISOString().split('T')[0]
        : new Date().toISOString().split('T')[0],
      keterangan: existing.keterangan || ''
    }
  } else {
    payForm.value = {
      jumlah: kasStore.settings.jumlahKasBulanan,
      tanggal: new Date().toISOString().split('T')[0],
      keterangan: ''
    }
  }
  formError.value = ''
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedWarga.value = null
}

async function handleSavePayment() {
  formError.value = ''
  saving.value = true
  try {
    const existing = getPayment(selectedWarga.value.nomorRumah)
    const data = {
      nomorRumah: selectedWarga.value.nomorRumah,
      wargaId: selectedWarga.value.uid,
      bulan: selectedBulan.value,
      tahun: selectedTahun.value,
      jumlah: Number(payForm.value.jumlah),
      tanggal: new Date(payForm.value.tanggal),
      keterangan: payForm.value.keterangan
    }

    if (existing) {
      await pembayaranStore.update(existing.id, data)
    } else {
      await pembayaranStore.add(data)
    }
    closeModal()
  } catch (err) {
    formError.value = pembayaranStore.error || 'Gagal menyimpan pembayaran.'
  } finally {
    saving.value = false
  }
}

async function handleDeletePayment() {
  const existing = getPayment(selectedWarga.value.nomorRumah)
  if (!existing) return
  saving.value = true
  try {
    await pembayaranStore.remove(existing.id)
    closeModal()
  } catch (err) {
    formError.value = 'Gagal menghapus pembayaran.'
  } finally {
    saving.value = false
  }
}

function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

async function loadData() {
  loading.value = true
  try {
    await Promise.all([
      wargaStore.fetchAll(),
      pembayaranStore.fetchAll(selectedTahun.value),
      kasStore.fetchSettings()
    ])
  } finally {
    loading.value = false
  }
}

onMounted(loadData)
</script>
