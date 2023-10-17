// Fungsi untuk mengonfirmasi undangan ulang tahun
function konfirmasiUlangTahun() {
    const konfirmasi = confirm("Apakah Anda akan hadir di ulang tahun saya?");
    if (konfirmasi) {
        alert("Terima kasih! Kami akan senang melihat Anda di pesta.");
    } else {
        alert("Maaf Anda tidak bisa hadir. Semoga bisa bertemu lain waktu.");
    }
}

// Fungsi untuk mengirim pesan saat mengklik "Contact Me"
function kirimPesan() {
    const pesan = prompt("Kirim pesan kepada saya:");
    if (pesan) {
        alert("Terima kasih atas pesan Anda: \n" + pesan);
    } else {
        alert("Pesan tidak terkirim.");
    }
}

// Menghubungkan fungsi-fungsi dengan elemen-elemen di halaman
const ulangTahunButton = document.getElementById("ulangTahunButton");
if (ulangTahunButton) {
    ulangTahunButton.addEventListener("click", konfirmasiUlangTahun);
}

const contactMeLink = document.getElementById("contactMeLink");
if (contactMeLink) {
    contactMeLink.addEventListener("click", kirimPesan);
}
