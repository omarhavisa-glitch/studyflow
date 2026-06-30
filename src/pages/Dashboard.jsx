import { Link } from "react-router-dom";

export default function Dashboard() {
  const totalStudyTime =
    Number(localStorage.getItem("totalStudyTime")) || 0;

  const completedSessions =
    Number(localStorage.getItem("completedSessions")) || 0;

  const studyStreak =
    Number(localStorage.getItem("studyStreak")) || 0;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            StudyFlow
          </h1>

          <div className="flex gap-4">

            <Link
              to="/"
              className="text-slate-600 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/timer"
              className="text-slate-600 hover:text-blue-600"
            >
              Timer
            </Link>

          </div>

        </div>
      </nav>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12">

        <h2 className="text-4xl font-bold text-slate-800">
          Dashboard Belajar
        </h2>

        <p className="text-slate-500 mt-2">
          Ringkasan aktivitas belajar dan progress harian.
        </p>

      </div>

      {/* Statistik */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

            <p className="text-slate-500">
              Total Waktu Belajar
            </p>

            <h3 className="text-5xl font-bold text-blue-600 mt-3">
              {totalStudyTime}
            </h3>

            <p className="text-slate-400 mt-2">
              Menit
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

            <p className="text-slate-500">
              Sesi Selesai
            </p>

            <h3 className="text-5xl font-bold text-green-500 mt-3">
              {completedSessions}
            </h3>

            <p className="text-slate-400 mt-2">
              Session
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

            <p className="text-slate-500">
              Study Streak
            </p>

            <h3 className="text-5xl font-bold text-orange-500 mt-3">
              {studyStreak}
            </h3>

            <p className="text-slate-400 mt-2">
              Hari
            </p>

          </div>

        </div>

      </div>

      {/* Progress */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">

          <h3 className="text-2xl font-bold mb-6">
            Target Mingguan
          </h3>

          <div className="w-full bg-slate-200 rounded-full h-4">

            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: "75%" }}
            ></div>

          </div>

          <p className="mt-4 text-slate-500">
            Progress belajar minggu ini: 75%
          </p>

        </div>

      </div>

      {/* Mata Kuliah */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h3 className="text-2xl font-bold mb-6">
          Mata Kuliah Aktif
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-3xl p-6 shadow-sm border">
            <h4 className="font-bold text-lg">
              Information Systems Management
            </h4>

            <p className="text-slate-500 mt-2">
              Progress belajar minggu ini.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border">
            <h4 className="font-bold text-lg">
              User Experience Design
            </h4>

            <p className="text-slate-500 mt-2">
              Progress belajar minggu ini.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border">
            <h4 className="font-bold text-lg">
              Web Client Development
            </h4>

            <p className="text-slate-500 mt-2">
              Progress belajar minggu ini.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}