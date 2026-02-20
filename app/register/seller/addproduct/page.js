"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { addProduct } from "../../../store/productSlice";
import Image from "next/image";

export default function AddProduct() {
  const dispatch = useDispatch();
  const router = useRouter();

  // Get seller info from Redux
  const seller = useSelector((state) => state.seller);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    location: "",
    image: null,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.category || !formData.location) {
      setError("Please select category and location");
      return;
    }

    setError("");

    dispatch(
      addProduct({
        id: Date.now(),
        title: formData.title,
        description: formData.description,
        price: formData.price,
        category: formData.category,
        location: formData.location,
        image: formData.image,
        sellerName: seller.name,
        sellerWhatsapp: seller.whatsapp,
      })
    );

    console.log("Product added:", formData);

    router.push("/"); // redirect to homepage later
  };

  return (
    <div
      className="container-fluid mt-5 d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="row w-100 shadow-lg"
        style={{
          maxWidth: "1000px",
          borderRadius: "10px",
          overflow: "hidden",
          minHeight: "500px",
        }}
      >
        {/* LEFT SIDE - FORM */}
        <div className="col-md-6 bg-light d-flex flex-column justify-content-center p-4">
          <div style={{ width: "100%", maxWidth: "400px" }}>
            <h2 className="text-success mb-2">Add New Product</h2>
            <p className="mb-4 text-muted">
              Post your second-hand item for sale.
            </p>

            {error && (
              <div className="alert alert-danger py-2">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="Product Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Product Description"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <select
                  name="category"
                  className="form-select"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="books">Books</option>
                  <option value="furniture">Furniture</option>
                  <option value="vehicles">Vehicles</option>
                </select>
              </div>

              <div className="mb-3">
                <select
                  name="location"
                  className="form-select"
                  value={formData.location}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Location</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Houston">Houston</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Product Image</label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Post Product
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE - PREVIEW */}
        <div className="col-md-6 bg-white d-flex flex-column align-items-center p-4 border-start">
          <h4 className="text-success mb-3">Product Preview</h4>

          {formData.image && (
            <Image
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              width={200}
              height={200}
              className="rounded mb-3"
            />
          )}

          <p><strong>Title:</strong> {formData.title || "-"}</p>
          <p><strong>Price:</strong> {formData.price || "-"}</p>
          <p><strong>Category:</strong> {formData.category || "-"}</p>
          <p><strong>Location:</strong> {formData.location || "-"}</p>
        </div>
      </div>
    </div>
  );
}
