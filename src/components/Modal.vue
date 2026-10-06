<template>
  <!-- Modal & Bottom Sheet modern untuk mobile & desktop -->
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
        @click.self="$emit('close')"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-zinc-900/40 backdrop-blur-[2px] transition-opacity"
          @click="$emit('close')"
        ></div>

        <!-- Sheet / Modal Container -->
        <div
          class="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-2xl shadow-xl border-t sm:border border-zinc-200/80 max-h-[90vh] flex flex-col z-10 transition-all transform animate-in slide-in-from-bottom sm:slide-in-from-bottom-4 duration-200"
        >
          <!-- Mobile Pull Indicator -->
          <div class="sm:hidden pt-2.5 pb-1 flex justify-center">
            <div class="w-10 h-1 rounded-full bg-zinc-300"></div>
          </div>

          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-3.5 border-b border-zinc-100 flex-shrink-0">
            <div>
              <h2 class="text-base font-semibold text-zinc-900 leading-tight">{{ title }}</h2>
              <p v-if="subtitle" class="text-xs text-zinc-500 mt-0.5">{{ subtitle }}</p>
            </div>
            <button
              @click="$emit('close')"
              class="w-8 h-8 rounded-full flex items-center justify-center text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors -mr-1"
              aria-label="Tutup"
            >
              <AppIcon name="x" className="w-4 h-4" />
            </button>
          </div>

          <!-- Content (scrollable with safe area) -->
          <div class="px-5 py-4 overflow-y-auto flex-1 overscroll-contain pb-safe">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})

defineEmits(['close'])
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
