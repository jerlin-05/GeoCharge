import ScoreCard from "./ScoreCard";
import MapSection from "./MapSection";
import RecommendationCard from "./RecommendationCard";
import RevenueChart from "./RevenueChart";

function AnalysisDashboard({ location, report }) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="mb-12">

        <h1 className="text-5xl font-bold">
          Site Analysis Report
        </h1>

        <p className="text-slate-400 mt-3">
          GeoCharge AI generated feasibility analysis.
        </p>

        {location && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-500/10 border border-green-500/20 px-5 py-2">

            <span>📍</span>

            <span className="text-green-400">
              {location}
            </span>

          </div>
        )}

      </div>

      {/* KPI Cards */}

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <ScoreCard
          title="Project Score"
          value={report.projectScore}
          color="text-green-400"
        />

        <ScoreCard
          title="Risk Rating"
          value={report.risk}
          color="text-yellow-400"
        />

        <ScoreCard
          title="Revenue Forecast"
          value={report.revenue}
          color="text-green-400"
        />

        <ScoreCard
          title="EV Demand"
          value={report.demand}
          color="text-blue-400"
        />

      </div>

      {/* Map + Recommendation */}

      <div className="grid lg:grid-cols-3 gap-8 mt-10">

        <div className="lg:col-span-2">

          <MapSection
            report={report}
          />

        </div>

        <RecommendationCard
          recommendation={report.recommendation}
        />

      </div>

      {/* Revenue Chart */}

      <div className="mt-10">

        <RevenueChart />

      </div>

    </section>
  );
}

export default AnalysisDashboard;