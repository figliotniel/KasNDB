<template>
  <!-- Modal reusable dengan backdrop dan transisi -->
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
        @click.self="$emit('close')"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="$emit('close')"></div>

        <!-- Panel Modal -->
        <div class="relative bg-white w-full sm:max-w-md sm:mx-4 sm:rounded-2xl rounded-t-2xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col z-10">
          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-4 border-b border-gray-100 flex-shrink-0">
            <h2 class="text-base font-bold text-gray-800">{{ title }}</h2>
            <button
              @click="$emit('close')"
              class="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition-colors text-sm"
            >
              ✕
            </button>
          </div>

          <!-- Konten (scrollable) -->
          <div class="px-5 py-4 overflow-y-auto flex-1">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
// Props untuk mengontrol modal dari parent
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  }
})

// Event yang bisa di-emit
defineEmits(['close'])
</script>

<style scoped>
/* Transisi animasi modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.25s ease;
}

.modal-enter-from {
  opacity: 0;
}

.modal-enter-from .relative {
  transform: translateY(100%);
}

.modal-leave-to {
  opacity: 0;
}

.modal-leave-to .relative {
  transform: translateY(100%);
}
</style>
