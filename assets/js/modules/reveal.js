/**
 * ==========================================================================
 * MODULE: SCROLL REVEAL (SUBTLE ENTRANCE ANIMATION)
 * Path: assets/js/modules/reveal.js
 * Deskripsi: Memberikan efek fade-in halus ke atas saat elemen masuk ke layar.
 * Aksesibilitas: Menghargai preferensi pengguna (prefers-reduced-motion)
 *                dengan meniadakan animasi bagi yang sensitif terhadap motion.
 * ==========================================================================
 */

export function initReveal() {
  const revealElements = document.querySelectorAll(".reveal");
  if (revealElements.length === 0) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Jika browser mendukung IntersectionObserver dan user tidak meminta reduced motion
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Sekali tampil, hentikan pengamatan agar efisien
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback instan jika animasi dinonaktifkan atau browser lawas
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }
}

// Kompatibilitas tanpa bundler
if (typeof window !== "undefined") {
  window.initReveal = initReveal;
}
