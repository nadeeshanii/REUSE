"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const products = useSelector(
    (state) => state.product?.products || state.product?.items || []
  );

  const product = products.find((item) => item.id === Number(id));

  const seller = useSelector((state) => state.seller);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Product not found.</p>
      </div>
    );
  }

  const whatsappNumber = seller.whatsapp || "94700000000"; // fallback number
  const whatsappMessage = `Hi, I'm interested in your product: ${product.name}`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 text-green-600 font-medium hover:underline"
        >
          ← Back to Products
        </button>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden grid md:grid-cols-2 gap-8 p-6">

          {/* LEFT SIDE - IMAGE */}
          <div>
            <Image
              src={product.image || "/placeholder.png"}
              alt={product.name}
              width={800}
              height={500}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* RIGHT SIDE - DETAILS */}
          <div className="flex flex-col">

            <h1 className="text-3xl font-bold mb-4">
              {product.name}
            </h1>

            <p className="text-2xl text-green-600 font-bold mb-4">
              Rs. {product.price.toLocaleString()}
            </p>

            <div className="space-y-2 text-gray-700">

              <p><strong>Location:</strong> {product.location}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Condition:</strong> {product.condition || "Used"}</p>
              <p><strong>Posted On:</strong> {product.postedDate || "Recently"}</p>
              <p><strong>Seller:</strong> {product.sellerName || seller.businessName || "Seller"}</p>

            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-green-700 transition"
            >
              Contact Seller via WhatsApp
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}
