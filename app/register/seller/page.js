"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSellerData } from "../../../store/sellerSlice";
import Image from "next/image";

export default function SellerRegister() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    whatsapp: "",
    businessName: "",
    category: "",
    about: "",
    profilePic: null,
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.category) {
      setError("Please select a category");
      return;
    }

    setError("");

    dispatch(
      setSellerData({
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        businessName: formData.businessName,
        category: formData.category,
        about: formData.about,
        profilePic: formData.profilePic,
      })
    );

    console.log("Seller saved in Redux:", formData);

    router.push("/login");
  };

  return (
    <div className="container-fluid mt-5 d-flex align-items-center justify-content-center"
     style={{ minHeight: "100vh" }}>

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
            <h2 className="text-success mb-2">Create Seller Account</h2>
            <p className="mb-4 text-muted">
              Register your business and start selling today.
            </p>

            {error && (
              <div className="alert alert-danger py-2">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="businessName"
                  className="form-control"
                  placeholder="Business / Shop Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="whatsapp"
                  className="form-control"
                  placeholder="Business WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
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
                  <option value="">Select Product Category</option>
                  <option value="electronics">Electronics</option>
                  <option value="fashion">Fashion</option>
                  <option value="books">Books</option>
                  <option value="furniture">Furniture</option>
                  <option value="toys">Toys</option>
                </select>
              </div>

              <div className="mb-3">
                <textarea
                  name="about"
                  className="form-control"
                  placeholder="About Your Business"
                  rows="3"
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Business Logo / Profile Picture</label>
                <input
                  type="file"
                  name="profilePic"
                  className="form-control"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Register as Seller
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE PREVIEW */}
        <div className="col-md-6 bg-white d-flex flex-column align-items-center p-4 border-start">

          <h4 className="text-success mb-3">Business Summary</h4>

          {formData.profilePic && (
            <Image
              src={URL.createObjectURL(formData.profilePic)}
              alt="Profile"
              width={120}
              height={120}
              className="rounded-circle mb-3"
            />
          )}

          <p><strong>Name:</strong> {formData.name || "-"}</p>
          <p><strong>Business:</strong> {formData.businessName || "-"}</p>
          <p><strong>Email:</strong> {formData.email || "-"}</p>
          <p><strong>WhatsApp:</strong> {formData.whatsapp || "-"}</p>
          <p><strong>Category:</strong> {formData.category || "-"}</p>
          <p><strong>About:</strong> {formData.about || "-"}</p>
        </div>
      </div>
    </div>
  );
}
