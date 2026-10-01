<template>
  <!-- Halaman Profil Warga -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header dengan Gradient -->
    <div class="bg-gradient-to-r from-primary-600 to-primary-700 px-4 pt-12 pb-16">
      <div class="text-center">
        <div class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
          <span class="text-4xl font-bold text-white">
            {{ wargaData?.namaDepan?.charAt(0)?.toUpperCase() || '?' }}
          </span>
        </div>
        <h1 class="text-white text-xl font-bold">{{ wargaData?.namaLengkap || 'Memuat...' }}</h1>
        <div class="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 mt-2">
          <span class="text-white text-sm font-bold">🏠 {{ wargaData?.nomorRumah }}</span>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <div v-else class="px-4 -mt-8 space-y-4">
      <!-- Info Akun -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50">
          <h2 class="text-sm font-semibold text-gray-700">👤 Informasi Akun</h2>
        </div>
        <div class="divide-y divide-gray-50">
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-gray-500">Nomor Rumah</span>
            <span class="text-sm font-semibold text-gray-800">{{ wargaData?.nomorRumah }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-gray-500">Nama Depan</span>
            <span class="text-sm font-semibold text-gray-800">{{ wargaData?.namaDepan }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-gray-500">Nama Lengkap</span>
            <span class="text-sm font-semibold text-gray-800">{{ wargaData?.namaLengkap }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-gray-500">Nomor HP</span>
            <span class="text-sm font-semibold text-gray-800">{{ wargaData?.noHp || '-' }}</span>
          </div>
          <div class="flex items-center justify-between px-4 py-3">
            <span class="text-sm text-gray-500">Iuran Bulanan</span>
            <span class="text-sm font-bold text-primary-600">{{ formatRupiah(kasStore.settings.jumlahKasBulanan) }}</span>
          </div>
        </div>
      </div>

      <!-- Status Pembayaran Tahun Ini -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-50 flex items-center justify-between">
          <h2 class="text-sm font-semibold text-gray-700">
            📅 Pembayaran {{ tahunIni }}
          </h2>
          <span class="text-xs text-primary-600 font-medium bg-primary-50 px-2 py-0.5 rounded-full">
            {{ totalLunas }}/12 Lunas
          </span>
        </div>
        <div class="divide-y divide-gray-50">
          <div
            v-for="(nama, idx) in namaBulan"
            :key="idx"
            class="flex items-center justify-between px-4 py-2.5"
          >
            <span class="text-sm text-gray-600">{{ nama }}</span>
            <div class="flex items-center gap-2">
              <span v-if="pembayaranBulan[idx + 1]" class="text-xs text-gray-400">
                {{ formatTanggal(pembayaranBulan[idx + 1]?.tanggal) }}
              </span>
              <StatusBadge :status="pembayaranBulan[idx + 1] ? 'lunas' : 'belum'" />
            </div>
          </div>
        </div>
        <!-- Total Dibayar -->
        <div class="px-4 py-3 bg-primary-50 border-t border-primary-100 flex justify-between items-center">
          <span class="text-sm font-semibold text-gray-700">Total Dibayar</span>
          <span class="text-sm font-bold text-primary-600">{{ formatRupiah(totalDibayar) }}</span>
        </div>
      </div>

      <!-- Username Info -->
      <div class="bg-amber-50 border border-amber-200 rounded-2xl p-4">
        <h3 class="text-xs font-semibold text-amber-700 mb-1">🔑 Info Login</h3>
        <p class="text-xs text-amber-600">
          Username: <span class="font-bold">{{ wargaData?.nomorRumah }}</span>
        </p>
        <p class="text-xs text-amber-600">
          Password: <span class="font-bold">{{ wargaData?.namaDepan }}</span> (nama depan Anda)
        </p>
      </div>

      <!-- Tombol Keluar -->
      <button
        @click="handleLogout"
        :disabled="loggingOut"
        class="w-full py-3.5 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2 text-sm"
      >
        <span v-if="loggingOut" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
        {{ loggingOut ? 'Keluar...' : '🚪 Keluar dari Akun' }}
      </button>
    </div>
  </div>

  <BottomNav role="warga" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import StatusBadge from '@/components/StatusBadge.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const router = useRouter()
const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const loggingOut = ref(false)
const wargaData = ref(null)
const tahunIni = new Date().getFullYear()

const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

// Map pembayaran per bulan
const pembayaranBulan = computed(() => {
  const map = {}
  pembayaranStore.pembayarans.forEach(p => { map[p.bulan] = p })
  return map
})

// Hitung total bulan lunas
const totalLunas = computed(() => Object.keys(pembayaranBulan.value).length)

// Hitung total yang sudah dibayarkan
const totalDibayar = computed(() =>
  pembayaranStore.pembayarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
)

function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
}

/**
 * Keluar dari akun dan redirect ke login
 */
async function handleLogout() {
  loggingOut.value = true
  try {
    await authStore.logout()
    router.push('/login')
  } catch (err) {
    console.error('Error logging out:', err)
    loggingOut.value = false
  }
}

onMounted(async () => {
  try {
    await kasStore.fetchSettings()
    const uid = authStore.user?.uid
    if (uid) {
      await wargaStore.fetchAll()
      wargaData.value = wargaStore.wargas.find(w => w.uid === uid) || null
      await pembayaranStore.fetchByWarga(uid, tahunIni)
    }
  } catch (err) {
    console.error('Error loading profil:', err)
  } finally {
    loading.value = false
  }
})
</script>
