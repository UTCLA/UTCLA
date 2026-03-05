"use client";

import { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import DocumentCard from "@/components/resources/DocumentCard";
import resourcesData from "@/data/resources.json";
import type { Resource } from "@/types";

const categories = [
  { value: "all", label: "All" },
  { value: "governance", label: "Governance" },
  { value: "legal", label: "Legal" },
  { value: "cultural", label: "Cultural" },
  { value: "economic", label: "Economic" },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const resources = (resourcesData as Resource[]).filter(
    (r) => activeCategory === "all" || r.category === activeCategory
  );

  return (
    <>
      <PageBanner
        title="Resources & Documents"
        description="Official documents, policy frameworks, and reference materials of the Alliance."
      />
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.value
                  ? "bg-ochre-600 text-white"
                  : "bg-earth-100 text-charcoal-600 hover:bg-earth-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {resources.length === 0 ? (
          <p className="text-center text-charcoal-500 py-12">
            No resources found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <DocumentCard key={resource.id} resource={resource} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
