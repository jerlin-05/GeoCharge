function Navbar({ onOpenAdmin }) {
  return (
    <nav className="border-b border-slate-800 px-10 py-6 flex justify-between items-center">

      <h1 className="text-3xl font-bold">
        GeoCharge
      </h1>

      <button
        onClick={onOpenAdmin}
        className="bg-green-500 px-5 py-2 rounded-xl hover:bg-green-600 transition"
      >
        Admin
      </button>

    </nav>
  );
}

export default Navbar;