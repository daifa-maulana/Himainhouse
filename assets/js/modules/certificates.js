/**
 * ==========================================================================
 * MODULE: CERTIFICATES TAB SWITCHER
 * Path: assets/js/modules/certificates.js
 * Deskripsi: Mengelola pergantian tampilan sertifikat interaktif (Google Gemini
 *            dan Dicoding Prompt Engineering) dengan transisi fade halus.
 * Aksesibilitas: Mendukung keyboard tab navigation & aria attributes.
 * ==========================================================================
 */

function initCertificates() {
  const tabs = document.querySelectorAll(".cert-tab-btn");
  const panels = document.querySelectorAll(".cert-panel");

  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("aria-controls");

      // Reset seluruh tab & panel
      tabs.forEach((t) => {
        t.classList.remove("is-active");
        t.setAttribute("aria-selected", "false");
      });

      panels.forEach((p) => {
        p.classList.remove("is-active");
        p.hidden = true;
      });

      // Aktifkan tab yang diklik
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");

      // Tampilkan panel yang bersangkutan dengan transisi halus
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.hidden = false;
        // Trigger browser reflow agar transisi CSS berjalan
        void targetPanel.offsetWidth;
        targetPanel.classList.add("is-active");
      }
    });
  });
}

// Kompatibilitas tanpa bundler
if (typeof window !== "undefined") {
  window.initCertificates = initCertificates;
}

