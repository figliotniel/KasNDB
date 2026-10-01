<template>
  <!-- Komponen BottomNav - navigasi bawah untuk mobile -->
  <nav class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30 pb-safe">
    <!-- Navigasi Admin -->
    <div v-if="role === 'admin'" class="flex items-center justify-around px-1 py-2">
      <router-link
        v-for="item in adminNav"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ isActive, navigate }"
      >
        <button
          @click="navigate"
          :class="[
            'flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors duration-150 min-w-0',
            isActive ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'
          ]"
        >
          <span class="text-xl leading-none">{{ item.icon }}</span>
          <span :class="['text-xs font-medium truncate', isActive ? 'text-primary-600' : 'text-gray-400']">
            {{ item.label }}
          </span>
          <!-- Indikator aktif -->
          <span v-if="isActive" class="w-1 h-1 rounded-full bg-primary-500 mt-0.5"></span>
        </button>
      </router-link>
    </div>

    <!-- Navigasi Warga -->
    <div v-else class="flex items-center justify-around px-2 py-2">
      <router-link
        v-for="item in wargaNav"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ isActive, navigate }"
      >
        <button
          @click="navigate"
          :class="[
            'flex flex-col items-center gap-0.5 px-6 py-1.5 rounded-xl transition-colors duration-150',
            isActive ? 'text-primary-600' : 'text-gray-400 hover:text-gray-600'
          ]"
        >
          <span class="text-2xl leading-none">{{ item.icon }}</span>
          <span :class="['text-xs font-medium', isActive ? 'text-primary-600' : 'text-gray-400']">
            {{ item.label }}
          </span>
          <span v-if="isActive" class="w-1 h-1 rounded-full bg-primary-500 mt-0.5"></span>
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
// Props: role menentukan tampilan navigasi (admin atau warga)
const props = defineProps({
  role: {
    type: String,
    default: 'warga',
    validator: (v) => ['admin', 'warga'].includes(v)
  }
})

// Menu navigasi untuk admin
const adminNav = [
  { to: '/admin', icon: '🏠', label: 'Home' },
  { to: '/admin/warga', icon: '👥', label: 'Warga' },
  { to: '/admin/pembayaran', icon: '💰', label: 'Bayar' },
  { to: '/admin/pengeluaran', icon: '💸', label: 'Keluar' },
  { to: '/laporan', icon: '📊', label: 'Laporan' }
]

// Menu navigasi untuk warga
const wargaNav = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/laporan', icon: '📊', label: 'Laporan' },
  { to: '/profil', icon: '👤', label: 'Profil' }
]
</script>
