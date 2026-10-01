<template>
  <!-- Dialog konfirmasi reusable -->
  <Teleport to="body">
    <Transition name="confirm">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center px-4"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('cancel')"></div>

        <!-- Dialog Panel -->
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm z-10 overflow-hidden">
          <!-- Icon & Judul -->
          <div class="px-6 pt-6 pb-4 text-center">
            <div class="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl">⚠️</span>
            </div>
            <h3 class="text-base font-bold text-gray-800">{{ title }}</h3>
            <p class="text-sm text-gray-500 mt-2 leading-relaxed">{{ message }}</p>
          </div>

          <!-- Tombol Aksi -->
          <div class="flex border-t border-gray-100">
            <button
              @click="$emit('cancel')"
              class="flex-1 py-4 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors border-r border-gray-100"
            >
              Batal
            </button>
            <button
              @click="$emit('confirm')"
              class="flex-1 py-4 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// Props untuk mengontrol dialog
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Konfirmasi'
  },
  message: {
    type: String,
    default: 'Apakah Anda yakin ingin melakukan tindakan ini?'
  }
})

// Events yang di-emit ke parent
defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.confirm-enter-active,
.confirm-leave-active {
  transition: opacity 0.2s ease;
}
.confirm-enter-from,
.confirm-leave-to {
  opacity: 0;
}
</style>
