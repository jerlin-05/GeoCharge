function SearchBar() {
  return (
    <section className="max-w-5xl mx-auto px-6">

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex gap-3">

        <input
          type="text"
          placeholder="Paste Google Maps URL or Enter Coordinates"
          className="flex-1 bg-transparent outline-none px-4 py-4"
        />

        <button className="bg-green-500 px-8 rounded-xl hover:bg-green-600 transition">
          Analyze
        </button>

      </div>

    </section>
  );
}

export default SearchBar;