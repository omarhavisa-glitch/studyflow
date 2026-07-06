import { useTheme } from "../context/ThemeContext";

function StatsCard({ icon, title, value }) {
  const { darkMode } = useTheme();

  return (
    <div
      className={`rounded-3xl p-5 text-center shadow-sm border ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      <p
        className={`text-sm ${
          darkMode ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {icon} {title}
      </p>

      <h3
        className={`text-2xl font-bold mt-1 ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {value}
      </h3>
    </div>
  );
}

export default StatsCard;