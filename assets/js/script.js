/**
 * ==========================================================================
 * DAIFA PORTFOLIO — JAVASCRIPT LOGIC
 * Konsep: Vanilla JavaScript murni, ringan (< 8 KB), tanpa dependensi,
 *         interaksi halus untuk Liquid Glass Dock, Scrollspy, & Clipboard.
 * ==========================================================================
 */

// 1. PROGRESSIVE ENHANCEMENT
// Menandai browser bahwa JS aktif sehingga animasi scroll reveal berjalan mulus
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------------
  // 2. TOGGLE MENU MOBILE (FROSTED GLASS DRAWER)
  // ------------------------------------------------------------------------
  const dockToggle = document.querySelector(".dock-toggle");
  const dockMenu = document.querySelector(".dock-menu");
  const dockLinks = document.querySelectorAll(".dock-link, .dock-btn-cta");

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

    // Menutup menu jika klik di luar area menu
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

  // ------------------------------------------------------------------------
  // 3. SCROLLSPY (PENANDA NAVIGASI AKTIF)
  // Menyorot menu yang sedang aktif di dock saat digulir
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll("section[id]");
  const headerLinks = document.querySelectorAll(".dock-link[href^='#']");

  if ("IntersectionObserver" in window && sections.length > 0) {
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

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // ------------------------------------------------------------------------
  // 4. SCROLL REVEAL (MUNCUL HALUS SAAT DIGULIR)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll(".reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  // ------------------------------------------------------------------------
  // 5. SALIN EMAIL KE CLIPBOARD SECARA INSTAN
  // ------------------------------------------------------------------------
  const copyBtn = document.querySelector("#btn-copy-email");
  const copyFeedback = document.querySelector("#copy-feedback");

  if (copyBtn && copyFeedback) {
    copyBtn.addEventListener("click", async () => {
      const emailToCopy = copyBtn.getAttribute("data-email") || "hello@example.com";

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          const tempInput = document.createElement("textarea");
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
        }

        copyFeedback.textContent = "✓ Email address copied to clipboard!";
        copyFeedback.style.opacity = "1";

        setTimeout(() => {
          copyFeedback.style.opacity = "0";
          setTimeout(() => {
            copyFeedback.textContent = "";
          }, 300);
        }, 3000);
      } catch (err) {
        copyFeedback.textContent = "Copy failed. Please copy manually.";
        copyFeedback.style.opacity = "1";
      }
    });
  }

  // ------------------------------------------------------------------------
  // 6. EFEK FROSTED GLASS DINAMIS SAAT SCROLL
  // Meningkatkan kerapatan kaca saat halaman digulir
  // ------------------------------------------------------------------------
  const glassDock = document.querySelector(".glass-dock");
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

  // ------------------------------------------------------------------------
  // 7. TAHUN DINAMIS PADA FOOTER
  // ------------------------------------------------------------------------
  const currentYearSpan = document.querySelector("#current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------------
  // 8. CERTIFICATES TAB SWITCHER (INTERACTIVE SHOWCASE)
  // Mengelola pergantian tampilan sertifikat interaktif (Google Gemini
  // dan Dicoding Prompt Engineering) dengan transisi fade halus & a11y.
  // ------------------------------------------------------------------------
  const certTabs = document.querySelectorAll(".cert-tab-btn");
  const certPanels = document.querySelectorAll(".cert-panel");

  if (certTabs.length > 0 && certPanels.length > 0) {
    certTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("aria-controls");

        // Nonaktifkan semua tab & sembunyikan semua panel
        certTabs.forEach((t) => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });

        certPanels.forEach((p) => {
          p.classList.remove("is-active");
          p.hidden = true;
        });

        // Aktifkan tab yang dipilih
        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");

        // Tampilkan panel target dengan trigger reflow untuk transisi CSS
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) {
          targetPanel.hidden = false;
          void targetPanel.offsetWidth;
          targetPanel.classList.add("is-active");
        }
      });
    });
  }
});
