<template>
  <!-- Badge status pembayaran: lunas (hijau) atau belum (merah) -->
  <span
    :class="[
      'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold',
      status === 'lunas'
        ? 'bg-primary-100 text-primary-700'
        : 'bg-red-100 text-red-600'
    ]"
  >
    <span>{{ status === 'lunas' ? '✅' : '❌' }}</span>
    <span>{{ status === 'lunas' ? 'Lunas' : 'Belum' }}</span>
  </span>
</template>

<script setup>
// Props untuk menentukan tampilan badge
defineProps({
  status: {
    type: String,
    required: true,
    validator: (v) => ['lunas', 'belum'].includes(v)
  }
})
</script>
