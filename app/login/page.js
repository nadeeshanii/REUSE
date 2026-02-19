"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/userSlice";
import { useState } from "react";

export default function LoginPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // Local state for form inputs (can also directly use Redux if you prefer)
  const [email, setEmail] = useState(user.email || "");
  const [password, setPassword] = useState("");

  const [role, setRole] = useState(user.role || "");

  const handleLogin = (e) => {
    e.preventDefault();
    // Update Redux with login info
    dispatch(setUserData({ email, role }));
    // Later: call backend API to verify credentials
    console.log("Login submitted", { email, password, role });
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{ minHeight: "90vh" }}
    >
      <div
        className="row w-100 shadow-lg"
        style={{ maxWidth: "900px", borderRadius: "10px", overflow: "hidden", minHeight: "500px" }}
      >
        {/* Left Side Image */}
        <div className="col-md-6 d-none d-md-block position-relative" style={{ minHeight: "400px" }}>
          <Image src="/1.png" alt="Eco Marketplace" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Right Side Form */}
        <div className="col-md-6 bg-light d-flex align-items-center justify-content-center" style={{ minHeight: "500px" }}>
          <div className="p-4 w-100" style={{ maxWidth: "400px", animation: "fadeIn 1s ease" }}>
            <div className="text-center mb-4">
              <h2 className="text-success">Welcome Back!</h2>
              <p>Login to explore the best second-hand items.</p>
            </div>

            <form onSubmit={handleLogin}>
              {/* Role */}
              <div className="mb-3">
                <label className="form-label">I am a:</label>
                <select
                  className="form-select"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Select role</option>
                  <option value="buyer">Buyer</option>
                  <option value="seller">Seller</option>
                </select>
              </div>

              {/* Email */}
              <div className="mb-3 position-relative">
                <i className="bi bi-envelope position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}></i>
                <input
                  type="email"
                  className="form-control ps-5"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="mb-3 position-relative">
                <i className="bi bi-lock position-absolute" style={{ left: "10px", top: "50%", transform: "translateY(-50%)" }}></i>
                <input
                  type="password"
                  className="form-control ps-5"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-success w-100 mb-3">
                Login
              </button>

              <p className="text-center">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-success">
                  Register
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
