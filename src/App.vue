<template>
  <div class="min-h-[100dvh] bg-zinc-50 font-sans text-zinc-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900">
    <RouterView v-if="!authLoading" />
    <!-- Loading screen saat inisialisasi auth -->
    <div v-else class="min-h-[100dvh] flex items-center justify-center bg-zinc-50 px-4">
      <div class="text-center flex flex-col items-center">
        <div class="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-4 animate-pulse">
          <AppIcon name="building" className="w-7 h-7" />
        </div>
        <div class="text-lg font-bold text-zinc-900 tracking-tight">KasNDB</div>
        <p class="text-xs text-zinc-500 mt-0.5">Memuat sistem kas...</p>
        <div class="mt-3">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'

const authStore = useAuthStore()
const authLoading = computed(() => authStore.loading)

onMounted(async () => {
  await authStore.init()
})
</script>
