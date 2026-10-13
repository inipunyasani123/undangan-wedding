# Undangan Pernikahan — Raka & Sinta

Klasik floral rose & emas. Sampul berupa amplop pusaka dengan segel lilin “Buka Undangan”, lalu profil mempelai berbingkai lengkung, rangkaian akad & resepsi, cerita cinta, galeri, dan amplop digital.

**Demo live:** https://undangan-wedding-eight.vercel.app

![Tangkapan layar](public/og.jpg)

> Contoh dengan data fiktif: nama, tempat, dan nomor rekening tidak sungguhan. Formulir hanya demo dan mengatakannya terus terang. Foto adalah placeholder berlabel yang siap diganti.

## Fitur

- Sampul amplop yang menyapa nama tamu (`?to=Nama`)
- Hitung mundur menuju akad (berganti jadi ucapan terima kasih setelah lewat)
- Akad & resepsi dengan tombol “Tambah ke Kalender”
- Cerita cinta, galeri dengan lightbox, peta lokasi
- Amplop digital: salin nomor rekening (nomor contoh diberi label)
- RSVP & ucapan — mode demo, terus terang tidak mengirim data
- **`/kirim` — alat tuan rumah:** ketik daftar tamu, dapatkan tautan pribadi tiap tamu dan pesan WhatsApp siap kirim. Semua diproses di peramban (localStorage), tanpa server.
- Musik latar dengan tombol putar/jeda (judul lagu tampil di tombol dan footer)
- Halaman 404 bergaya sendiri

## Mengganti isi

Seluruh isi ada di satu file: `lib/data.js` (nama, tanggal, acara, galeri, musik, pesan untuk /kirim). Komponen tidak perlu disentuh.

- **Tanggal:** ubah teks tanggal *dan* nilai ISO (`mainDate`, `start`, `end`) — hitung mundur dan tombol kalender memakai nilai ISO.
- **Peta:** contoh menunjuk area kota; ganti `q=` di `location.mapEmbed` dan `mapLink` dengan nama tempat atau koordinat.
- **Foto:** timpa berkas di `public/images/` dengan nama yang sama (potret 3:4).
- **Musik:** timpa `public/music/latar.mp3`, lalu ubah `music.title` dan `music.credit`. Pastikan Anda berhak memakai lagunya.

## Gambar & kredit

- `public/images/*.webp` — placeholder berlabel buatan sendiri (bukan foto stok), digambar ulang dari SVG agar tidak bergantung pada layanan luar.
- `public/music/latar.mp3` — *Canon in D — Johann Pachelbel*, rekaman US Air Force Band, domain publik — [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Canon_(2004)_-_Strolling_Strings_-_United_States_Air_Force_Band.mp3). Diperkecil ke MP3 mono 80 kbps.

## Teknologi

- Next.js 15.5 (App Router) dan React 19
- Tailwind CSS v4 (token tema di `app/globals.css`)
- Framer Motion, lucide-react
- Font: Cormorant Garamond, Great Vibes, Poppins (next/font)
- SEO: metadata, Open Graph, JSON-LD (WebSite), sitemap.xml, robots.txt

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000 — coba juga http://localhost:3000/?to=Nama+Tamu dan http://localhost:3000/kirim.

---

Bagian dari koleksi 8 undangan digital di [PortalUndangan](https://www.pintuweb.id/undangan-digital). Dibuat oleh [PintuWeb](https://www.pintuweb.id), jasa pembuatan website.
