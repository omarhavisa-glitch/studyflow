import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: "⏰",
    title: "Pomodoro Timer",
    description:
      "Gunakan teknik pomodoro untuk meningkatkan fokus dan produktivitas.",
  },
  {
    icon: "📊",
    title: "Statistik Belajar",
    description:
      "Lihat ringkasan waktu belajar dan pantau perkembanganmu.",
  },
  {
    icon: "🌐",
    title: "Offline Mode",
    description:
      "Berjalan sepenuhnya secara offline tanpa perlu koneksi internet.",
  },
];

function LandingPage() {
  const [loading, setLoading] = useState(() => {
    return !sessionStorage.getItem("studyflow_welcome");
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        sessionStorage.setItem(
          "studyflow_welcome",
          "true"
        );
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="h-screen bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-28 h-28 rounded-full bg-blue-600 animate-pulse flex items-center justify-center text-4xl font-bold text-white shadow-[0_0_50px_rgba(37,99,235,0.7)]">
          S
        </div>

        <h1 className="text-white text-5xl font-extrabold mt-8 animate-bounce">
          StudyFlow
        </h1>

        <p className="text-slate-400 mt-4 text-lg">
          Selamat Datang 👋
        </p>

        <div className="mt-10 flex gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>

          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>

          <div
            className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-extrabold text-blue-600"
          >
            StudyFlow
          </Link>

          <div className="flex items-center gap-8 text-slate-600">
            <a
              href="#fitur"
              className="hover:text-blue-600 transition"
            >
              Fitur
            </a>

            <a
              href="#tentang"
              className="hover:text-blue-600 transition"
            >
              Tentang
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-slate-50 overflow-hidden relative">
        <div className="absolute w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-30 -top-40 -left-40 animate-pulse"></div>

        <div className="absolute w-[500px] h-[500px] bg-blue-300 rounded-full blur-3xl opacity-20 -bottom-40 -right-40 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fadeLeft">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-3xl">
              Belajar Lebih Fokus
              <br />
              Dengan{" "}
              <span className="text-blue-600">
                Pomodoro Timer
              </span>
            </h2>

            <p className="mt-8 text-xl text-slate-600 leading-9">
              Aplikasi timer belajar yang berjalan sepenuhnya
              secara offline. Membantu pelajar dan mahasiswa
              mengatur waktu belajar dengan lebih efektif tanpa
              bergantung pada internet.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/timer"
                className="inline-flex items-center justify-center h-[58px] px-8 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300"
              >
                Mulai Belajar
              </Link>

              <a
                href="#fitur"
                className="inline-flex items-center justify-center h-[58px] px-8 rounded-xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300"
              >
                Pelajari Fitur
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fadeRight">
            <div className="w-[350px] bg-white rounded-3xl p-10 text-center shadow-2xl floating">
              <h3 className="text-2xl font-bold mb-6">
                Focus Session
              </h3>

              <h2 className="text-7xl font-extrabold text-blue-600 mb-8">
                25:00
              </h2>

              <Link
                to="/timer"
                className="block w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition"
              >
                Start Timer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="fitur" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h2 className="text-5xl font-extrabold text-center mb-16">
            Fitur Utama
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-5xl mb-6">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tentang"
        className="bg-slate-50 py-24 text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold mb-8">
            Kenapa StudyFlow?
          </h2>

          <p className="text-xl leading-10 text-slate-600">
            Banyak aplikasi timer belajar membutuhkan internet
            atau instalasi tambahan. StudyFlow hadir sebagai
            solusi ringan, cepat, dan dapat digunakan secara
            offline untuk membantu pelajar dan mahasiswa tetap
            produktif setiap hari.
          </p>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-extrabold mb-6">
            Siap Belajar Lebih Fokus?
          </h2>

          <p className="text-blue-100 text-xl mb-10">
            Mulai sesi Pomodoro pertamamu sekarang dan
            tingkatkan produktivitas belajar setiap hari.
          </p>

          <Link
            to="/timer"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                StudyFlow
              </h2>

              <p className="text-slate-400 leading-relaxed">
                Aplikasi Pomodoro Timer modern yang membantu
                mahasiswa dan pelajar meningkatkan fokus belajar,
                mengatur waktu, dan membangun kebiasaan produktif.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Navigation
              </h3>

              <ul className="space-y-3 text-slate-400">
                <li>Beranda</li>
                <li>Fitur</li>
                <li>Tentang</li>
                <li>Timer</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">
                Contact
              </h3>

              <div className="space-y-3 text-slate-400">
                <p>📧 hello@studyflow.id</p>
                <p>📞 +62 812-3456-7890</p>
                <p>📍 Jakarta, Indonesia</p>
                <p>🌐 www.studyflow.id</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500">
            © 2026 StudyFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;