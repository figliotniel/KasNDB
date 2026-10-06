<template>
  <!-- Portal Warga (Publik) - Clean, Mobile-First, User-Friendly -->
  <div class="min-h-screen bg-zinc-50 pb-28">
    <!-- Header App Bar -->
    <header class="bg-white border-b border-zinc-200/80 sticky top-0 z-20 pt-safe">
      <div class="max-w-md mx-auto px-4 py-3.5 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-emerald-600/20">
            {{ (wargaData?.namaDepan || authStore.user?.displayName || 'W').charAt(0).toUpperCase() }}
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-xs text-zinc-500 font-medium">Rumah</span>
              <span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-xs ring-1 ring-inset ring-emerald-600/20">
                {{ wargaData?.nomorRumah || '—' }}
              </span>
            </div>
            <h1 class="text-sm font-semibold text-zinc-900 leading-tight">
              {{ wargaData?.namaDepan || authStore.user?.displayName || 'Warga' }}
            </h1>
          </div>
        </div>

        <div class="text-right">
          <span class="text-[11px] font-medium text-zinc-400 block">{{ kasStore.settings.namaPerumahan || 'Perumahan NDB' }}</span>
          <span class="text-xs font-semibold text-zinc-700">Tahun {{ tahunIni }}</span>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main Content -->
    <main v-else class="max-w-md mx-auto px-4 pt-4 space-y-4">
      <!-- Status Card Bulan Berjalan -->
      <div
        :class="[
          'rounded-2xl p-5 border shadow-xs transition-all',
          sudahBayarBulanIni
            ? 'bg-white border-emerald-200/80'
            : 'bg-white border-rose-200/80'
        ]"
      >
        <div class="flex items-start justify-between gap-3">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="text-xs font-medium text-zinc-500">Iuran Bulan {{ namaBulanIni }}</span>
              <StatusBadge :status="sudahBayarBulanIni ? 'lunas' : 'belum'" size="sm" />
            </div>
            <div class="text-xl font-bold text-zinc-900">
              {{ formatRupiah(kasStore.settings.jumlahKasBulanan) }}
            </div>
            <p v-if="sudahBayarBulanIni" class="text-xs text-emerald-700 font-medium">
              Tercatat lunas untuk periode ini. Terima kasih!
            </p>
            <p v-else class="text-xs text-zinc-500">
              Iuran kas bulanan belum tercatat oleh bendahara.
            </p>
          </div>

          <div
            :class="[
              'w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0',
              sudahBayarBulanIni ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
            ]"
          >
            <AppIcon :name="sudahBayarBulanIni ? 'check-circle' : 'wallet'" className="w-6 h-6" />
          </div>
        </div>

        <!-- Tombol Konfirmasi / Bayar jika belum bayar -->
        <div v-if="!sudahBayarBulanIni" class="mt-4 pt-3.5 border-t border-zinc-100 flex items-center justify-between">
          <span class="text-xs text-zinc-500">Sudah transfer?</span>
          <button
            type="button"
            @click="openKonfirmasiWA"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs transition-colors"
          >
            <AppIcon name="whatsapp" className="w-3.5 h-3.5" />
            <span>Konfirmasi ke Bendahara</span>
          </button>
        </div>
      </div>

      <!-- Financial Metric Cards -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Progress Lunas Warga -->
        <div class="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-xs">
          <div class="flex items-center justify-between text-zinc-400 mb-2">
            <span class="text-xs font-medium text-zinc-500">Status Pembayaran</span>
            <AppIcon name="calendar" className="w-4 h-4 text-zinc-400" />
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-2xl font-bold text-zinc-900">{{ totalBulanLunas }}</span>
            <span class="text-xs text-zinc-400 font-medium">/ 12 bulan</span>
          </div>
          <div class="w-full bg-zinc-100 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              class="bg-emerald-500 h-full rounded-full transition-all duration-300"
              :style="{ width: `${(totalBulanLunas / 12) * 100}%` }"
            ></div>
          </div>
        </div>

        <!-- Saldo Kas Keseluruhan -->
        <div class="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-xs">
          <div class="flex items-center justify-between text-zinc-400 mb-2">
            <span class="text-xs font-medium text-zinc-500">Saldo Kas Bersih</span>
            <AppIcon name="building" className="w-4 h-4 text-zinc-400" />
          </div>
          <div class="text-lg font-bold text-emerald-700 truncate">
            {{ formatRupiah(saldoKas) }}
          </div>
          <p class="text-[11px] text-zinc-400 mt-2 flex items-center gap-1">
            <AppIcon name="check" className="w-3 h-3 text-emerald-600" />
            <span>Terbuka & transparan</span>
          </p>
        </div>
      </div>

      <!-- Rekap 12 Bulan Grid -->
      <div class="bg-white rounded-2xl p-4.5 border border-zinc-200/80 shadow-xs">
        <div class="flex items-center justify-between mb-3.5">
          <div class="flex items-center gap-2">
            <AppIcon name="calendar" className="w-4 h-4 text-emerald-600" />
            <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Riwayat Iuran {{ tahunIni }}
            </h2>
          </div>
          <span class="text-xs text-zinc-400 font-medium">Ketuk untuk rincian</span>
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-6 gap-2">
          <button
            v-for="(nama, idx) in namaBulanSingkat"
            :key="idx"
            type="button"
            @click="selectBulanDetail(idx + 1)"
            :class="[
              'p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all duration-150 active:scale-95',
              pembayaranBulan[idx + 1]
                ? 'bg-emerald-50/70 border-emerald-200 text-emerald-800'
                : (idx + 1 <= bulanSekarang
                  ? 'bg-rose-50/60 border-rose-200 text-rose-700'
                  : 'bg-zinc-50 border-zinc-200/60 text-zinc-400')
            ]"
          >
            <span class="text-[11px] font-semibold">{{ nama }}</span>
            <div class="mt-1">
              <AppIcon
                v-if="pembayaranBulan[idx + 1]"
                name="check"
                className="w-3.5 h-3.5 text-emerald-600"
                :strokeWidth="2.5"
              />
              <span
                v-else-if="idx + 1 <= bulanSekarang"
                class="w-1.5 h-1.5 rounded-full bg-rose-500 block"
              ></span>
              <span
                v-else
                class="w-1.5 h-1.5 rounded-full bg-zinc-300 block"
              ></span>
            </div>
          </button>
        </div>

        <div class="flex items-center justify-between pt-3 mt-3 border-t border-zinc-100 text-[11px] text-zinc-500">
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Lunas ({{ totalBulanLunas }})</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>Belum ({{ Math.max(0, bulanSekarang - totalBulanLunas) }})</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-zinc-300"></span>
            <span>Akan Datang</span>
          </div>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="grid grid-cols-2 gap-3">
        <router-link
          to="/laporan"
          class="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-xs flex items-center gap-3 hover:border-emerald-300 transition-colors"
        >
          <div class="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center flex-shrink-0">
            <AppIcon name="chart" className="w-5 h-5 text-emerald-600" />
          </div>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-zinc-800">Laporan Kas</p>
            <p class="text-[11px] text-zinc-400 truncate">Unduh PDF & Rekap</p>
          </div>
        </router-link>

        <router-link
          to="/profil"
          class="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-xs flex items-center gap-3 hover:border-emerald-300 transition-colors"
        >
          <div class="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-700 flex items-center justify-center flex-shrink-0">
            <AppIcon name="user" className="w-5 h-5 text-emerald-600" />
          </div>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-zinc-800">Profil Saya</p>
            <p class="text-[11px] text-zinc-400 truncate">Data Akun & Sandi</p>
          </div>
        </router-link>
      </div>
    </main>

    <!-- Modal Rincian Bulan -->
    <Modal
      :is-open="showDetailModal"
      :title="selectedMonthName ? `Iuran ${selectedMonthName} ${tahunIni}` : 'Rincian Iuran'"
      @close="showDetailModal = false"
    >
      <div v-if="selectedPayment" class="space-y-4">
        <div class="p-4 bg-emerald-50 rounded-2xl border border-emerald-200/80 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <AppIcon name="check" className="w-5 h-5" :strokeWidth="2.5" />
          </div>
          <div>
            <span class="text-xs font-semibold text-emerald-800 uppercase tracking-wide">Status: Lunas</span>
            <div class="text-lg font-bold text-emerald-950">{{ formatRupiah(selectedPayment.jumlah) }}</div>
          </div>
        </div>

        <div class="divide-y divide-zinc-100 text-xs sm:text-sm">
          <div class="py-2.5 flex justify-between">
            <span class="text-zinc-500">Tanggal Bayar</span>
            <span class="font-semibold text-zinc-800">{{ formatTanggal(selectedPayment.tanggal) }}</span>
          </div>
          <div class="py-2.5 flex justify-between">
            <span class="text-zinc-500">Nomor Rumah</span>
            <span class="font-semibold text-zinc-800">{{ selectedPayment.nomorRumah }}</span>
          </div>
          <div v-if="selectedPayment.keterangan" class="py-2.5 flex justify-between">
            <span class="text-zinc-500">Catatan</span>
            <span class="font-medium text-zinc-800 text-right">{{ selectedPayment.keterangan }}</span>
          </div>
        </div>

        <button
          type="button"
          @click="showDetailModal = false"
          class="w-full py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold rounded-xl text-xs transition-colors"
        >
          Tutup
        </button>
      </div>

      <div v-else class="space-y-4">
        <div class="p-4 bg-rose-50 rounded-2xl border border-rose-200/80 flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
            <AppIcon name="x" className="w-5 h-5" :strokeWidth="2.5" />
          </div>
          <div>
            <span class="text-xs font-semibold text-rose-800 uppercase tracking-wide">Status: Belum Lunas</span>
            <div class="text-sm font-medium text-rose-900">Iuran belum dibayarkan</div>
          </div>
        </div>

        <p class="text-xs text-zinc-500 leading-relaxed">
          Silakan lakukan pembayaran iuran bulanan ke bendahara RT/RW. Anda dapat langsung mengonfirmasi via WhatsApp setelah transfer.
        </p>

        <button
          type="button"
          @click="openKonfirmasiWA"
          class="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
        >
          <AppIcon name="whatsapp" className="w-4 h-4" />
          <span>Konfirmasi ke Bendahara</span>
        </button>
      </div>
    </Modal>

    <!-- Bottom Navigation Warga -->
    <BottomNav role="warga" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '@/firebase/config.js'
import { useAuthStore } from '@/stores/auth.js'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { usePengeluaranStore } from '@/stores/pengeluaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import StatusBadge from '@/components/StatusBadge.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'
import Modal from '@/components/Modal.vue'

const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const pengeluaranStore = usePengeluaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const wargaData = ref(null)

const showDetailModal = ref(false)
const selectedMonthIdx = ref(null)

const namaBulan = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]
const namaBulanSingkat = [
  'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'
]

const tahunIni = new Date().getFullYear()
const bulanSekarang = new Date().getMonth() + 1

const namaBulanIni = computed(() => namaBulan[bulanSekarang - 1])

const pembayaranBulan = computed(() => {
  const map = {}
  pembayaranStore.pembayarans.forEach(p => {
    map[p.bulan] = p
  })
  return map
})

const sudahBayarBulanIni = computed(() => !!pembayaranBulan.value[bulanSekarang])
const totalBulanLunas = computed(() => Object.keys(pembayaranBulan.value).length)

const allPembayaranTotal = ref(0)
const saldoKas = computed(() => {
  const totalKeluar = pengeluaranStore.totalPengeluaran
  return allPembayaranTotal.value - totalKeluar
})

const selectedPayment = computed(() => {
  if (!selectedMonthIdx.value) return null
  return pembayaranBulan.value[selectedMonthIdx.value] || null
})

const selectedMonthName = computed(() => {
  if (!selectedMonthIdx.value) return ''
  return namaBulan[selectedMonthIdx.value - 1]
})

function selectBulanDetail(bulan) {
  selectedMonthIdx.value = bulan
  showDetailModal.value = true
}

function formatRupiah(angka) {
  return 'Rp ' + Number(angka || 0).toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return '-'
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return '-'
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function openKonfirmasiWA() {
  const noHp = kasStore.settings.noHpBendahara || ''
  const pesan = encodeURIComponent(
    `Halo Bendahara ${kasStore.settings.namaPerumahan || 'Perumahan NDB'}, saya ${wargaData.value?.namaLengkap || wargaData.value?.namaDepan || 'Warga'} dari Rumah ${wargaData.value?.nomorRumah || ''} ingin konfirmasi pembayaran iuran kas bulan ${namaBulanIni.value} ${tahunIni}. Terima kasih.`
  )
  if (noHp) {
    const cleanPhone = noHp.replace(/\D/g, '').replace(/^0/, '62')
    window.open(`https://wa.me/${cleanPhone}?text=${pesan}`, '_blank')
  } else {
    window.open(`https://wa.me/?text=${pesan}`, '_blank')
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

      await pengeluaranStore.fetchAll(tahunIni)

      const q = query(collection(db, 'pembayaran'), where('tahun', '==', tahunIni))
      const snapshot = await getDocs(q)
      allPembayaranTotal.value = snapshot.docs.reduce(
        (sum, d) => sum + (d.data().jumlah || 0), 0
      )
    }
  } catch (err) {
    console.error('Error loading dashboard warga:', err)
  } finally {
    loading.value = false
  }
})
</script>
