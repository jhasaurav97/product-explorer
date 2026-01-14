"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <p className="text-red-600 mb-4">
        Something went wrong while loading products.
      </p>
      <button onClick={reset} className="px-4 py-2 bg-black text-white rounded">
        Retry
      </button>
    </main>
  );
}
