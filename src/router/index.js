import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

// Definisi semua routes aplikasi KasNDB
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { requiresGuest: true }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/DashboardView.vue'),
    meta: { requiresAuth: true, requiresWarga: true }
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('@/views/admin/AdminDashboard.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/warga',
    name: 'WargaView',
    component: () => import('@/views/admin/WargaView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/pembayaran',
    name: 'PembayaranView',
    component: () => import('@/views/admin/PembayaranView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/admin/pengeluaran',
    name: 'PengeluaranView',
    component: () => import('@/views/admin/PengeluaranView.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: () => import('@/views/LaporanView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('@/views/ProfilView.vue'),
    meta: { requiresAuth: true }
  },
  // Catch-all redirect ke login
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

// Gunakan hash history agar kompatibel dengan GitHub Pages (tanpa server-side routing)
const router = createRouter({
  history: createWebHashHistory('/KasNDB/'),
  routes
})

// Navigation guard untuk proteksi halaman
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // Tunggu inisialisasi auth selesai
  if (authStore.loading) {
    await new Promise(resolve => {
      const unwatch = authStore.$subscribe(() => {
        if (!authStore.loading) {
          unwatch()
          resolve()
        }
      })
      // Timeout fallback
      setTimeout(resolve, 3000)
    })
  }

  const isAuthenticated = !!authStore.user
  const isAdmin = authStore.isAdmin

  // Halaman yang memerlukan autentikasi
  if (to.meta.requiresAuth && !isAuthenticated) {
    return next('/login')
  }

  // Halaman yang hanya bisa diakses tanpa login (login page)
  if (to.meta.requiresGuest && isAuthenticated) {
    return next(isAdmin ? '/admin' : '/')
  }

  // Halaman yang memerlukan admin
  if (to.meta.requiresAdmin && !isAdmin) {
    return next('/')
  }

  // Warga mencoba akses halaman dashboard utama - redirect ke dashboard warga
  if (to.meta.requiresWarga && isAdmin) {
    return next('/admin')
  }

  next()
})

export default router
