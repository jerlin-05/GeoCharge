function ScoreCard({ title, value, color }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">

      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className={`text-4xl font-bold mt-4 ${color}`}>
        {value}
      </h2>

    </div>
  );
}

export default ScoreCard;