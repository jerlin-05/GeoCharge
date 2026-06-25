import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import AdminDrawer from "./components/AdminDrawer";

import AnalysisDashboard from "./components/dashboard/AnalysisDashboard";

function App() {
  const [loading, setLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleAnalyze = (location) => {
    console.log("Location:", location);

    // Hide previous dashboard
    setShowDashboard(false);

    // Show loader
    setLoading(true);

    // Simulate backend request
    setTimeout(() => {
      setLoading(false);
      setShowDashboard(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Search */}
      <SearchBar onAnalyze={handleAnalyze} />

      {/* Loading Animation */}
      {loading && <Loader />}

      {/* Dashboard */}
      {showDashboard && <AnalysisDashboard />}

      {/* Admin Panel */}
      <AdminDrawer />
    </div>
  );
}

export default App;