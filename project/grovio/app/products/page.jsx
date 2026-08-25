"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Products() {
  // List of the five available product categories (Day 2 requirement #4)
  const categories = ["Fruits", "Vegetables", "Dairy", "Snacks", "Bakery"];

  // Which category tab is currently active. "All" shows everything.
  const [activeCategory, setActiveCategory] = useState("All");

  // filter() picks only the products that match the selected tab.
  // When "All" is selected, nothing is filtered out.
  const visibleProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Grovio Store
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Fresh groceries for you
          </h1>

          <p className="mt-3 text-gray-500">
            Click a category to see only those products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveCategory("All")}
            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
              activeCategory === "All"
                ? "bg-green-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-green-50"
            }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-green-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {visibleProducts.length === 0 && (
          <p className="mt-10 text-center text-gray-500">
            No products found in this category.
          </p>
        )}
      </div>
    </main>
  );
}
