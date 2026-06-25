import dummyReport from "../../data/dummyReport";

function RecommendationCard() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 h-full">

      <h2 className="text-xl font-bold mb-5">
        AI Recommendation
      </h2>

      <p className="text-slate-400 leading-8">
        {dummyReport.recommendation}
      </p>

    </div>
  );
}

export default RecommendationCard;