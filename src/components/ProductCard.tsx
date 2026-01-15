import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "@/context/FavoritesContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <div className="relative border rounded-lg p-3 hover:shadow transition bg-white dark:bg-black border-gray-200 dark:border-gray-700">
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton
          isActive={isFavorite(product.id)}
          onToggle={() => toggleFavorite(product.id)}
        />
      </div>
      <Link
        href={`/products/${product.id}`}
        aria-label={`View details for ${product.title}`}
      >
        <div className="relative h-40 mb-3">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>

        <p className="text-sm text-gray-500 capitalize">{product.category}</p>

        <p className="font-semibold mt-1">${product.price}</p>
      </Link>
    </div>
  );
}
