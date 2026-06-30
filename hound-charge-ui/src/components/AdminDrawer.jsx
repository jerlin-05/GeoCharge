import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AdminDrawer({ open, onClose }) {
  const [parameters, setParameters] = useState({
    competition: 50,
    demand: 80,
    transit: 70,
    grid: 90,
    commercial: 75,
    population: 65,
  });

  const handleChange = (key, value) => {
    setParameters((prev) => ({
      ...prev,
      [key]: Number(value),
    }));
  };

  const resetValues = () => {
    setParameters({
      competition: 50,
      demand: 80,
      transit: 70,
      grid: 90,
      commercial: 75,
      population: 65,
    });
  };

  const handleSave = () => {
    console.log("Saved Parameters:", parameters);

    // Later we'll send these values to the backend API
    // axios.post("/api/parameters", parameters)

    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 450 }}
            animate={{ x: 0 }}
            exit={{ x: 450 }}
            transition={{ duration: 0.35 }}
            className="fixed right-0 top-0 h-screen w-[420px] bg-slate-900 border-l border-slate-800 z-50 p-8 overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">
                Admin Parameters
              </h2>

              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white text-2xl"
              >
                ✕
              </button>
            </div>

            {Object.entries(parameters).map(([key, value]) => (
              <div key={key} className="mb-8">
                <div className="flex justify-between mb-3">
                  <span className="capitalize font-medium">
                    {key}
                  </span>

                  <span className="text-green-400">
                    {value}
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={(e) =>
                    handleChange(key, e.target.value)
                  }
                  className="w-full accent-green-500 cursor-pointer"
                />
              </div>
            ))}

            <div className="flex gap-4 mt-12">
              <button
                onClick={resetValues}
                className="flex-1 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
              >
                Reset
              </button>

              <button
                onClick={handleSave}
                className="flex-1 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition"
              >
                Save Changes
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default AdminDrawer;