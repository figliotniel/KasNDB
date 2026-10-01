<template>
  <!-- Dashboard untuk warga (bukan admin) -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-gradient-to-r from-primary-600 to-primary-700 px-4 pt-12 pb-8">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-primary-200 text-sm">Selamat datang,</p>
          <h1 class="text-white text-xl font-bold mt-0.5">
            {{ wargaData?.namaDepan || authStore.user?.displayName || 'Warga' }} 👋
          </h1>
          <p class="text-primary-200 text-xs mt-1">{{ kasStore.settings.namaPerumahan }}</p>
        </div>
        <div class="bg-white/20 rounded-full px-3 py-1.5">
          <span class="text-white text-sm font-semibold">{{ wargaData?.nomorRumah }}</span>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <div v-else class="px-4 -mt-4 space-y-4">
      <!-- Kartu Status Pembayaran Bulan Ini -->
      <div :class="[
        'rounded-2xl p-5 shadow-sm',
        sudahBayarBulanIni ? 'bg-primary-50 border border-primary-200' : 'bg-red-50 border border-red-200'
      ]">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Status Bulan {{ namaBulanIni }}</p>
            <p :class="['text-lg font-bold mt-1', sudahBayarBulanIni ? 'text-primary-700' : 'text-red-600']">
              {{ sudahBayarBulanIni ? '✅ Sudah Bayar' : '❌ Belum Bayar' }}
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Iuran: {{ formatRupiah(kasStore.settings.jumlahKasBulanan) }}/bulan
            </p>
          </div>
          <div :class="['text-4xl', sudahBayarBulanIni ? 'text-primary-400' : 'text-red-300']">
            {{ sudahBayarBulanIni ? '🎉' : '⚠️' }}
          </div>
        </div>
      </div>

      <!-- Grid Info Kartu -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Total Bulan Lunas -->
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="text-xs text-gray-500 font-medium">Lunas Tahun Ini</p>
          <p class="text-2xl font-bold text-primary-600 mt-1">{{ totalBulanLunas }}/12</p>
          <p class="text-xs text-gray-400 mt-0.5">bulan</p>
        </div>

        <!-- Saldo Kas -->
        <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <p class="text-xs text-gray-500 font-medium">Saldo Kas</p>
          <p class="text-lg font-bold text-primary-600 mt-1">{{ formatRupiah(saldoKas) }}</p>
          <p class="text-xs text-gray-400 mt-0.5">total perumahan</p>
        </div>
      </div>

      <!-- Rekap Pembayaran Tahun Ini -->
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
        <h2 class="text-sm font-semibold text-gray-700 mb-3">
          📅 Rekap {{ tahunIni }}
        </h2>
        <div class="grid grid-cols-6 gap-1.5">
          <div
            v-for="(nama, idx) in namaBulan"
            :key="idx"
            :class="[
              'flex flex-col items-center py-2 rounded-lg text-xs font-medium',
              pembayaranBulan[idx + 1]
                ? 'bg-primary-100 text-primary-700'
                : (idx + 1 <= bulanSekarang ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400')
            ]"
          >
            <span>{{ nama.slice(0, 3) }}</span>
            <span class="text-base">{{ pembayaranBulan[idx + 1] ? '✅' : (idx + 1 <= bulanSekarang ? '❌' : '-') }}</span>
          </div>
        </div>
      </div>

      <!-- Menu Navigasi -->
      <div class="grid grid-cols-2 gap-3">
        <router-link
          to="/laporan"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors"
        >
          <span class="text-2xl">📊</span>
          <div>
            <p class="text-sm font-semibold text-gray-700">Laporan</p>
            <p class="text-xs text-gray-400">Rekap kas</p>
          </div>
        </router-link>

        <router-link
          to="/profil"
          class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:bg-primary-50 transition-colors"
        >
          <span class="text-2xl">👤</span>
          <div>
            <p class="text-sm font-semibold text-gray-700">Profil</p>
            <p class="text-xs text-gray-400">Info akun</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <!-- Bottom Navigation -->
  <BottomNav role="warga" />
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
const wargaData = ref(null)

// Nama bulan dalam Bahasa Indonesia
const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const tahunIni = new Date().getFullYear()
const bulanSekarang = new Date().getMonth() + 1

// Nama bulan ini
const namaBulanIni = computed(() => namaBulan[bulanSekarang - 1])

// Map pembayaran per bulan
const pembayaranBulan = computed(() => {
  const map = {}
  pembayaranStore.pembayarans.forEach(p => {
    map[p.bulan] = p
  })
  return map
})

// Apakah sudah bayar bulan ini
const sudahBayarBulanIni = computed(() => !!pembayaranBulan.value[bulanSekarang])

// Total bulan yang sudah lunas
const totalBulanLunas = computed(() => Object.keys(pembayaranBulan.value).length)

// Saldo kas keseluruhan
const saldoKas = computed(() => {
  const totalMasuk = pembayaranStore.totalPemasukan
  const totalKeluar = pengeluaranStore.totalPengeluaran
  return totalMasuk - totalKeluar
})

/**
 * Format angka ke format Rupiah Indonesia
 */
function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

onMounted(async () => {
  try {
    // Muat pengaturan dan data pembayaran warga ini
    await kasStore.fetchSettings()

    const uid = authStore.user?.uid
    if (uid) {
      // Ambil data warga dari Firestore
      await wargaStore.fetchAll()
      wargaData.value = wargaStore.wargas.find(w => w.uid === uid) || null

      // Ambil pembayaran warga ini untuk tahun aktif
      await pembayaranStore.fetchByWarga(uid, tahunIni)

      // Ambil semua pengeluaran untuk kalkulasi saldo kas
      // (untuk transparansi, warga bisa lihat total saldo perumahan)
      await pengeluaranStore.fetchAll(tahunIni)
    }
  } catch (err) {
    console.error('Error loading dashboard:', err)
  } finally {
    loading.value = false
  }
})
</script>
