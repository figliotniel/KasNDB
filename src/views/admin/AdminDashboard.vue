<template>
  <!-- Dashboard Admin -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-gradient-to-r from-primary-700 to-primary-900 px-4 pt-12 pb-8">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-primary-200 text-sm">Selamat datang,</p>
          <h1 class="text-white text-xl font-bold mt-0.5">Administrator 👑</h1>
          <p class="text-primary-200 text-xs mt-1">{{ kasStore.settings.namaPerumahan }}</p>
        </div>
        <div class="text-right">
          <p class="text-primary-200 text-xs">Tahun Aktif</p>
          <p class="text-white font-bold">{{ tahun }}</p>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <div v-else class="px-4 -mt-4 space-y-4">
      <!-- Kartu Ringkasan -->
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="text-xs text-gray-500">Total Warga</p>
          <p class="text-2xl font-bold text-primary-600 mt-1">{{ wargaStore.wargas.length }}</p>
          <p class="text-xs text-gray-400">rumah terdaftar</p>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="text-xs text-gray-500">Pemasukan {{ namaBulanIni }}</p>
          <p class="text-base font-bold text-primary-600 mt-1">{{ formatRupiah(pemasukanBulanIni) }}</p>
          <p class="text-xs text-gray-400">{{ lunasBulanIni }} dari {{ wargaStore.wargas.length }} rumah</p>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="text-xs text-gray-500">Total Pengeluaran</p>
          <p class="text-base font-bold text-red-500 mt-1">{{ formatRupiah(pengeluaranStore.totalPengeluaran) }}</p>
          <p class="text-xs text-gray-400">tahun {{ tahun }}</p>
        </div>

        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="text-xs text-gray-500">Saldo Kas</p>
          <p :class="['text-base font-bold mt-1', saldoKas >= 0 ? 'text-primary-600' : 'text-red-600']">
            {{ formatRupiah(saldoKas) }}
          </p>
          <p class="text-xs text-gray-400">total keseluruhan</p>
        </div>
      </div>

      <!-- Visual Bar: Lunas vs Belum -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-sm font-semibold text-gray-700 mb-3">
          📊 Pembayaran {{ namaBulanIni }} {{ tahun }}
        </h2>
        <div class="flex items-center gap-2 mb-3">
          <div class="h-4 bg-primary-500 rounded-full transition-all duration-500"
               :style="{ width: `${persentaseLunas}%` }"></div>
          <div class="h-4 bg-red-200 rounded-full flex-1"></div>
        </div>
        <div class="flex justify-between text-xs text-gray-500">
          <span class="text-primary-600 font-medium">✅ {{ lunasBulanIni }} Lunas</span>
          <span class="text-red-500 font-medium">❌ {{ belumBulanIni }} Belum</span>
        </div>
      </div>

      <!-- Daftar Yang Belum Bayar -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-sm font-semibold text-gray-700 mb-3">
          ⚠️ Belum Bayar {{ namaBulanIni }}
          <span class="text-red-500 ml-1">({{ belumBayarList.length }})</span>
        </h2>
        <div v-if="belumBayarList.length === 0" class="text-center py-4">
          <p class="text-2xl">🎉</p>
          <p class="text-sm text-gray-500 mt-1">Semua warga sudah bayar!</p>
        </div>
        <div v-else class="flex flex-wrap gap-2">
          <span
            v-for="rumah in belumBayarList"
            :key="rumah"
            class="bg-red-50 border border-red-200 text-red-600 text-xs font-medium px-2.5 py-1 rounded-lg"
          >
            {{ rumah }}
          </span>
        </div>
      </div>

      <!-- Menu Cepat Admin -->
      <div class="grid grid-cols-2 gap-3">
        <router-link to="/admin/warga"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors">
          <span class="text-2xl">👥</span>
          <div>
            <p class="text-sm font-semibold text-gray-700">Kelola Warga</p>
            <p class="text-xs text-gray-400">Tambah/edit warga</p>
          </div>
        </router-link>

        <router-link to="/admin/pembayaran"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors">
          <span class="text-2xl">💰</span>
          <div>
            <p class="text-sm font-semibold text-gray-700">Pembayaran</p>
            <p class="text-xs text-gray-400">Catat iuran</p>
          </div>
        </router-link>

        <router-link to="/admin/pengeluaran"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors">
          <span class="text-2xl">💸</span>
          <div>
            <p class="text-sm font-semibold text-gray-700">Pengeluaran</p>
            <p class="text-xs text-gray-400">Catat biaya</p>
          </div>
        </router-link>

        <router-link to="/laporan"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors">
          <span class="text-2xl">📊</span>
          <div>
            <p class="text-sm font-semibold text-gray-700">Laporan</p>
            <p class="text-xs text-gray-400">Export PDF</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Bottom Navigation Admin -->
  <BottomNav role="admin" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { usePengeluaranStore } from '@/stores/pengeluaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const pengeluaranStore = usePengeluaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const tahun = new Date().getFullYear()
const bulanSekarang = new Date().getMonth() + 1

const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const namaBulanIni = namaBulan[bulanSekarang - 1]

// Pembayaran bulan ini
const pemasukanBulanIni = computed(() =>
  pembayaranStore.pembayarans
    .filter(p => p.bulan === bulanSekarang && p.tahun === tahun)
    .reduce((sum, p) => sum + p.jumlah, 0)
)

// Daftar nomor rumah yang sudah lunas bulan ini
const lunasSet = computed(() => {
  const set = new Set()
  pembayaranStore.pembayarans
    .filter(p => p.bulan === bulanSekarang && p.tahun === tahun)
    .forEach(p => set.add(p.nomorRumah))
  return set
})

const lunasBulanIni = computed(() => lunasSet.value.size)
const belumBulanIni = computed(() => wargaStore.wargas.length - lunasBulanIni.value)
const persentaseLunas = computed(() =>
  wargaStore.wargas.length > 0
    ? Math.round((lunasBulanIni.value / wargaStore.wargas.length) * 100)
    : 0
)

// Daftar rumah yang belum bayar
const belumBayarList = computed(() =>
  wargaStore.wargas
    .filter(w => !lunasSet.value.has(w.nomorRumah))
    .map(w => w.nomorRumah)
    .sort()
)

// Saldo kas keseluruhan
const saldoKas = computed(() =>
  kasStore.saldoKas(pembayaranStore.pembayarans, pengeluaranStore.pengeluarans)
)

function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

onMounted(async () => {
  try {
    await Promise.all([
      kasStore.fetchSettings(),
      wargaStore.fetchAll(),
      pembayaranStore.fetchAll(tahun),
      pengeluaranStore.fetchAll(tahun)
    ])
  } catch (err) {
    console.error('Error loading admin dashboard:', err)
  } finally {
    loading.value = false
  }
})
</script>
