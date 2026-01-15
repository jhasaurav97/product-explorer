import type { Metadata } from "next";
import "./globals.css";
import { FavoritesProvider } from "@/context/FavoritesContext";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Product Explorer",
  description: "A product dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-end">
          <ThemeToggle />
        </div>
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
