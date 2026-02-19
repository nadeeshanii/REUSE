"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setBuyerData } from "../../../store/buyerSlice";

import Image from "next/image";

export default function BuyerRegister() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    whatsapp: "",
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

    // 🔥 Save to Redux
    dispatch(
      setBuyerData({
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        category: formData.category,
        profilePic: formData.profilePic,
      })
    );

    console.log("Buyer saved in Redux:", formData);

    router.push("/login");
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
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
            <h2 className="text-success mb-2">Create Buyer Account</h2>
            <p className="mb-4 text-muted">
              Fill your details to join our marketplace.
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
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
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
                  placeholder="WhatsApp Number"
                  value={formData.whatsapp}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Profile Picture</label>
                <input
                  type="file"
                  name="profilePic"
                  className="form-control"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-success w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE - PROFILE PREVIEW */}
        <div className="col-md-6 bg-white d-flex flex-column align-items-center justify-content-center p-4 border-start">
          <h4 className="text-success mb-3">Profile Summary</h4>

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
          <p><strong>Email:</strong> {formData.email || "-"}</p>
          <p><strong>WhatsApp:</strong> {formData.whatsapp || "-"}</p>
          <p><strong>Category:</strong> {formData.category || "-"}</p>
        </div>
      </div>
    </div>
  );
}
