function FeatureCards() {
  return (
    <section className="max-w-7xl mx-auto mt-20 grid md:grid-cols-4 gap-6 px-6">

      {[
        "Geo AI",
        "Revenue",
        "Demand",
        "Risk",
      ].map((item) => (
        <div
          key={item}
          className="bg-slate-900 rounded-2xl border border-slate-800 p-8"
        >
          <h3 className="text-xl font-semibold">{item}</h3>

          <p className="text-slate-400 mt-3">
            Coming Soon
          </p>

        </div>
      ))}

    </section>
  );
}

export default FeatureCards;