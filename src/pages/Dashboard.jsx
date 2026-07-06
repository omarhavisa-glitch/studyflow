import { Link } from "react-router-dom";
import StatsCard from "../components/StatsCard";
import QuoteCard from "../components/QuoteCard";
import DailyGoal from "../components/DailyGoal";
import AchievementCard from "../components/AchievementCard";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Dashboard() {
  const { darkMode } = useTheme();

  const totalStudyTime =
    Number(localStorage.getItem("totalStudyTime")) || 0;

  const completedSessions =
    Number(localStorage.getItem("completedSessions")) || 0;

  const studyStreak =
    Number(localStorage.getItem("studyStreak")) || 0;

  const weeklyProgress = Math.min(
    (completedSessions / 20) * 100,
    100
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
    }`}>

      <Navbar />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-12">

        <h2 className="text-4xl font-bold">
          Dashboard Belajar
        </h2>

        <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
          Ringkasan aktivitas belajar dan progress harian.
        </p>

      </div>

      {/* Statistik */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <StatsCard
            icon="⏱️"
            title="Total Waktu Belajar"
            value={`${totalStudyTime} Menit`}
          />

          <StatsCard
            icon="✅"
            title="Sesi Selesai"
            value={`${completedSessions} Session`}
          />

          <StatsCard
            icon="🔥"
            title="Study Streak"
            value={`${studyStreak} Hari`}
          />

        </div>

      </div>

      {/* Progress */}
      <div className="max-w-7xl mx-auto px-6">

        <div className={`rounded-3xl p-8 shadow-sm border ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"
        }`}>

          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">
              Target Mingguan
            </h3>

            <span className="font-semibold text-blue-600">
              {Math.round(weeklyProgress)}%
            </span>
          </div>

          <div className={`w-full rounded-full h-4 ${darkMode ? "bg-slate-700" : "bg-slate-200"}`}>

            <div
              className="bg-blue-600 h-4 rounded-full transition-all duration-500"
              style={{
                width: `${weeklyProgress}%`,
              }}
            ></div>

          </div>

          <p className={`mt-4 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
            Progress belajar minggu ini.
          </p>

        </div>

      </div>

      {/* Mata Kuliah */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h3 className="text-2xl font-bold mb-6">
          Mata Kuliah Aktif
        </h3>

        <div className="grid md:grid-cols-3 gap-6">

          <div className={`rounded-3xl p-6 shadow-sm border ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          }`}>
            <h4 className="font-bold text-lg">
              Information Systems Management
            </h4>

            <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
              Progress belajar minggu ini.
            </p>
          </div>

          <div className={`rounded-3xl p-6 shadow-sm border ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          }`}>
            <h4 className="font-bold text-lg">
              User Experience Design
            </h4>

            <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
              Progress belajar minggu ini.
            </p>
          </div>

          <div className={`rounded-3xl p-6 shadow-sm border ${
            darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
          }`}>
            <h4 className="font-bold text-lg">
              Web Client Development
            </h4>

            <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
              Progress belajar minggu ini.
            </p>
          </div>

        </div>

      </div>
            {/* Daily Goal & Quote */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="grid lg:grid-cols-2 gap-6">

          <DailyGoal
            sessions={completedSessions}
            goal={4}
          />

          <QuoteCard />

        </div>

      </div>

      {/* Achievement */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <AchievementCard
          sessions={completedSessions}
          streak={studyStreak}
        />

      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-6 pb-16">

        <div className={`rounded-3xl p-8 shadow-sm border ${
          darkMode ? "bg-slate-800 border-slate-700" : "bg-white border-slate-100"
        }`}>

          <h3 className="text-2xl font-bold mb-6">
            Quick Actions
          </h3>

          <div className="grid md:grid-cols-3 gap-5">

            <Link
              to="/timer"
              className="bg-blue-600 text-white rounded-2xl p-6 text-center hover:bg-blue-700 transition"
            >
              <h4 className="font-bold text-lg">
                ⏱️ Start Study
              </h4>

              <p className="text-blue-100 mt-2 text-sm">
                Mulai sesi Pomodoro sekarang.
              </p>
            </Link>

            <Link
              to="/statistics"
              className={`border-2 border-blue-600 text-blue-600 rounded-2xl p-6 text-center transition ${
                darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-blue-50"
              }`}
            >
              <h4 className="font-bold text-lg">
                📊 Statistics
              </h4>

              <p className={`mt-2 text-sm ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
                Lihat perkembangan belajar.
              </p>
            </Link>

            <Link
              to="/history"
              className={`border-2 border-blue-600 text-blue-600 rounded-2xl p-6 text-center transition ${
                darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-blue-50"
              }`}
            >
              <h4 className="font-bold text-lg">
                📖 History
              </h4>

              <p className={`mt-2 text-sm ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
                Riwayat seluruh sesi belajar.
              </p>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}