import StatsCard from "../components/StatsCard";
import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function Statistics() {
  const { darkMode } = useTheme();

  const totalStudyTime =
    Number(localStorage.getItem("totalStudyTime")) || 0;

  const completedSessions =
    Number(localStorage.getItem("completedSessions")) || 0;

  const studyStreak =
    Number(localStorage.getItem("studyStreak")) || 0;

  const weeklyGoal = 14;

  const weeklyProgress = Math.min(
    (completedSessions / weeklyGoal) * 100,
    100
  );

  const productivity =
    completedSessions === 0
      ? 0
      : Math.min(
          Math.round((completedSessions / weeklyGoal) * 100),
          100
        );

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold">
          Study Statistics
        </h2>

        <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
          Ringkasan performa belajar menggunakan StudyFlow.
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <StatsCard
            icon="⏱️"
            title="Total Study Time"
            value={`${totalStudyTime} Menit`}
          />

          <StatsCard
            icon="✅"
            title="Completed Sessions"
            value={completedSessions}
          />

          <StatsCard
            icon="🔥"
            title="Study Streak"
            value={`${studyStreak} Hari`}
          />

        </div>

        {/* Weekly Progress */}
        <div
          className={`rounded-3xl shadow-sm border p-8 mt-10 ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >

          <div className="flex justify-between mb-4">

            <h3 className="text-2xl font-bold">
              Weekly Progress
            </h3>

            <span className="font-bold text-blue-600">
              {Math.round(weeklyProgress)}%
            </span>

          </div>

          <div
            className={`w-full h-4 rounded-full ${
              darkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          >

            <div
              className="h-4 bg-blue-600 rounded-full transition-all duration-500"
              style={{
                width: `${weeklyProgress}%`,
              }}
            />

          </div>

          <p className={`mt-4 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
            Target mingguan adalah {weeklyGoal} sesi belajar.
          </p>

        </div>

        {/* Productivity */}
        <div
          className={`rounded-3xl shadow-sm border p-8 mt-8 ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >

          <h3 className="text-2xl font-bold mb-6">
            Productivity Score
          </h3>

          <div className="flex items-center justify-between">

            <span className={darkMode ? "text-slate-300" : "text-slate-500"}>
              Productivity
            </span>

            <span className="text-4xl font-bold text-blue-600">
              {productivity}%
            </span>

          </div>

          <div
            className={`w-full h-4 rounded-full mt-5 ${
              darkMode ? "bg-slate-700" : "bg-slate-200"
            }`}
          >

            <div
              className="h-4 bg-green-500 rounded-full transition-all duration-500"
              style={{
                width: `${productivity}%`,
              }}
            />

          </div>

        </div>

        {/* Summary */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div
            className={`rounded-3xl shadow-sm border p-6 ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >

            <h3 className="font-bold text-xl mb-3">
              Average Focus Time
            </h3>

            <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
              {completedSessions === 0
                ? "0 Menit"
                : `${Math.round(
                    totalStudyTime / completedSessions
                  )} Menit / Session`}
            </p>

          </div>

          <div
            className={`rounded-3xl shadow-sm border p-6 ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >

            <h3 className="font-bold text-xl mb-3">
              Goal Status
            </h3>

            <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
              {weeklyProgress >= 100
                ? "🎉 Weekly Goal Achieved"
                : "🚀 Keep Going!"}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}