/**
 * ==========================================================================
 * MODULE: SCROLLSPY (ACTIVE NAV OBSERVER)
 * Path: assets/js/modules/scrollspy.js
 * Deskripsi: Menggunakan IntersectionObserver API modern untuk menyorot
 *            menu navigasi yang aktif sesuai section yang sedang dibaca pengguna.
 * Keunggulan: Sangat hemat CPU dibandingkan event listener scroll biasa.
 * ==========================================================================
 */

function initScrollspy() {
  const sections = document.querySelectorAll("section[id]");
  const headerLinks = document.querySelectorAll(".dock-link[href^='#']");

  if (!("IntersectionObserver" in window) || sections.length === 0) {
    return;
  }

  // Pengaturan batas pandang (viewport margins)
  // -20% atas dan -60% bawah memfokuskan observasi di area tengah-atas layar
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0,
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute("id");
        headerLinks.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === `#${currentId}`) {
            link.classList.add("is-active");
          } else {
            link.classList.remove("is-active");
          }
        });
      }
    });
  }, observerOptions);

  // Pasang pengamat pada setiap elemen section
  sections.forEach((section) => sectionObserver.observe(section));
}

// Kompatibilitas tanpa bundler
if (typeof window !== "undefined") {
  window.initScrollspy = initScrollspy;
}

