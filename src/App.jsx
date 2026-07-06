import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import TimerPage from "./pages/TimerPage";
import Statistics from "./pages/Statistics";
import History from "./pages/History";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Timer */}
          <Route path="/timer" element={<TimerPage />} />

          {/* Statistics */}
          <Route
            path="/statistics"
            element={<Statistics />}
          />

          {/* History */}
          <Route
            path="/history"
            element={<History />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;