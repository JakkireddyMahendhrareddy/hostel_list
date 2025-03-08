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
      <div className="relative w-40">
        <input
          type="text"
          placeholder="Enter area, city"
          className="px-3 py-1.5 pl-8 border bg-white border-gray-300 rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        />
        <FaSearch className="absolute left-2.5 top-2 text-blue-600 text-sm" />
      </div>

      <div className="relative w-40">
        <input
          type="text"
          placeholder="Property Name"
          className="px-3 py-1.5 pl-8 border bg-white border-gray-300 rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        />
        <FaSearch className="absolute left-2.5 top-2 text-blue-600 text-sm" />
      </div>

      {/* Type Dropdown */}
      <select className="px-3 py-1.5 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <option>All</option>
        <option>Boys</option>
        <option>Girls</option>
      </select>

      {/* Filter Buttons */}
      {["verified", "ac", "nonAc"].map((filter) => (
        <button
          key={filter}
          className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
            selectedFilters[filter] ? "bg-blue-600 text-white" : "bg-white"
          } hover:bg-blue-500 hover:text-white`}
          onClick={() => toggleFilter(filter)}
        >
          {filter === "verified" ? "Verified" : filter.toUpperCase()}
        </button>
      ))}

      {/* Updated Price Dropdown */}
      <select className="px-3 py-1.5 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <option>Price</option>
        <option>₹1000 - ₹5000</option>
        <option>₹5000 - ₹7000</option>
        <option>₹7000 - ₹10000</option>
        <option>₹10000 - ₹15000</option>
        <option>₹15000 - ₹20000</option>

      </select>

      {/* Dropdown for Free Amenities */}
      <select className="px-3 py-1.5 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <option>Free Amenities</option>
        <option>WiFi</option>
        <option>Parking</option>
        <option>Food</option>
      </select>
    </div>
  );
};

export default SearchBar;
