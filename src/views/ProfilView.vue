<template>
  <!-- Halaman Profil Warga - Clean, Simple, Mobile-First -->
  <div class="min-h-screen bg-zinc-50 pb-28">
    <!-- Header App Bar -->
    <header class="bg-white border-b border-zinc-200/80 sticky top-0 z-20 pt-safe">
      <div class="max-w-md mx-auto px-4 py-3.5 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center">
            <AppIcon name="user" className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <h1 class="text-base font-bold text-zinc-900 leading-tight">Profil Warga</h1>
            <p class="text-[11px] text-zinc-400">Informasi akun & riwayat</p>
          </div>
        </div>

        <button
          type="button"
          @click="showLogoutConfirm = true"
          :disabled="loggingOut"
          class="p-2 text-zinc-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors"
          title="Keluar dari akun"
          aria-label="Keluar"
        >
          <AppIcon name="logout" className="w-5 h-5" />
        </button>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main Content -->
    <main v-else class="max-w-md mx-auto px-4 pt-4 space-y-4">
      <!-- Resident Identity Card -->
      <div class="bg-white rounded-2xl p-5 border border-zinc-200/80 shadow-xs flex items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-bold text-xl flex items-center justify-center flex-shrink-0 shadow-sm shadow-emerald-600/20">
          {{ (wargaData?.namaDepan || 'W').charAt(0).toUpperCase() }}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-bold text-xs ring-1 ring-inset ring-emerald-600/20">
              Rumah {{ wargaData?.nomorRumah }}
            </span>
            <span class="text-[11px] text-zinc-400">{{ kasStore.settings.namaPerumahan || 'Perumahan NDB' }}</span>
          </div>
          <h2 class="text-base font-bold text-zinc-900 mt-1 truncate">
            {{ wargaData?.namaLengkap || wargaData?.namaDepan || 'Warga' }}
          </h2>
          <p class="text-xs text-zinc-500 truncate">
            {{ wargaData?.noHp || 'Nomor HP belum didaftarkan' }}
          </p>
        </div>
      </div>

      <!-- Detail Informasi Akun -->
      <section class="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
        <div class="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
          <h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
            Rincian Akun
          </h3>
          <span class="text-[11px] text-zinc-400">Terdaftar</span>
        </div>
        <div class="divide-y divide-zinc-100 text-xs sm:text-sm">
          <div class="px-4 py-3 flex items-center justify-between">
            <span class="text-zinc-500">Nomor Rumah</span>
            <span class="font-semibold text-zinc-900">{{ wargaData?.nomorRumah }}</span>
          </div>
          <div class="px-4 py-3 flex items-center justify-between">
            <span class="text-zinc-500">Nama Depan</span>
            <span class="font-semibold text-zinc-900">{{ wargaData?.namaDepan }}</span>
          </div>
          <div class="px-4 py-3 flex items-center justify-between">
            <span class="text-zinc-500">Nama Lengkap</span>
            <span class="font-semibold text-zinc-900">{{ wargaData?.namaLengkap || '-' }}</span>
          </div>
          <div class="px-4 py-3 flex items-center justify-between">
            <span class="text-zinc-500">Nomor WhatsApp</span>
            <span class="font-semibold text-zinc-900">{{ wargaData?.noHp || '-' }}</span>
          </div>
          <div class="px-4 py-3 flex items-center justify-between">
            <span class="text-zinc-500">Iuran Kas Bulanan</span>
            <span class="font-bold text-emerald-700">{{ formatRupiah(kasStore.settings.jumlahKasBulanan) }}</span>
          </div>
        </div>
      </section>

      <!-- Ringkasan Iuran Tahun Ini -->
      <section class="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
        <div class="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <AppIcon name="calendar" className="w-4 h-4 text-emerald-600" />
            <h3 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Riwayat Iuran {{ tahunIni }}
            </h3>
          </div>
          <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
            {{ totalLunas }}/12 Lunas
          </span>
        </div>

        <div class="divide-y divide-zinc-100 text-xs sm:text-sm max-h-72 overflow-y-auto no-scrollbar">
          <div
            v-for="(nama, idx) in namaBulan"
            :key="idx"
            class="px-4 py-2.5 flex items-center justify-between"
          >
            <span class="font-medium text-zinc-700">{{ nama }}</span>
            <div class="flex items-center gap-2">
              <span v-if="pembayaranBulan[idx + 1]" class="text-[11px] text-zinc-400">
                {{ formatTanggal(pembayaranBulan[idx + 1]?.tanggal) }}
              </span>
              <StatusBadge :status="pembayaranBulan[idx + 1] ? 'lunas' : 'belum'" size="sm" />
            </div>
          </div>
        </div>

        <div class="px-4 py-3 bg-zinc-50 border-t border-zinc-200/80 flex items-center justify-between">
          <span class="text-xs font-semibold text-zinc-700">Total Iuran Dibayarkan</span>
          <span class="text-xs font-bold text-emerald-700">{{ formatRupiah(totalDibayar) }}</span>
        </div>
      </section>

      <!-- Informasi Akun & Kredensial Login -->
      <div class="bg-zinc-100/80 border border-zinc-200 rounded-2xl p-4 space-y-2">
        <div class="flex items-center gap-1.5 text-zinc-700">
          <AppIcon name="info" className="w-4 h-4 text-zinc-500" />
          <h4 class="text-xs font-semibold uppercase tracking-wider">Kredensial Masuk</h4>
        </div>
        <p class="text-xs text-zinc-500">
          Username: <span class="font-bold text-zinc-800">{{ wargaData?.nomorRumah }}</span>
        </p>
        <div class="flex items-center justify-between text-xs text-zinc-500">
          <p>
            Kata Sandi: <span class="font-mono font-bold text-zinc-800">{{ showPassword ? wargaData?.namaDepan : '••••••••' }}</span>
          </p>
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="text-xs text-emerald-700 font-semibold hover:underline flex items-center gap-1"
          >
            <AppIcon :name="showPassword ? 'eye-off' : 'eye'" className="w-3.5 h-3.5" />
            <span>{{ showPassword ? 'Sembunyikan' : 'Lihat Sandi' }}</span>
          </button>
        </div>
      </div>

      <!-- Tombol Keluar dari Akun -->
      <button
        type="button"
        @click="showLogoutConfirm = true"
        :disabled="loggingOut"
        class="w-full py-3.5 bg-white hover:bg-rose-50 border border-zinc-200 hover:border-rose-200 text-rose-600 font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm shadow-xs min-h-[46px]"
      >
        <AppIcon name="logout" className="w-4 h-4" />
        <span>Keluar dari Akun</span>
      </button>
    </main>

    <!-- Dialog Konfirmasi Logout -->
    <ConfirmDialog
      :is-open="showLogoutConfirm"
      title="Keluar dari Akun?"
      message="Anda akan keluar dari sesi akun warga dan dialihkan ke halaman login."
      confirmText="Keluar"
      type="danger"
      @confirm="handleLogout"
      @cancel="showLogoutConfirm = false"
    />

    <!-- Bottom Navigation Warga -->
    <BottomNav role="warga" />
  </div>
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
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'

const router = useRouter()
const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const loggingOut = ref(false)
const showPassword = ref(false)
const showLogoutConfirm = ref(false)
const wargaData = ref(null)
const tahunIni = new Date().getFullYear()

const namaBulan = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]

const pembayaranBulan = computed(() => {
  const map = {}
  pembayaranStore.pembayarans.forEach(p => { map[p.bulan] = p })
  return map
})

const totalLunas = computed(() => Object.keys(pembayaranBulan.value).length)
const totalDibayar = computed(() =>
  pembayaranStore.pembayarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
)

function formatRupiah(angka) {
  return 'Rp ' + Number(angka || 0).toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return ''
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return ''
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
}

async function handleLogout() {
  loggingOut.value = true
  try {
    await authStore.logout()
    router.push('/login')
  } catch (err) {
    console.error('Error logging out:', err)
  } finally {
    loggingOut.value = false
    showLogoutConfirm.value = false
  }
}

onMounted(async () => {
  try {
    await kasStore.fetchSettings()
    const uid = authStore.user?.uid
    const userEmail = (authStore.user?.email || '').toLowerCase()
    const nomorFromEmail = userEmail.includes('@') ? userEmail.split('@')[0] : ''

    if (uid || nomorFromEmail) {
      await wargaStore.fetchAll()
      wargaData.value = wargaStore.wargas.find(w => w.uid === uid)
        || wargaStore.wargas.find(w => (w.nomorRumah || '').toLowerCase() === nomorFromEmail)
        || null

      const effectiveUid = wargaData.value?.uid || uid
      if (effectiveUid) {
        await pembayaranStore.fetchByWarga(effectiveUid, tahunIni)
      }
    }
  } catch (err) {
    console.error('Error loading profil:', err)
  } finally {
    loading.value = false
  }
})
</script>
