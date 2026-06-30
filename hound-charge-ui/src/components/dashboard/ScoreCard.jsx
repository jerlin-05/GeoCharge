import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FiTrendingUp,
  FiActivity,
  FiDollarSign,
  FiZap,
} from "react-icons/fi";

function ScoreCard({ title, value, color }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const number = parseInt(value);

    if (!isNaN(number)) {
      const controls = animate(0, number, {
        duration: 2,
        ease: "easeOut",
        onUpdate(v) {
          setCount(Math.round(v));
        },
      });

      return () => controls.stop();
    }
  }, [value]);

  const getIcon = () => {
    switch (title) {
      case "Project Score":
        return <FiActivity size={24} />;

      case "Risk Rating":
        return <FiTrendingUp size={24} />;

      case "Revenue":
        return <FiDollarSign size={24} />;

      case "Demand":
        return <FiZap size={24} />;

      default:
        return <FiActivity size={24} />;
    }
  };

  const displayValue = () => {
    if (title === "Project Score") return `${count}%`;
    return value;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl group"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-green-500/10 via-transparent to-cyan-500/10" />

      <div className="relative flex justify-between items-start">

        <div>

          <p className="text-slate-400 uppercase tracking-widest text-sm">
            {title}
          </p>

          <h2 className={`mt-5 text-5xl font-bold ${color}`}>
            {displayValue()}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
              ▲ +12%
            </span>

            <span className="text-slate-500 text-xs">
              This Month
            </span>
          </div>

        </div>

        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-green-400">
          {getIcon()}
        </div>

      </div>

    </motion.div>
  );
}

export default ScoreCard;