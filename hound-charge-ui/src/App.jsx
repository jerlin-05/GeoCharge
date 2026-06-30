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

  const [adminOpen, setAdminOpen] = useState(false);

  const [location, setLocation] = useState("");

  const [report, setReport] = useState({
  projectScore: "91%",
  risk: "A+",
  revenue: "₹2.64 L",
  demand: "High",

  coordinates: {
    lat: 10.0159,
    lng: 76.3419,
  },

  recommendation:
    "Excellent location for EV charging deployment due to high traffic density, strong commercial activity and excellent grid readiness.",
});
  const handleAnalyze = (inputLocation) => {

    if (!inputLocation.trim()) {
      alert("Please enter a Google Maps URL or Coordinates.");
      return;
    }

    setLocation(inputLocation);

    setShowDashboard(false);

    setLoading(true);

    setTimeout(() => {

      setLoading(false);

      setShowDashboard(true);

    }, 2000);

  };

  return (

    <div className="min-h-screen bg-slate-950 text-white">

      <Navbar
        onOpenAdmin={() => setAdminOpen(true)}
      />

      <Hero />

      <SearchBar
        onAnalyze={handleAnalyze}
      />

      {loading && <Loader />}

      {showDashboard && (

        <AnalysisDashboard
          location={location}
          report={report}
        />

      )}

      <AdminDrawer
        open={adminOpen}
        onClose={() => setAdminOpen(false)}
      />

    </div>

  );

}

export default App;