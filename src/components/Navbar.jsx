import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/timer", label: "Timer" },
  { to: "/statistics", label: "Statistics" },
  { to: "/history", label: "History" },
];

function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { pathname } = useLocation();

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        darkMode
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          StudyFlow
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => {
            const active = pathname === link.to;

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition ${
                  active
                    ? "text-blue-600 font-semibold"
                    : darkMode
                    ? "text-slate-300 hover:text-blue-500"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
              darkMode
                ? "bg-slate-700 text-slate-100 hover:bg-slate-600"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
