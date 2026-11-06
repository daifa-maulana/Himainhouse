/**
 * ==========================================================================
 * MODULE: DYNAMIC YEAR
 * Path: assets/js/modules/year.js
 * Deskripsi: Memperbarui tahun hak cipta (copyright) secara otomatis
 *            sehingga website selalu mutakhir tanpa perlu edit manual setiap tahun.
 * ==========================================================================
 */

function initDynamicYear() {
  const currentYearSpan = document.querySelector("#current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
}

// Kompatibilitas tanpa bundler
if (typeof window !== "undefined") {
  window.initDynamicYear = initDynamicYear;
}

