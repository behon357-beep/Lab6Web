
# Laporan Praktikum 6: JavaScript DOM dan Event Handling

## 1. Tujuan Praktikum

1. Memahami Document Object Model (DOM) pada JavaScript.
2. Memilih dan memanipulasi elemen HTML menggunakan JavaScript.
3. Menggunakan event listener untuk menangani tindakan pengguna.
4. Membuat validasi form dan pesan sesuai kondisi input.
5. Membuat halaman web interaktif menggunakan HTML, CSS, dan JavaScript.

## 2. Struktur File

Lab6Web/
├── index.html
├── style.css
├── script.js
└── README.md

Keterangan:
- index.html: struktur halaman web.
- style.css: mengatur tampilan halaman web.
- script.js: mengatur fungsi dan interaksi JavaScript.
- README.md: dokumentasi praktikum.

## 3. Cara Menjalankan

1. Buka folder proyek Lab6Web menggunakan Visual Studio Code.
2. Pastikan file index.html, style.css, dan script.js tersedia.
3. Pastikan file CSS dan JavaScript sudah terhubung pada index.html.
4. Buka file index.html menggunakan browser.
5. Uji setiap fitur dan periksa hasilnya.

## 4. Langkah Kerja Praktikum

### Latihan 1 — Mengubah Teks dengan DOM
Memilih elemen HTML berdasarkan id menggunakan getElementById() dan mengubah teks menggunakan textContent.

### Latihan 2 — Event Click
Menggunakan addEventListener() untuk menjalankan fungsi ketika tombol diklik dan menampilkan waktu tindakan.

### Latihan 3 — Mengubah Kelas dan Gaya CSS
Menggunakan classList.toggle() untuk menambah atau menghapus kelas CSS pada elemen HTML.

### Latihan 4 — Penghitung Karakter
Menggunakan event input untuk menghitung jumlah karakter yang dimasukkan pengguna secara langsung.

### Latihan 5 — Validasi Form Pendaftaran
Memvalidasi nama, email, dan usia sebelum menampilkan pesan hasil validasi.

### Latihan 6 — To-do List
Membuat daftar tugas yang dapat ditambahkan, ditandai selesai, dan dihapus menggunakan JavaScript.

### Mini Project — Form Pendaftaran Workshop
Membuat form pendaftaran workshop dengan validasi input, pilihan sesi, pesan hasil, dan tombol reset.

### Eksperimen Mandiri
1. Menambahkan tombol untuk menghapus satu tugas.
2. Memvalidasi nama dengan panjang minimal tiga karakter.
3. Menampilkan sesi workshop yang dipilih melalui event change.
4. Menyembunyikan dan menampilkan paragraf menggunakan class CSS.
5. Mengamati perbedaan pemuatan script dengan dan tanpa atribut defer.

## 5. Screenshot Hasil Praktikum


### Latihan 1

Hasil dari latihan pertama, yaitu mengubah teks HTML menggunakan JavaScript DOM.

<p align="center">
  <img width="310" src="https://github.com/user-attachments/assets/a323ee55-6890-43ab-9fa8-15a6b7b11697" alt="Hasil Latihan 1">
  <br>
  <em>Gambar 1. Hasil Latihan 1.</em>
</p>

Kode JavaScript yang digunakan untuk menghasilkan tampilan tersebut:

**JavaScript (`script.js`)**

<p align="center">
  <img width="413" src="https://github.com/user-attachments/assets/6f17d5eb-ea42-4de4-9b28-bb3d51bddc12" alt="Kode JavaScript Latihan 1">
  <br>
  <em>Gambar 2. Kode JavaScript Latihan 1.</em>
</p>


## Latihan 2

Hasil dari Latihan 2:

<p align="center">
  <img width="237" src="https://github.com/user-attachments/assets/5db23e01-ac2b-41cc-90ad-3de6d74fe054" alt="Hasil Latihan 2">
</p>

---

## Latihan 3

Berikut adalah hasil dari Latihan 3 setelah tombol diklik.

<p align="center">
  <img width="900" src="https://github.com/user-attachments/assets/60f80150-1f50-4ba6-a24b-ed8b5394065e" alt="Hasil Latihan 3 setelah tombol diklik">
</p>

**Kode CSS yang digunakan:**

<p align="center">
  <img width="540" src="https://github.com/user-attachments/assets/49c97e13-68c7-4e46-b339-1ec134ac3dda" alt="Kode CSS Latihan 3">
</p>

**Kode JavaScript yang digunakan:**

<p align="center">
  <img width="900" src="https://github.com/user-attachments/assets/93ef9082-3d9b-459d-889a-784c1c6dbe69" alt="Kode JavaScript Latihan 3">
</p>

---

## Latihan 4

Berikut adalah hasil dari Latihan 4.

<p align="center">
  <img width="440" src="https://github.com/user-attachments/assets/c8bb8cc3-b452-4747-93fe-5beb990bdf2c" alt="Hasil Latihan 4">
</p>

**Kode yang digunakan:**

<p align="center">
  <img width="627" src="https://github.com/user-attachments/assets/257bb479-5b71-4748-8b5c-f08f13c0a099" alt="Kode Latihan 4">
</p>

---

## Latihan 5

Berikut adalah hasil Latihan 5 setelah semua input diisi sesuai dengan ketentuan masing-masing.

<p align="center">
  <img width="322" src="https://github.com/user-attachments/assets/a8efe526-aaa3-4b95-af3e-d11170d159c9" alt="Hasil Latihan 5">
</p>

**Kode JavaScript yang digunakan untuk mengatur input:**

<p align="center">
  <img width="441" src="https://github.com/user-attachments/assets/0bdda809-38fc-473f-957f-6723138fac68" alt="Kode JavaScript Latihan 5">
</p>

---

## Latihan 6

Berikut adalah hasil dari Latihan 6. Tugas yang telah dimasukkan dapat ditambahkan dan ditampilkan pada daftar di bawahnya.

<p align="center">
  <img width="402" src="https://github.com/user-attachments/assets/4d18ad86-7619-419d-bbe3-bb77d0b7b020" alt="Hasil Latihan 6">
</p>

**Kode JavaScript yang digunakan:**

<p align="center">
  <img width="537" src="https://github.com/user-attachments/assets/69a65bb5-38d7-41d1-8ebd-8c1e832748fb" alt="Kode JavaScript Latihan 6">
</p>

---

## Mini Project

### 1. Hasil ketika input belum sesuai ketentuan

Berikut adalah tampilan ketika salah satu input belum diisi atau data belum memenuhi ketentuan.

<p align="center">
  <img width="351" src="https://github.com/user-attachments/assets/3eb2d3c4-9f2e-4195-9ec6-2dcb31acb8d4" alt="Mini Project ketika input belum lengkap">
</p>

### 2. Hasil ketika input berhasil

Berikut adalah tampilan ketika seluruh input telah memenuhi ketentuan yang ditetapkan.

<p align="center">
  <img width="373" src="https://github.com/user-attachments/assets/442cb210-f259-409d-8897-784c1c6dbe69" alt="Mini Project ketika input berhasil">
</p>

---

## Eksperimen Mandiri

Pada eksperimen mandiri ini, pengguna dapat menambahkan tugas, menandai tugas yang telah selesai dengan menekan tombol **Sudah Selesai**, dan menghapus tugas menggunakan tombol **Hapus**.

Selain itu, tersedia fitur untuk menyembunyikan paragraf dengan menekan tombol yang disediakan.

<p align="center">
  <img width="485" src="https://github.com/user-attachments/assets/9f67c8e1-abb8-46af-8755-2541d62a5e28" alt="Hasil Eksperimen Mandiri">
</p>


## 6. Kesimpulan

Praktikum ini membantu memahami penggunaan DOM dan event handling dalam JavaScript. Melalui latihan dan mini project, halaman web dapat dibuat lebih interaktif dengan memanipulasi elemen HTML, menangani event pengguna, melakukan validasi input, serta mengubah tampilan menggunakan class CSS.
