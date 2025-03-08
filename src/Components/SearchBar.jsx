import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    verified: false,
    ac: false,
    nonAc: false,
  });

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  return (
    <div className="bg-blue-100 p-3 flex flex-wrap gap-2 items-center rounded-lg">
      {/* Search Inputs */}
      <div className="relative">
        <input
          type="text"
          placeholder="Enter area, city"
          className="px-4 py-2 pl-10 border bg-white border-gray-300 rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-blue-600" />
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Property Name or Code"
          className="px-4 py-2 pl-10 border bg-white border-gray-300 rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-blue-600" />
      </div>

      {/* Filter Buttons */}
      {["verified", "ac", "nonAc"].map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded-full text-gray-700 font-medium border ${
            selectedFilters[filter] ? "bg-blue-600 text-white" : "bg-white"
          } hover:bg-blue-500 hover:text-white`}
          onClick={() => toggleFilter(filter)}
        >
          {filter === "verified" ? "Verified Properties" : filter.toUpperCase()}
        </button>
      ))}

      {/* Dropdowns for Price and Free Amenities */}
      <select className="px-4 py-2 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <option>Price</option>
        <option>Low to High</option>
        <option>High to Low</option>
      </select>

      <select className="px-4 py-2 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <option>Free Amenities</option>
        <option>WiFi</option>
        <option>Parking</option>
        <option>Food</option>
      </select>
    </div>
  );
};

export default SearchBar;
