"use client";

import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";
import { useFavorites } from "@/context/FavoritesContext";

interface ProductDetailsClientProps {
    product: Product;
}

export default function ProductDetailsClient({
    product,
}: ProductDetailsClientProps) {
    const { isFavorite, toggleFavorite } = useFavorites();
    
    return (
        <div className="flex items-center gap-3 mt-4">
            <FavoriteButton
                isActive={isFavorite(product.id)}
                onToggle={() => toggleFavorite(product.id)}
            />
            <span className="text-sm text-gray-600">
                {isFavorite(product.id)
                    ? "Added to favorites"
                    : "Add to favorites"
                }
            </span>
        </div>
    )
}