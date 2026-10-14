<template>
  <!-- Dashboard Admin - Modern, Colorful, Mobile-First -->
  <div class="min-h-[100dvh] bg-gradient-to-b from-emerald-50 via-white to-zinc-50 pb-28">
    <!-- Header App Bar with Gradient -->
    <header class="bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 sticky top-0 z-20 pt-safe shadow-lg shadow-emerald-900/10">
      <div class="max-w-md mx-auto px-4 py-4 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shadow-inner">
            <AppIcon name="shield" className="w-5 h-5" />
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-sm font-bold text-white leading-tight">Administrator Kas</span>
              <span class="px-1.5 py-0.5 rounded text-[10px] bg-white/20 text-emerald-50 font-semibold">Admin</span>
            </div>
            <p class="text-[11px] text-emerald-100/80 truncate max-w-[170px]">
              {{ kasStore.settings.namaPerumahan || 'Perumahan NDB' }}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-1.5">
          <button
            type="button"
            @click="showSettingsModal = true"
            class="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Pengaturan Kas"
            aria-label="Pengaturan"
          >
            <AppIcon name="cog" className="w-5 h-5" />
          </button>
          <button
            type="button"
            @click="showLogoutConfirm = true"
            class="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            title="Keluar dari Akun Admin"
            aria-label="Keluar"
          >
            <AppIcon name="logout" className="w-5 h-5" />
          </button>
          <div class="px-2.5 py-1 rounded-xl bg-white/15 text-white text-xs font-semibold">
            {{ tahun }}
          </div>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main Content -->
    <main v-else class="max-w-md mx-auto px-4 pt-5 space-y-4">
      <!-- Hero Saldo Card -->
      <div class="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 rounded-2xl p-5 shadow-lg shadow-emerald-900/15 text-white relative overflow-hidden">
        <!-- Decorative circles -->
        <div class="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5"></div>
        <div class="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5"></div>
        
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs font-medium text-emerald-100">Saldo Kas Bersih Saat Ini</span>
            <span class="text-[11px] bg-white/15 px-2 py-0.5 rounded-full font-medium">Aktif</span>
          </div>
          <div class="text-3xl font-bold tracking-tight mt-1">
            {{ formatRupiah(saldoKas) }}
          </div>
          <div class="flex items-center justify-between pt-3.5 mt-3.5 border-t border-white/15 text-[11px] text-emerald-100">
            <span>Pemasukan: <strong class="text-white">{{ formatRupiah(totalPemasukanSemua) }}</strong></span>
            <span>Pengeluaran: <strong class="text-rose-200">{{ formatRupiah(pengeluaranStore.totalPengeluaran) }}</strong></span>
          </div>
        </div>
      </div>

      <!-- Quick Stats Row -->
      <div class="grid grid-cols-2 gap-3">
        <!-- Pemasukan Bulan Ini -->
        <div class="bg-white rounded-2xl p-4 border border-emerald-100 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-medium text-zinc-500">{{ namaBulanIni }}</span>
            <div class="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center">
              <AppIcon name="arrow-down-left" className="w-3.5 h-3.5 text-emerald-600" />
            </div>
          </div>
          <div class="text-base font-bold text-emerald-700 truncate">
            {{ formatRupiah(pemasukanBulanIni) }}
          </div>
          <p class="text-[11px] text-zinc-400 mt-1.5">
            {{ lunasBulanIni }} dari {{ wargaStore.wargas.length }} rumah
          </p>
        </div>

        <!-- Total Warga -->
        <div class="bg-white rounded-2xl p-4 border border-zinc-100 shadow-sm">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-medium text-zinc-500">Total Warga</span>
            <div class="w-7 h-7 rounded-lg bg-zinc-100 flex items-center justify-center">
              <AppIcon name="users" className="w-3.5 h-3.5 text-zinc-500" />
            </div>
          </div>
          <div class="text-base font-bold text-zinc-900">
            {{ wargaStore.wargas.length }} Rumah
          </div>
          <p class="text-[11px] text-zinc-400 mt-1.5">
            Iuran {{ formatRupiah(kasStore.settings.jumlahKasBulanan) }}/bln
          </p>
        </div>
      </div>

      <!-- Kepatuhan Pembayaran Bulan Ini -->
      <div class="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
            Kepatuhan Iuran {{ namaBulanIni }}
          </h2>
          <span :class="['text-xs font-bold px-2 py-0.5 rounded-full', persentaseLunas >= 80 ? 'bg-emerald-50 text-emerald-700' : persentaseLunas >= 50 ? 'bg-amber-50 text-amber-700' : 'bg-rose-50 text-rose-700']">{{ persentaseLunas }}%</span>
        </div>

        <div class="h-3 w-full bg-zinc-100 rounded-full overflow-hidden">
          <div
            :class="['h-full rounded-full transition-all duration-500', persentaseLunas >= 80 ? 'bg-emerald-500' : persentaseLunas >= 50 ? 'bg-amber-500' : 'bg-rose-500']"
            :style="{ width: `${persentaseLunas}%` }"
          ></div>
        </div>

        <div class="flex justify-between items-center text-xs text-zinc-500 mt-3 pt-3 border-t border-zinc-100">
          <span class="font-medium text-emerald-700 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            {{ lunasBulanIni }} Rumah Lunas
          </span>
          <span class="font-medium text-rose-600 flex items-center gap-1">
            <span class="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
            {{ belumBulanIni }} Rumah Belum
          </span>
        </div>
      </div>

      <!-- Daftar Warga Belum Bayar -->
      <div class="bg-white rounded-2xl p-5 border border-zinc-100 shadow-sm">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
            <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Belum Bayar {{ namaBulanIni }}
            </h2>
          </div>
          <span class="px-2 py-0.5 rounded-full text-xs font-bold bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20">
            {{ belumBayarList.length }} Rumah
          </span>
        </div>

        <div v-if="belumBayarList.length === 0" class="py-8 text-center space-y-2">
          <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <AppIcon name="check" className="w-6 h-6" :strokeWidth="2.5" />
          </div>
          <p class="text-sm font-semibold text-zinc-800">Semua Warga Sudah Lunas!</p>
          <p class="text-xs text-zinc-400">Pembayaran bulan {{ namaBulanIni }} telah 100% terkumpul.</p>
        </div>

        <div v-else class="divide-y divide-zinc-100 max-h-72 overflow-y-auto no-scrollbar">
          <div
            v-for="warga in belumBayarWargas"
            :key="warga.id"
            class="py-3 flex items-center justify-between gap-3"
          >
            <div class="min-w-0 flex items-center gap-3">
              <span class="px-2.5 py-1.5 bg-zinc-100 text-zinc-800 font-bold text-xs rounded-lg flex-shrink-0">
                {{ warga.nomorRumah }}
              </span>
              <div class="truncate min-w-0">
                <p class="text-xs font-medium text-zinc-900 truncate">{{ warga.namaLengkap || warga.namaDepan }}</p>
                <p class="text-[11px] text-zinc-400 truncate">{{ warga.noHp || 'No HP -' }}</p>
              </div>
            </div>

            <div class="flex items-center gap-1.5 flex-shrink-0">
              <button
                type="button"
                @click="sendWAReminder(warga)"
                class="p-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                title="Kirim Pengingat WhatsApp"
                aria-label="Kirim WA"
              >
                <AppIcon name="whatsapp" className="w-4 h-4" />
              </button>
              <button
                type="button"
                @click="openQuickPay(warga)"
                class="px-2.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center gap-1 shadow-sm"
              >
                <AppIcon name="plus" className="w-3.5 h-3.5" />
                <span>Catat</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Menu Cepat Navigasi Admin -->
      <div class="grid grid-cols-2 gap-3">
        <router-link
          to="/admin/pembayaran"
          class="bg-emerald-50 rounded-2xl p-4 border border-emerald-200/60 shadow-sm flex items-center gap-3 hover:bg-emerald-100/70 transition-colors active:scale-[0.98]"
        >
          <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <AppIcon name="wallet" className="w-5 h-5" />
          </div>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-zinc-800">Kas Masuk</p>
            <p class="text-[11px] text-zinc-500 truncate">Kelola iuran warga</p>
          </div>
        </router-link>

        <router-link
          to="/admin/pengeluaran"
          class="bg-rose-50 rounded-2xl p-4 border border-rose-200/60 shadow-sm flex items-center gap-3 hover:bg-rose-100/70 transition-colors active:scale-[0.98]"
        >
          <div class="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <AppIcon name="receipt" className="w-5 h-5" />
          </div>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-zinc-800">Kas Keluar</p>
            <p class="text-[11px] text-zinc-500 truncate">Catat biaya & belanja</p>
          </div>
        </router-link>

        <router-link
          to="/admin/warga"
          class="bg-blue-50 rounded-2xl p-4 border border-blue-200/60 shadow-sm flex items-center gap-3 hover:bg-blue-100/70 transition-colors active:scale-[0.98]"
        >
          <div class="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <AppIcon name="users" className="w-5 h-5" />
          </div>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-zinc-800">Data Warga</p>
            <p class="text-[11px] text-zinc-500 truncate">Tambah & edit rumah</p>
          </div>
        </router-link>

        <router-link
          to="/laporan"
          class="bg-amber-50 rounded-2xl p-4 border border-amber-200/60 shadow-sm flex items-center gap-3 hover:bg-amber-100/70 transition-colors active:scale-[0.98]"
        >
          <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <AppIcon name="chart" className="w-5 h-5" />
          </div>
          <div class="min-w-0">
            <p class="text-xs font-semibold text-zinc-800">Laporan Kas</p>
            <p class="text-[11px] text-zinc-500 truncate">Rekap & unduh PDF</p>
          </div>
        </router-link>
      </div>

      <!-- Tombol Keluar -->
      <div class="pt-1 pb-2">
        <button
          type="button"
          @click="showLogoutConfirm = true"
          class="w-full py-3.5 px-4 bg-white hover:bg-rose-50/70 border border-zinc-200/80 hover:border-rose-200 text-zinc-500 hover:text-rose-600 rounded-2xl text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-150 shadow-sm active:scale-[0.99]"
        >
          <AppIcon name="logout" className="w-4 h-4" />
          <span>Keluar dari Akun Admin</span>
        </button>
      </div>
    </main>

    <!-- Modal Quick Pay -->
    <Modal
      :is-open="showPayModal"
      :title="selectedWarga ? `Catat Iuran - Rumah ${selectedWarga.nomorRumah}` : 'Catat Iuran'"
      subtitle="Bulan berjalan"
      @close="showPayModal = false"
    >
      <form v-if="selectedWarga" @submit.prevent="handleSaveQuickPay" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Jumlah Pembayaran
          </label>
          <input
            v-model="quickPayForm.jumlah"
            type="number"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm font-semibold bg-zinc-50 focus:bg-white transition-colors"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Tanggal Bayar
          </label>
          <input
            v-model="quickPayForm.tanggal"
            type="date"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm bg-zinc-50 focus:bg-white transition-colors"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Keterangan (Opsional)
          </label>
          <input
            v-model="quickPayForm.keterangan"
            type="text"
            placeholder="Transfer BCA / Tunai ke bendahara"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm bg-zinc-50 focus:bg-white transition-colors"
          />
        </div>

        <div v-if="quickPayError" class="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs border border-rose-200">
          {{ quickPayError }}
        </div>

        <button
          type="submit"
          :disabled="savingPay"
          class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors min-h-[46px] shadow-sm"
        >
          <span v-if="savingPay" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>{{ savingPay ? 'Menyimpan...' : 'Tandai Lunas Sekarang' }}</span>
        </button>
      </form>
    </Modal>

    <!-- Modal Pengaturan Kas Perumahan -->
    <Modal
      :is-open="showSettingsModal"
      title="Pengaturan Kas"
      subtitle="Perumahan & Kebijakan Iuran"
      @close="showSettingsModal = false"
    >
      <form @submit.prevent="handleSaveSettings" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Nama Perumahan / Lingkungan
          </label>
          <input
            v-model="settingsForm.namaPerumahan"
            type="text"
            placeholder="Perumahan NDB"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm bg-zinc-50 focus:bg-white transition-colors"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Besaran Iuran Kas Bulanan (Rp)
          </label>
          <input
            v-model="settingsForm.jumlahKasBulanan"
            type="number"
            placeholder="50000"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm bg-zinc-50 focus:bg-white transition-colors"
            required
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Nomor HP / WhatsApp Bendahara
          </label>
          <input
            v-model="settingsForm.noHpBendahara"
            type="text"
            placeholder="Contoh: 081234567890"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm bg-zinc-50 focus:bg-white transition-colors"
          />
          <p class="text-[11px] text-zinc-400 mt-1">Digunakan untuk tombol konfirmasi pembayaran warga</p>
        </div>

        <div v-if="settingsMessage" class="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs border border-emerald-200">
          {{ settingsMessage }}
        </div>

        <button
          type="submit"
          :disabled="savingSettings"
          class="w-full py-3.5 bg-zinc-900 hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors min-h-[46px] shadow-sm"
        >
          <span v-if="savingSettings" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>{{ savingSettings ? 'Menyimpan...' : 'Simpan Pengaturan' }}</span>
        </button>

        <div class="pt-2 border-t border-zinc-100">
          <button
            type="button"
            @click="showSettingsModal = false; showLogoutConfirm = true"
            class="w-full py-2.5 px-3 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <AppIcon name="logout" className="w-4 h-4 text-rose-500" />
            <span>Keluar dari Akun Admin</span>
          </button>
        </div>
      </form>
    </Modal>

    <!-- Dialog Konfirmasi Logout Admin -->
    <ConfirmDialog
      :is-open="showLogoutConfirm"
      title="Keluar dari Akun Admin"
      message="Apakah Anda yakin ingin mengakhiri sesi administrator KasNDB dan kembali ke halaman login?"
      confirmText="Ya, Keluar"
      cancelText="Batal"
      type="danger"
      @confirm="handleLogout"
      @cancel="showLogoutConfirm = false"
    />

    <!-- Bottom Navigation Admin -->
    <BottomNav role="admin" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { usePengeluaranStore } from '@/stores/pengeluaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'

const router = useRouter()
const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const pengeluaranStore = usePengeluaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const tahun = new Date().getFullYear()
const bulanSekarang = new Date().getMonth() + 1

const showLogoutConfirm = ref(false)
const loggingOut = ref(false)

async function handleLogout() {
  loggingOut.value = true
  try {
    await authStore.logout()
    showLogoutConfirm.value = false
    router.push('/login')
  } catch (err) {
    console.error('Error logging out:', err)
    alert('Gagal keluar: ' + (err.message || 'Terjadi kesalahan'))
  } finally {
    loggingOut.value = false
  }
}

const showPayModal = ref(false)
const selectedWarga = ref(null)
const savingPay = ref(false)
const quickPayError = ref('')
const quickPayForm = ref({
  jumlah: 50000,
  tanggal: getLocalDateString(),
  keterangan: 'Iuran kas bulanan'
})

const showSettingsModal = ref(false)
const savingSettings = ref(false)
const settingsMessage = ref('')
const settingsForm = ref({
  namaPerumahan: '',
  jumlahKasBulanan: 50000,
  noHpBendahara: ''
})

const namaBulan = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
]
const namaBulanIni = namaBulan[bulanSekarang - 1]

function getLocalDateString(d = new Date()) {
  const date = d instanceof Date ? d : new Date(d)
  if (isNaN(date.getTime())) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const pemasukanBulanIni = computed(() =>
  pembayaranStore.pembayarans
    .filter(p => Number(p.bulan) === bulanSekarang && Number(p.tahun) === tahun)
    .reduce((sum, p) => sum + (p.jumlah || 0), 0)
)

const totalPemasukanSemua = computed(() =>
  pembayaranStore.pembayarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
)

const lunasSet = computed(() => {
  const set = new Set()
  pembayaranStore.pembayarans
    .filter(p => Number(p.bulan) === bulanSekarang && Number(p.tahun) === tahun)
    .forEach(p => set.add(p.nomorRumah))
  return set
})

const lunasBulanIni = computed(() => lunasSet.value.size)
const belumBulanIni = computed(() => Math.max(0, wargaStore.wargas.length - lunasBulanIni.value))
const persentaseLunas = computed(() =>
  wargaStore.wargas.length > 0
    ? Math.round((lunasBulanIni.value / wargaStore.wargas.length) * 100)
    : 0
)

const belumBayarList = computed(() =>
  wargaStore.wargas
    .filter(w => !lunasSet.value.has(w.nomorRumah))
    .map(w => w.nomorRumah)
    .sort()
)

const belumBayarWargas = computed(() =>
  wargaStore.wargas.filter(w => !lunasSet.value.has(w.nomorRumah))
)

const saldoKas = computed(() =>
  kasStore.saldoKas(pembayaranStore.pembayarans, pengeluaranStore.pengeluarans)
)

function formatRupiah(angka) {
  return 'Rp ' + Number(angka || 0).toLocaleString('id-ID')
}

function openQuickPay(warga) {
  selectedWarga.value = warga
  quickPayError.value = ''
  quickPayForm.value = {
    jumlah: kasStore.settings.jumlahKasBulanan || 50000,
    tanggal: getLocalDateString(),
    keterangan: 'Iuran kas bulanan'
  }
  showPayModal.value = true
}

async function handleSaveQuickPay() {
  if (!selectedWarga.value) return
  savingPay.value = true
  quickPayError.value = ''
  try {
    const [y, m, d] = quickPayForm.value.tanggal.split('-').map(Number)
    const tanggalObj = new Date(y, m - 1, d, 12, 0, 0)

    await pembayaranStore.add({
      nomorRumah: selectedWarga.value.nomorRumah,
      wargaId: selectedWarga.value.uid || '',
      bulan: bulanSekarang,
      tahun: tahun,
      jumlah: Number(quickPayForm.value.jumlah),
      tanggal: tanggalObj,
      keterangan: quickPayForm.value.keterangan || ''
    })
    showPayModal.value = false
  } catch (err) {
    quickPayError.value = 'Gagal menyimpan pembayaran: ' + err.message
  } finally {
    savingPay.value = false
  }
}

function sendWAReminder(warga) {
  const nominal = formatRupiah(kasStore.settings.jumlahKasBulanan || 50000)
  const pesan = encodeURIComponent(
    `Halo Bpk/Ibu ${warga.namaLengkap || warga.namaDepan} (Rumah ${warga.nomorRumah}), mengingatkan untuk iuran kas ${kasStore.settings.namaPerumahan || 'Perumahan NDB'} bulan ${namaBulanIni} ${tahun} sebesar ${nominal}. Terima kasih banyak atas partisipasinya 🙏`
  )
  if (warga.noHp) {
    const cleanPhone = warga.noHp.replace(/\D/g, '').replace(/^0/, '62')
    window.open(`https://wa.me/${cleanPhone}?text=${pesan}`, '_blank')
  } else {
    window.open(`https://wa.me/?text=${pesan}`, '_blank')
  }
}

async function handleSaveSettings() {
  savingSettings.value = true
  settingsMessage.value = ''
  try {
    await kasStore.updateSettings({
      namaPerumahan: settingsForm.value.namaPerumahan,
      jumlahKasBulanan: Number(settingsForm.value.jumlahKasBulanan),
      noHpBendahara: settingsForm.value.noHpBendahara || ''
    })
    settingsMessage.value = 'Pengaturan berhasil diperbarui.'
    setTimeout(() => {
      showSettingsModal.value = false
      settingsMessage.value = ''
    }, 1200)
  } catch (err) {
    alert('Gagal menyimpan pengaturan: ' + err.message)
  } finally {
    savingSettings.value = false
  }
}

onMounted(async () => {
  try {
    await Promise.all([
      kasStore.fetchSettings(),
      wargaStore.fetchAll(),
      pembayaranStore.fetchAll(tahun),
      pengeluaranStore.fetchAll(tahun)
    ])
    settingsForm.value = {
      namaPerumahan: kasStore.settings.namaPerumahan || 'Perumahan NDB',
      jumlahKasBulanan: kasStore.settings.jumlahKasBulanan || 50000,
      noHpBendahara: kasStore.settings.noHpBendahara || ''
    }
  } catch (err) {
    console.error('Error loading admin dashboard:', err)
  } finally {
    loading.value = false
  }
})
</script>
