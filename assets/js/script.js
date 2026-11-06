/**
 * ==========================================================================
 * MASTER JAVASCRIPT ORCHESTRATOR
 * Path: assets/js/script.js
 * Konsep: Arsitektur Modular Vanilla JS tanpa bundler eksternal.
 *         Masing-masing fungsi fitur tersimpan rapi & mandiri di:
 *         - assets/js/modules/dock.js      -> Menu toggle & frosted glass dock
 *         - assets/js/modules/scrollspy.js -> Penyorot link navigasi aktif
 *         - assets/js/modules/reveal.js    -> Animasi scroll halus & a11y
 *         - assets/js/modules/clipboard.js -> Fitur salin email instan
 *         - assets/js/modules/year.js      -> Pembaruan tahun hak cipta
 * ==========================================================================
 */

// 1. PROGRESSIVE ENHANCEMENT
// Menambahkan class 'js' ke <html> agar CSS dapat menerapkan animasi hanya jika JS aktif
document.documentElement.classList.add("js");

/**
 * 2. INITIALIZE ALL MODULES
 * Mengorkestrasi pemanggilan setiap modul ketika dokumen HTML selesai dimuat.
 */
function initDaifaApp() {
  // Inisialisasi modul Dock & Mobile Drawer
  if (typeof initDock === "function") {
    initDock();
  }

  // Inisialisasi modul Scrollspy (Active Section Observer)
  if (typeof initScrollspy === "function") {
    initScrollspy();
  }

  // Inisialisasi modul Scroll Reveal Animation
  if (typeof initReveal === "function") {
    initReveal();
  }

  // Inisialisasi modul Clipboard Copy
  if (typeof initClipboard === "function") {
    initClipboard();
  }

  // Inisialisasi modul Tahun Hak Cipta Dinamis
  if (typeof initDynamicYear === "function") {
    initDynamicYear();
  }
}

// Jalankan saat DOM sudah siap
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDaifaApp);
} else {
  initDaifaApp();
}
