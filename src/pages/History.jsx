import Navbar from "../components/Navbar";
import { useTheme } from "../context/ThemeContext";

export default function History() {
  const { darkMode } = useTheme();

  const completedSessions =
    Number(localStorage.getItem("completedSessions")) || 0;

  const totalStudyTime =
    Number(localStorage.getItem("totalStudyTime")) || 0;

  const studyStreak =
    Number(localStorage.getItem("studyStreak")) || 0;

  const history = [
    {
      title: "Pomodoro Session",
      duration: "25 Minutes",
      status: "Completed",
      date: "Today",
    },
    {
      title: "Focus Session",
      duration: "25 Minutes",
      status: "Completed",
      date: "Yesterday",
    },
    {
      title: "Study Review",
      duration: "30 Minutes",
      status: "Completed",
      date: "Last Week",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-4xl font-bold">
          Study History
        </h2>

        <p className={`mt-2 ${darkMode ? "text-slate-300" : "text-slate-500"}`}>
          Riwayat aktivitas belajar menggunakan StudyFlow.
        </p>

        {/* Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div
            className={`rounded-3xl p-6 shadow-sm border ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
              Total Sessions
            </p>

            <h3 className="text-4xl font-bold text-blue-600 mt-3">
              {completedSessions}
            </h3>
          </div>

          <div
            className={`rounded-3xl p-6 shadow-sm border ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
              Total Study Time
            </p>

            <h3 className="text-4xl font-bold text-green-500 mt-3">
              {totalStudyTime} Menit
            </h3>
          </div>

          <div
            className={`rounded-3xl p-6 shadow-sm border ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-slate-200"
            }`}
          >
            <p className={darkMode ? "text-slate-300" : "text-slate-500"}>
              Current Streak
            </p>

            <h3 className="text-4xl font-bold text-orange-500 mt-3">
              {studyStreak} Hari
            </h3>
          </div>

        </div>

        {/* History */}
        <div
          className={`rounded-3xl shadow-sm border mt-10 ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-slate-200"
          }`}
        >

          <div
            className={`p-6 border-b ${
              darkMode ? "border-slate-700" : "border-slate-200"
            }`}
          >
            <h3 className="text-2xl font-bold">
              Recent Sessions
            </h3>
          </div>

          {history.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center p-6 border-b last:border-b-0 ${
                darkMode ? "border-slate-700" : "border-slate-200"
              }`}
            >
              <div>
                <h4 className="font-semibold text-lg">
                  {item.title}
                </h4>

                <p className={darkMode ? "text-slate-400" : "text-slate-500"}>
                  {item.date}
                </p>
              </div>

              <div className="text-center">
                <p className="font-semibold">
                  {item.duration}
                </p>

                <span
                  className={
                    darkMode ? "text-green-400 text-sm" : "text-green-600 text-sm"
                  }
                >
                  {item.status}
                </span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}