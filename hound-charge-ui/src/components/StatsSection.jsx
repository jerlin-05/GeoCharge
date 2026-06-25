function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
          <h2 className="text-4xl font-bold text-green-400">
            95%
          </h2>

          <p className="text-slate-400 mt-2">
            Prediction Accuracy
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
          <h2 className="text-4xl font-bold text-green-400">
            500+
          </h2>

          <p className="text-slate-400 mt-2">
            Locations Analyzed
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
          <h2 className="text-4xl font-bold text-green-400">
            50+
          </h2>

          <p className="text-slate-400 mt-2">
            Parameters
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center">
          <h2 className="text-4xl font-bold text-green-400">
            24/7
          </h2>

          <p className="text-slate-400 mt-2">
            AI Processing
          </p>
        </div>

      </div>

    </section>
  );
}

export default StatsSection;