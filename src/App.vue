<template>
  <!-- Root aplikasi - hanya menampilkan RouterView -->
  <div class="min-h-screen bg-gray-50 font-sans">
    <RouterView v-if="!authLoading" />
    <!-- Loading screen saat inisialisasi auth -->
    <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <div class="text-5xl mb-4">🏠</div>
        <div class="text-xl font-semibold text-primary-700">KasNDB</div>
        <div class="mt-3">
          <LoadingSpinner />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const authStore = useAuthStore()
const authLoading = ref(true)

// Inisialisasi auth state listener saat app dimuat
onMounted(async () => {
  await authStore.init()
  authLoading.value = false
})
</script>
