import { fetchProducts } from "@/lib/api";
import ProductGrid from "@/components/ProductGrid";

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-6 bg-gray-50 dark:bg-black">
      <h1 className="text-2xl font-bold mb-6">Product Explorer</h1>

      <ProductGrid products={products} />
    </main>
  );
}
