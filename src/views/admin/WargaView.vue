<template>
  <!-- Halaman Kelola Warga - Clean, Mobile-First, User-Friendly -->
  <div class="min-h-screen bg-zinc-50 pb-28">
    <!-- Header App Bar -->
    <header class="bg-white border-b border-zinc-200/80 sticky top-0 z-20 pt-safe">
      <div class="max-w-md mx-auto px-4 pt-3.5 pb-3">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center">
              <AppIcon name="users" className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <h1 class="text-base font-bold text-zinc-900 leading-tight">Data Warga</h1>
              <p class="text-[11px] text-zinc-400">Daftar rumah & akun warga</p>
            </div>
          </div>

          <div class="text-right">
            <span class="text-xs font-bold text-zinc-900 block">{{ filteredWargas.length }} Rumah</span>
            <span class="text-[10px] text-zinc-400">Terdaftar</span>
          </div>
        </div>

        <!-- Search Bar -->
        <div class="relative">
          <input
            v-model="search"
            type="text"
            placeholder="Cari nomor rumah atau nama warga..."
            class="w-full pl-9 pr-8 py-2.5 bg-zinc-100/80 border border-transparent focus:border-zinc-300 rounded-xl text-xs focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-zinc-400"
          />
          <div class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
            <AppIcon name="search" className="w-3.5 h-3.5" />
          </div>
          <button
            v-if="search"
            type="button"
            @click="search = ''"
            class="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-0.5"
          >
            <AppIcon name="x" className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="wargaStore.loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main List Warga -->
    <main v-else class="max-w-md mx-auto px-4 pt-4 space-y-2.5">
      <div v-if="filteredWargas.length === 0" class="py-14 text-center text-zinc-400">
        <AppIcon name="users" className="w-9 h-9 mx-auto mb-2 opacity-50" />
        <p class="text-sm font-semibold text-zinc-700">Warga tidak ditemukan</p>
        <p class="text-xs text-zinc-400 mt-0.5">
          {{ search ? 'Coba cari dengan kata kunci lain' : 'Belum ada data warga terdaftar' }}
        </p>
      </div>

      <div
        v-for="warga in filteredWargas"
        :key="warga.id"
        class="bg-white rounded-2xl p-3.5 border border-zinc-200/80 shadow-xs flex items-center justify-between gap-3"
      >
        <div class="flex items-center gap-3 min-w-0">
          <!-- House Number / Initials Avatar -->
          <div class="w-11 h-11 rounded-xl bg-zinc-100 text-zinc-800 font-bold text-xs flex items-center justify-center flex-shrink-0 ring-1 ring-zinc-200/60">
            {{ warga.nomorRumah }}
          </div>

          <!-- Resident Details -->
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <p class="text-xs sm:text-sm font-semibold text-zinc-900 truncate">
                {{ warga.namaLengkap || warga.namaDepan }}
              </p>
            </div>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-[11px] text-zinc-500 font-medium">
                Sandi: <code class="bg-zinc-100 px-1 py-0.5 rounded text-[10px] text-zinc-700 font-mono">{{ warga.namaDepan }}</code>
              </span>
              <span v-if="warga.noHp" class="text-[11px] text-zinc-400 truncate">
                • {{ warga.noHp }}
              </span>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center gap-1 flex-shrink-0">
          <!-- Direct WhatsApp Button -->
          <a
            v-if="warga.noHp"
            :href="`https://wa.me/${warga.noHp.replace(/\\D/g, '').replace(/^0/, '62')}`"
            target="_blank"
            class="p-2 rounded-xl text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
            title="Chat WhatsApp"
            aria-label="WhatsApp"
          >
            <AppIcon name="whatsapp" className="w-4 h-4" />
          </a>

          <!-- Edit Button -->
          <button
            type="button"
            @click="openEditModal(warga)"
            class="p-2 rounded-xl text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            title="Edit data warga"
            aria-label="Edit"
          >
            <AppIcon name="pencil" className="w-4 h-4" />
          </button>

          <!-- Delete Button -->
          <button
            type="button"
            @click="openDeleteConfirm(warga)"
            class="p-2 rounded-xl text-zinc-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
            title="Hapus warga"
            aria-label="Hapus"
          >
            <AppIcon name="trash" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>

    <!-- Floating Action Button (Tambah Warga) -->
    <div class="fixed bottom-20 right-4 z-20 mb-safe max-w-md mx-auto">
      <button
        type="button"
        @click="openAddModal"
        class="inline-flex items-center gap-2 px-4 py-3 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full shadow-lg shadow-zinc-900/20 text-xs font-semibold active:scale-95 transition-all duration-150"
      >
        <AppIcon name="plus" className="w-4 h-4" :strokeWidth="2.5" />
        <span>Tambah Warga</span>
      </button>
    </div>

    <!-- Modal Tambah / Edit Warga -->
    <Modal
      :is-open="showModal"
      :title="isEditing ? 'Edit Data Warga' : 'Daftarkan Warga Baru'"
      :subtitle="isEditing ? `Rumah ${selectedWarga?.nomorRumah}` : 'Akun warga akan otomatis dibuatkan'"
      @close="closeModal"
    >
      <form @submit.prevent="handleSave" class="space-y-4">
        <!-- Nomor Rumah -->
        <div v-if="!isEditing">
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Nomor Rumah *
          </label>
          <input
            v-model="form.nomorRumah"
            type="text"
            placeholder="Contoh: C10, A2"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm uppercase font-semibold"
            required
          />
          <p class="text-[11px] text-zinc-400 mt-1">Digunakan sebagai username login warga</p>
        </div>

        <!-- Nama Depan (Digunakan sebagai kata sandi jika tambah) -->
        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Nama Depan * {{ !isEditing ? '(Min. 6 Karakter)' : '' }}
          </label>
          <input
            v-model="form.namaDepan"
            type="text"
            :minlength="!isEditing ? 6 : 1"
            placeholder="Minimal 6 karakter (cth: Bambang, Sutrisno)"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
            required
          />
          <p v-if="!isEditing" class="text-[11px] text-zinc-400 mt-1">
            Digunakan sebagai kata sandi awal warga (syarat sistem Firebase minimal 6 karakter).
          </p>
        </div>

        <!-- Nama Lengkap -->
        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Nama Lengkap / Kepala Keluarga (Opsional)
          </label>
          <input
            v-model="form.namaLengkap"
            type="text"
            placeholder="Contoh: Bpk. Bambang Pamungkas"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
          />
        </div>

        <!-- Nomor HP -->
        <div>
          <label class="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
            Nomor WhatsApp / HP (Opsional)
          </label>
          <input
            v-model="form.noHp"
            type="tel"
            placeholder="Contoh: 081234567890"
            class="w-full px-3.5 py-3 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 text-sm"
          />
          <p class="text-[11px] text-zinc-400 mt-1">Untuk pengingat tagihan & konfirmasi otomatis via WA</p>
        </div>

        <!-- Pesan Error -->
        <div v-if="formError" class="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs">
          {{ formError }}
        </div>

        <button
          type="submit"
          :disabled="saving"
          class="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors min-h-[46px]"
        >
          <span v-if="saving" class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>{{ saving ? 'Menyimpan...' : (isEditing ? 'Simpan Perubahan' : 'Daftarkan Warga') }}</span>
        </button>
      </form>
    </Modal>

    <!-- Dialog Konfirmasi Hapus Warga -->
    <ConfirmDialog
      :is-open="showDeleteConfirm"
      title="Hapus Data Warga?"
      :message="selectedWarga ? `Apakah Anda yakin ingin menghapus Rumah ${selectedWarga.nomorRumah} (${selectedWarga.namaLengkap || selectedWarga.namaDepan}) dari daftar warga?` : ''"
      confirmText="Ya, Hapus"
      @confirm="handleConfirmDelete"
      @cancel="showDeleteConfirm = false"
    />

    <!-- Bottom Navigation Admin -->
    <BottomNav role="admin" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useWargaStore } from '@/stores/warga.js'
import BottomNav from '@/components/BottomNav.vue'
import Modal from '@/components/Modal.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'

const wargaStore = useWargaStore()

const search = ref('')
const showModal = ref(false)
const showDeleteConfirm = ref(false)
const isEditing = ref(false)
const selectedWarga = ref(null)
const saving = ref(false)
const formError = ref('')

const form = ref({
  nomorRumah: '',
  namaDepan: '',
  namaLengkap: '',
  noHp: ''
})

const filteredWargas = computed(() => {
  if (!search.value.trim()) return wargaStore.wargas
  const q = search.value.trim().toLowerCase()
  return wargaStore.wargas.filter(w =>
    (w.nomorRumah || '').toLowerCase().includes(q) ||
    (w.namaDepan || '').toLowerCase().includes(q) ||
    (w.namaLengkap || '').toLowerCase().includes(q)
  )
})

function openAddModal() {
  isEditing.value = false
  selectedWarga.value = null
  formError.value = ''
  form.value = {
    nomorRumah: '',
    namaDepan: '',
    namaLengkap: '',
    noHp: ''
  }
  showModal.value = true
}

function openEditModal(warga) {
  isEditing.value = true
  selectedWarga.value = warga
  formError.value = ''
  form.value = {
    nomorRumah: warga.nomorRumah,
    namaDepan: warga.namaDepan,
    namaLengkap: warga.namaLengkap || '',
    noHp: warga.noHp || ''
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  selectedWarga.value = null
  formError.value = ''
}

async function handleSave() {
  formError.value = ''
  saving.value = true
  try {
    if (isEditing.value && selectedWarga.value) {
      await wargaStore.update(selectedWarga.value.id, {
        nomorRumah: form.value.nomorRumah.trim().toUpperCase(),
        namaDepan: form.value.namaDepan.trim(),
        namaLengkap: form.value.namaLengkap.trim(),
        noHp: form.value.noHp.trim()
      })
    } else {
      await wargaStore.add({
        nomorRumah: form.value.nomorRumah.trim(),
        namaDepan: form.value.namaDepan.trim(),
        namaLengkap: form.value.namaLengkap.trim(),
        noHp: form.value.noHp.trim()
      })
    }
    closeModal()
  } catch (err) {
    formError.value = err.message || 'Gagal menyimpan data warga.'
  } finally {
    saving.value = false
  }
}

function openDeleteConfirm(warga) {
  selectedWarga.value = warga
  showDeleteConfirm.value = true
}

async function handleConfirmDelete() {
  if (!selectedWarga.value) return
  try {
    await wargaStore.remove(selectedWarga.value.id)
    showDeleteConfirm.value = false
    selectedWarga.value = null
  } catch (err) {
    alert('Gagal menghapus warga: ' + err.message)
  }
}

onMounted(async () => {
  try {
    await wargaStore.fetchAll()
  } catch (err) {
    console.error('Error loading warga:', err)
  }
})
</script>
