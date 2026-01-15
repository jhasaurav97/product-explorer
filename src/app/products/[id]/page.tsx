import Image from "next/image";
import { fetchProductById } from "@/lib/api";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    
  const { id } = await params;
  const product = await fetchProductById(id);

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
