# 🎓 Belajar Anak - Aplikasi Edukasi

> Aplikasi web edukasi interaktif untuk anak usia dini (3-7 tahun)

✨ **Status**: ✅ **Ready to Use!** | **Version**: 1.1.0 🎉

## 🆕 What's New in v1.1.0

🔊 **Audio Support** - Text-to-speech pronunciation  
🎮 **Quiz Mode** - Interactive testing with 3 quiz types  
📱 **PWA** - Install as mobile app & work offline

[See Full Feature List →](FEATURES.md)

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di [http://localhost:5173](http://localhost:5173)

### 3. Build Production

```bash
npm run build
```

## 📱 Fitur Utama

✅ **Belajar Huruf A-Z** - Grid interaktif dengan contoh kata dan emoji  
✅ **Belajar Angka 0-9** - Angka dengan ilustrasi visual menarik  
✅ **Mengenal Hewan** - 12 hewan dengan suara dan fakta  
✅ **🔊 Audio Support** - Pengucapan otomatis dengan Web Speech API  
✅ **🎮 Quiz Mode** - 3 jenis quiz interaktif dengan skor  
✅ **📱 PWA** - Install, offline, dan full-screen mode  
✅ **Mobile-First Design** - Responsif di semua perangkat  
✅ **UI Ramah Anak** - Warna cerah, font besar, animasi smooth

## 🛠️ Teknologi

- **React.js 18.3.1** - UI Library
- **Vite 5.2.0** - Build Tool
- **Tailwind CSS 3.4.1** - Styling
- **React Router DOM 6.22.0** - Routing
- **Web Speech API** - Text-to-speech
- **Service Worker** - PWA & Offline support

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

## 📚 Dokumentasi

- **[Documentation](docs/DOCUMENTATION.md)** - Dokumentasi lengkap project
- **[User Guide](docs/USER_GUIDE.md)** - Panduan untuk orang tua & guru
- **[Developer Guide](docs/DEVELOPER_GUIDE.md)** - Panduan untuk developer
- **[Quick Start](docs/README.md)** - Getting started cepat

## 🎨 Prinsip Desain UX Anak

✅ Warna cerah dan menarik  
✅ Font besar mudah dibaca  
✅ Tombol besar (min 48x48px)  
✅ Navigasi sangat sederhana  
✅ Animasi lembut  
✅ Tidak ada teks kecil atau form rumit

## 🎯 Target Pengguna

- Anak usia 3-7 tahun
- Orang tua yang ingin mengajari anak
- Guru TK/PAUD

## 📝 License

MIT License - Bebas digunakan untuk tujuan edukasi dan komersial.

---

**Selamat Belajar! 🎉**

Made with ❤️ using React + Vite + Tailwind CSS
