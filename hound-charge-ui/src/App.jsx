function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-12 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold">Hound Charge</h1>

        <button className="px-6 py-3 bg-green-500 rounded-xl hover:bg-green-600 transition">
          Dashboard
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
            Geo-AI Powered EV Infrastructure Intelligence
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Geo-AI Powered EV Charging
            <br />
            Site Evaluation Platform
          </h1>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto">
            Analyze any location using Geo-AI insights, demand forecasting,
            revenue estimation and infrastructure intelligence.
          </p>

          {/* Search Box */}
          <div className="mt-12 max-w-3xl mx-auto">

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex flex-col md:flex-row gap-3">

              <input
                type="text"
                placeholder="Paste Google Maps URL or Coordinates"
                className="flex-1 bg-transparent px-4 py-4 outline-none"
              />

              <button className="bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-medium">
                Analyze Site
              </button>

            </div>

          </div>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-6 mt-24">

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold">
              Geo-AI Analysis
            </h3>

            <p className="text-slate-400 mt-4">
              Analyze site feasibility using geospatial intelligence,
              demographics and location insights.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold">
              Revenue Forecasting
            </h3>

            <p className="text-slate-400 mt-4">
              Estimate revenue potential, utilization and long-term
              investment performance.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-xl font-semibold">
              Risk Assessment
            </h3>

            <p className="text-slate-400 mt-4">
              Evaluate competition, operational risk and infrastructure
              readiness before investment.
            </p>
          </div>

        </div>

        {/* Stats Section */}

        <div className="grid md:grid-cols-4 gap-6 mt-24">

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-green-400">95%</h2>
            <p className="text-slate-400 mt-2">Prediction Accuracy</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-green-400">500+</h2>
            <p className="text-slate-400 mt-2">Locations Analyzed</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-green-400">50+</h2>
            <p className="text-slate-400 mt-2">Parameters Evaluated</p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-green-400">24/7</h2>
            <p className="text-slate-400 mt-2">Geo-AI Processing</p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default App;