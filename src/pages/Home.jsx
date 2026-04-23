// pages/Home.js

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import GigCard from "../components/GigCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const gigs = [
    { title: "I will create PPT slides", price: 200, category: "Design", user: "Anjali Sharma" },
    { title: "Java Tutoring", price: 300, category: "Teaching", user: "Rahul Verma" },
    { title: "Logo Design Services", price: 500, category: "Design", user: "Neha Gupta" },
    { title: "Write Assignments", price: 150, category: "Coding", user: "Amit Roy" }
  ];

  const filtered = gigs.filter(g =>
    (filter === "All" || g.category === filter) &&
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <CategoryFilter filter={filter} setFilter={setFilter} />

      <div className="px-10">
        <h3 className="text-xl font-semibold mb-4">Latest Gigs</h3>
        <div className="grid grid-cols-2 gap-6">
          {filtered.map((gig, i) => (
            <GigCard key={i} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}


