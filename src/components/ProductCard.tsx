import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/products/${product.id}`}
            className="border rounded-lg p-3 hover:shadow transition block"
        >
            <div className="relative h-40 mb-3">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain"
                />
            </div>
            
            <h2 className="text-sm font-medium line-clamp-2">
                {product.title}
            </h2>

            <p className="text-sm text-gray-500 capitalize">
                {product.category}
            </p>

            <p className="font-semibold mt-1">
                ${product.price}
            </p>
        </Link>
    )
}