# Product Explorer Dashboard

A production-style frontend application built using **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.  
The app demonstrates clean component architecture, server-side data fetching, client-side state management, and thoughtful UX patterns.

This project was built as part of a Frontend Technical Assignment with a focus on **real-world engineering practices**, not just feature completion.

---

## 🚀 Live Demo
👉 (Add your Vercel link here after deployment)

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS (v4)**
- **Fake Store API** – https://fakestoreapi.com/products

---

## Features Implemented

### Core Requirements

- **Product Listing Page**
  - Server-side data fetching using App Router
  - Responsive grid layout
  - Product image, title, price, and category
  - Loading state (skeleton UI)
  - Error state with retry support

- **Search & Filtering**
  - Client-side search by product title
  - Category-based filtering
  - Favorites-only filter

- **Product Details Page**
  - Dynamic routing using `/products/[id]`
  - Server Component for data fetching
  - Dedicated loading and error states
  - Clean, readable layout for product details

- **Favorites Feature**
  - Mark / unmark products as favorites
  - Persist favorites using `localStorage`
  - Shared state using a global context (single source of truth)
  - Favorites synced across listing and details pages
  - Favorites-only filter support

- **Responsive Design**
  - Mobile-first approach
  - Optimized for mobile, tablet, and desktop views

---

## Bonus Features

- **Server Components**
  - Used wherever possible for data fetching and layout
  - Client Components only where interaction is required

- **Dark Mode**
  - Implemented using Tailwind CSS v4 custom variant
  - Toggle available globally
  - Theme preference persisted using `localStorage`
  - No external libraries used

- **Sorting by Price**
  - Sort products by:
    - Low → High
    - High → Low
  - Works seamlessly with search, filters, and favorites

- **Basic Accessibility**
  - ARIA labels for interactive elements
  - Toggle buttons expose state (`aria-pressed`)
  - Keyboard-accessible controls
  - Visible focus states for better navigation

---

## Architecture & Design Decisions

- **Clear Separation of Concerns**
  - `app/` → routing & layouts
  - `components/` → reusable UI components
  - `context/` → global state (favorites)
  - `lib/` → API abstraction
  - `types/` → shared TypeScript types

- **Typed API Responses**
  - No `any` types used
  - Centralized product type definition

- **State Management**
  - Local component state for UI filters
  - Global Context for favorites to avoid duplication and sync issues
  - Derived state using `useMemo` to keep logic predictable and performant

- **Error Handling**
  - Route-level error boundaries using App Router
  - Graceful fallback UI with retry support

---

## Testing Status

- Manual testing performed for:
  - Filters & sorting combinations
  - Favorites persistence
  - Cross-page state synchronization
  - Dark mode persistence
- Unit tests were intentionally skipped due to time constraints but can be added easily using Jest and Testing Library.

---

## Getting Started (Local Setup)

```bash
npm install
npm run dev
http://localhost:3000
```

---

## Future Improvements

- Infinite scroll or pagination
- Unit & integration tests
- Server-side persistence for user preferences
- Improved SEO metadata per product page

---

## 👤 Author

- Built with care and production mindset by Saurav.
- Focused on clean architecture, maintainability, and real-world frontend practices.
