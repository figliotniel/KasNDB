<template>
  <!-- Modern Mobile Bottom Navigation -->
  <nav class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-zinc-200/80 z-30 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.02)]">
    <!-- Admin Navigation (5 tabs) -->
    <div v-if="role === 'admin'" class="max-w-md mx-auto grid grid-cols-5 px-1 py-1.5">
      <router-link
        v-for="item in adminNav"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ isActive, navigate }"
      >
        <button
          type="button"
          @click="navigate"
          :class="[
            'flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-150 min-h-[48px]',
            isActive
              ? 'text-emerald-600 font-semibold'
              : 'text-zinc-400 hover:text-zinc-600 font-medium'
          ]"
        >
          <div
            :class="[
              'p-1 rounded-lg transition-colors',
              isActive ? 'bg-emerald-50 text-emerald-600' : 'text-zinc-400'
            ]"
          >
            <AppIcon :name="item.icon" className="w-5 h-5" :strokeWidth="isActive ? 2.2 : 1.8" />
          </div>
          <span class="text-[10px] leading-tight mt-0.5 truncate max-w-full">
            {{ item.label }}
          </span>
        </button>
      </router-link>
    </div>

    <!-- Warga Navigation (3 tabs) -->
    <div v-else class="max-w-md mx-auto grid grid-cols-3 px-4 py-1.5">
      <router-link
        v-for="item in wargaNav"
        :key="item.to"
        :to="item.to"
        custom
        v-slot="{ isActive, navigate }"
      >
        <button
          type="button"
          @click="navigate"
          :class="[
            'flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all duration-150 min-h-[48px]',
            isActive
              ? 'text-emerald-600 font-semibold'
              : 'text-zinc-400 hover:text-zinc-600 font-medium'
          ]"
        >
          <div
            :class="[
              'p-1.5 rounded-xl transition-colors',
              isActive ? 'bg-emerald-50 text-emerald-600' : 'text-zinc-400'
            ]"
          >
            <AppIcon :name="item.icon" className="w-5 h-5" :strokeWidth="isActive ? 2.2 : 1.8" />
          </div>
          <span class="text-[11px] leading-tight mt-0.5">
            {{ item.label }}
          </span>
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  role: {
    type: String,
    default: 'warga',
    validator: (v) => ['admin', 'warga'].includes(v)
  }
})

// Menu untuk admin
const adminNav = [
  { to: '/admin', icon: 'home', label: 'Ringkasan' },
  { to: '/admin/warga', icon: 'users', label: 'Warga' },
  { to: '/admin/pembayaran', icon: 'wallet', label: 'Kas Masuk' },
  { to: '/admin/pengeluaran', icon: 'receipt', label: 'Kas Keluar' },
  { to: '/laporan', icon: 'chart', label: 'Laporan' }
]

// Menu untuk warga (publik)
const wargaNav = [
  { to: '/', icon: 'home', label: 'Beranda' },
  { to: '/laporan', icon: 'chart', label: 'Laporan Kas' },
  { to: '/profil', icon: 'user', label: 'Profil Saya' }
]
</script>
