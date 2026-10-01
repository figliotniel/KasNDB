<template>
  <!-- Halaman Laporan Kas Perumahan -->
  <div class="min-h-screen bg-gray-50 pb-24">
    <!-- Header -->
    <div class="bg-white border-b border-gray-200 px-4 pt-12 pb-4 sticky top-0 z-10">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-bold text-gray-800">📊 Laporan Kas</h1>
        <button
          @click="exportPDF"
          :disabled="loading || exporting"
          class="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
        >
          <span v-if="exporting" class="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
          <span>{{ exporting ? 'Memproses...' : '⬇️ PDF' }}</span>
        </button>
      </div>

      <!-- Selector Tahun -->
      <div class="flex gap-2 mt-3">
        <select
          v-model="tahun"
          class="flex-1 px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          @change="loadData"
        >
          <option v-for="y in tahunOptions" :key="y" :value="y">Tahun {{ y }}</option>
        </select>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="loading" class="flex justify-center py-10">
      <LoadingSpinner />
    </div>

    <div v-else class="px-4 py-4 space-y-4">
      <!-- Kartu Ringkasan -->
      <div class="grid grid-cols-3 gap-2">
        <div class="bg-primary-50 border border-primary-200 rounded-2xl p-3 text-center">
          <p class="text-xs text-gray-500">Pemasukan</p>
          <p class="text-sm font-bold text-primary-700 mt-1">{{ formatRupiahShort(totalPemasukan) }}</p>
        </div>
        <div class="bg-red-50 border border-red-200 rounded-2xl p-3 text-center">
          <p class="text-xs text-gray-500">Pengeluaran</p>
          <p class="text-sm font-bold text-red-600 mt-1">{{ formatRupiahShort(totalPengeluaran) }}</p>
        </div>
        <div :class="['border rounded-2xl p-3 text-center', saldo >= 0 ? 'bg-primary-50 border-primary-200' : 'bg-red-50 border-red-200']">
          <p class="text-xs text-gray-500">Saldo</p>
          <p :class="['text-sm font-bold mt-1', saldo >= 0 ? 'text-primary-700' : 'text-red-600']">
            {{ formatRupiahShort(saldo) }}
          </p>
        </div>
      </div>

      <!-- Rekap Tabel: Warga vs Bulan -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100">
          <h2 class="text-sm font-semibold text-gray-700">📋 Rekap Pembayaran {{ tahun }}</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs">
            <thead>
              <tr class="bg-gray-50">
                <th class="text-left px-3 py-2 font-semibold text-gray-600 sticky left-0 bg-gray-50 min-w-[70px]">Rumah</th>
                <th
                  v-for="(nama, idx) in namaBulanSingkat"
                  :key="idx"
                  class="text-center px-1.5 py-2 font-semibold text-gray-600 min-w-[28px]"
                >{{ nama }}</th>
                <th class="text-center px-2 py-2 font-semibold text-gray-600">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="warga in wargaStore.wargas"
                :key="warga.id"
                class="border-t border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <td class="px-3 py-2 font-semibold text-gray-800 sticky left-0 bg-white">
                  {{ warga.nomorRumah }}
                </td>
                <td
                  v-for="bulan in 12"
                  :key="bulan"
                  class="text-center px-1 py-2"
                >
                  <span :class="isPaid(warga.nomorRumah, bulan) ? 'text-primary-500' : 'text-gray-300'">
                    {{ isPaid(warga.nomorRumah, bulan) ? '✅' : '○' }}
                  </span>
                </td>
                <td class="text-center px-2 py-2 font-bold text-primary-600">
                  {{ countLunas(warga.nomorRumah) }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="border-t-2 border-gray-200 bg-gray-50">
                <td class="px-3 py-2 font-bold text-gray-700 text-xs sticky left-0 bg-gray-50">Total</td>
                <td
                  v-for="bulan in 12"
                  :key="bulan"
                  class="text-center px-1 py-2 font-bold text-primary-600 text-xs"
                >
                  {{ countPerBulan(bulan) }}
                </td>
                <td class="text-center px-2 py-2 font-bold text-primary-600">
                  {{ totalLunas }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- Daftar Pengeluaran -->
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div class="px-4 py-3 border-b border-gray-100">
          <h2 class="text-sm font-semibold text-gray-700">
            💸 Daftar Pengeluaran {{ tahun }}
            <span class="text-gray-400 font-normal">({{ pengeluaranStore.pengeluarans.length }} item)</span>
          </h2>
        </div>
        <div v-if="pengeluaranStore.pengeluarans.length === 0" class="py-6 text-center">
          <p class="text-gray-400 text-sm">Tidak ada pengeluaran</p>
        </div>
        <div v-else>
          <div
            v-for="item in pengeluaranStore.pengeluarans"
            :key="item.id"
            class="flex items-center justify-between px-4 py-3 border-b border-gray-50 last:border-0"
          >
            <div class="flex-1 min-w-0">
              <p class="text-xs text-gray-400">{{ formatTanggal(item.tanggal) }} · {{ item.kategori }}</p>
              <p class="text-sm font-medium text-gray-700 truncate">{{ item.keterangan }}</p>
            </div>
            <p class="text-sm font-bold text-red-500 ml-2 flex-shrink-0">{{ formatRupiah(item.jumlah) }}</p>
          </div>
          <div class="px-4 py-3 bg-red-50 border-t border-red-100 flex justify-between">
            <span class="text-sm font-semibold text-gray-700">Total Pengeluaran</span>
            <span class="text-sm font-bold text-red-600">{{ formatRupiah(totalPengeluaran) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <BottomNav :role="authStore.isAdmin ? 'admin' : 'warga'" />
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

const authStore = useAuthStore()
const wargaStore = useWargaStore()
const pembayaranStore = usePembayaranStore()
const pengeluaranStore = usePengeluaranStore()
const kasStore = useKasStore()

const loading = ref(true)
const exporting = ref(false)
const tahun = ref(new Date().getFullYear())
const tahunOptions = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i)

const namaBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const namaBulanSingkat = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
  'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']

// Ringkasan keuangan
const totalPemasukan = computed(() =>
  pembayaranStore.pembayarans.reduce((sum, p) => sum + (p.jumlah || 0), 0)
)
const totalPengeluaran = computed(() => pengeluaranStore.totalPengeluaran)
const saldo = computed(() => totalPemasukan.value - totalPengeluaran.value)

// Total lunas keseluruhan (semua warga semua bulan)
const totalLunas = computed(() => pembayaranStore.pembayarans.length)

// Cek apakah rumah sudah bayar bulan tertentu
function isPaid(nomorRumah, bulan) {
  return pembayaranStore.pembayarans.some(
    p => p.nomorRumah === nomorRumah && p.bulan === bulan && p.tahun === tahun.value
  )
}

// Hitung berapa bulan lunas untuk satu rumah
function countLunas(nomorRumah) {
  return pembayaranStore.pembayarans.filter(
    p => p.nomorRumah === nomorRumah && p.tahun === tahun.value
  ).length
}

// Hitung berapa rumah yang lunas per bulan (untuk footer tabel)
function countPerBulan(bulan) {
  return wargaStore.wargas.filter(w => isPaid(w.nomorRumah, bulan)).length
}

function formatRupiah(angka) {
  return 'Rp ' + Number(angka).toLocaleString('id-ID')
}

function formatRupiahShort(angka) {
  const n = Number(angka)
  if (Math.abs(n) >= 1000000) return 'Rp ' + (n / 1000000).toFixed(1) + 'jt'
  if (Math.abs(n) >= 1000) return 'Rp ' + (n / 1000).toFixed(0) + 'rb'
  return 'Rp ' + n.toLocaleString('id-ID')
}

function formatTanggal(date) {
  if (!date) return '-'
  return new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

/**
 * Export laporan ke PDF menggunakan jsPDF + autoTable
 */
async function exportPDF() {
  exporting.value = true
  try {
    const { default: jsPDF } = await import('jspdf')
    const { default: autoTable } = await import('jspdf-autotable')

    const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
    const namaPerumahan = kasStore.settings.namaPerumahan || 'Perumahan NDB'

    // ── Header Dokumen ──────────────────────────────────────────────
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text(`LAPORAN KAS ${namaPerumahan.toUpperCase()}`, 148, 18, { align: 'center' })

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.text(`Tahun ${tahun.value}`, 148, 25, { align: 'center' })

    doc.setFontSize(9)
    doc.text(
      `Dicetak: ${new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}`,
      148, 31, { align: 'center' }
    )

    // Garis pemisah
    doc.setDrawColor(22, 163, 74)
    doc.setLineWidth(0.8)
    doc.line(14, 34, 283, 34)

    // ── Ringkasan Keuangan ──────────────────────────────────────────
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('RINGKASAN KEUANGAN', 14, 42)

    const ringkasanData = [
      ['Total Pemasukan', formatRupiah(totalPemasukan.value)],
      ['Total Pengeluaran', formatRupiah(totalPengeluaran.value)],
      ['Saldo Kas', formatRupiah(saldo.value)]
    ]

    autoTable(doc, {
      startY: 45,
      head: [['Keterangan', 'Jumlah']],
      body: ringkasanData,
      theme: 'grid',
      headStyles: { fillColor: [22, 163, 74], fontSize: 9 },
      bodyStyles: { fontSize: 9 },
      columnStyles: { 1: { halign: 'right' } },
      margin: { left: 14, right: 200 },
    })

    // ── Tabel Rekap Pembayaran ──────────────────────────────────────
    const afterRingkasan = doc.lastAutoTable.finalY + 8
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('REKAP PEMBAYARAN IURAN', 14, afterRingkasan)

    const headerBulan = ['No. Rumah', ...namaBulanSingkat, 'Total']
    const rowsRekap = wargaStore.wargas.map(w => [
      w.nomorRumah,
      ...Array.from({ length: 12 }, (_, i) => isPaid(w.nomorRumah, i + 1) ? '✓' : '-'),
      countLunas(w.nomorRumah)
    ])

    // Baris total per bulan
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
      headStyles: { fillColor: [22, 163, 74], fontSize: 8, halign: 'center' },
      bodyStyles: { fontSize: 8, halign: 'center' },
      columnStyles: { 0: { halign: 'left', fontStyle: 'bold' } },
      didParseCell: (data) => {
        // Warnai baris terakhir (total) dengan warna berbeda
        if (data.row.index === rowsRekap.length - 1) {
          data.cell.styles.fillColor = [240, 253, 244]
          data.cell.styles.fontStyle = 'bold'
        }
        // Warnai sel yang lunas
        if (data.section === 'body' && data.cell.raw === '✓') {
          data.cell.styles.textColor = [22, 163, 74]
          data.cell.styles.fontStyle = 'bold'
        }
      },
      margin: { left: 14, right: 14 },
    })

    // ── Tabel Daftar Pengeluaran ───────────────────────────────────
    if (pengeluaranStore.pengeluarans.length > 0) {
      const afterRekap = doc.lastAutoTable.finalY + 8

      // Cek apakah perlu halaman baru
      if (afterRekap > 185) {
        doc.addPage()
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.text('DAFTAR PENGELUARAN', 14, 18)
      } else {
        doc.setFontSize(10)
        doc.setFont('helvetica', 'bold')
        doc.text('DAFTAR PENGELUARAN', 14, afterRekap)
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
        headStyles: { fillColor: [239, 68, 68], fontSize: 9 },
        bodyStyles: { fontSize: 9 },
        columnStyles: {
          0: { halign: 'center', cellWidth: 10 },
          4: { halign: 'right' }
        },
        didParseCell: (data) => {
          if (data.row.index === rowsPengeluaran.length - 1) {
            data.cell.styles.fontStyle = 'bold'
            data.cell.styles.fillColor = [255, 240, 240]
          }
        },
        margin: { left: 14, right: 14 },
      })
    }

    // ── Footer ─────────────────────────────────────────────────────
    const pageCount = doc.internal.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(150)
      doc.text(
        `KasNDB - ${namaPerumahan} | Halaman ${i} dari ${pageCount}`,
        148, doc.internal.pageSize.height - 8,
        { align: 'center' }
      )
    }

    // Simpan file PDF
    doc.save(`Laporan-Kas-${namaPerumahan.replace(/\s+/g, '-')}-${tahun.value}.pdf`)
  } catch (err) {
    console.error('Gagal export PDF:', err)
    alert('Gagal membuat PDF. Silakan coba lagi.')
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
