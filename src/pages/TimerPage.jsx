import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StatsCard from "../components/StatsCard";
import QuoteCard from "../components/QuoteCard";
import TodoList from "../components/TodoList";

const courses = [
  {
    code: "ISM01",
    name: "Information Systems Management",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "UED01",
    name: "User Experience Design",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "WCD01",
    name: "Web Client Development",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "BTM01",
    name: "Business & Technology Modelling",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "DS01",
    name: "Data Structures",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "DB01",
    name: "Database I",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "OOP1",
    name: "Object-Oriented Programming",
    major: "Sistem Informasi",
    progress: 0,
  },
  {
    code: "GPro1",
    name: "Algorithms and Programming",
    major: "Sistem Informasi",
    progress: 0,
  },
];

function TimerPage() {
  const [time, setTime] = useState(1500);
  const [running, setRunning] = useState(false);

  const [selectedCourse, setSelectedCourse] =
    useState(courses[0]);

  const [darkMode, setDarkMode] = useState(() => {
    const saved =
      localStorage.getItem("darkMode");
    return saved
      ? JSON.parse(saved)
      : false;
  });

  const [sessions, setSessions] =
    useState(0);
  const [totalMinutes, setTotalMinutes] =
    useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    let interval;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    if (time === 0 && running) {
      setRunning(false);

      setSessions((prev) => prev + 1);
      setTotalMinutes((prev) => prev + 25);
      setStreak((prev) => prev + 1);

      alert("🎉 Sesi fokus selesai!");
      setTime(1500);
    }

    return () => clearInterval(interval);
  }, [running, time]);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const minutes = String(
    Math.floor(time / 60)
  ).padStart(2, "0");

  const seconds = String(
    time % 60
  ).padStart(2, "0");

  function resetTimer() {
    setRunning(false);
    setTime(1500);
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      <nav
        className={`border-b ${
          darkMode
            ? "bg-slate-800 border-slate-700"
            : "bg-white border-slate-200"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            StudyFlow
          </h1>

          <div className="flex gap-4 items-center">
            <button
              onClick={() =>
                setDarkMode(!darkMode)
              }
              className={`px-4 py-2 rounded-lg ${
                darkMode
                  ? "bg-slate-700"
                  : "bg-slate-200"
              }`}
            >
              {darkMode
                ? "☀️ Light"
                : "🌙 Dark"}
            </button>

            <Link
              to="/"
              className="hover:text-blue-600"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-blue-600 font-semibold">
            Focus Session
          </p>

          <h2 className="text-4xl font-bold mt-2">
            Mulai Sesi Belajar
          </h2>

          <p
            className={`mt-3 ${
              darkMode
                ? "text-slate-300"
                : "text-slate-500"
            }`}
          >
            Pilih mata kuliah dan gunakan
            timer untuk belajar lebih fokus.
          </p>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className={`rounded-[28px] p-10 shadow-lg ${
            darkMode
              ? "bg-slate-800"
              : "bg-white"
          }`}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={
                running
                  ? {
                      scale: [1, 1.03, 1],
                    }
                  : {}
              }
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
              className="w-64 h-64 rounded-full border-[14px] border-blue-100 flex flex-col items-center justify-center"
            >
              <h1 className="text-6xl font-extrabold">
                {minutes}:{seconds}
              </h1>

              <p className="text-slate-400 mt-3">
                25 menit fokus
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-xl">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setRunning(true)
                }
                className="bg-blue-600 text-white py-3 rounded-xl"
              >
                Start
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() =>
                  setRunning(false)
                }
                className="bg-slate-200 text-slate-700 py-3 rounded-xl"
              >
                Pause
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={resetTimer}
                className="bg-slate-200 text-slate-700 py-3 rounded-xl"
              >
                Reset
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">
            📚 Mata Kuliah
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {courses.map((course) => (
              <div
                key={course.code}
                onClick={() =>
                  setSelectedCourse(course)
                }
                className={`p-5 rounded-2xl cursor-pointer border-2 transition-all duration-300 hover:-translate-y-1 ${
                  selectedCourse.code ===
                  course.code
                    ? darkMode
                      ? "border-blue-500 bg-slate-700 shadow-lg"
                      : "border-blue-500 bg-blue-50 shadow-lg"
                    : darkMode
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                }`}
              >
                <h3 className="font-bold text-lg">
                  {course.name} (
                  {course.code})
                </h3>

                <p
                  className={`mt-1 ${
                    darkMode
                      ? "text-slate-300"
                      : "text-slate-500"
                  }`}
                >
                  {course.major}
                </p>

                <div className="mt-5">
                  <div className="flex justify-between text-sm mb-2">
                    <span>
                      Progress Belajar
                    </span>
                    <span>
                      {course.progress}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-slate-200 rounded-full">
                    <div
                      className="h-full bg-blue-600 rounded-full"
                      style={{
                        width: `${course.progress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-5 p-5 rounded-2xl ${
              darkMode
                ? "bg-slate-700 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            <p
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-blue-100"
              }
            >
              Mata Kuliah Dipilih
            </p>

            <h3 className="text-2xl font-bold">
              {selectedCourse.name}
            </h3>

            <p>{selectedCourse.code}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <StatsCard
            icon="📚"
            title="Sesi Hari Ini"
            value={sessions}
          />

          <StatsCard
            icon="⏰"
            title="Total Waktu"
            value={`${totalMinutes} menit`}
          />

          <StatsCard
            icon="🔥"
            title="Streak"
            value={`${streak} hari`}
          />
        </div>

        <QuoteCard />

        <TodoList />
      </main>
    </div>
  );
}

export default TimerPage;