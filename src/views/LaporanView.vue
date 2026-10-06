<template>
  <!-- Halaman Laporan Kas - Clean, Mobile-First, Transparan untuk Admin & Warga -->
  <div class="min-h-screen bg-zinc-50 pb-28">
    <!-- Header App Bar -->
    <header class="bg-white border-b border-zinc-200/80 sticky top-0 z-20 pt-safe">
      <div class="max-w-md mx-auto px-4 pt-3.5 pb-3">
        <div class="flex items-center justify-between mb-3">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center">
              <AppIcon name="chart" className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <h1 class="text-base font-bold text-zinc-900 leading-tight">Laporan Keuangan</h1>
              <p class="text-[11px] text-zinc-400">Transparansi arus kas perumahan</p>
            </div>
          </div>

          <!-- Tombol Export PDF -->
          <button
            type="button"
            @click="exportPDF"
            :disabled="loading || exporting"
            class="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 disabled:bg-emerald-300 text-white text-xs font-semibold rounded-xl shadow-xs transition-colors"
          >
            <span v-if="exporting" class="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            <AppIcon v-else name="download" className="w-3.5 h-3.5" />
            <span>{{ exporting ? 'Menyusun...' : 'Unduh PDF' }}</span>
          </button>
        </div>

        <!-- Selector Tahun & Search/Filter Bar -->
        <div class="flex gap-2">
          <div class="relative flex-1">
            <select
              v-model="tahun"
              @change="loadData"
              class="w-full pl-3 pr-8 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-xs font-semibold text-zinc-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 appearance-none transition-all"
            >
              <option v-for="y in tahunOptions" :key="y" :value="y">
                Tahun Buku {{ y }}
              </option>
            </select>
            <div class="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
              <AppIcon name="chevron-down" className="w-3.5 h-3.5" />
            </div>
          </div>

          <!-- View Mode Toggle (Mobile Friendly) -->
          <div class="flex p-0.5 bg-zinc-100 rounded-xl border border-zinc-200/60">
            <button
              type="button"
              @click="viewMode = 'card'"
              :class="[
                'px-2.5 py-1 text-xs font-medium rounded-lg transition-all',
                viewMode === 'card' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-500'
              ]"
              title="Tampilan Kartu"
            >
              Daftar
            </button>
            <button
              type="button"
              @click="viewMode = 'table'"
              :class="[
                'px-2.5 py-1 text-xs font-medium rounded-lg transition-all',
                viewMode === 'table' ? 'bg-white text-zinc-900 shadow-xs font-semibold' : 'text-zinc-500'
              ]"
              title="Tampilan Tabel Matriks"
            >
              Matriks
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center py-16">
      <LoadingSpinner />
    </div>

    <!-- Main Content -->
    <main v-else class="max-w-md mx-auto px-4 pt-4 space-y-4">
      <!-- 3 Kartu Ringkasan Finansial -->
      <div class="grid grid-cols-3 gap-2">
        <!-- Pemasukan -->
        <div class="bg-white rounded-2xl p-3 border border-zinc-200/80 shadow-xs text-center space-y-0.5">
          <div class="flex items-center justify-center gap-1 text-[11px] text-zinc-500">
            <AppIcon name="arrow-down-left" className="w-3 h-3 text-emerald-600" />
            <span>Masuk</span>
          </div>
          <p class="text-xs sm:text-sm font-bold text-emerald-700 truncate">
            {{ formatRupiahShort(totalPemasukan) }}
          </p>
        </div>

        <!-- Pengeluaran -->
        <div class="bg-white rounded-2xl p-3 border border-zinc-200/80 shadow-xs text-center space-y-0.5">
          <div class="flex items-center justify-center gap-1 text-[11px] text-zinc-500">
            <AppIcon name="arrow-up-right" className="w-3 h-3 text-rose-600" />
            <span>Keluar</span>
          </div>
          <p class="text-xs sm:text-sm font-bold text-rose-600 truncate">
            {{ formatRupiahShort(totalPengeluaran) }}
          </p>
        </div>

        <!-- Saldo Kas -->
        <div class="bg-white rounded-2xl p-3 border border-zinc-200/80 shadow-xs text-center space-y-0.5">
          <div class="flex items-center justify-center gap-1 text-[11px] text-zinc-500">
            <AppIcon name="wallet" className="w-3 h-3 text-zinc-700" />
            <span>Saldo</span>
          </div>
          <p :class="['text-xs sm:text-sm font-bold truncate', saldo >= 0 ? 'text-zinc-900' : 'text-rose-600']">
            {{ formatRupiahShort(saldo) }}
          </p>
        </div>
      </div>

      <!-- TAMPILAN 1: TAMPILAN KARTU PER RUMAH (Sangat User-Friendly di Layar Mobile HP) -->
      <section v-if="viewMode === 'card'" class="bg-white rounded-2xl p-4 border border-zinc-200/80 shadow-xs">
        <div class="flex items-center justify-between mb-3 pb-2 border-b border-zinc-100">
          <div class="flex items-center gap-1.5">
            <AppIcon name="users" className="w-4 h-4 text-emerald-600" />
            <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Rekap Iuran Tiap Rumah
            </h2>
          </div>
          <span class="text-xs text-zinc-400 font-medium">Tahun {{ tahun }}</span>
        </div>

        <div class="divide-y divide-zinc-100 space-y-2">
          <div
            v-for="warga in wargaStore.wargas"
            :key="warga.id"
            class="pt-2 first:pt-0"
          >
            <div class="flex items-center justify-between gap-2 mb-1.5">
              <div class="flex items-center gap-2 min-w-0">
                <span class="px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-800 text-xs font-bold">
                  {{ warga.nomorRumah }}
                </span>
                <span class="text-xs font-medium text-zinc-800 truncate">
                  {{ warga.namaLengkap || warga.namaDepan }}
                </span>
              </div>
              <span class="text-xs font-bold text-emerald-700 flex-shrink-0">
                {{ countLunas(warga.nomorRumah) }}/12 Bulan
              </span>
            </div>

            <!-- Mini month indicators (12 dots) -->
            <div class="grid grid-cols-12 gap-1 py-1">
              <div
                v-for="b in 12"
                :key="b"
                :class="[
                  'h-5 rounded flex items-center justify-center text-[9px] font-bold',
                  isPaid(warga.nomorRumah, b)
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-zinc-100 text-zinc-400'
                ]"
                :title="`${namaBulanSingkat[b-1]}: ${isPaid(warga.nomorRumah, b) ? 'Lunas' : 'Belum'}`"
              >
                {{ namaBulanSingkat[b - 1].slice(0, 1) }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- TAMPILAN 2: TABEL MATRIKS (Full spreadsheet dengan sticky header & row) -->
      <section v-else class="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
        <div class="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
          <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
            Matriks Pembayaran {{ tahun }}
          </h2>
          <span class="text-[11px] text-zinc-400">Geser ke kanan →</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-xs">
            <thead>
              <tr class="bg-zinc-50 border-b border-zinc-200/80">
                <th class="text-left px-3 py-2.5 font-semibold text-zinc-600 sticky left-0 bg-zinc-50 shadow-[1px_0_0_0_#e4e4e7] min-w-[65px]">
                  Rumah
                </th>
                <th
                  v-for="(nama, idx) in namaBulanSingkat"
                  :key="idx"
                  class="text-center px-1.5 py-2.5 font-semibold text-zinc-600 min-w-[28px]"
                >
                  {{ nama }}
                </th>
                <th class="text-center px-2 py-2.5 font-semibold text-zinc-600 min-w-[45px]">
                  Total
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-100">
              <tr
                v-for="warga in wargaStore.wargas"
                :key="warga.id"
                class="hover:bg-zinc-50/80 transition-colors"
              >
                <td class="px-3 py-2 font-bold text-zinc-900 sticky left-0 bg-white shadow-[1px_0_0_0_#f4f4f5]">
                  {{ warga.nomorRumah }}
                </td>
                <td
                  v-for="bulan in 12"
                  :key="bulan"
                  class="text-center px-1 py-2"
                >
                  <span
                    v-if="isPaid(warga.nomorRumah, bulan)"
                    class="inline-block w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 leading-4 text-center font-bold"
                  >
                    ✓
                  </span>
                  <span v-else class="text-zinc-300">
                    ·
                  </span>
                </td>
                <td class="text-center px-2 py-2 font-bold text-emerald-700">
                  {{ countLunas(warga.nomorRumah) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t-2 border-zinc-200 bg-zinc-50 font-bold">
                <td class="px-3 py-2 text-zinc-700 sticky left-0 bg-zinc-50 shadow-[1px_0_0_0_#e4e4e7]">
                  Total
                </td>
                <td
                  v-for="bulan in 12"
                  :key="bulan"
                  class="text-center px-1 py-2 text-emerald-700"
                >
                  {{ countPerBulan(bulan) }}
                </td>
                <td class="text-center px-2 py-2 text-emerald-800">
                  {{ totalLunas }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      <!-- Daftar Rincian Pengeluaran Tahun Ini -->
      <section class="bg-white rounded-2xl border border-zinc-200/80 shadow-xs overflow-hidden">
        <div class="px-4 py-3 border-b border-zinc-100 flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <AppIcon name="receipt" className="w-4 h-4 text-rose-600" />
            <h2 class="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Rincian Pengeluaran {{ tahun }}
            </h2>
          </div>
          <span class="text-xs text-zinc-400">({{ pengeluaranStore.pengeluarans.length }} item)</span>
        </div>

        <div v-if="pengeluaranStore.pengeluarans.length === 0" class="py-8 text-center text-zinc-400">
          <p class="text-xs">Belum ada pengeluaran tercatat di tahun {{ tahun }}</p>
        </div>

        <div v-else>
          <div class="divide-y divide-zinc-100 max-h-80 overflow-y-auto no-scrollbar">
            <div
              v-for="item in pengeluaranStore.pengeluarans"
              :key="item.id"
              class="px-4 py-3 flex items-start justify-between gap-3 hover:bg-zinc-50/50 transition-colors"
            >
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 mb-0.5">
                  <span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600">
                    {{ item.kategori }}
                  </span>
                  <span class="text-[11px] text-zinc-400">
                    {{ formatTanggal(item.tanggal) }}
                  </span>
                </div>
                <p class="text-xs font-medium text-zinc-800 truncate">
                  {{ item.keterangan }}
                </p>
              </div>
              <p class="text-xs font-bold text-rose-600 flex-shrink-0">
                {{ formatRupiah(item.jumlah) }}
              </p>
            </div>
          </div>

          <div class="px-4 py-3 bg-zinc-50 border-t border-zinc-200/80 flex items-center justify-between">
            <span class="text-xs font-semibold text-zinc-700">Total Pengeluaran</span>
            <span class="text-xs font-bold text-rose-600">{{ formatRupiah(totalPengeluaran) }}</span>
          </div>
        </div>
      </section>
    </main>

    <!-- Bottom Navigation -->
    <BottomNav :role="authStore.isAdmin ? 'admin' : 'warga'" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth.js'
import { useWargaStore } from '@/stores/warga.js'
import { usePembayaranStore } from '@/stores/pembayaran.js'
import { usePengeluaranStore } from '@/stores/pengeluaran.js'
import { useKasStore } from '@/stores/kas.js'
import BottomNav from '@/components/BottomNav.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import AppIcon from '@/components/AppIcon.vue'

const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const pengeluaranStore = usePengeluaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const exporting = ref(false)
const viewMode = ref('card') // 'card' or 'table'
const tahun = ref(new Date().getFullYear())
const tahunOptions = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i)

const namaBulanSingkat = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']

const totalPemasukan = computed(() =>
  pembayaranStore.pembayarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
)
const totalPengeluaran = computed(() => pengeluaranStore.totalPengeluaran)
const saldo = computed(() => totalPemasukan.value - totalPengeluaran.value)

function isPaid(nomorRumah, bulan) {
  return pembayaranStore.pembayarans.some(
    p => p.nomorRumah === nomorRumah && Number(p.bulan) === Number(bulan) && Number(p.tahun) === Number(tahun.value)
  )
}

function countLunas(nomorRumah) {
  return Array.from({ length: 12 }, (_, i) => i + 1).filter(b => isPaid(nomorRumah, b)).length
}

function countPerBulan(bulan) {
  return wargaStore.wargas.filter(w => isPaid(w.nomorRumah, bulan)).length
}

const totalLunas = computed(() =>
  wargaStore.wargas.reduce((sum, w) => sum + countLunas(w.nomorRumah), 0)
)

function formatRupiah(angka) {
  return 'Rp ' + Number(angka || 0).toLocaleString('id-ID')
}

function formatRupiahShort(angka) {
  const n = Number(angka || 0)
  if (Math.abs(n) >= 1000000) return 'Rp ' + (n / 1000000).toFixed(1) + 'jt'
  if (Math.abs(n) >= 1000) return 'Rp ' + (n / 1000).toFixed(0) + 'rb'
  return 'Rp ' + n.toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return '-'
  const d = date instanceof Date ? date : new Date(date)
  if (isNaN(d.getTime())) return '-'
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

/**
 * Export laporan kas ke dokumen PDF resmi & rapi
 */
async function exportPDF() {
  exporting.value = true
  try {
    const { default: jsPDF } = await import('jspdf')
    const { default: autoTable } = await import('jspdf-autotable')

    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const namaPerumahan = kasStore.settings.namaPerumahan || 'Perumahan NDB'

    // Header
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(`LAPORAN KAS ${namaPerumahan.toUpperCase()}`, 148, 18, { align: 'center' })

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text(`Tahun Buku ${tahun.value}`, 148, 25, { align: 'center' })

    doc.setFontSize(8)
    doc.text(
      `Dicetak pada: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`,
      148, 30, { align: 'center' }
    )

    // Divider Line
    doc.setDrawColor(5, 150, 105)
    doc.setLineWidth(0.6)
    doc.line(14, 33, 283, 33)

    // Ringkasan Keuangan
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('RINGKASAN KEUANGAN KAS', 14, 40)

    const ringkasanData = [
      ['Total Pemasukan Iuran', formatRupiah(totalPemasukan.value)],
      ['Total Pengeluaran Kas', formatRupiah(totalPengeluaran.value)],
      ['Saldo Kas Bersih', formatRupiah(saldo.value)]
    ]

    autoTable(doc, {
      startY: 43,
      head: [['Keterangan', 'Jumlah']],
      body: ringkasanData,
      theme: 'grid',
      headStyles: { fillColor: [5, 150, 105], fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 1: { halign: 'right' } },
      margin: { left: 14, right: 200 }
    })

    // Rekap Pembayaran Matriks
    const afterRingkasan = doc.lastAutoTable.finalY + 7
    doc.setFontSize(9)
    doc.setFont('helvetica', 'bold')
    doc.text('REKAP PEMBAYARAN IURAN WARGA', 14, afterRingkasan)

    const headerBulan = ['No. Rumah', ...namaBulanSingkat, 'Total']
    const rowsRekap = wargaStore.wargas.map(w => [
      w.nomorRumah,
      ...Array.from({ length: 12 }, (_, i) => isPaid(w.nomorRumah, i + 1) ? '✓' : '-'),
      countLunas(w.nomorRumah)
    ])

    rowsRekap.push([
      'TOTAL',
      ...Array.from({ length: 12 }, (_, i) => String(countPerBulan(i + 1))),
      String(totalLunas.value)
    ])

    autoTable(doc, {
      startY: afterRingkasan + 3,
      head: [headerBulan],
      body: rowsRekap,
      theme: 'grid',
      headStyles: { fillColor: [5, 150, 105], fontSize: 8, halign: 'center' },
      bodyStyles: { fontSize: 8, halign: 'center' },
      columnStyles: { 0: { halign: 'left', fontStyle: 'bold' } },
      didParseCell: (data) => {
        if (data.row.index === rowsRekap.length - 1) {
          data.cell.styles.fillColor = [236, 253, 245]
          data.cell.styles.fontStyle = 'bold'
        }
        if (data.section === 'body' && data.cell.raw === '✓') {
          data.cell.styles.textColor = [5, 150, 105]
          data.cell.styles.fontStyle = 'bold'
        }
      },
      margin: { left: 14, right: 14 }
    })

    // Rincian Pengeluaran
    if (pengeluaranStore.pengeluarans.length > 0) {
      const afterRekap = doc.lastAutoTable.finalY + 7
      if (afterRekap > 185) {
        doc.addPage()
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.text('DAFTAR PENGELUARAN KAS', 14, 18)
      } else {
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.text('DAFTAR PENGELUARAN KAS', 14, afterRekap)
      }

      const pengeluaranY = afterRekap > 185 ? 21 : afterRekap + 3
      const rowsPengeluaran = pengeluaranStore.pengeluarans.map((p, idx) => [
        idx + 1,
        formatTanggal(p.tanggal),
        p.keterangan,
        p.kategori,
        formatRupiah(p.jumlah)
      ])
      rowsPengeluaran.push(['', '', '', 'TOTAL', formatRupiah(totalPengeluaran.value)])

      autoTable(doc, {
        startY: pengeluaranY,
        head: [['No', 'Tanggal', 'Keterangan', 'Kategori', 'Jumlah']],
        body: rowsPengeluaran,
        theme: 'grid',
        headStyles: { fillColor: [225, 29, 72], fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        columnStyles: {
          0: { halign: 'center', cellWidth: 10 },
          4: { halign: 'right' }
        },
        didParseCell: (data) => {
          if (data.row.index === rowsPengeluaran.length - 1) {
            data.cell.styles.fontStyle = 'bold'
            data.cell.styles.fillColor = [255, 241, 242]
          }
        },
        margin: { left: 14, right: 14 }
      })
    }

    // Footer Page Numbers
    const pageCount = doc.internal.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(7)
      doc.setTextColor(150)
      doc.text(
        `KasNDB — Sistem Transparansi Keuangan ${namaPerumahan} | Hal. ${i} dari ${pageCount}`,
        148, doc.internal.pageSize.height - 8,
        { align: 'center' }
      )
    }

    doc.save(`Laporan-Kas-${namaPerumahan.replace(/\s+/g, '-')}-${tahun.value}.pdf`)
  } catch (err) {
    console.error('Gagal export PDF:', err)
    alert('Gagal menyusun PDF. Silakan coba lagi.')
  } finally {
    exporting.value = false
  }
}

async function loadData() {
  loading.value = true
  try {
    await Promise.all([
      kasStore.fetchSettings(),
      wargaStore.fetchAll(),
      pembayaranStore.fetchAll(tahun.value),
      pengeluaranStore.fetchAll(tahun.value)
    ])
  } catch (err) {
    console.error('Error loading laporan:', err)
  } finally {
    loading.value = false
  }
}

onMounted(loadData)
</script>
