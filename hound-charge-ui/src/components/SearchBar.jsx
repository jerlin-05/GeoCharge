import { useState } from "react";

function SearchBar({ onAnalyze }) {
  const [location, setLocation] = useState("");

  const isCoordinate = (text) => {
    const regex =
      /^-?\d+(\.\d+)?\s*,\s*-?\d+(\.\d+)?$/;

    return regex.test(text);
  };

  const isGoogleMaps = (text) => {
    return (
      text.includes("google.com/maps") ||
      text.includes("maps.app.goo.gl")
    );
  };

  const handleClick = () => {
    const input = location.trim();

    if (!input) {
      alert("Please enter a location.");
      return;
    }

    if (!isCoordinate(input) && !isGoogleMaps(input)) {
      alert(
        "Please enter a valid Google Maps URL or Latitude,Longitude."
      );
      return;
    }

    onAnalyze(input);
  };

  return (
    <section className="max-w-4xl mx-auto px-6">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex flex-col md:flex-row gap-3">

        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Paste Google Maps URL or Latitude,Longitude"
          className="flex-1 bg-transparent outline-none px-4 py-4"
        />

        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 transition px-8 rounded-xl"
        >
          Analyze Site
        </button>

      </div>

    </section>
  );
}

export default SearchBar;