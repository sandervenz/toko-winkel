# Toko Winkel Frontend

Toko Winkel adalah e-commerce yang menyediakan produk berkualitas untuk bayi dan anak-anak. Proyek ini dibangun menggunakan Next.js 14, Tailwind CSS, dan DaisyUI.

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** DaisyUI
- **Theme:** Retro
- **Image Optimization:** next/image

## Fitur

- 🎨 UI Responsif (Mobile First)
- 🌙 Theme Retro dari DaisyUI
- 📱 Optimasi gambar otomatis
- ⚡ Performance dan SEO optimized

## Cara Menjalankan Proyek

1. **Install Dependencies**
   ```bash
   npm install
   # atau
   yarn install
   ```

2. **Jalankan Development Server**
   ```bash
   npm run dev
   # atau
   yarn dev
   ```

3. **Buka Browser**
   - Buka [http://localhost:3000](http://localhost:3000)

## Struktur Proyek

```
frontend/
├── app/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── page.tsx
│   └── layout.tsx
├── public/
│   └── [gambar-gambar]
├── styles/
│   └── globals.css
└── tailwind.config.js
```

## Komponen Utama

- **Header:** Navigasi utama dengan logo
- **Hero Section:** Landing section dengan grid gambar
- **Features:** 3 fitur utama (Dibuat dengan Cinta, Kualitas Terjamin, Pengiriman Cepat)
- **Products:** Cuplikan produk unggulan
- **About:** Cerita di balik Toko Winkel
- **Footer:** Informasi kontak dan sosial media

## Pengembangan Selanjutnya

- [ ] Implementasi sistem autentikasi
- [ ] Integrasi dengan backend API
- [ ] Penambahan fitur keranjang belanja
- [ ] Implementasi sistem pembayaran
- [ ] Penambahan halaman detail produk

## Build dan Deployment

Untuk production build:

```bash
npm run build
# atau
yarn build
```

Deploy menggunakan [Vercel](https://vercel.com) untuk performa terbaik.

## Kontribusi

Silakan buat pull request untuk kontribusi. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan perubahan yang diinginkan.
