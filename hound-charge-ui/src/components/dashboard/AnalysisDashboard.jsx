import dummyReport from "../../data/dummyReport";

import ScoreCard from "./ScoreCard";
import MapSection from "./MapSection";
import RecommendationCard from "./RecommendationCard";
import RevenueChart from "./RevenueChart";

function AnalysisDashboard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="mb-10">

        <h1 className="text-4xl font-bold">
          Analysis Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          AI generated feasibility report.
        </p>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">

        <ScoreCard
          title="Project Score"
          value={dummyReport.projectScore}
          color="text-green-400"
        />

        <ScoreCard
          title="Risk Rating"
          value={dummyReport.risk}
          color="text-yellow-400"
        />

        <ScoreCard
          title="Revenue"
          value={dummyReport.revenue}
          color="text-green-400"
        />

        <ScoreCard
          title="Demand"
          value={dummyReport.demand}
          color="text-blue-400"
        />

      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        <div className="lg:col-span-2">

          <MapSection />

        </div>

        <RecommendationCard />

      </div>

      <div className="mt-10">

        <RevenueChart />

      </div>

    </section>
  );
}

export default AnalysisDashboard;