import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const amenitiesList = [
  "Bed & Mattress",
  "CC Cameras",
  "Gym",
  "Hot Water",
  "Lift",
  "Mineral Water",
  "Non-AC",
  "Parking",
  "RO Water Purifier",
  "Safety Lockers",
  "Self Cooking",
  "Toilets Attached",
  "Wardrobes",
  "Washing Machine",
  "WiFi",
];

const SearchBar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    verified: false,
    acType: "",
    amenities: [],
  });

  const [showAmenities, setShowAmenities] = useState(false);

  const toggleAmenity = (amenity) => {
    setSelectedFilters((prev) => {
      const newAmenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity];
      return { ...prev, amenities: newAmenities };
    });
  };

  const handleAcChange = (e) => {
    setSelectedFilters((prev) => ({ ...prev, acType: e.target.value }));
  };

  return (
    <div className="bg-blue-100 p-3 flex flex-wrap gap-2 items-center rounded-lg">
      {/* Search Input */}
      <div className="relative w-40">
        <input
          type="text"
          placeholder="Enter area, city"
          className="px-3 py-1.5 pl-8 border bg-white border-gray-300 rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none w-full"
        />
        <FaSearch className="absolute left-2.5 top-2 text-blue-600 text-sm" />
      </div>

      {/* Property Name */}
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

      {/* Verified Button */}
      <button
        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${
          selectedFilters.verified ? "bg-blue-600 text-white" : "bg-white"
        }`}
        onClick={() =>
          setSelectedFilters((prev) => ({ ...prev, verified: !prev.verified }))
        }
      >
        Verified
      </button>

      {/* AC Type Dropdown */}
      <select
        className="px-3 py-1.5 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none"
        value={selectedFilters.acType}
        onChange={handleAcChange}
      >
        <option value="">Select AC Type</option>
        <option value="ac">AC</option>
        <option value="nonAc">Non-AC</option>
      </select>

      {/* Price Dropdown */}
      <select className="px-3 py-1.5 bg-white border rounded-full text-gray-700 font-medium focus:ring-2 focus:ring-blue-400 focus:outline-none">
        <option>Price</option>
        <option>₹1000 - ₹5000</option>
        <option>₹5000 - ₹7000</option>
        <option>₹7000 - ₹10000</option>
        <option>₹10000 - ₹15000</option>
        <option>₹15000 - ₹20000</option>
      </select>

      {/* Amenities Button */}
      <button
        className="px-4 py-2 rounded-full text-sm font-medium border bg-white hover:bg-blue-500 hover:text-white"
        onClick={() => setShowAmenities(!showAmenities)}
      >
        Amenities
      </button>

      {/* Amenities List */}
      {showAmenities && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-[500px] z-50">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Select some Amenities to filter
          </h3>
          <div className="flex flex-wrap gap-2">
            {amenitiesList.map((amenity, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  selectedFilters.amenities.includes(amenity)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-500 hover:text-white`}
                onClick={() => toggleAmenity(amenity)}
              >
                {amenity} {selectedFilters.amenities.includes(amenity) && "✔"}
              </button>
            ))}
          </div>

          {/* Cancel & Apply Buttons */}
          <div className="flex justify-between mt-4">
            <button
              className="text-blue-600 font-medium hover:underline"
              onClick={() => setShowAmenities(false)}
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
              onClick={() => setShowAmenities(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
