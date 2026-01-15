"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";
import { useFavorites } from "@/context/FavoritesContext";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortOrder, setSortOrder] = useState<"none" | "asc" | "desc">("none");
  const { favorites } = useFavorites();

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((p) => p.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesFavorites = !showFavorites || favorites.includes(product.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    });
    if (sortOrder === "asc") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortOrder === "desc") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, search, category, showFavorites, favorites, sortOrder]);

  return (
    <>
      {/* Filters */}
      <div className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search products by title"
          className="border rounded px-3 py-2 w-full sm:max-w-xs focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter products by category"
          className="border rounded text-gray-500 px-3 py-2 w-full sm:max-w-xs"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as "none" | "asc" | "desc")
          }
          className="border rounded px-3 py-2 text-sm text-gray-500"
          aria-label="Sort products by price"
        >
          <option value="none">Sort by price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: Hight to Low</option>
        </select>
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <input
            type="checkbox"
            checked={showFavorites}
            onChange={(e) => setShowFavorites(e.target.checked)}
            aria-label="Show only favorite products"
          />
          Show favorites only
        </label>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
