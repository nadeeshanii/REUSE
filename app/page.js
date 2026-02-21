"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaHome, FaLaptop, FaTshirt, FaBook, FaGift } from "react-icons/fa";

export default function HomePage() {
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const items = [
    {
      id: 1,
      name: "Vintage Chair",
      image: "/items/chair1.jpg",
      condition: "Refurbished",
      price: "Rs. 2,500",
    },
    {
      id: 2,
      name: "Second-hand Phone",
      image: "/items/phone1.jpg",
      condition: "Used",
      price: "Rs. 15,000",
    },
    {
      id: 3,
      name: "Books Collection",
      image: "/items/book1.jpg",
      condition: "Good",
      price: "Rs. 1,200",
    },
    {
      id: 4,
      name: "Kitchen Set",
      image: "/items/kitchen1.jpg",
      condition: "Like New",
      price: "Rs. 3,000",
    },
  ];

  const categories = [
    { name: "Household", icon: <FaHome size={50} color="#28a745" /> },
    { name: "Electronics", icon: <FaLaptop size={50} color="#0d6efd" /> },
    { name: "Fashion", icon: <FaTshirt size={50} color="#d63384" /> },
    { name: "Books", icon: <FaBook size={50} color="#fd7e14" /> },
    { name: "Giveaway", icon: <FaGift size={50} color="#6f42c1" /> },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center text-white position-relative"
        style={{
          minHeight: "80vh",
          backgroundImage: "url('/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        ></div>

        {/* Glass Box */}
        <div
          className="position-relative d-flex flex-column align-items-center"
          style={{
            padding: "3rem 12rem",
            borderRadius: "5px",
            backdropFilter: "blur(1px)",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            zIndex: 2,
          }}
        >
          <h1
            className="fw-bold mb-3"
            style={{
              color: "#ffffff",
              fontSize: "5.5rem",
              letterSpacing: "4px",
              textShadow: "0 4px 20px rgba(0,0,0,0.7)",
            }}
          >
            ReUse <span style={{ color: "#2E7D32" }}>SL</span>
          </h1>

          <h2
            className="fw-bold"
            style={{
              textShadow: "0 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            Give your items a second story
          </h2>

          <p className="lead mt-3 text-white">
            Find, share, and breathe life into pre-loved items.
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
            <button
               className="btn cta-btn px-4 py-2 fw-semibold"
              onClick={() => router.push("/browse-items")}
            >
              Browse Items
            </button>

            {user?.role === "seller" && (
              <button
                className="btn btn-outline-light px-4 py-2 fw-semibold"
                onClick={() => router.push("/post-item")}
              >
                Post an Item
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-4" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <h3 className="fw-bold text-success">1,200kg</h3>
                <p className="text-muted mb-0">
                  Waste Diverted This Week
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <h3 className="fw-bold text-success">450</h3>
                <p className="text-muted mb-0">
                  Items Found New Homes Today
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <h3 className="fw-bold text-success">3,800+</h3>
                <p className="text-muted mb-0">
                  Active Community Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-5 text-center">
        <h2 className="mb-4 text-success">Categories</h2>
        <div className="d-flex justify-content-center flex-wrap gap-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="d-flex flex-column align-items-center"
              style={{ cursor: "pointer" }}
              onClick={() =>
                router.push(`/browse-items?category=${cat.name.toLowerCase()}`)
              }
            >
              <div
                className="rounded-circle bg-light d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: "100px", height: "100px" }}
              >
                {cat.icon}
              </div>
              <span className="mt-2 fw-semibold">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Items */}
      <section className="py-5">
        <h2 className="mb-4 text-success text-center">
          Curated for You
        </h2>
        <div className="container">
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-md-3 mb-4">
                <div className="card shadow-sm h-100">

                  <div style={{ height: "220px", overflow: "hidden" }}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={400}
                      height={220}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <span className="badge bg-success mb-2">
                      {item.condition}
                    </span>
                    <p className="card-text text-muted">
                      {item.price}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 text-center">
        <p>
          &copy; 2026 ReUseSL | A community-driven second-hand marketplace
        </p>
      </footer>
    </div>
  );
}
