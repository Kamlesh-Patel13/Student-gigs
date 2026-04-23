// components/SearchBar.js
export default function SearchBar({ search, setSearch }) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 py-16 text-center">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Search services...</h2>
      <div className="flex justify-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search services..."
          className="px-4 py-3 w-1/3 bg-white rounded-lg shadow"
        />
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg">Search</button>
      </div>
    </div>
  );
}