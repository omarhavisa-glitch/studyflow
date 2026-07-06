import { useTheme } from "../context/ThemeContext";

function DailyGoal({ sessions = 0, goal = 4 }) {
  const { darkMode } = useTheme();
  const progress = Math.min((sessions / goal) * 100, 100);

  return (
    <div
      className={`rounded-3xl shadow-sm border p-6 ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      <h2
        className={`text-2xl font-bold mb-6 ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
      >
        🎯 Daily Goal
      </h2>

      <div className="flex items-center justify-between mb-3">
        <span
          className={darkMode ? "text-slate-300" : "text-slate-600"}
        >
          Progress Hari Ini
        </span>

        <span className="font-semibold text-blue-600">
          {sessions}/{goal} Session
        </span>
      </div>

      <div
        className={`w-full h-3 rounded-full overflow-hidden ${
          darkMode ? "bg-slate-700" : "bg-slate-200"
        }`}
      >
        <div
          className="h-full bg-blue-600 transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p
        className={`mt-4 ${
          darkMode ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {progress === 100
          ? "🎉 Selamat! Target belajar hari ini telah tercapai."
          : `Selesaikan ${
              goal - sessions
            } sesi lagi untuk mencapai target harian.`}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div
          className={`rounded-xl p-4 text-center ${
            darkMode ? "bg-slate-700" : "bg-slate-50"
          }`}
        >
          <h3
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Progress
          </h3>

          <p className="text-2xl font-bold text-blue-600">
            {Math.round(progress)}%
          </p>
        </div>

        <div
          className={`rounded-xl p-4 text-center ${
            darkMode ? "bg-slate-700" : "bg-slate-50"
          }`}
        >
          <h3
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Remaining
          </h3>

          <p
            className={`text-2xl font-bold ${
              darkMode ? "text-slate-200" : "text-slate-700"
            }`}
          >
            {Math.max(goal - sessions, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DailyGoal;