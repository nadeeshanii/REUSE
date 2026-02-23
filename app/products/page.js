"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  const products = [
    { id: 1, name: "Vintage Chair", price: "Rs. 2,500", location: "Colombo", image: "/items/chair1.jpg" },
    { id: 2, name: "iPhone 12", price: "Rs. 120,000", location: "Kandy", image: "/items/phone1.jpg" },
    { id: 3, name: "Used Books Set", price: "Rs. 1,200", location: "Galle", image: "/items/book1.jpg" },
    { id: 4, name: "Kitchen Utensils", price: "Rs. 3,000", location: "Negombo", image: "/items/kitchen1.jpg" },
    { id: 5, name: "Office Table", price: "Rs. 8,500", location: "Kurunegala", image: "/items/table1.jpg" },
    { id: 6, name: "Laptop Dell", price: "Rs. 95,000", location: "Jaffna", image: "/items/laptop1.jpg" },
    { id: 7, name: "TV 42 Inch", price: "Rs. 45,000", location: "Matara", image: "/items/tv1.jpg" },
    { id: 8, name: "Mountain Bike", price: "Rs. 35,000", location: "Badulla", image: "/items/bike1.jpg" },
    { id: 9, name: "Sofa Set", price: "Rs. 60,000", location: "Colombo", image: "/items/sofa1.jpg" },
    { id: 10, name: "Study Chair", price: "Rs. 4,500", location: "Kandy", image: "/items/chair2.jpg" },
    { id: 11, name: "Washing Machine", price: "Rs. 55,000", location: "Gampaha", image: "/items/wash1.jpg" },
    { id: 12, name: "Microwave Oven", price: "Rs. 18,000", location: "Panadura", image: "/items/micro1.jpg" },
    { id: 13, name: "Gaming Console", price: "Rs. 85,000", location: "Ratnapura", image: "/items/game1.jpg" },
    { id: 14, name: "Wardrobe", price: "Rs. 22,000", location: "Kalutara", image: "/items/wardrobe1.jpg" },
    { id: 15, name: "Dining Table Set", price: "Rs. 40,000", location: "Anuradhapura", image: "/items/dining1.jpg" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-success mb-4 text-center">All Items</h2>

      <div className="row">
        {products.map((item) => (
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
                <h5 className="card-title">{item.name}</h5>
                <p className="text-muted mb-1">{item.price}</p>
                <p className="text-secondary mb-3">📍 {item.location}</p>

                <button
                  className="btn btn-success mt-auto"
                  onClick={() => router.push(`/products/${item.id}`)}
                >
                  View Details
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
