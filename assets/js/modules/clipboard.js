/**
 * ==========================================================================
 * MODULE: CLIPBOARD COPY
 * Path: assets/js/modules/clipboard.js
 * Deskripsi: Menyalin alamat email ke clipboard secara instan dengan tombol CTA
 *            disertai feedback visual halus (tooltip/status bar).
 * Fallback: Menggunakan document.execCommand('copy') jika navigator.clipboard
 *           tidak tersedia (misalnya pada koneksi HTTP / non-secure context).
 * ==========================================================================
 */

export function initClipboard() {
  const copyBtn = document.querySelector("#btn-copy-email");
  const copyFeedback = document.querySelector("#copy-feedback");

  if (!copyBtn || !copyFeedback) return;

  copyBtn.addEventListener("click", async () => {
    const emailToCopy = copyBtn.getAttribute("data-email") || "hello@example.com";

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        // Fallback untuk browser lawas / lingkungan non-HTTPS
        const tempInput = document.createElement("textarea");
        tempInput.value = emailToCopy;
        tempInput.setAttribute("readonly", "");
        tempInput.style.position = "absolute";
        tempInput.style.left = "-9999px";
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
      }

      // Tampilkan umpan balik visual sukses
      copyFeedback.textContent = "✓ Email berhasil disalin ke clipboard!";
      copyFeedback.style.opacity = "1";

      // Hilangkan otomatis setelah 3 detik
      setTimeout(() => {
        copyFeedback.style.opacity = "0";
        setTimeout(() => {
          copyFeedback.textContent = "";
        }, 300);
      }, 3000);
    } catch (err) {
      copyFeedback.textContent = "Gagal menyalin otomatis. Silakan salin manual.";
      copyFeedback.style.opacity = "1";
    }
  });
}

// Kompatibilitas tanpa bundler
if (typeof window !== "undefined") {
  window.initClipboard = initClipboard;
}
