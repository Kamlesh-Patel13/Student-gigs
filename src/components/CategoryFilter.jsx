// components/CategoryFilter.js
export default function CategoryFilter({ filter, setFilter }) {
  const categories = ["All", "Design", "Coding", "Teaching"];

  return (
    <div className="flex justify-center gap-6 py-6">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`px-5 py-2 rounded-full ${filter === cat ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}