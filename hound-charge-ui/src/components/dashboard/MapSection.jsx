import { FiMapPin } from "react-icons/fi";

function MapSection() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center">

        <h2 className="text-xl font-bold">
          Site Location
        </h2>

        <FiMapPin
          className="text-green-400"
          size={22}
        />

      </div>

      <div className="mt-6 h-[340px] rounded-2xl bg-slate-950 border border-dashed border-slate-700 flex items-center justify-center">

        <p className="text-slate-500">
          Interactive Map (Next Phase)
        </p>

      </div>

    </div>
  );
}

export default MapSection;