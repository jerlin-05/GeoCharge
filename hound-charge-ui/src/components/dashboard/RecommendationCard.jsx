function RecommendationCard({ recommendation }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        AI Recommendation
      </h2>

      <p className="text-slate-300 leading-8">
        {recommendation}
      </p>

    </div>
  );
}

export default RecommendationCard;