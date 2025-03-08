import React from "react";
import SearchBar from "./SearchBar";

const PGGrid = () => {
  const pgData = [
    {
      id: 1,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Sandhya Luxury Womens Pg",
      location: "Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana, India",
      distance: "12.03 KMS",
      price: "₹7000/Month",
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      image: "./first.jpg", 
    },
    {
      id: 2,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Srinivasa Luxury Womens Pg",
      location: "Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana, India",
      distance: "12.03 KMS",
      price: "₹6500/Month",
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      image: "/second.jpg",
    },
    {
      id: 3,
      type: "Boys",
      exclusive: true,
      verified: true,
      name: "AR LUXURY PG",
      location: "Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana, India",
      distance: "12.03 KMS",
      price: "₹8000/Month",
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      image: "/third.jpg",
    },
    {
      id: 1,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Sandhya Luxury Womens Pg",
      location: "Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana, India",
      distance: "12.03 KMS",
      price: "₹7000/Month",
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      image: "/fourth.jpg", // Replace with actual image
    },
    {
      id: 2,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Srinivasa Luxury Womens Pg",
      location: "Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana, India",
      distance: "12.03 KMS",
      price: "₹6500/Month",
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      image: "/fifth.jpg",
    },
    {
      id: 3,
      type: "Boys",
      exclusive: true,
      verified: true,
      name: "AR LUXURY PG",
      location: "Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana, India",
      distance: "12.03 KMS",
      price: "₹8000/Month",
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      image: "/sixth.jpg",
    },
  ];

  return (
    <div>
      <SearchBar />
      <div className="p-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgData.map((pg) => (
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
                  {pg.exclusive && (
                    <span className="px-2 py-1 text-sm font-bold bg-red-500 text-white rounded">
                      EXCLUSIVE
                    </span>
                  )}
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
                <div className="mt-2 flex flex-wrap gap-2">
                  {pg.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-semibold bg-gray-200 rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PGGrid;
