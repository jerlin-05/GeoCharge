import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { motion } from "framer-motion";

const data = [
  { month: "Jan", revenue: 80000 },
  { month: "Feb", revenue: 110000 },
  { month: "Mar", revenue: 145000 },
  { month: "Apr", revenue: 190000 },
  { month: "May", revenue: 225000 },
  { month: "Jun", revenue: 264000 },
];

function RevenueChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mt-10"
    >
      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-2xl font-bold">
            Revenue Forecast
          </h2>

          <p className="text-slate-400 mt-2">
            Predicted monthly revenue
          </p>

        </div>

        <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl text-sm">
          +18%
        </div>

      </div>

      <div className="h-[360px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">

                <stop
                  offset="5%"
                  stopColor="#22c55e"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#22c55e"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
              tickFormatter={(value) => `₹${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "14px",
              }}
              formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              strokeWidth={4}
              fill="url(#colorRevenue)"
              animationDuration={2000}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </motion.div>
  );
}

export default RevenueChart;