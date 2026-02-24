"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";

export default function ProductsPage() {
  const router = useRouter();

  const products = useMemo(() => [
    { id: 1, name: "Vintage Chair", price: 2500, location: "Colombo", category: "Furniture", image: "/items/chair1.jpg" },
    { id: 2, name: "iPhone 12", price: 120000, location: "Kandy", category: "Electronics", image: "/items/phone1.jpg" },
    { id: 3, name: "Used Books Set", price: 1200, location: "Galle", category: "Books", image: "/items/book1.jpg" },
    { id: 4, name: "Kitchen Utensils", price: 3000, location: "Negombo", category: "Home", image: "/items/kitchen1.jpg" },
    { id: 5, name: "Office Table", price: 8500, location: "Kurunegala", category: "Furniture", image: "/items/table1.jpg" },
    { id: 6, name: "Laptop Dell", price: 95000, location: "Jaffna", category: "Electronics", image: "/items/laptop1.jpg" },
    { id: 7, name: "TV 42 Inch", price: 45000, location: "Matara", category: "Electronics", image: "/items/tvv1.jpg" },
    { id: 8, name: "Mountain Bike", price: 35000, location: "Badulla", category: "Sports", image: "/items/bike1.jpg" },
    { id: 9, name: "Sofa Set", price: 60000, location: "Colombo", category: "Furniture", image: "/items/sofa1.jpg" },
    { id: 10, name: "Study Chair", price: 4500, location: "Kandy", category: "Furniture", image: "/items/chair2.jpg" },
    { id: 11, name: "Washing Machine", price: 55000, location: "Gampaha", category: "Home", image: "/items/wash1.jpg" },
    { id: 12, name: "Microwave Oven", price: 18000, location: "Panadura", category: "Home", image: "/items/micro1.jpg" },
    { id: 13, name: "Gaming Console", price: 85000, location: "Ratnapura", category: "Electronics", image: "/items/game1.jpg" },
    { id: 14, name: "Wardrobe", price: 22000, location: "Kalutara", category: "Furniture", image: "/items/wardrobe1.jpg" },
    { id: 15, name: "Dining Table Set", price: 40000, location: "Anuradhapura", category: "Furniture", image: "/items/dining1.jpg" },
  ], []);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");

  const locations = [...new Set(products.map(p => p.location))];
  const categories = [...new Set(products.map(p => p.category))];

  // PROFESSIONAL FILTER + SORT
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Filter by location
    if (selectedLocation) {
      result = result.filter(p => p.location === selectedLocation);
    }

    // Filter by category
    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Sort by price
    if (priceSort === "low") {
      result = result.sort((a, b) => a.price - b.price);
    } else if (priceSort === "high") {
      result = result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, selectedLocation, selectedCategory, priceSort]);

  const resetFilters = () => {
    setSelectedLocation("");
    setSelectedCategory("");
    setPriceSort("");
  };

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4 text-center">All Items</h2>

      {/* FILTER SECTION */}
      <div className="row mb-4">

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map((loc, i) => (
              <option key={i} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={priceSort}
            onChange={(e) => setPriceSort(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <button className="btn btn-outline-secondary w-100" onClick={resetFilters}>
            Reset Filters
          </button>
        </div>

      </div>

      {/* PRODUCTS GRID */}
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="col-md-4 col-lg-3 mb-4">
              <div className="card shadow-sm h-100">

                <div style={{ height: "200px", overflow: "hidden" }}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={200}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5>{item.name}</h5>
                  <p className="text-muted mb-1">
                    Rs. {item.price.toLocaleString()}
                  </p>
                  <p className="text-secondary mb-3">
                    📍 {item.location}
                  </p>

                  <button
                    className="btn btn-success mt-auto"
                    onClick={() => router.push(`/products/${item.id}`)}
                  >
                    View Details
                  </button>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <h5>No products found matching your filters.</h5>
          </div>
        )}
      </div>
    </div>
  );
}
