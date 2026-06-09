import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold text-blue-400">StudyFlow</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/timer" className="hover:text-blue-400">Timer</Link>
        </div>
      </nav>

      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20">
        <div>
          <h2 className="text-5xl font-bold leading-tight">
            Belajar Lebih Fokus dengan Pomodoro Timer
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            StudyFlow membantu pelajar dan mahasiswa mengatur waktu belajar
            dengan timer Pomodoro, tracking mata pelajaran, dan statistik belajar.
          </p>

          <Link
            to="/timer"
            className="inline-block mt-8 bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600"
          >
            Mulai Belajar
          </Link>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800">
          <p className="text-slate-400 mb-3">Focus Session</p>
          <h3 className="text-6xl font-bold text-blue-400">25:00</h3>
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-slate-800 p-4 rounded-xl text-center">Start</div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">Pause</div>
            <div className="bg-slate-800 p-4 rounded-xl text-center">Reset</div>
          </div>
        </div>
      </section>

      <section className="px-10 pb-20">
        <h2 className="text-3xl font-bold mb-8">Fitur Utama</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-400">Pomodoro Timer</h3>
            <p className="mt-3 text-slate-300">Timer belajar 25 menit agar belajar lebih fokus.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-400">Subject Tracking</h3>
            <p className="mt-3 text-slate-300">Mencatat waktu belajar berdasarkan mata pelajaran.</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-blue-400">Offline Support</h3>
            <p className="mt-3 text-slate-300">Nantinya aplikasi dapat digunakan tanpa internet.</p>
          </div>
        </div>
      </section>
    </div>
  );
}