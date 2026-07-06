# 📚 StudyFlow

Aplikasi Pomodoro Timer berbasis web untuk membantu pelajar dan mahasiswa belajar lebih fokus, melacak progress harian, dan membangun kebiasaan belajar yang konsisten — berjalan sepenuhnya secara offline.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/status-in%20development-yellow)

---

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| ⏱️ **Pomodoro Timer** | Timer fokus 25 menit dengan pilihan mata kuliah |
| 📊 **Dashboard** | Ringkasan waktu belajar, sesi selesai, dan streak harian |
| 🎯 **Daily Goal** | Target sesi belajar harian dengan progress bar |
| 🏆 **Achievements** | Badge yang terbuka seiring konsistensi belajar |
| 📝 **Todo List** | Catat tugas belajar per sesi |
| 📈 **Statistics** | Grafik dan skor produktivitas belajar |
| 📖 **History** | Riwayat sesi belajar sebelumnya |
| 🌙 **Dark Mode** | Tema gelap yang tersambung di seluruh halaman |
| 💾 **Offline-first** | Semua data tersimpan di `localStorage`, tanpa perlu server |

---

## 🛠️ Tech Stack

- **React 19** — komponen & state management
- **React Router DOM** — navigasi antar halaman
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling
- **Framer Motion** — animasi UI
- **React Type Animation** — efek teks di landing page

---

## 🚀 Cara Menjalankan

```bash
# 1. Clone repository
git clone https://github.com/omarhavisa-glitch/studyflow.git
cd studyflow

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka `http://localhost:5173` di browser.

---

## 📁 Struktur Folder

```
src/
├── components/       # Komponen reusable (Navbar, TodoList, StatsCard, dll)
├── context/          # ThemeContext untuk dark mode global
├── pages/            # Halaman utama (LandingPage, Dashboard, Timer, dll)
├── App.jsx           # Routing utama
└── main.jsx          # Entry point
```

---

## 🧠 Konsep React yang Diimplementasikan

- Functional Components & Props
- `useState` & `useEffect`
- Context API (`ThemeContext` untuk dark mode global)
- React Router (multi-page navigation)
- Conditional Rendering
- Local Storage untuk persistensi data
- Reusable Component Design

---

## 📌 Changelog

### v1.1 — UI & Dark Mode Overhaul
- ✅ Dark mode kini tersambung secara global lewat `ThemeContext` (sebelumnya per-halaman, tidak konsisten)
- ✅ Navbar disatukan jadi satu komponen reusable dengan highlight halaman aktif
- ✅ Konsistensi visual: radius, border, dan shadow card disamakan di seluruh halaman
- ✅ Perbaikan bug: progress belajar tidak tersimpan ke `localStorage` setelah sesi Pomodoro selesai
- ✅ Halaman Statistics & History kini mendukung dark mode

### v1.0 — Initial Release
- Pomodoro Timer dasar
- Dashboard, Statistics, dan History
- Todo List, Daily Goal, Achievements
- Landing page dengan animasi

---

## 👤 Author

Dibuat oleh **omarhavisa-glitch** sebagai project pembelajaran React.
