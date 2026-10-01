<template>
  <!-- Halaman Kelola Warga -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-4 pt-12 pb-4 sticky top-0 z-10">
      <h1 class="text-lg font-bold text-gray-800">👥 Kelola Warga</h1>
      <!-- Search -->
      <div class="mt-3 relative">
        <input
          v-model="search"
          type="text"
          placeholder="Cari nama atau nomor rumah..."
          class="w-full pl-9 pr-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="wargaStore.loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <!-- List Warga -->
    <div v-else class="px-4 py-4 space-y-3">
      <div v-if="filteredWargas.length === 0" class="text-center py-10">
        <p class="text-4xl">😕</p>
        <p class="text-gray-500 mt-2 text-sm">{{ search ? 'Warga tidak ditemukan' : 'Belum ada warga terdaftar' }}</p>
      </div>

      <div
        v-for="warga in filteredWargas"
        :key="warga.id"
        class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center gap-3"
      >
        <!-- Avatar -->
        <div class="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span class="text-primary-600 font-bold text-sm">{{ warga.namaDepan?.charAt(0)?.toUpperCase() }}</span>
        </div>

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2">
            <span class="bg-primary-100 text-primary-700 text-xs font-bold px-2 py-0.5 rounded">{{ warga.nomorRumah }}</span>
          </div>
          <p class="font-semibold text-gray-800 text-sm mt-0.5 truncate">{{ warga.namaLengkap }}</p>
          <p class="text-gray-400 text-xs">{{ warga.noHp || 'Tidak ada nomor HP' }}</p>
        </div>

        <!-- Aksi -->
        <div class="flex gap-1 flex-shrink-0">
          <button
            @click="openEditModal(warga)"
            class="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
          >✏️</button>
          <button
            @click="openDeleteConfirm(warga)"
            class="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >🗑️</button>
        </div>
      </div>
    </div>

    <!-- Floating Add Button -->
    <button
      @click="openAddModal"
      class="fixed bottom-24 right-4 w-14 h-14 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg flex items-center justify-center text-2xl transition-all duration-200 active:scale-95 z-20"
    >
      +
    </button>
  </div>

  <!-- Modal Tambah/Edit Warga -->
  <Modal :is-open="showModal" :title="isEditing ? 'Edit Warga' : 'Tambah Warga'" @close="closeModal">
    <form @submit.prevent="handleSave" class="space-y-4">
      <!-- Nomor Rumah (hanya saat tambah) -->
      <div v-if="!isEditing">
        <label class="block text-sm font-medium text-gray-700 mb-1">Nomor Rumah *</label>
        <input
          v-model="form.nomorRumah"
          type="text"
          placeholder="Contoh: C10"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm uppercase"
          required
        />
        <p class="text-xs text-gray-400 mt-1">Digunakan sebagai username login warga</p>
      </div>

      <!-- Nama Depan -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nama Depan *</label>
        <input
          v-model="form.namaDepan"
          type="text"
          placeholder="Nama depan warga"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          required
        />
        <p v-if="!isEditing" class="text-xs text-gray-400 mt-1">Digunakan sebagai kata sandi login</p>
      </div>

      <!-- Nama Lengkap -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap *</label>
        <input
          v-model="form.namaLengkap"
          type="text"
          placeholder="Nama lengkap warga"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          required
        />
      </div>

      <!-- Nomor HP -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
        <input
          v-model="form.noHp"
          type="tel"
          placeholder="08xx-xxxx-xxxx (opsional)"
          class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
        />
      </div>

      <!-- Field Password Admin (untuk re-login saat tambah warga) -->
      <div v-if="!isEditing" class="bg-amber-50 border border-amber-200 rounded-xl p-3">
        <label class="block text-sm font-medium text-amber-700 mb-1">🔑 Password Admin (untuk konfirmasi)</label>
        <input
          v-model="adminPassword"
          type="password"
          placeholder="Masukkan password admin Anda"
          class="w-full px-4 py-2.5 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm bg-white"
          required
        />
        <p class="text-xs text-amber-600 mt-1">Diperlukan untuk membuat akun login warga</p>
      </div>

      <!-- Error -->
      <div v-if="formError" class="bg-red-50 border border-red-200 rounded-xl p-3">
        <p class="text-red-600 text-xs">{{ formError }}</p>
      </div>

      <!-- Tombol -->
      <div class="flex gap-2 pt-2">
        <button
          type="button"
          @click="closeModal"
          class="flex-1 py-3 border border-gray-300 text-gray-600 font-medium rounded-xl text-sm hover:bg-gray-50 transition-colors"
        >
          Batal
        </button>
        <button
          type="submit"
          :disabled="saving"
          class="flex-1 py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
        >
          <span v-if="saving" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          {{ saving ? 'Menyimpan...' : (isEditing ? 'Simpan' : 'Tambah') }}
        </button>
      </div>
    </form>
  </Modal>

  <!-- Dialog Konfirmasi Hapus -->
  <ConfirmDialog
    :is-open="showConfirm"
    title="Hapus Warga"
    :message="`Yakin ingin menghapus data ${selectedWarga?.namaLengkap} (${selectedWarga?.nomorRumah})? Data pembayaran warga ini tidak akan ikut terhapus.`"
    @confirm="handleDelete"
    @cancel="showConfirm = false"
  />

  <BottomNav role="admin" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWargaStore } from '@/stores/warga.js'
import { useAuthStore } from '@/stores/auth.js'
import BottomNav from '@/components/BottomNav.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const wargaStore = useWargaStore()
const authStore = useAuthStore()

// State
const search = ref('')
const showModal = ref(false)
const showConfirm = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const selectedWarga = ref(null)
const formError = ref('')
const adminPassword = ref('')

const form = ref({
  nomorRumah: '',
  namaDepan: '',
  namaLengkap: '',
  noHp: ''
})

// Filter warga berdasarkan pencarian
const filteredWargas = computed(() => {
  if (!search.value) return wargaStore.wargas
  const q = search.value.toLowerCase()
  return wargaStore.wargas.filter(w =>
    w.nomorRumah.toLowerCase().includes(q) ||
    w.namaLengkap.toLowerCase().includes(q) ||
    w.namaDepan.toLowerCase().includes(q)
  )
})

function openAddModal() {
  isEditing.value = false
  form.value = { nomorRumah: '', namaDepan: '', namaLengkap: '', noHp: '' }
  adminPassword.value = ''
  formError.value = ''
  showModal.value = true
}

function openEditModal(warga) {
  isEditing.value = true
  selectedWarga.value = warga
  form.value = {
    nomorRumah: warga.nomorRumah,
    namaDepan: warga.namaDepan,
    namaLengkap: warga.namaLengkap,
    noHp: warga.noHp || ''
  }
  formError.value = ''
  showModal.value = true
}

function openDeleteConfirm(warga) {
  selectedWarga.value = warga
  showConfirm.value = true
}

function closeModal() {
  showModal.value = false
  formError.value = ''
}

async function handleSave() {
  formError.value = ''
  saving.value = true
  try {
    if (isEditing.value) {
      await wargaStore.update(selectedWarga.value.id, form.value)
    } else {
      await wargaStore.add(form.value, 'admin@kasndb.app', adminPassword.value)
    }
    closeModal()
  } catch (err) {
    formError.value = wargaStore.error || 'Gagal menyimpan data. Coba lagi.'
  } finally {
    saving.value = false
  }
}

async function handleDelete() {
  showConfirm.value = false
  try {
    await wargaStore.remove(selectedWarga.value.id)
  } catch (err) {
    console.error('Error deleting warga:', err)
  }
}

onMounted(() => wargaStore.fetchAll())
</script>
