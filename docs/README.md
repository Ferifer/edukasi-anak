# 🎓 Belajar Anak - Aplikasi Edukasi

Aplikasi web edukasi interaktif untuk anak usia dini (3-7 tahun) yang membantu belajar huruf, angka, dan mengenal hewan dengan cara yang menyenangkan!

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB.svg)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC.svg)

## ✨ Fitur

- 🔤 **Belajar Huruf A-Z** dengan contoh kata dan emoji
- 🔢 **Belajar Angka 0-9** dengan ilustrasi menarik
- 🐾 **Mengenal 12 Hewan** dengan suara dan fakta
- 📱 **Mobile-First Design** - Responsif di semua perangkat
- 🎨 **UI Ramah Anak** - Warna cerah, font besar, animasi menyenangkan
- ⚡ **Performa Cepat** - Dibangun dengan Vite

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) untuk melihat aplikasi.

### Build untuk Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Teknologi

- **React.js** - Library UI
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## 📁 Struktur Project

```
src/
├── components/       # Komponen reusable
│   ├── Navbar.jsx
│   ├── Card.jsx
│   └── BackButton.jsx
├── pages/           # Halaman aplikasi
│   ├── Home.jsx
│   ├── Alphabet.jsx
│   ├── Numbers.jsx
│   └── Animals.jsx
├── data/            # Data statis
│   ├── alphabet.js
│   ├── numbers.js
│   └── animals.js
├── routes/          # Router config
│   └── AppRouter.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Screenshots

### Halaman Home

Pilih kategori belajar yang tersedia

### Belajar Huruf

Grid interaktif A-Z dengan contoh kata

### Belajar Angka

Angka 0-9 dengan ilustrasi visual

### Mengenal Hewan

Kartu hewan dengan suara dan fakta menarik

## 📚 Dokumentasi Lengkap

Lihat [DOCUMENTATION.md](docs/DOCUMENTATION.md) untuk dokumentasi lengkap tentang:

- Struktur project detail
- Penjelasan setiap komponen
- Data structure
- Styling guide
- Best practices
- Troubleshooting

## 🎯 Target Pengguna

- Anak usia 3-7 tahun
- Orang tua yang ingin mengajari anak
- Guru TK/PAUD

## 🎨 Prinsip Desain

- ✅ Warna cerah dan menarik
- ✅ Font besar dan mudah dibaca
- ✅ Tombol besar mudah ditekan (min 48x48px)
- ✅ Navigasi sangat sederhana
- ✅ Animasi lembut dan menyenangkan
- ✅ Tidak ada teks kecil atau form rumit

## 📱 Mobile-First & Responsive

Aplikasi dirancang mobile-first dengan breakpoints:

- 📱 Mobile: < 768px
- 📱 Tablet: 768px - 1024px
- 💻 Desktop: > 1024px

## 🚧 Fitur Mendatang

- [ ] Suara pengucapan huruf/angka
- [ ] Suara hewan asli
- [ ] Quiz interaktif
- [ ] Progress tracking
- [ ] Mode gelap
- [ ] Multi-bahasa

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📄 License

MIT License - Bebas digunakan untuk tujuan edukasi dan komersial.

## 🙏 Acknowledgments

- Emoji dari sistem operasional
- Desain terinspirasi dari aplikasi edukasi anak modern
- Dibuat dengan ❤️ untuk anak-anak Indonesia

## 📞 Support

Jika menemukan bug atau punya saran, silakan buat issue di repository ini.

---

**Selamat Belajar dan Bermain! 🎉**

Made with ❤️ using React + Vite + Tailwind CSS
