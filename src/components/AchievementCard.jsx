import { useTheme } from "../context/ThemeContext";

function AchievementCard({ sessions = 0, streak = 0 }) {
  const { darkMode } = useTheme();

  const achievements = [
    {
      icon: "🥉",
      title: "Beginner",
      description: "Selesaikan 1 sesi belajar.",
      unlocked: sessions >= 1,
      progress: Math.min((sessions / 1) * 100, 100),
      target: 1,
      current: sessions,
    },
    {
      icon: "🥈",
      title: "Consistent",
      description: "Selesaikan 10 sesi belajar.",
      unlocked: sessions >= 10,
      progress: Math.min((sessions / 10) * 100, 100),
      target: 10,
      current: sessions,
    },
    {
      icon: "🥇",
      title: "Focus Master",
      description: "Selesaikan 25 sesi belajar.",
      unlocked: sessions >= 25,
      progress: Math.min((sessions / 25) * 100, 100),
      target: 25,
      current: sessions,
    },
    {
      icon: "🔥",
      title: "7 Days Streak",
      description: "Belajar selama 7 hari berturut-turut.",
      unlocked: streak >= 7,
      progress: Math.min((streak / 7) * 100, 100),
      target: 7,
      current: streak,
    },
  ];

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
        🏆 Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl border p-5 transition-all duration-300 ${
              item.unlocked
                ? darkMode
                  ? "border-blue-500 bg-slate-700"
                  : "border-blue-500 bg-blue-50"
                : darkMode
                ? "border-slate-700 bg-slate-900"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{item.icon}</span>

              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  item.unlocked
                    ? "bg-blue-600 text-white"
                    : darkMode
                    ? "bg-slate-600 text-slate-200"
                    : "bg-slate-300 text-slate-700"
                }`}
              >
                {item.unlocked ? "Unlocked" : "Locked"}
              </span>
            </div>

            <h3
              className={`text-lg font-bold ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              {item.title}
            </h3>

            <p
              className={`text-sm mt-2 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {item.description}
            </p>

            <div className="mt-5">
              <div
                className={`flex justify-between text-sm mb-2 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <span>Progress</span>
                <span>
                  {Math.min(item.current, item.target)}/{item.target}
                </span>
              </div>

              <div
                className={`w-full rounded-full h-2 ${
                  darkMode ? "bg-slate-600" : "bg-slate-200"
                }`}
              >
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementCard;