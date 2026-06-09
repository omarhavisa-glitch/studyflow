import { Link } from "react-router-dom";

export default function TimerPage() {
  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="flex items-center justify-between bg-white px-10 py-6 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">StudyFlow</h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/timer" className="hover:text-blue-600">Timer</Link>
        </div>
      </nav>

      <main className="flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl p-10 text-center">
          <p className="text-slate-500 mb-3">Focus Session</p>

          <h2 className="text-7xl font-bold text-blue-600">
            25:00
          </h2>

          <div className="mt-8">
            <label className="block text-left font-semibold mb-2">
              Mata Pelajaran
            </label>

            <select className="w-full border rounded-xl px-4 py-3">
              <option>Pemrograman Web</option>
              <option>Basis Data</option>
              <option>Matematika</option>
              <option>Sistem Informasi</option>
            </select>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold">
              Start
            </button>

            <button className="bg-yellow-500 text-white px-6 py-3 rounded-xl font-semibold">
              Pause
            </button>

            <button className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold">
              Reset
            </button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-500">Sesi Hari Ini</p>
              <h3 className="text-2xl font-bold">4</h3>
            </div>

            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-slate-500">Total Belajar</p>
              <h3 className="text-2xl font-bold">2 Jam</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}