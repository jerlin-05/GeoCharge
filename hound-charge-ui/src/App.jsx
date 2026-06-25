import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import FeatureCards from "./components/FeatureCards";
import StatsSection from "./components/StatsSection";
import Report from "./components/Report";
import AdminDrawer from "./components/AdminDrawer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <SearchBar />
        <FeatureCards />
        <StatsSection />
        <Report />
      </main>

      <AdminDrawer />
    </div>
  );
}

export default App;