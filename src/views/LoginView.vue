<template>
  <!-- Halaman Login KasNDB -->
  <div class="min-h-screen bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center px-4 py-8">
    <div class="w-full max-w-sm">
      <!-- Header / Logo -->
      <div class="text-center mb-8">
        <div class="text-6xl mb-3">🏠</div>
        <h1 class="text-3xl font-bold text-white">KasNDB</h1>
        <p class="text-primary-100 mt-1 text-sm">Kas Perumahan NDB</p>
      </div>

      <!-- Card Login -->
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Tab Selector -->
        <div class="flex border-b border-gray-100">
          <button
            @click="activeTab = 'warga'"
            :class="[
              'flex-1 py-3.5 text-sm font-semibold transition-colors duration-200',
              activeTab === 'warga'
                ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            👤 Warga
          </button>
          <button
            @click="activeTab = 'admin'"
            :class="[
              'flex-1 py-3.5 text-sm font-semibold transition-colors duration-200',
              activeTab === 'admin'
                ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                : 'text-gray-500 hover:text-gray-700'
            ]"
          >
            🔑 Admin
          </button>
        </div>

        <div class="p-6">
          <!-- Form Login Warga -->
          <form v-if="activeTab === 'warga'" @submit.prevent="handleWargaLogin" class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Nomor Rumah
              </label>
              <input
                v-model="wargaForm.nomorRumah"
                type="text"
                placeholder="Contoh: C10"
                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm uppercase"
                :disabled="loadingWarga"
                required
              />
              <p class="text-xs text-gray-400 mt-1">Sesuai nomor rumah Anda (A1, B5, C10, dst)</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Nama Depan
              </label>
              <div class="relative">
                <input
                  v-model="wargaForm.namaDepan"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Nama depan Anda"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm pr-12"
                  :disabled="loadingWarga"
                  required
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
              <p class="text-xs text-gray-400 mt-1">Kata sandi = nama depan Anda</p>
            </div>

            <!-- Pesan Error -->
            <div v-if="errorWarga" class="bg-red-50 border border-red-200 rounded-xl p-3">
              <p class="text-red-600 text-xs">{{ errorWarga }}</p>
            </div>

            <button
              type="submit"
              :disabled="loadingWarga"
              class="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white font-semibold rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
            >
              <span v-if="loadingWarga" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              {{ loadingWarga ? 'Memuat...' : 'Masuk' }}
            </button>
          </form>

          <!-- Form Login Admin -->
          <form v-else @submit.prevent="handleAdminLogin" class="space-y-4">
            <div class="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-2">
              <p class="text-amber-700 text-xs text-center">🔐 Akses khusus administrator</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Kata Sandi Admin
              </label>
              <div class="relative">
                <input
                  v-model="adminForm.password"
                  :type="showAdminPassword ? 'text' : 'password'"
                  placeholder="Masukkan kata sandi admin"
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm pr-12"
                  :disabled="loadingAdmin"
                  required
                />
                <button
                  type="button"
                  @click="showAdminPassword = !showAdminPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-lg"
                >
                  {{ showAdminPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <!-- Pesan Error -->
            <div v-if="errorAdmin" class="bg-red-50 border border-red-200 rounded-xl p-3">
              <p class="text-red-600 text-xs">{{ errorAdmin }}</p>
            </div>

            <button
              type="submit"
              :disabled="loadingAdmin"
              class="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white font-semibold rounded-xl transition-colors duration-200 text-sm flex items-center justify-center gap-2"
            >
              <span v-if="loadingAdmin" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              {{ loadingAdmin ? 'Memuat...' : 'Masuk sebagai Admin' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Footer -->
      <p class="text-center text-primary-200 text-xs mt-6">
        © {{ new Date().getFullYear() }} KasNDB — Perumahan NDB
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const router = useRouter()
const authStore = useAuthStore()

// State untuk tab aktif
const activeTab = ref('warga')

// State visibility password
const showPassword = ref(false)
const showAdminPassword = ref(false)

// Form data
const wargaForm = ref({ nomorRumah: '', namaDepan: '' })
const adminForm = ref({ password: '' })

// Loading state
const loadingWarga = ref(false)
const loadingAdmin = ref(false)

// Error messages
const errorWarga = ref('')
const errorAdmin = ref('')

/**
 * Handle login untuk warga
 */
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

/**
 * Handle login untuk admin
 */
async function handleAdminLogin() {
  errorAdmin.value = ''
  loadingAdmin.value = true
  try {
    await authStore.loginAdmin(adminForm.value.password)
    router.push('/admin')
  } catch (err) {
    errorAdmin.value = authStore.error || 'Login gagal. Periksa kata sandi admin Anda.'
  } finally {
    loadingAdmin.value = false
  }
}
</script>
