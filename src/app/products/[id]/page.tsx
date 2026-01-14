import Image from "next/image";
import { fetchProductById } from "@/lib/api";

interface ProductPageProps {
    params: {
        id: string;
    };
}

export default async function ProductPage({
    params,
}: ProductPageProps) {
  const product = await fetchProductById(params.id);

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
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
        </div>
      </div>
    </main>
  );
}
