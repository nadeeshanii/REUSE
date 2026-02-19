"use client";

import { useRouter } from "next/navigation";

export default function RegisterRoleSelection() {
  const router = useRouter();

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <div
        className="text-center p-4 shadow-lg"
        style={{ maxWidth: "400px", borderRadius: "10px", backgroundColor: "#fff" }}
      >
        {/* Short Welcome Text */}
        <h2 className="text-success mb-2">Welcome!</h2>
        <p className="mb-4" style={{ fontSize: "0.95rem", color: "#555" }}>
          Please select your role to create an account.
        </p>

        {/* Role Buttons */}
        <button
          className="btn btn-success w-100 mb-3"
          onClick={() => router.push("/register/buyer")}
        >
          I am a Buyer
        </button>

        <button
          className="btn btn-primary w-100"
          onClick={() => router.push("/register/seller")}
        >
          I am a Seller
        </button>
      </div>
    </div>
  );
}
