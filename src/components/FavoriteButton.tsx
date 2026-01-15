"use client";

interface FavoriteButtonProps {
  isActive: boolean;
  onToggle: () => void;
}

export default function FavoriteButton({
    isActive,
    onToggle,
}: FavoriteButtonProps) {
    return (
      <button
        onClick={onToggle}
        aria-label={isActive ? "Remove from favorites" : "Add to favorites"}
        className="text-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white"
      >
        {isActive ? "❤️" : "🤍"}
      </button>
    );
}