import React from "react";
import SearchBar from "./SearchBar";

const PGCarousel = () => {
  const pgListings = [
    {
      id: 1,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Sandhya Luxury Womens Pg",
      location: "Madhura Nagar, Gachibowli, Hyderabad, Telangana, India",
      locationVerified: true,
      distance: "12.03 KMS",
      price: "₹7000/Month",
      priceRange: "₹5000 - ₹8000",
      ac: true,
      nonAc: false,
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      freeAmenities: ["WiFi", "Parking", "Hot Water"],
      image: "./first.jpg",
    },
    {
      id: 2,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Srinivasa Luxury Womens Pg",
      location: "Kondapur, Hyderabad, Telangana, India",
      locationVerified: true,
      distance: "10.45 KMS",
      price: "₹6500/Month",
      priceRange: "₹5000 - ₹8000",
      ac: false,
      nonAc: true,
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      freeAmenities: ["WiFi", "Parking"],
      image: "/second.jpg",
    },
    {
      id: 3,
      type: "Boys",
      exclusive: true,
      verified: true,
      name: "AR LUXURY PG",
      location: "Madhapur, Hyderabad, Telangana, India",
      locationVerified: true,
      distance: "8.90 KMS",
      price: "₹8000/Month",
      priceRange: "₹8000 - ₹10000",
      ac: true,
      nonAc: false,
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      freeAmenities: ["WiFi", "Parking", "Gym"],
      image: "/third.jpg",
    },
    {
      id: 4,
      type: "Boys",
      exclusive: false,
      verified: true,
      name: "Green Nest Boys PG",
      location: "Hitech City, Hyderabad, Telangana, India",
      locationVerified: true,
      distance: "9.50 KMS",
      price: "₹7500/Month",
      priceRange: "₹7000 - ₹9000",
      ac: true,
      nonAc: false,
      amenities: ["CCTV", "Security", "Food", "Laundry", "Gym"],
      freeAmenities: ["WiFi", "Parking", "Hot Water"],
      image: "/fourth.jpg",
    },
    {
      id: 5,
      type: "Girls",
      exclusive: true,
      verified: true,
      name: "Sunshine Ladies PG",
      location: "Banjara Hills, Hyderabad, Telangana, India",
      locationVerified: true,
      distance: "7.80 KMS",
      price: "₹8500/Month",
      priceRange: "₹8000 - ₹10000",
      ac: true,
      nonAc: false,
      amenities: ["CCTV", "Security", "Food", "Laundry", "TV"],
      freeAmenities: ["WiFi", "Parking", "Hot Water"],
      image: "/fifth.jpg",
    },
    {
      id: 6,
      type: "Boys",
      exclusive: false,
      verified: false,
      name: "Cozy Stay PG for Boys",
      location: "Ameerpet, Hyderabad, Telangana, India",
      locationVerified: true,
      distance: "11.20 KMS",
      price: "₹6000/Month",
      priceRange: "₹5000 - ₹7000",
      ac: false,
      nonAc: true,
      amenities: ["CCTV", "Security", "Food", "Laundry", "Furniture"],
      freeAmenities: ["WiFi", "Parking"],
      image: "/sixth.jpg",
    },

    {
      id: 7,
      name: "Sunrise PG",
      location: "Bangalore, Indiranagar",
      type: "Boys",
      price: "₹8000 - ₹12000",
      amenities: ["WiFi", "Parking", "Food", "Laundry"],
      verified: true,
      acAvailable: true,
      nonAcAvailable: false,
      image: "/seventh.jpg",
    },
    {
      id: 8,
      name: "Cozy Nest PG",
      location: "Hyderabad, Madhapur",
      type: "Girls",
      price: "₹6000 - ₹10000",
      amenities: ["WiFi", "Security", "Power Backup"],
      verified: false,
      acAvailable: false,
      nonAcAvailable: true,
      image: "/first.jpg",
    },
    {
      id: 9,
      name: "Elite Stay PG",
      location: "Pune, Hinjewadi",
      type: "Unisex",
      price: "₹9000 - ₹15000",
      amenities: ["WiFi", "Gym", "CCTV", "Food"],
      verified: true,
      acAvailable: true,
      nonAcAvailable: true,
      image: "/fourth.jpg",
    },
  ];

  return (
    <div>
      <SearchBar />
      <div className="p-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pgListings.map((pg) => (
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

export default PGCarousel;
