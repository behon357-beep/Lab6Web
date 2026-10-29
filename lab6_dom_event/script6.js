const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

const paragraf = document.getElementById("paragraf");
const tombolTampil = document.getElementById("tombolTampil");

// Menambahkan tugas
tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const tombolSelesai = document.createElement("button");
    const tombolHapus = document.createElement("button");

    label.textContent = teks;

    // Tombol menandai tugas selesai
    tombolSelesai.type = "button";
    tombolSelesai.textContent = "Tandai selesai";

    tombolSelesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        if (item.classList.contains("selesai")) {
            tombolSelesai.textContent = "Batalkan selesai";
        } else {
            tombolSelesai.textContent = "Tandai selesai";
        }
    });

    // G.1: Tombol menghapus satu tugas
    tombolHapus.type = "button";
    tombolHapus.textContent = "Hapus";

    tombolHapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas berhasil dihapus.";
    });

    item.append(
        label,
        document.createTextNode(" "),
        tombolSelesai,
        tombolHapus
    );

    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";
    inputTugas.focus();
});

// G.4: Menyembunyikan dan menampilkan paragraf
tombolTampil.addEventListener("click", function () {
    paragraf.classList.toggle("sembunyi");

    if (paragraf.classList.contains("sembunyi")) {
        tombolTampil.textContent = "Tampilkan Paragraf";
    } else {
        tombolTampil.textContent = "Sembunyikan Paragraf";
    }
});
