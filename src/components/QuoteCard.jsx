import { useTheme } from "../context/ThemeContext";

function QuoteCard() {
  const { darkMode } = useTheme();

  const quotes = [
    "Small progress is still progress.",
    "Stay focused and keep learning.",
    "Discipline beats motivation.",
    "One pomodoro at a time.",
    "Success comes from consistency.",
  ];

  const random =
    quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div
      className={`p-6 rounded-3xl shadow mt-8 ${
        darkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <p
        className={`text-center italic ${
          darkMode ? "text-slate-300" : "text-slate-500"
        }`}
      >
        "{random}"
      </p>
    </div>
  );
}

export default QuoteCard;