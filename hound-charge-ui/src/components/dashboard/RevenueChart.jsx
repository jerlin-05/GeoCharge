import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 80 },
  { month: "Feb", revenue: 120 },
  { month: "Mar", revenue: 150 },
  { month: "Apr", revenue: 190 },
  { month: "May", revenue: 230 },
  { month: "Jun", revenue: 260 },
];

function RevenueChart() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-xl font-bold mb-6">
        Revenue Forecast
      </h2>

      <div className="h-[320px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RevenueChart;