"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Product } from "@/types/product";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setProduct(data);
      } catch {
        setError(true);
      }
    }

    loadProduct();
  }, [id]);

  if (error) return <p className="p-6 text-red-600">Failed to load product.</p>;
  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <main className="max-w-5xl mx-auto px-4 py-6 bg-gray-50 dark:bg-black">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative h-80">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

          <p className="text-gray-500 capitalize mb-4">{product.category}</p>

          <p className="text-xl font-semibold mb-4">${product.price}</p>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <ProductDetailsClient product={product} />
        </div>
      </div>
    </main>
  );
}
