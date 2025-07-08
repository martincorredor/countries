"use client";

import { useState } from "react";

export default function SearchFilter({ countries, setFiltered }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);
    setFiltered(countries.filter((c) =>
      c.name.common.toLowerCase().includes(query)
    ));
  };

  const handleRegion = (e) => {
    const region = e.target.value;
    setFiltered(region === "" ? countries : countries.filter(c => c.region === region));
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={handleSearch}
      />
      <select onChange={handleRegion}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
