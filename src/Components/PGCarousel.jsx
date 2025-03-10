import React from "react";
import SearchBar from "./SearchBar";

import { useState } from "react";

const PGCarousel = ({ pgListings }) => {
  const [filteredPGs, setFilteredPGs] = useState(pgListings);
  const [isVerified, setIsVerified] = useState(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");

  const handleFilterChange = (type, ac) => {
    let filteredData = pgListings;

    if (type !== "All") {
      filteredData = filteredData.filter((pg) => pg.type === type);
    }

    if (ac !== "All") {
      filteredData = filteredData.filter((pg) =>
        ac === "AC" ? pg.ac === true : pg.ac === false
      );
    }

    if (isVerified) {
      filteredData = filteredData.filter((pg) => pg.verified);
    }

    if (selectedPriceRange !== "All") {
      const [min, max] = selectedPriceRange.split("-").map(Number);
      filteredData = filteredData.filter(
        (pg) => pg.price >= min && pg.price <= max
      );
    }

    setFilteredPGs(filteredData);
  };

  const handleVerifiedClick = () => {
    setIsVerified((prev) => !prev);
    handleFilterChange("All", "All");
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    handleFilterChange("All", "All");
  };

  return (
    <div>
      <SearchBar
        onFilterChange={handleFilterChange}
        onVerifiedClick={handleVerifiedClick}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={handlePriceRangeChange}
        isVerified={isVerified}
      />
      <div className="p-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPGs.map((pg) => (
            <div
              key={pg.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
            >
              <img
                src={pg.image}
                alt={pg.name}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-80"
              />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 text-sm font-bold rounded ${
                      pg.type === "Girls"
                        ? "bg-pink-500 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    {pg.type}
                  </span>
                  {pg.verified && (
                    <span className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded">
                      PGO Verified
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-lg font-bold">{pg.name}</h3>
                <p className="text-sm text-gray-600">{pg.location}</p>
                <p className="mt-1 text-gray-700 font-semibold">
                  {pg.distance}
                </p>
                <p className="mt-2 text-lg font-bold">{pg.price}</p>
                <div className="mt-4">
                  <button
                    onClick={() => (window.location.href = `/details/${pg.id}`)}
                    className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {filteredPGs.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No PGs match your filter criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default PGCarousel;
