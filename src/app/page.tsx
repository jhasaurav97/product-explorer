"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import ProductGrid from "@/components/ProductGrid";

export default async function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p className="p-6">Loading products...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">Failed to load products.</p>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 bg-gray-50 dark:bg-black">
      <h1 className="text-2xl font-bold mb-6">Product Explorer</h1>

      <ProductGrid products={products} />
    </main>
  );
}
