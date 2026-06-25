import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="py-24 flex flex-col items-center">

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full"
      />

      <h2 className="mt-8 text-2xl font-semibold">
        Analyzing Location...
      </h2>

      <p className="text-slate-400 mt-2">
        GeoCharge AI is processing the location.
      </p>

    </div>
  );
}

export default Loader;