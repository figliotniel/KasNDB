<template>
  <!-- Badge status pembayaran modern & clean -->
  <span
    :class="[
      'inline-flex items-center font-medium transition-colors',
      size === 'sm' ? 'gap-1 px-2.5 py-0.5 text-xs rounded-full' : 'gap-1.5 px-3 py-1 text-xs rounded-full',
      isLunas
        ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20'
        : 'bg-rose-50 text-rose-700 ring-1 ring-inset ring-rose-600/20'
    ]"
  >
    <AppIcon
      :name="isLunas ? 'check' : 'x'"
      :className="size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'"
      :strokeWidth="2.5"
    />
    <span>{{ isLunas ? 'Lunas' : 'Belum Lunas' }}</span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (v) => ['lunas', 'belum'].includes(v)
  },
  size: {
    type: String,
    default: 'sm'
  }
})

const isLunas = computed(() => props.status === 'lunas')
</script>
