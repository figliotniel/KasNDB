<template>
  <!-- Dialog konfirmasi reusable modern & clean -->
  <Teleport to="body">
    <Transition name="confirm">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <!-- Backdrop -->
        <div
          class="fixed inset-0 bg-zinc-900/40 backdrop-blur-[2px] transition-opacity"
          @click="$emit('cancel')"
        ></div>

        <!-- Dialog Panel -->
        <div class="relative bg-white rounded-2xl shadow-xl border border-zinc-200/80 w-full max-w-sm z-10 overflow-hidden">
          <!-- Icon & Title -->
          <div class="p-6 text-center">
            <div
              :class="[
                'w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4',
                type === 'danger' ? 'bg-rose-50 text-rose-600 ring-8 ring-rose-50/50' : 'bg-amber-50 text-amber-600 ring-8 ring-amber-50/50'
              ]"
            >
              <AppIcon :name="type === 'danger' ? 'trash' : 'info'" className="w-6 h-6" />
            </div>
            <h3 class="text-base font-semibold text-zinc-900">{{ title }}</h3>
            <p class="text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">{{ message }}</p>
          </div>

          <!-- Actions -->
          <div class="flex border-t border-zinc-100 divide-x divide-zinc-100 bg-zinc-50/50">
            <button
              type="button"
              @click="$emit('cancel')"
              class="flex-1 py-3.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100/80 transition-colors"
            >
              {{ cancelText }}
            </button>
            <button
              type="button"
              @click="$emit('confirm')"
              :class="[
                'flex-1 py-3.5 text-sm font-semibold transition-colors',
                type === 'danger' ? 'text-rose-600 hover:bg-rose-50' : 'text-emerald-600 hover:bg-emerald-50'
              ]"
            >
              {{ confirmText }}
            </button>
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
    default: 'Konfirmasi'
  },
  message: {
    type: String,
    default: 'Apakah Anda yakin ingin melakukan tindakan ini?'
  },
  confirmText: {
    type: String,
    default: 'Hapus'
  },
  cancelText: {
    type: String,
    default: 'Batal'
  },
  type: {
    type: String,
    default: 'danger'
  }
})

defineEmits(['confirm', 'cancel'])
</script>

<style scoped>
.confirm-enter-active,
.confirm-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.confirm-enter-from,
.confirm-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style>
