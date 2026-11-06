/**
 * ==========================================================================
 * MODULE: DOCK NAVIGATION & MOBILE DRAWER
 * Path: assets/js/modules/dock.js
 * Deskripsi: Mengelola interaksi floating liquid glass dock, termasuk
 *            efek frosted glass saat di-scroll dan toggle menu drawer di mobile.
 * Aksesibilitas: Keyboard 'Escape' untuk menutup menu, atribut aria-expanded.
 * ==========================================================================
 */

function initDock() {
  const dockToggle = document.querySelector(".dock-toggle");
  const dockMenu = document.querySelector(".dock-menu");
  const dockLinks = document.querySelectorAll(".dock-link, .dock-btn-cta");
  const glassDock = document.querySelector(".glass-dock");

  // 1. Fungsi Buka & Tutup Menu Mobile
  function closeMenu() {
    if (!dockMenu || !dockToggle) return;
    dockMenu.classList.remove("is-open");
    dockToggle.setAttribute("aria-expanded", "false");
    dockToggle.setAttribute("aria-label", "Buka menu navigasi");
  }

  function openMenu() {
    if (!dockMenu || !dockToggle) return;
    dockMenu.classList.add("is-open");
    dockToggle.setAttribute("aria-expanded", "true");
    dockToggle.setAttribute("aria-label", "Tutup menu navigasi");
  }

  // 2. Event Listener Tombol Hamburger
  if (dockToggle && dockMenu) {
    dockToggle.addEventListener("click", () => {
      const isOpen = dockMenu.classList.contains("is-open");
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Menutup menu jika salah satu tautan diklik
    dockLinks.forEach((link) => {
      link.addEventListener("click", () => closeMenu());
    });

    // Menutup menu jika tombol Escape ditekan (Aksesibilitas keyboard)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && dockMenu.classList.contains("is-open")) {
        closeMenu();
      }
    });

    // Menutup menu jika pengguna mengklik area luar menu
    document.addEventListener("click", (e) => {
      if (
        dockMenu.classList.contains("is-open") &&
        !dockMenu.contains(e.target) &&
        !dockToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  // 3. Efek Frosted Glass Lebih Padat Saat Digulir (Scroll Effect)
  if (glassDock) {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 24) {
          glassDock.classList.add("is-scrolled");
        } else {
          glassDock.classList.remove("is-scrolled");
        }
      },
      { passive: true }
    );
  }
}

// Kompatibilitas tanpa bundler (jika dipanggil langsung)
if (typeof window !== "undefined") {
  window.initDock = initDock;
}

