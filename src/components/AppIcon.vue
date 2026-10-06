<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    :class="computedClass"
    fill="none"
    :stroke="isFilled ? 'none' : 'currentColor'"
    :stroke-width="isFilled ? '0' : strokeWidth"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <!-- Home / Dashboard -->
    <path
      v-if="name === 'home'"
      d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6H4a1 1 0 0 1-1-1v-9.5z"
    />

    <!-- Users / Warga -->
    <path
      v-else-if="name === 'users'"
      d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
    />

    <!-- User / Profile -->
    <path
      v-else-if="name === 'user'"
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    />

    <!-- Wallet / Pembayaran -->
    <path
      v-else-if="name === 'wallet'"
      d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3zm-5-1a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3z"
    />

    <!-- Receipt / Expense -->
    <path
      v-else-if="name === 'receipt'"
      d="M9 14h6m-6-4h6m-9 9l3-2 3 2 3-2 3 2 3-2 3 2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16z"
    />

    <!-- Chart / Laporan -->
    <path
      v-else-if="name === 'chart'"
      d="M3 3v18h18M18 17V9m-5 8V5m-5 12v-6"
    />

    <!-- Arrow Up Right (Pengeluaran) -->
    <path
      v-else-if="name === 'arrow-up-right'"
      d="M7 17L17 7M7 7h10v10"
    />

    <!-- Arrow Down Left (Pemasukan) -->
    <path
      v-else-if="name === 'arrow-down-left'"
      d="M17 7L7 17M17 17H7V7"
    />

    <!-- Checkmark -->
    <path
      v-else-if="name === 'check'"
      d="M20 6L9 17l-5-5"
    />

    <!-- Checkmark Circle -->
    <g v-else-if="name === 'check-circle'">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </g>

    <!-- X / Close -->
    <path
      v-else-if="name === 'x'"
      d="M18 6L6 18M6 6l12 12"
    />

    <!-- X Circle -->
    <g v-else-if="name === 'x-circle'">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </g>

    <!-- Plus -->
    <path
      v-else-if="name === 'plus'"
      d="M12 5v14M5 12h14"
    />

    <!-- Search -->
    <path
      v-else-if="name === 'search'"
      d="M21 21l-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"
    />

    <!-- Pencil / Edit -->
    <path
      v-else-if="name === 'pencil'"
      d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
    />

    <!-- Trash / Delete -->
    <path
      v-else-if="name === 'trash'"
      d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6"
    />

    <!-- Download -->
    <path
      v-else-if="name === 'download'"
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
    />

    <!-- Eye (show password) -->
    <g v-else-if="name === 'eye'">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </g>

    <!-- Eye Off (hide password) -->
    <path
      v-else-if="name === 'eye-off'"
      d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22"
    />

    <!-- Logout -->
    <path
      v-else-if="name === 'logout'"
      d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
    />

    <!-- Settings / Cog -->
    <path
      v-else-if="name === 'cog'"
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7.4 0a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    />

    <!-- WhatsApp -->
    <path
      v-else-if="name === 'whatsapp'"
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.411z"
    />

    <!-- Shield / Admin -->
    <path
      v-else-if="name === 'shield'"
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    />

    <!-- Calendar -->
    <g v-else-if="name === 'calendar'">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </g>

    <!-- Info -->
    <g v-else-if="name === 'info'">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </g>

    <!-- Chevron Down -->
    <path
      v-else-if="name === 'chevron-down'"
      d="M6 9l6 6 6-6"
    />

    <!-- Chevron Right -->
    <path
      v-else-if="name === 'chevron-right'"
      d="M9 18l6-6-6-6"
    />

    <!-- Building / Neighborhood -->
    <path
      v-else-if="name === 'building'"
      d="M3 21h18M9 8h1m4 0h1m-5 4h1m4 0h1m-5 4h1m4 0h1M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16"
    />

    <!-- Fallback circle -->
    <circle v-else cx="12" cy="12" r="8" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  className: {
    type: String,
    default: 'w-5 h-5'
  },
  strokeWidth: {
    type: [Number, String],
    default: 1.8
  }
})

const isFilled = computed(() => props.name === 'whatsapp')
const viewBox = computed(() => (props.name === 'whatsapp' ? '0 0 24 24' : '0 0 24 24'))
const computedClass = computed(() => props.className || 'w-5 h-5')
</script>
