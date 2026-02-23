"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const product = useSelector(
    (state) => state.product.products[id]
  );

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <button
        onClick={() => router.back()}
        className="mb-6 text-blue-600"
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <Image
          src={product.image || "/placeholder.png"}
          alt={product.name}
          width={800}
          height={320}
          className="w-full h-80 object-cover rounded"
        />

        <h1 className="text-3xl font-bold mt-6">
          {product.name}
        </h1>

        <p className="text-gray-600 mt-4">
          {product.description}
        </p>

        <p className="text-green-600 text-2xl font-bold mt-4">
          Rs. {product.price}
        </p>

        <p className="mt-2 text-gray-500">
          Seller: {product.sellerName || "Unknown"}
        </p>

        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
