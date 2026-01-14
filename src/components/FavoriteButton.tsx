"use client";

interface FavoriteButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function FavoriteButton({
    isActive,
    onToggle,
}: FavoriteButtonProps) {
    return <button
        onClick={onToggle}
        aria-label="Toggle favorite"
        className="text-xl"
    >
        {isActive ? "❤️" : "🤍"}
    </button>;
}