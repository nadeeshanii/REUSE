
"use client";

import { useSelector } from "react-redux";

 export default function Home() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Welcome to ReUse</h1>

      <button className="btn btn-primary me-3">
        Browse Items
      </button>

      <button className="btn btn-accent">
        Post Item
      </button>
    </div>
  );
}
