<template>
  <!-- Halaman Login KasNDB - Clean, Simple, Mobile-First -->
  <div class="min-h-[100dvh] bg-zinc-50 flex flex-col justify-between px-4 py-8 sm:py-12">
    <div class="w-full max-w-sm mx-auto my-auto">
      <!-- App Header / Logo -->
      <div class="text-center mb-7">
        <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20 mb-3.5">
          <AppIcon name="building" className="w-7 h-7" />
        </div>
        <h1 class="text-2xl font-bold text-zinc-900 tracking-tight">KasNDB</h1>
        <p class="text-xs text-zinc-500 mt-1">Sistem Iuran & Transparansi Kas Perumahan</p>
      </div>

      <!-- Card Container -->
      <div class="bg-white rounded-2xl shadow-sm border border-zinc-200/80 overflow-hidden">
        <!-- Segmented Tab Selector -->
        <div class="p-1.5 bg-zinc-100/80 border-b border-zinc-200/60 grid grid-cols-2 gap-1">
          <button
            type="button"
            @click="activeTab = 'warga'"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-150',
              activeTab === 'warga'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800'
            ]"
          >
            <AppIcon name="user" className="w-4 h-4" />
            <span>Warga</span>
          </button>
          <button
            type="button"
            @click="activeTab = 'admin'"
            :class="[
              'py-2 px-3 text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all duration-150',
              activeTab === 'admin'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-zinc-500 hover:text-zinc-800'
            ]"
          >
            <AppIcon name="shield" className="w-4 h-4" />
            <span>Pengurus / Admin</span>
          </button>
        </div>

        <div class="p-6">
          <!-- Form Login Warga -->
          <form v-if="activeTab === 'warga'" @submit.prevent="handleWargaLogin" class="space-y-4">
            <div>
              <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Nomor Rumah
              </label>
              <div class="relative">
                <input
                  v-model="wargaForm.nomorRumah"
                  type="text"
                  placeholder="Contoh: C10, B4"
                  autocomplete="username"
                  class="w-full px-3.5 py-3 bg-zinc-50/50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-zinc-900 placeholder:text-zinc-400 uppercase transition-all"
                  :disabled="loadingWarga"
                  required
                />
              </div>
              <p class="text-[11px] text-zinc-400 mt-1">Nomor rumah Anda terdaftar sebagai ID akun</p>
            </div>

            <div>
              <div class="flex items-center justify-between mb-1.5">
                <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider">
                  Nama Depan (Kata Sandi)
                </label>
              </div>
              <div class="relative">
                <input
                  v-model="wargaForm.namaDepan"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan nama depan Anda"
                  autocomplete="current-password"
                  class="w-full pl-3.5 pr-11 py-3 bg-zinc-50/50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-zinc-900 placeholder:text-zinc-400 transition-all"
                  :disabled="loadingWarga"
                  required
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 rounded-lg transition-colors"
                  aria-label="Tampilkan sandi"
                >
                  <AppIcon :name="showPassword ? 'eye-off' : 'eye'" className="w-4 h-4" />
                </button>
              </div>
              <p class="text-[11px] text-zinc-400 mt-1">Kata sandi default adalah nama depan Anda</p>
            </div>

            <!-- Pesan Error -->
            <div v-if="errorWarga" class="bg-rose-50 border border-rose-200/80 rounded-xl p-3 flex items-start gap-2.5 text-rose-700 text-xs">
              <AppIcon name="info" className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-500" />
              <p class="leading-relaxed">{{ errorWarga }}</p>
            </div>

            <button
              type="submit"
              :disabled="loadingWarga"
              class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:bg-emerald-300 text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/10 min-h-[46px]"
            >
              <span v-if="loadingWarga" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>{{ loadingWarga ? 'Memverifikasi...' : 'Masuk ke Portal Warga' }}</span>
            </button>

            <!-- Bantuan Login Warga -->
            <div class="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <button
                type="button"
                @click="showHelpModal = true"
                class="hover:text-emerald-700 underline text-[11px]"
              >
                Butuh bantuan login?
              </button>
              <span class="text-[11px] text-zinc-400">Kas RT/RW Terbuka</span>
            </div>
          </form>

          <!-- Form Login Admin -->
          <form v-else @submit.prevent="handleAdminLogin" class="space-y-4">
            <div class="bg-emerald-50/70 border border-emerald-100 rounded-xl p-3 flex items-center gap-2.5">
              <AppIcon name="shield" className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <p class="text-xs text-emerald-800 leading-tight">
                Akses khusus pengurus RT / bendahara kas perumahan
              </p>
            </div>

            <div>
              <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Kata Sandi Administrator
              </label>
              <div class="relative">
                <input
                  v-model="adminForm.password"
                  :type="showAdminPassword ? 'text' : 'password'"
                  placeholder="Masukkan sandi admin"
                  autocomplete="current-password"
                  class="w-full pl-3.5 pr-11 py-3 bg-zinc-50/50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-zinc-900 placeholder:text-zinc-400 transition-all"
                  :disabled="loadingAdmin"
                  required
                />
                <button
                  type="button"
                  @click="showAdminPassword = !showAdminPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-zinc-400 hover:text-zinc-600 rounded-lg transition-colors"
                  aria-label="Tampilkan sandi"
                >
                  <AppIcon :name="showAdminPassword ? 'eye-off' : 'eye'" className="w-4 h-4" />
                </button>
              </div>
            </div>

            <!-- Pesan Error -->
            <div v-if="errorAdmin" class="bg-rose-50 border border-rose-200/80 rounded-xl p-3 flex items-start gap-2.5 text-rose-700 text-xs">
              <AppIcon name="info" className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-500" />
              <p class="leading-relaxed">{{ errorAdmin }}</p>
            </div>

            <button
              type="submit"
              :disabled="loadingAdmin"
              class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:bg-emerald-300 text-white font-semibold rounded-xl transition-colors text-sm flex items-center justify-center gap-2 shadow-sm shadow-emerald-600/10 min-h-[46px]"
            >
              <span v-if="loadingAdmin" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>{{ loadingAdmin ? 'Memverifikasi...' : 'Masuk sebagai Admin' }}</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Footer info -->
      <div class="text-center mt-6 space-y-1">
        <p class="text-xs text-zinc-400">
          KasNDB © {{ new Date().getFullYear() }} — Transparansi Keuangan Warga
        </p>
      </div>
    </div>

    <!-- Modal Bantuan Login Warga -->
    <Modal :is-open="showHelpModal" title="Panduan Masuk Warga" @close="showHelpModal = false">
      <div class="space-y-3 text-xs sm:text-sm text-zinc-600">
        <div class="p-3 bg-zinc-50 rounded-xl border border-zinc-200/80 space-y-2">
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">1</span>
            <p><strong>Nomor Rumah</strong>: Masukkan nomor rumah Anda (contoh: <code class="bg-zinc-200 px-1 py-0.5 rounded text-zinc-800">C10</code> atau <code class="bg-zinc-200 px-1 py-0.5 rounded text-zinc-800">A5</code>).</p>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">2</span>
            <p><strong>Kata Sandi</strong>: Masukkan nama depan Anda yang telah didaftarkan pengurus RT.</p>
          </div>
        </div>
        <p class="text-xs text-zinc-500">
          Jika nomor rumah belum terdaftar atau lupa nama depan yang didaftarkan, silakan hubungi pengurus atau bendahara RT untuk dibuatkan akun.
        </p>
        <button
          type="button"
          @click="showHelpModal = false"
          class="w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 font-semibold text-zinc-700 rounded-xl text-xs transition-colors mt-2"
        >
          Tutup Panduan
        </button>
      </div>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import AppIcon from '@/components/AppIcon.vue'
import Modal from '@/components/Modal.vue'

const router = useRouter()
const authStore = useAuthStore()

const activeTab = ref('warga')
const showPassword = ref(false)
const showAdminPassword = ref(false)
const showHelpModal = ref(false)

const wargaForm = ref({ nomorRumah: '', namaDepan: '' })
const adminForm = ref({ password: '' })

const loadingWarga = ref(false)
const loadingAdmin = ref(false)

const errorWarga = ref('')
const errorAdmin = ref('')

async function handleWargaLogin() {
  errorWarga.value = ''
  loadingWarga.value = true
  try {
    await authStore.login(
      wargaForm.value.nomorRumah.trim(),
      wargaForm.value.namaDepan.trim()
    )
    router.push('/')
  } catch (err) {
    errorWarga.value = authStore.error || 'Login gagal. Periksa nomor rumah dan nama depan Anda.'
  } finally {
    loadingWarga.value = false
  }
}

async function handleAdminLogin() {
  errorAdmin.value = ''
  loadingAdmin.value = true
  try {
    await authStore.loginAdmin(adminForm.value.password)
    router.push('/admin')
  } catch (err) {
    errorAdmin.value = authStore.error || 'Kata sandi admin salah. Silakan coba lagi.'
  } finally {
    loadingAdmin.value = false
  }
}
</script>
